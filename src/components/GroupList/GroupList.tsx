import { useState } from 'react'
import { useAppSelector } from '../../shared/hooks/reduxHooks'
import { selectCalendars } from '../../features/Calendar/model/calendarSlice'
import { Calendar, CalendarItem } from '../../features/Calendar/ui'
import { IconPlus } from '../../shared/ui'
import styles from './GroupList.module.css'

export const GroupList = () => {
  const calendars = useAppSelector(selectCalendars)

  const [newCalendarModal, setNewCalendarModal] = useState<boolean>(false)

  const newCalendarModalHandler = () => {
    setNewCalendarModal(!newCalendarModal)
  }

  return (
    <div className={styles.calendarList}>
      <div className={styles.calendarListHeader}>
        <h4 className={styles.calendarListTitle}>My calendars</h4>
        <button
          onClick={newCalendarModalHandler}
          className={styles.calendarAddNew}>
          <IconPlus color="#323749" />
        </button>
        <Calendar
          label="Title*"
          action="create"
          titleText="Create calendar"
          isOpen={newCalendarModal}
          onClose={() => setNewCalendarModal(!newCalendarModal)}
        />
      </div>
      <ul className={styles.calendarListContent}>
        {calendars?.map(({ title, colour, id }) => {
          const isVisible = calendars.filter((calendar) => calendar.id === id)[0].isVisible
          return (
            <CalendarItem
              key={id}
              title={title}
              color={colour}
              id={id}
              isVisible={isVisible}
            />
          )
        })}
      </ul>
    </div>
  )
}
