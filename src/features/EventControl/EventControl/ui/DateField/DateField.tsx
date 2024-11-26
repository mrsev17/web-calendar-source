import { useState } from 'react'
import { IconClock, Input, Datepicker } from '../../../../../shared/ui'
import { formatDateFromDetailed } from '../../../../../shared/lib'
import { DateFieldProps } from './types'
import styles from './DateField.module.css'

export const DateField = ({ inputDate, inputDateHandle }: DateFieldProps) => {
  const [datepickerShow, setDatepickerShow] = useState(false)

  const datepickerVisibilityHandle = () => {
    setDatepickerShow(!datepickerShow)
  }

  return (
    <div className={styles.wrapperDateField}>
      <div className={styles.dateInputWrapper}>
        <IconClock />
        <div
          className={styles.newEventWrapperInput}
          onClick={datepickerVisibilityHandle}>
          <Input
            readonly
            placeholder="Date"
            type="text"
            value={inputDate}
            label="Date"
          />
        </div>
      </div>
      <div className={styles.datepickerWrapper}>
        <Datepicker
          selectedDate={formatDateFromDetailed(inputDate)}
          setSelectDate={inputDateHandle}
          isOpen={datepickerShow}
          onClose={datepickerVisibilityHandle}
        />
      </div>
    </div>
  )
}
