import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import OriginalClock from 'react-clock'
import { Spinner } from '../Spinner/Spinner'

type FetchError = null | { message: string }

const useClock = () => {
  const [error, setError] = useState<FetchError>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [time, setTime] = useState<Date | string>('')

  const CURRENT_TIME_URL = 'https://worldtimeapi.org/api/timezone/Europe/Moscow'

  const fetchCurrentTime = () =>
    fetch(CURRENT_TIME_URL)
      .then((response) => response.json())
      .then((body) => {
        setTime(new Date(body.datetime))
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

  return React.useMemo(
    () => ({
      error,
      isLoading,
      time,
    }),
    [error, isLoading, time]
  )
}

export const Clock = () => {
  const { error, isLoading, time } = useClock()

  return (
    <div className={styles.clock}>
      {error && <div>Ошибка: {error?.message}</div>}
      {isLoading ? <Spinner /> : <OriginalClock value={time} />}
    </div>
  )
}
