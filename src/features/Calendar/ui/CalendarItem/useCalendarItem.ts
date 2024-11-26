import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/reduxHooks'
import { deleteCalendar, updateCalendar, fetchUserData } from '../../model/calendarAPI/calendarAPI'
import { selectCalendars } from '../../model/calendarSlice'
import { selectUserId } from '../../../auth/userSlice'

interface UseCalendarItem {
  title: string
  id: string
  color: string
}

export const useCalendarItem = ({ title, id, color }: UseCalendarItem) => {
  const userID = useAppSelector(selectUserId)
  const calendars = useAppSelector(selectCalendars)
  const targetCalendar = calendars?.filter((calendar) => calendar.id === id)[0]
  const dispatch = useAppDispatch()
  const [modal, setModal] = useState(false)
  const [editCalendarModal, setEditCalendarModal] = useState<boolean>(false)

  const getTextRemoveModal = () => {
    const defaultColor = '#52616b'
    if (color === defaultColor) {
      return `This calendar cannot be deleted`
    } else {
      return `Are you sure you want to delete ${title}? You'll no longer have access to this calendar and its events.`
    }
  }
  const textRemoveModal = getTextRemoveModal()

  const handleClose = () => setModal(false)

  const editCalendarModalHandle = () => {
    setEditCalendarModal(!editCalendarModal)
  }

  const presenceHandler = () => {
    if (userID && targetCalendar) {
      const updatedCalendar = { ...targetCalendar, isVisible: !targetCalendar.isVisible }
      dispatch(updateCalendar({ userID, calendar: updatedCalendar }))
      dispatch(fetchUserData(userID))
    }
  }

  const deleteHandle = (id: string) => {
    if (userID) {
      dispatch(deleteCalendar({ calendarID: id, userID: userID }))
      dispatch(fetchUserData(userID))
    }
  }

  return {
    modal,
    textRemoveModal,
    handleClose,
    editCalendarModalHandle,
    presenceHandler,
    deleteHandle,
    setModal,
    editCalendarModal,
  }
}
