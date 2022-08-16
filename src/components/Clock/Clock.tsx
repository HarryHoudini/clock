import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import OriginalClock from 'react-clock'
import { Spinner } from '../Spinner/Spinner'

export type FetchError = null | { message: string }

const useCurrentTime = ({ setValue, setError, setIsLoading }) => ({
  fetchCurrentTime: () =>
    fetch('https://worldtimeapi.org/api/timezone/Europe/Moscow')
      .then((response) => response.json())
      .then((body) => {
        setValue(new Date(body.datetime))
      })
      .catch((err) => {
        console.warn(`Ошибка при получении времени${err}`)
        setError(err)
      })
      .finally(() => setIsLoading(false)),
})

const useClock = () => {
  const [error, setError] = useState<FetchError>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [value, setValue] = useState<Date | string>('')

  const { fetchCurrentTime } = useCurrentTime()

  useEffect(() => {
    const interval = setInterval(fetchCurrentTime, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [fetchCurrentTime])

  const getClockProps = ({ ...otherProps } = {}) => ({
    value: count,
    'aria-valuemax': max,
    'aria-valuemin': 0,
    'aria-valuenow': count,
    ...otherProps,
  })

  return React.useMemo(
    () => ({
      getClockProps,
      error,
      isLoading,
      value,
    }),
    [error, isLoading, value]
  )
}
export const Clock = () => {
  const { getClockProps, error, isLoading, value } = useClock()
  return (
    <div className={styles.app}>
      {error && <div>Ошибка: {error?.message}</div>}
      {isLoading ? <Spinner /> : <OriginalClock value={value} />}
    </div>
  )
}
