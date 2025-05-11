import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1 className={styles.logo}>Routify</h1>

      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>Início</Link>
        <Link to="#funcionalidades" className={styles.navLink}>Funcionalidades</Link>
        <Link to="#planos" className={styles.navLink}>Planos</Link>
        <Link to="#contato" className={styles.navLink}>Contato</Link>
        <Link to="/reminders" className={styles.navLink}>Lembretes</Link>
        <Link to="/signup" className={styles.cta}>Comece grátis</Link>
      </nav>

    </div>
  </header>
)