import React from 'react'
import styles from './styles.module.css'

export const ClockVersion2: React.FC = () => (
  <div className={styles.clock_body}>
    <div className={styles.hours}>2</div>
    <div className={styles.disc_top}>3</div>
    <div className={styles.disc_bottom}>4</div>
    <div className={styles.second}>5</div>
    <div className={styles.minute}>5</div>
    <div className={styles.hour}>55</div>
  </div>
)
