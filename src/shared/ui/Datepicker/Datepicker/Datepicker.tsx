import { useDatepicker } from '../useDatepicker'
import { DatepickerHeader, DatepickerCalendar } from '../../Datepicker'
import classNames from 'classnames'
import styles from './Datepicker.module.css'

interface DatepickerProps {
  setDateToSpecificDay?: (date: string) => void
  setSelectDate?: (date: string) => void
  selectedDate: string
  isOpen?: boolean
  onClose?: () => void
}

export const Datepicker = ({ setDateToSpecificDay, setSelectDate, selectedDate, isOpen = true, onClose }: DatepickerProps) => {
  const { titleMonth, titleYear, goToPrevMonth, goToNextMonth, daysInCurrentMonth, selectDate } = useDatepicker({ selectedDate })
  const stylesDatePicker = classNames(styles.datePicker, { [styles.datePickerHide]: !isOpen })

  return (
    <div className={stylesDatePicker}>
      <DatepickerHeader
        titleMonth={titleMonth}
        titleYear={titleYear}
        goToPrevMonth={goToPrevMonth}
        goToNextMonth={goToNextMonth}
      />
      <DatepickerCalendar
        daysInCurrentMonth={daysInCurrentMonth}
        setSelectedDate={selectDate}
        setDateToSpecificDay={setDateToSpecificDay}
        selectDate={setSelectDate}
        onClose={onClose}
      />
    </div>
  )
}
