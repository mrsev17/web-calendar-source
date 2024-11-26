import { Select } from '../../../../../shared/ui'
import { TimeFieldProps } from './types'
import styles from './TimeField.module.css'

export const TimeField = ({ optionsFrom, selectedFrom, handleTimeFrom, optionsTo, selectedTo, handleTimeTo }: TimeFieldProps) => {
  return (
    <div className={styles.timeWrapper}>
      <Select
        label="Time"
        options={optionsFrom}
        selected={selectedFrom}
        onChange={handleTimeFrom}
        isHaveColor={false}
      />
      <span className={styles.timeSelectsDivider}>-</span>
      <Select
        options={optionsTo}
        selected={selectedTo}
        onChange={handleTimeTo}
        style={{ marginTop: '12px' }}
      />
    </div>
  )
}
