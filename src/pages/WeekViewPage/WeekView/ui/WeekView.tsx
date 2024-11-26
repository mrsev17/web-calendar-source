import { useWeekView } from '../model'
import { WeekDayTitle } from '../../WeekDayTitle'
import { Days } from '../../Days'
import { Hour } from '../../Hour'
import { hours } from '../../../../shared/lib/timeUtils'
import { today } from '../../../../shared/lib/timeUtils'
import styles from './WeekView.module.css'

export const WeekView = () => {
  const { weekDays } = useWeekView()

  return (
    <section className={styles.weekPage}>
      <div className={styles.weekPageHeader}>
        <div className={styles.emptyCell}></div>
        <ul className={styles.weekDays}>
          {weekDays.map((day: Date) => (
            <WeekDayTitle
              key={day.toString()}
              day={day}
              today={today}
            />
          ))}
        </ul>
      </div>
      <div className={styles.weekPageTime}>
        <div className={styles.weekPageTimeTitles}>
          {hours.map((hour) => (
            <Hour
              key={hour}
              hour={hour}
            />
          ))}
        </div>
        <div className={styles.cellsWrapper}>
          {weekDays.map((day) => {
            return (
              <Days
                key={day.toString()}
                day={day}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
