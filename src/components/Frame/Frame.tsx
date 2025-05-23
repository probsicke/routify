import React from 'react'
import styles from './Frame.module.css'

interface FrameProps {
  src: string
  alt?: string
}

export const Frame: React.FC<FrameProps> = ({ src, alt = 'Weekly View Screenshot' }) => (
  <div className={styles.frame}>
    <img src={src} alt={alt} className={styles.screenshot} />
  </div>
)

export default Frame
