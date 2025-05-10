import type { Reminder } from '../types';
import ReminderItem from './ReminderItem';

interface Props {
  reminders: Reminder[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function ReminderList({ reminders, onToggle, onDelete }: Props) {
  if (reminders.length === 0) return <p className="no-reminders">Sem lembretes ainda.</p>;

  return (
    <ul className="reminder-list">
      {reminders.map(r => (
        <ReminderItem
          key={r.id}
          reminder={r}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}