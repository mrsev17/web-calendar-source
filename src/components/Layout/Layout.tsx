import { useState } from 'react'
import { useAuth } from '../../features/auth/useAuth'
import { useAppDispatch, useAppSelector } from '../../shared/hooks/reduxHooks'
import { Outlet, Navigate } from 'react-router-dom'
import { Header } from '../Header/Header'
import { GroupList } from '../GroupList/GroupList'
import { Button, AppContainer, IconPlus, Datepicker, Toast } from '../../shared/ui'
import { formatDate } from '../../shared/lib'
import { EventControl } from '../../features/Calendar/ui'
import { selectMessage, selectVisibility, hideNotification } from '../../features/notification/model/notificationSlice'
import { NewEventArgs } from '../../features/Calendar/model/calendarAPI/types'
import { addNewEvent } from '../../features/Calendar/model/calendarAPI/calendarAPI'
import { setDateToSpecificDay, setSelectDate, selectSelectedDate } from '../../features/Calendar/model/calendarSlice'
import styles from '../Layout/Layout.module.css'

export const Layout = () => {
  const { isAuthorized } = useAuth()
  const [newEventModal, setNewEventModal] = useState(false)
  const dispatch = useAppDispatch()
  const selectedDateStore = useAppSelector(selectSelectedDate)

  const toastVisibility = useAppSelector(selectVisibility)
  const toastMessage = useAppSelector(selectMessage)

  const handleSetDateToSpecificDay = (date: string) => {
    dispatch(setDateToSpecificDay(date))
  }

  const handleSelectDate = (date: string) => {
    dispatch(setSelectDate(date))
  }

  const handleSetNewEvent = (event: NewEventArgs) => {
    dispatch(addNewEvent(event))
  }

  const newEventModalHandle = () => {
    setNewEventModal(!newEventModal)
  }

  const startedValueEvent = {
    from: { title: '12:00 am', value: '00:00' },
    to: { title: '12:00 am', value: '00:00' },
  }

  const startedValueRecurrence = { title: 'Does not repeat', value: 'not-repeat' }

  return isAuthorized ? (
    <div>
      <Header />
      <AppContainer>
        <div className={styles.calendar}>
          <aside className={styles.aside}>
            {newEventModal && (
              <EventControl
                action="Create"
                titleText=""
                descriptionText=""
                date={formatDate(new Date())}
                time={startedValueEvent}
                onSave={handleSetNewEvent}
                onClose={newEventModalHandle}
                reccurence={startedValueRecurrence}
              />
            )}
            <Button
              variant="primary"
              isWidthFull
              onClick={newEventModalHandle}>
              <IconPlus />
              Create
            </Button>
            {selectedDateStore && (
              <Datepicker
                selectedDate={selectedDateStore}
                setDateToSpecificDay={handleSetDateToSpecificDay}
                setSelectDate={handleSelectDate}
              />
            )}
            <GroupList />
          </aside>
          <Outlet />
        </div>
      </AppContainer>
      <Toast
        isOpen={toastVisibility}
        text={toastMessage}
        onClose={() => dispatch(hideNotification())}
      />
    </div>
  ) : (
    <Navigate
      to="/register"
      replace
    />
  )
}
