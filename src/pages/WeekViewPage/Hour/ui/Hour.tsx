import { HourProps } from '../types'
import styles from './Hour.module.css'

export const Hour = ({ hour }: HourProps) => {
  return (
    <div
      key={hour}
      className={styles.hourItem}>
      <span className={styles.hourItemSub}>{hour}</span>
    </div>
  )
}
