import { useDays } from '../model'
import { EventsDay } from '../../../../features/Calendar/ui'
import { CurrentTime } from '../../CurrentTime'
import { hours } from '../../../../shared/lib/timeUtils'
import { DaysProps } from '../types'
import styles from './Days.module.css'

export const Days = ({ day }: DaysProps) => {
  const { eventsGroupedByDay, isToday } = useDays({ dayData: day })

  return (
    <ul className={styles.eventsList}>
      <li className={styles.cell}></li>
      {hours.map((hour) => (
        <li
          key={hour + '-calendar'}
          className={styles.cell}></li>
      ))}
      <EventsDay
        events={eventsGroupedByDay}
        day={day}
      />
      {isToday && <CurrentTime containerHeight={2040} />}
    </ul>
  )
}
