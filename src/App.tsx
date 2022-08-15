import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import 'react-clock/dist/Clock.css'

import Clock from 'react-clock'
import { Spinner } from './components/Spinner/Spinner'

type Error = null | { message: string }

function App() {
  const [error, setError] = useState<Error>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [value, setValue] = useState<Date | string>('')

  const fetchCurrentTime = () =>
    fetch('https://worldtimeapi.org/api/timezone/Europe/Moscow')
      .then((response) => response.json())
      .then((body) => {
        setValue(new Date(body.datetime))
      })
      .catch((err) => {
        console.warn(`Ошибка при получении времени${err}`)
        setError(err)
      })
      .finally(() => setIsLoading(false))

  useEffect(() => {
    const interval = setInterval(fetchCurrentTime, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={styles.app}>
      {error && <div>Ошибка: {error?.message}</div>}
      {isLoading ? <Spinner /> : <Clock value={value} />}
    </div>
  )
}

export default App
