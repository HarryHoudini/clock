import React from 'react'
import styles from './styles.module.css'
import 'react-clock/dist/Clock.css'
import { Clock } from './components/Clock/Clock'

function App() {
  return (
    <div className={styles.app}>
      <Clock />
    </div>
  )
}

export default App
