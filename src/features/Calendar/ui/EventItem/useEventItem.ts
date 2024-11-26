import { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../../../shared/hooks/reduxHooks'
import { deleteEvent, fetchUserData, editEvent } from '../../model/calendarAPI/calendarAPI'
import { selectCalendars } from '../../model/calendarSlice'
import { EditEvent } from '../../model/types'
import { selectUserId } from '../../../auth/userSlice'

interface UseEventItem {
  eventIdArg: string
}

export const useEventItem = ({ eventIdArg }: UseEventItem) => {
  const datePattern = /^\d{2}\/\d{2}\/\d{4}-/
  const eventID = datePattern.test(eventIdArg) ? `${eventIdArg.slice(eventIdArg.indexOf('-'))}` : eventIdArg

  const userID = useAppSelector(selectUserId)
  const calendars = useAppSelector(selectCalendars)
  const [modalInfo, setModalInfo] = useState(false)
  const getTargetCalendar = (id: string) => {
    const calendar = calendars?.find((calendar) => {
      const event = calendar.events.find((event) => event.id === id)
      if (event) {
        return event
      }
    })
    return calendar
  }

  const targetCalendar = getTargetCalendar(eventID)

  const getTargetEvent = (eventID: string) => {
    return targetCalendar?.events.find((event) => event.id === eventID)
  }

  const targetEvent = getTargetEvent(eventID)

  const calendarTime = `${targetEvent?.date}, ${targetEvent?.time.from.title} - ${targetEvent?.time.to.title}`

  const eventInformation = {
    id: targetEvent?.id,
    title: targetEvent?.title,
    description: targetEvent?.description,
    time: calendarTime,
    calendarName: targetCalendar?.title,
    calendarColor: targetCalendar?.colour,
    isAllDay: targetEvent?.isAllDay,
  }

  const selectedCalendar = { title: eventInformation.calendarName ?? '', value: eventInformation.calendarColor ?? '' }

  const openEventInfo = () => {
    setModalInfo(!modalInfo)
  }

  const dispatch = useAppDispatch()
  const [removeModal, setRemoveModal] = useState(false)
  const [editModal, setEditModal] = useState(false)

  const modalRemoveHandle = () => {
    setRemoveModal(!removeModal)
    setModalInfo(false)
  }
  const modalEditHandle = () => {
    setModalInfo(false)
    setEditModal(!editModal)
  }

  const removeItem = () => {
    if (targetCalendar?.id && userID) {
      dispatch(deleteEvent({ calendarID: targetCalendar.id, eventID: eventID, userID: userID }))
      dispatch(fetchUserData(userID))
    }
  }

  const isEventConfirm = !!(
    targetEvent?.time &&
    targetEvent?.time.from &&
    targetEvent.time.to &&
    targetEvent.title &&
    targetEvent.description
  )

  const handleSetNewEvent = (event: EditEvent) => {
    if (userID && eventID && targetCalendar?.id) {
      dispatch(deleteEvent({ calendarID: targetCalendar.id, eventID: eventID, userID: userID }))
      dispatch(editEvent({ userID, calendarID: event.calendar, newEvent: event.event, eventID }))
      dispatch(fetchUserData(userID))
    }
  }

  return {
    openEventInfo,
    modalInfo,
    editModal,
    modalRemoveHandle,
    modalEditHandle,
    removeModal,
    eventInformation,
    removeItem,
    isEventConfirm,
    selectedCalendar,
    handleSetNewEvent,
    targetEvent,
  }
}
