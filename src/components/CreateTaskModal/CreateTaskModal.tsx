import { useState, useEffect } from 'react';
import './CreateTaskModal.css';
import { format } from 'date-fns';

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
}

export function CreateTaskModal({ isOpen, onClose, onSave }: CreateTaskModalProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [recurrence, setRecurrence] = useState('Sem recorrência');
  const [priority, setPriority] = useState('');
  const [project, setProject] = useState('');
  const [type, setType] = useState<'Tarefa' | 'Lembrete'>('Tarefa');
  const [subtaskInput, setSubtaskInput] = useState('');
  const [subtasks, setSubtasks] = useState<string[]>([]);
  const [linkInput, setLinkInput] = useState('');
  const [links, setLinks] = useState<string[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleAddSubtask = () => {
    if (subtaskInput.trim()) {
      setSubtasks(prev => [...prev, subtaskInput.trim()]);
      setSubtaskInput('');
    }
  };

  const handleAddLink = () => {
    if (linkInput.trim()) {
      setLinks(prev => [...prev, linkInput.trim()]);
      setLinkInput('');
    }
  };

  const handleSave = () => {
    if (!title.trim()) {
      setError('Digite o título');
      return;
    }
    onSave({ title, description, date, recurrence, priority, project, type, subtasks, links });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <header className="modal-header">
          <h2>Criar tarefa</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </header>

        <div className="modal-body">
          <div className="modal-col modal-col--left">
            <label>
              Título*
              <input
                type="text"
                value={title}
                placeholder="Digite o título..."
                onChange={e => { setTitle(e.target.value); setError(''); }}
              />
              {error && <small className="error">{error}</small>}
            </label>

            <label>
              Descrição
              <textarea
                value={description}
                placeholder="Digite a descrição"
                onChange={e => setDescription(e.target.value)}
              />
            </label>

            <label>
              Data
              <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
              />
            </label>

            <label>
              Recorrência
              <select value={recurrence} onChange={e => setRecurrence(e.target.value)}>
                <option>Sem recorrência</option>
                <option>Diária</option>
                <option>Semanal</option>
                <option>Mensal</option>
              </select>
            </label>

            <label>
              Prioridade
              <select value={priority} onChange={e => setPriority(e.target.value)}>
                <option value="">Escolha...</option>
                <option value="baixa">Baixa</option>
                <option value="média">Média</option>
                <option value="alta">Alta</option>
              </select>
            </label>

            <label>
              Projeto
              <input
                type="text"
                value={project}
                placeholder="Digite o projeto..."
                onChange={e => setProject(e.target.value)}
              />
            </label>

            <fieldset className="type-fieldset">
              <legend>Selecione o tipo:</legend>
              <label>
                <input
                  type="radio"
                  name="type"
                  checked={type === 'Tarefa'}
                  onChange={() => setType('Tarefa')}
                />
                Tarefa
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  checked={type === 'Lembrete'}
                  onChange={() => setType('Lembrete')}
                />
                Lembrete (card menor no topo da lista)
              </label>
            </fieldset>
          </div>

          <div className="modal-col modal-col--right">
            <label>
              Subtarefas
              <div className="input-group">
                <input
                  type="text"
                  value={subtaskInput}
                  placeholder="Digite o título..."
                  onChange={e => setSubtaskInput(e.target.value)}
                />
                <button type="button" onClick={handleAddSubtask}>+</button>
              </div>
              <ul className="subtasks-list">
                {subtasks.map((st, i) => <li key={i}>{st}</li>)}
              </ul>
            </label>

            <label>
              Links
              <div className="input-group">
                <input
                  type="text"
                  value={linkInput}
                  placeholder="Digite a URL..."
                  onChange={e => setLinkInput(e.target.value)}
                />
                <button type="button" onClick={handleAddLink}>+</button>
              </div>
              <ul className="links-list">
                {links.map((ln, i) => <li key={i}><a href={ln} target="_blank" rel="noopener noreferrer">{ln}</a></li>)}
              </ul>
            </label>
          </div>
        </div>

        <footer className="modal-footer">
          <button onClick={handleSave}>Cria tarefa</button>
        </footer>
      </div>
    </div>
  );
}
