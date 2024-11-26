import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'
import styles from './DatepickerCalendar.module.css'

const getTabIndex = (index: number | undefined) => (index !== undefined ? index + 1 : 0)

interface CalendarDay {
  day: number
  isCurrentMonth: boolean
  isSelected: boolean
  date: string
  index?: number
}

interface DatepickerCalendarProps {
  daysInCurrentMonth: CalendarDay[]
  setSelectedDate: (date: string) => void
  setDateToSpecificDay?: (date: string) => void
  selectDate?: (date: string) => void
  onClose?: () => void
}

export const DatepickerCalendar = ({
  daysInCurrentMonth,
  setSelectedDate,
  setDateToSpecificDay,
  selectDate,
  onClose,
}: DatepickerCalendarProps) => {
  const daysOfWeek: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

  const keyDownHandle = (event: React.KeyboardEvent<HTMLSpanElement>, date: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setSelectedDate(date)
    }
  }

  return (
    <div
      className={styles.calendar}
      data-testid="datepicker-calendar">
      <div className={styles.calendarHeader}>
        {daysOfWeek.map((day) => (
          <span
            key={uuidv4()}
            className={styles.calendarDayOfWeek}>
            {day}
          </span>
        ))}
      </div>
      <ul className={styles.calendarContent}>
        {daysInCurrentMonth.map(({ day, isCurrentMonth, isSelected, date, index }: CalendarDay) => {
          const dayStyle = classNames(styles.calendarDayNumber, {
            [styles.anotherMonth]: !isCurrentMonth,
            [styles.today]: isSelected,
          })
          return (
            <li
              key={uuidv4()}
              className={styles.calendarDayItem}>
              <span
                data-testid={`datepicker-day-${day}`}
                tabIndex={getTabIndex(index)}
                onClick={() => {
                  setSelectedDate(date)
                  if (setDateToSpecificDay) {
                    setDateToSpecificDay(date)
                  }
                  if (selectDate) {
                    selectDate(date)
                  }
                  if (onClose) {
                    onClose()
                  }
                }}
                onKeyDown={(e) => keyDownHandle(e, date)}
                className={dayStyle}>
                {day}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
