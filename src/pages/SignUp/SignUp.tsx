import { Link } from 'react-router-dom'
import styles from './SignUp.module.css'

export default function SignUp() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
      </header>

      <main className={styles.main}>
        <section className={styles.card}>
          <h1 className={styles.logo}>Routify</h1>

          <form className={styles.form}>
            <label>Nome</label>
            <input type="text" placeholder="Digite o nome" required />

            <label>E-mail</label>
            <input type="email" placeholder="Digite o email" required />

            <label>Senha</label>
            <input type="password" placeholder="Digite a senha" required />

            <label>Telefone</label>
            <input type="tel" placeholder="Digite seu telefone" />

            <div className={styles.banner}>
            </div>

            <button type="submit" className={styles.button}>
              Registrar
            </button>
          </form>

          <p className={styles.terms}>
            Ao se registrar, você concorda com nossos <Link to="/terms">Termos de Uso</Link>.
          </p>

          <p className={styles.footerText}>
            Já tem uma conta? <Link to="/login" className={styles.loginLink}>Login</Link>
          </p>
        </section>
      </main>

      <footer className={styles.pageFooter}>
        © {new Date().getFullYear()} Routify
      </footer>
    </div>
  )
}
