import { useState } from 'react'
import { format, startOfWeek, addDays, subDays, isSameDay } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import './WeekView.css'

export function WeekView() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [showCompleted, setShowCompleted] = useState(true)
  const [showSubtasks, setShowSubtasks] = useState(true)
  const [projectFilter, setProjectFilter] = useState('Todos os projetos')

  const weekStart = startOfWeek(currentDate, { weekStartsOn: 0, locale: ptBR })
  const days = Array.from({ length: 7 }).map((_, i) =>
    addDays(weekStart, i)
  )

  return (
    <>
      <header className="week-header">
        <div className="nav-buttons">
          <button onClick={() => setCurrentDate(subDays(currentDate, 1))}>
            ←
          </button>
          <button
            className="today-btn"
            onClick={() => setCurrentDate(new Date())}
          >
            Hoje
          </button>
          <button onClick={() => setCurrentDate(addDays(currentDate, 1))}>
            →
          </button>
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
              <div
                className={`day-header${isToday ? ' today' : ''}`}
              >
                {format(day, 'eee. dd/MM', { locale: ptBR })}
              </div>
              <div className="add-task">Adicionar tarefa</div>
            </div>
          )
        })}
      </div>
    </>
  )
}
