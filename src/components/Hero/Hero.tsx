import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const Hero: React.FC = () => (
  <motion.section
    className={styles.hero}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <h1 className={styles.hero__title}>
      Seu novo planner digital.
    </h1>

    <p className={styles.hero__subtitle}>
      A simplicidade de uma lista de tarefas, com a organização de uma agenda.
    </p>

    <MotionLink to="/signup" className={styles['hero__btn']}>  
      Comece grátis
    </MotionLink>
  </motion.section>
);

export default Hero;
