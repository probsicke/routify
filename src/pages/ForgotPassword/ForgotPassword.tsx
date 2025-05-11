import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './ForgotPassword.module.css'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [sent, setSent]   = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`Enviando link de redefinição para ${email}`)
    setSent(true)
  }

  return (
    <div className={styles.wrapper}>
      {/* Banner */}
      <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h2>Esqueceu sua senha?</h2>
          <p>Digite seu e-mail e enviaremos um link para redefini-la.</p>
        </div>
        <div className={styles.bannerIllustration}>
          {/* ilustração */}
        </div>
      </div>

      <main className={styles.main}>
        <section className={styles.card}>
          <div className={styles.logoCircle}>R</div>

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

          <p className={styles.copyright}>
            © {new Date().getFullYear()} Routify
          </p>
        </section>
      </main>
    </div>
  )
}
