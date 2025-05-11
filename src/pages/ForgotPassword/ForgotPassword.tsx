
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ForgotPassword.module.css'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`Enviando link de redefinição para ${email}`)
    setSent(true)
  }

  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <section className={styles.card}>
          <h1 className={styles.logo}>Routify</h1>
          
          {sent ? (
            <p style={{ textAlign: 'center', color: 'var(--color-blue-aqua);', marginTop: '2rem' }}>
              Link de redefinição enviado para <strong>{email}</strong>!
            </p>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                placeholder="Digite o email cadastrado"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />

              <button type="submit" className={styles.button}>
                Enviar Link
              </button>
            </form>
          )}

          <Link to="/login" className={styles.backLink}>
            Voltar ao login
          </Link>

        </section>
      </main>
      <footer className={styles.copyright}>
        © {new Date().getFullYear()} Routify
      </footer>
    </div>
  )
}
