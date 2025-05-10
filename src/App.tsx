import { useState, useEffect } from 'react';
import type { Reminder } from './types';
import AddReminderForm from './components/AddReminderForm';
import ReminderList from './components/ReminderList';

function App() {
  const [reminders, setReminders] = useState<Reminder[]>(() => {
    const saved = localStorage.getItem('reminders');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
  }, [reminders]);

  const addReminder = (text: string, time: string) => {
    setReminders(prev => [
      ...prev,
      { id: Date.now(), text, time, done: false }
    ]);
  };

  const toggleDone = (id: number) => {
    setReminders(prev =>
      prev.map(r => (r.id === id ? { ...r, done: !r.done } : r))
    );
  };

  const deleteReminder = (id: number) => {
    setReminders(prev => prev.filter(r => r.id !== id));
  };

  return (
    <div className="App">
      <h1>Routify</h1>
      <AddReminderForm onAdd={addReminder} />
      <ReminderList
        reminders={reminders}
        onToggle={toggleDone}
        onDelete={deleteReminder}
      />
    </div>
  );
}

export default App;
