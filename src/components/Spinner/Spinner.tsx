import React from 'react'
import style from './styles.module.css'

type SpinnerProps = { label?: string }

export const Spinner: React.FC<SpinnerProps> = ({ label }) => (
  <div className={style.ring}>
    {label || 'Загрузка'}
    <span />
  </div>
)
