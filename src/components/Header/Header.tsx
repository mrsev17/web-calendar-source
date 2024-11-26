import { useState } from 'react'
import { usePeriodControl } from './ui/TimeControl/usePeriodControl'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../features/auth/useAuth'
import { useAppDispatch } from '../../shared/hooks/reduxHooks'
import { resetCalendarState, setCurrentDay } from '../../features/Calendar/model/calendarSlice'
import { removeUser } from '../../features/auth/userSlice'
import { AppContainer, Dropdown } from '../../shared/ui'
import { PeriodControl } from './ui/TimeControl/PeriodControl'
import { Logo } from './ui/Logo/Logo'
import { dropdownOptions } from '../../shared/lib'
import styles from './Header.module.css'

export const Header = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const { email } = useAuth()
  const [time, setTimeValue] = useState(location.pathname)

  const selectedTime = dropdownOptions.find((item) => item.value === time)

  const handleTimeSelect = (value: string) => {
    setTimeValue(value)
    navigate(value)
    dispatch(setCurrentDay())
  }

  const isSetWeekOrDay = location.pathname === '/' ? 'week' : 'day'

  const { currentPeriodHandler, previousPeriodHandler, nextPeriodHandler } = usePeriodControl(isSetWeekOrDay)

  return (
    <header className={styles.header}>
      <AppContainer>
        <div className={styles.headerContent}>
          <div className={styles.headerContentLeft}>
            <Logo />
            <PeriodControl
              currentPeriodHandler={currentPeriodHandler}
              previousPeriodHandler={previousPeriodHandler}
              nextPeriodHandler={nextPeriodHandler}
            />
          </div>
          <div className={styles.headerContentRight}>
            <Dropdown
              options={dropdownOptions}
              selected={selectedTime || null}
              onChange={handleTimeSelect}
            />
            <div className={styles.user}>
              <h3 className={styles.username}>{email}</h3>
              <div
                onClick={() => {
                  dispatch(removeUser())
                  dispatch(resetCalendarState())
                }}
                className={styles.userControl}>
                {email?.[0]}
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </header>
  )
}
