import React from 'react'
import styles from './Features.module.css'
import agendaImg from '../../assets/weekly-planner.png'

export const Features: React.FC = () => (
  <section className={styles.features}>
    <div className={styles.text}>
      <h2>Planejamento Semanal Simplificado</h2>
      <p>
        Visualize e organize suas tarefas por dia da semana em um só lugar. Adicione, arraste, solte e marque como concluídas com facilidade.
      </p>
      <div className={styles.imageWrapper}>
        <img src={agendaImg} alt="Visão semanal de tarefas" className={styles.image} />
      </div>
    </div>
  </section>
)
