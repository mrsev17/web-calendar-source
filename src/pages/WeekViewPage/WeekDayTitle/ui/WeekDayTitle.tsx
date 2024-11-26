import { useWeekView } from '../../WeekView/model'
import { useAppSelector } from '../../../../shared/hooks/reduxHooks'
import { selectCalendars } from '../../../../features/Calendar/model/calendarSlice'
import { WeekDayTitleProps } from '../types'
import { EventItem } from '../../../../features/Calendar/ui'
import { getMergedCalendars } from '../../../../features/Calendar/model/utils'
import { formatDate, getAllEvents } from '../../../../shared/lib'
import styles from './WeekDayTitle.module.css'

export const WeekDayTitle = ({ day, today }: WeekDayTitleProps) => {
  const { recurringEvents } = useWeekView()
  const calendars = useAppSelector(selectCalendars)
  const mergedCalendars = getMergedCalendars(calendars, recurringEvents)
  const convertedDateToday = formatDate(day)
  const allEvents = getAllEvents(mergedCalendars ?? [])
  const allDayEvents = allEvents.filter((event) => event.isAllDay)

  return (
    <li
      key={day.toString()}
      className={`${styles.weekTitleDay}`}>
      <div className={`${styles.weekDayTitleWrapper} ${day.toDateString() === today.toDateString() ? styles.currentDay : ''}`}>
        <h4 className={styles.weekDayTitleNumber}>{day.getDate()}</h4>
        <span className={styles.weekDayTitle}>{day.toLocaleString('en-US', { weekday: 'short' }).toUpperCase()}</span>
        {allDayEvents.map((event, index) => {
          if (event.date === convertedDateToday && typeof event.reccurence !== 'string') {
            return (
              <EventItem
                key={event.id}
                calendarColor={event.calendarColor}
                eventTitle={event.title}
                index={index}
                eventID={event.id}
                reccurence={event.reccurence}
                dateOfCreation={event.dateOfCreation}
                style={{ position: 'static', height: 'auto', marginTop: '8px' }}
              />
            )
          }
        })}
      </div>
    </li>
  )
}
