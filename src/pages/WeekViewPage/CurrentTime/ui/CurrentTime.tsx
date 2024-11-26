import { useCurrentTime } from '../model'
import styles from './CurrentTime.module.css'

interface CurrentTimeProps {
  containerHeight: number
}

export const CurrentTime = ({ containerHeight }: CurrentTimeProps) => {
  const { currentPosition } = useCurrentTime(containerHeight)

  return (
    <div className={styles.lineCurrentTimeWrapper}>
      <div
        className={styles.lineCurrentTime}
        style={{ top: `${currentPosition}px` }}>
        <div className={styles.lineCurrentTimeCircle}></div>
      </div>
    </div>
  )
}
