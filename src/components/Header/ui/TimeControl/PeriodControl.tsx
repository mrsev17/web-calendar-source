import { usePeriodControl } from './usePeriodControl'
import { Button, IconArrowLeft, IconArrowRight } from '../../../../shared/ui'
import styles from './PeriodControl.module.css'
import { useLocation } from 'react-router-dom'

interface PeriodControlProps {
  currentPeriodHandler: () => void
  previousPeriodHandler: () => void
  nextPeriodHandler: () => void
}

export const PeriodControl = ({ currentPeriodHandler, previousPeriodHandler, nextPeriodHandler }: PeriodControlProps) => {
  const location = useLocation()
  const isSetWeekOrDay = location.pathname === '/' ? 'week' : 'day'
  const { day, month, year, isSetDayView } = usePeriodControl(isSetWeekOrDay)

  return (
    <>
      <Button
        variant="primary"
        onClick={currentPeriodHandler}>
        Today
      </Button>
      <div className={styles.periodControl}>
        <div className={styles.periodControlButtons}>
          <Button
            variant="secondary"
            onClick={previousPeriodHandler}>
            <IconArrowLeft color="#323749" />
          </Button>
          <Button
            variant="secondary"
            onClick={nextPeriodHandler}>
            <IconArrowRight color="#323749" />
          </Button>
        </div>
        <h3 className={styles.periodTitle}>
          {month} {isSetDayView && `${day},`} {year}
        </h3>
      </div>
    </>
  )
}
