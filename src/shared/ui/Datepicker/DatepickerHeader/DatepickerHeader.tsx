import { IconArrowLeft, IconArrowRight } from '../../icons'
import styles from './DatepickerHeader.module.css'

export interface DatepickerHeaderProps {
  titleMonth: string
  titleYear: number
  goToPrevMonth: () => void
  goToNextMonth: () => void
}

export const DatepickerHeader = ({ titleMonth, titleYear, goToPrevMonth, goToNextMonth }: DatepickerHeaderProps) => {
  return (
    <div className={styles.datePickerHeader}>
      <span
        className={styles.datePickerMonth}
        data-testid="datepicker-header-title">
        {titleMonth} {titleYear}
      </span>
      <div className={styles.selectMonth}>
        <button
          aria-label="previous-month"
          data-testid="datepicker-previous-month"
          className={styles.datePickerPrevMonth}
          onClick={goToPrevMonth}>
          <IconArrowLeft color="#323749" />
        </button>
        <button
          aria-label="next-month"
          data-testid="datepicker-next-month"
          className={styles.datePickerNextMonth}
          onClick={goToNextMonth}>
          <IconArrowRight color="#323749" />
        </button>
      </div>
    </div>
  )
}
