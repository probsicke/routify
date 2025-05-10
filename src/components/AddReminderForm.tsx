import { useState } from 'react';

interface Props {
  onAdd: (text: string, time: string) => void;
}

export default function AddReminderForm({ onAdd }: Props) {
  const [text, setText] = useState('');
  const [time, setTime] = useState('12:00');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) return;
    onAdd(text, time);
    setText('');
  };

  return (
<form className="add-reminder-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="O que lembrar?"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={e => setTime(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
