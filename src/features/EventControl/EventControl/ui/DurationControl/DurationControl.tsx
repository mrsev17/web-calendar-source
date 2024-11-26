import { Checkbox, Select, IconArrowDown } from '../../../../../shared/ui'
import { reccurenceOptions } from '../../../../../shared/lib'
import { DurationControlProps } from './types'
import styles from './DurationControl.module.css'

export const DurationControl = ({ isAllDay, allDayHandle, selectedDuration, durationHandle }: DurationControlProps) => {
  return (
    <div className={styles.duration}>
      <div className={styles.durationWrapper}>
        <Checkbox
          isCheck={isAllDay}
          onChange={allDayHandle}
          label="All day"
        />
        <div className={styles.durationSelect}>
          <Select
            isHaveColor={false}
            options={reccurenceOptions}
            selected={selectedDuration || null}
            onChange={durationHandle}
            style={{ width: '220px' }}
          />
          <div className={styles.durationIconArrow}>
            <IconArrowDown />
          </div>
        </div>
      </div>
    </div>
  )
}
