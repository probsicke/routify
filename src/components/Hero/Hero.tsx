import React from 'react'
import styles from './Hero.module.css'
import { Link } from 'react-router-dom'

const Hero: React.FC = () => (
  <section className={styles.hero}>
    <h1>Seu novo planner digital.</h1>
    <p>A simplicidade de uma lista de tarefas, com a organização de uma agenda.</p>
    <Link to="/signup" className={styles['hero__btn']}>
      Comece grátis
    </Link>
  </section>
)
export default Hero
