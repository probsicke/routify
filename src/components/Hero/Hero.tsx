import React from 'react'
import styles from './Hero.module.css'

export const Hero: React.FC = () => (
  <section className={styles.hero}>
    <div className={styles.content}>
      <h2>Seu Site de Hábitos Saudáveis</h2>
      <p>Organize hidratação, estudo e atividade física em um só lugar</p>
      <a href="#cadastro" className={styles.button}>Criar Conta</a>
    </div>
    <div className={styles.illustration}>
      {/* substitua por <img src="/assets/rota-illustration.svg" alt="..." /> */}
      <div className={styles.placeholder}>[Ilustração aqui]</div>
    </div>
  </section>
)
