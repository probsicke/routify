import type { Reminder } from '../types';

interface Props {
  reminder: Reminder;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function ReminderItem({ reminder, onToggle, onDelete }: Props) {
  return (
    <li className="reminder-item">
      <div className="info">
        <input
          type="checkbox"
          checked={reminder.done}
          onChange={() => onToggle(reminder.id)}
        />
        <span className="text" style={{ textDecoration: reminder.done ? 'line-through' : 'none' }}>
          {reminder.time} — {reminder.text}
        </span>
      </div>
      <div className="actions">
        <button className="delete" onClick={() => onDelete(reminder.id)}>❌</button>
      </div>
    </li>
  );
}
