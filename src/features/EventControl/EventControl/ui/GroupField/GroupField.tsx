import { useAppSelector } from '../../../../../shared/hooks/reduxHooks'
import { selectCalendars } from '../../../../Calendar/model/calendarSlice'
import { IconCalendar, Select, IconArrowDown } from '../../../../../shared/ui'
import { OptionType } from '../../../../../shared/types'
import { GroupFieldProps } from './types'
import styles from './GroupField.module.css'

export const GroupField = ({ selectCalendar, calendarHandle }: GroupFieldProps) => {
  const calendars = useAppSelector(selectCalendars)
  const calendarsOptions: OptionType[] =
    calendars?.map((calendar) => ({
      title: calendar.title,
      value: calendar.colour,
      id: calendar.id,
    })) ?? []

  return (
    <div className={styles.calendar}>
      <IconCalendar />
      <div className={styles.calendarSelect}>
        <Select
          options={calendarsOptions}
          selected={selectCalendar}
          onChange={calendarHandle}
          style={{ width: '100%' }}
          isHaveColor
        />
        <div className={styles.calendarIconArrow}>
          <IconArrowDown />
        </div>
      </div>
    </div>
  )
}
