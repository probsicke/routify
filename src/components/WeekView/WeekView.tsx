import { useState } from 'react'
import { format, startOfWeek, addDays, subDays, isSameDay } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Inbox, Calendar, CalendarDays, RefreshCw, Settings } from 'lucide-react'
import './WeekView.css'
import { CreateTaskModal } from '../CreateTaskModal/CreateTaskModal'

export function WeekView() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [showModal, setShowModal] = useState(false)
  const [modalDay, setModalDay] = useState<Date | null>(null)
  const [showCompleted, setShowCompleted] = useState(true)
  const [showSubtasks, setShowSubtasks] = useState(true)
  const [projectFilter, setProjectFilter] = useState('Todos os projetos')

  const weekStart = startOfWeek(currentDate, { weekStartsOn: 0, locale: ptBR })
  const days = Array.from({ length: 7 }).map((_, i) =>
    addDays(weekStart, i)
  )

  const handleAddClick = (day: Date) => {
    setModalDay(day)
    setShowModal(true)
  }

  const handleSave = (data: any) => {
    console.log('Salvando tarefa para', modalDay, data)
    setShowModal(false)
  }

  return (
    <>
      <div className="week-toolbar">
        <input
          type="text"
          placeholder="Pesquisar..."
          className="week-toolbar__search"
        />
        <div className="week-toolbar__actions">
          <button className="toolbar-btn">
            <Inbox size={18} />
            <span>Entrada</span>
          </button>
          <button className="toolbar-btn">
            <Calendar size={18} />
            <span>Dia</span>
          </button>
          <button className="toolbar-btn">
            <CalendarDays size={18} />
            <span>Semana</span>
          </button>
          <button className="toolbar-btn">
            <RefreshCw size={18} />
          </button>
          <button className="toolbar-btn">
            <Settings size={18} />
          </button>
        </div>
      </div>

      <header className="week-header">
        <div className="nav-buttons">
          <button onClick={() => setCurrentDate(subDays(currentDate, 1))}>←</button>
          <button className="today-btn" onClick={() => setCurrentDate(new Date())}>
            Hoje
          </button>
          <button onClick={() => setCurrentDate(addDays(currentDate, 1))}>→</button>
        </div>
        <input
          type="date"
          className="date-picker"
          value={format(currentDate, 'yyyy-MM-dd')}
          onChange={(e) => setCurrentDate(new Date(e.target.value))}
        />
        <button className="filter-btn">Sem data</button>
        <button className="filter-btn">Atrasados</button>

        <div className="toggles">
          <label className="toggle-label">
            <div className="switch">
              <input
                type="checkbox"
                checked={showCompleted}
                onChange={() => setShowCompleted(!showCompleted)}
              />
              <span className="slider"></span>
            </div>
            <span className="toggle-text">Concluídos</span>
          </label>

          <label className="toggle-label">
            <div className="switch">
              <input
                type="checkbox"
                checked={showSubtasks}
                onChange={() => setShowSubtasks(!showSubtasks)}
              />
              <span className="slider"></span>
            </div>
            <span className="toggle-text">Subtarefas</span>
          </label>
        </div>

        <select
          className="project-select"
          value={projectFilter}
          onChange={(e) => setProjectFilter(e.target.value)}
        >
          <option>Todos os projetos</option>
        </select>
      </header>

      <div className="week-view">
        {days.map((day) => {
          const isToday = isSameDay(day, currentDate)
          return (
            <div key={day.toISOString()} className="day-column">
              <div className={`day-header${isToday ? ' today' : ''}`}>              
                {format(day, 'eee. dd/MM', { locale: ptBR })}
              </div>

              <button className="add-task add-task--large" onClick={() => handleAddClick(day)}>
                + Adicionar tarefa
              </button>
            </div>
          )
        })}
      </div>

      <CreateTaskModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
      />
    </>
  )
}

export default WeekView
