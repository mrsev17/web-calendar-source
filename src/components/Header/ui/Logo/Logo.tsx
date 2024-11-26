import { IconLogo } from '../../../../shared/ui'
import styles from './Logo.module.css'

export const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <IconLogo />
      <h2 className={styles.titleLogo}>WebCalendar</h2>
    </div>
  )
}
