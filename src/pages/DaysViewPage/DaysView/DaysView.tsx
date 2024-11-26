import { useDays } from '../../WeekViewPage/Days/model'
import { useAppSelector } from '../../../shared/hooks/reduxHooks'
import { selectSelectedDate, selectCurrentWeek } from '../../../features/Calendar/model/calendarSlice'
import { Hour } from '../../WeekViewPage/Hour'
import { WeekDayTitle } from '../../WeekViewPage/WeekDayTitle'
import { CurrentTime } from '../../WeekViewPage/CurrentTime'
import { hours } from '../../../shared/lib'
import { today } from '../../../shared/lib'
import styles from './DaysView.module.css'
import { EventsDay } from '../../../features/Calendar/ui'

export const DaysViewPage = () => {
  const selectedDate = useAppSelector(selectSelectedDate)
  const currentDay = useAppSelector(selectCurrentWeek)
  const isSelectedDateExist = !!selectedDate

  const date = currentDay ? new Date(currentDay) : new Date()

  const { eventsGroupedByDay, isToday } = useDays({ dayData: date })

  const parseDate = (dateString: string): Date => {
    const [day, month, year] = dateString.split('/').map(Number)
    const date = new Date(year, month - 1, day)
    return date
  }

  return (
    <section className={styles.dayPage}>
      <div className={styles.dayPageHeader}>
        <div className={styles.emptyCell}></div>
        <div className={styles.weekDayTitleWrapper}>
          {isSelectedDateExist && (
            <WeekDayTitle
              day={parseDate(selectedDate)}
              today={today}
            />
          )}
        </div>
      </div>
      <div className={styles.dayPageTime}>
        <div className={styles.dayPageTimeTitles}>
          {hours.map((hour) => (
            <Hour
              key={hour}
              hour={hour}
            />
          ))}
        </div>
        <div className={styles.cellsWrapper}>
          <div className={styles.cell}></div>
          {hours.map((hour) => {
            return (
              <div
                key={hour}
                className={styles.cell}></div>
            )
          })}
          <EventsDay
            events={eventsGroupedByDay}
            day={date}
          />
          {isToday && <CurrentTime containerHeight={2040} />}
        </div>
      </div>
    </section>
  )
}
