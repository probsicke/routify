import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import type { Reminder } from './types'

import AddReminderForm from './components/AddReminderForm'
import ReminderList from './components/ReminderList'
import { Header } from './components/Header/Header'
import { WeekView } from './components/WeekView/WeekView'
import UpgradeBanner from './components/UpgradeBanner/UpgradeBanner'

import { Home } from './pages/Home'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'

function App() {
  const [reminders, setReminders] = useState<Reminder[]>(() => {
    const saved = localStorage.getItem('reminders')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders))
  }, [reminders])

  const addReminder = (text: string, time: string) =>
    setReminders(prev => [
      ...prev,
      { id: Date.now(), text, time, done: false }
    ])

  const toggleDone = (id: number) =>
    setReminders(prev =>
      prev.map(r => (r.id === id ? { ...r, done: !r.done } : r))
    )

  const deleteReminder = (id: number) =>
    setReminders(prev => prev.filter(r => r.id !== id))

  const handleUpgrade = () => {
  }

  return (
    <BrowserRouter>
      <Header />
      <UpgradeBanner onUpgradeClick={handleUpgrade} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/semana" element={<WeekView />} />

        <Route
          path="/reminders"
          element={
            <div className="App" style={{ padding: '2rem' }}>
              <h1>Routify</h1>
              <AddReminderForm onAdd={addReminder} />
              <ReminderList
                reminders={reminders}
                onToggle={toggleDone}
                onDelete={deleteReminder}
              />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
