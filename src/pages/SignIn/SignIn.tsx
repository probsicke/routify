import { Link } from 'react-router-dom'
import styles from './SignIn.module.css'

export default function SignIn() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <section className={styles.card}>
          <h1 className={styles.logo}>Routify</h1>

          <form className={styles.form}>
            <label>E-mail</label>
            <input type="email" placeholder="Digite o email" required />

            <label>Senha</label>
            <input type="password" placeholder="Digite a senha" required />

            <div className={styles.checkbox}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Lembrar-me</label>
            </div>

            <button type="submit" className={styles.button}>
              Login
            </button>
          </form>

          <Link to="/forgot-password" className={styles.forgot}>
            Esqueceu a senha?
          </Link>

          <p className={styles.footerText}>
            Ainda não está cadastrado?{' '}
            <Link to="/signup" className={styles.signUpLink}>
              Cadastre-se
            </Link>
          </p>

        </section>
      </main>
      <footer className={styles.copyright}>
        © {new Date().getFullYear()} Routify
      </footer>
    </div>
  )
}
