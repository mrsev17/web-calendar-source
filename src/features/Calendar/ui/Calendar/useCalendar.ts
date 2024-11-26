import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useAppSelector, useAppDispatch } from '../../../../shared/hooks/reduxHooks'
import { addNewCalendar, updateCalendar, fetchUserData } from '../../model/calendarAPI/calendarAPI'
import { selectCalendars } from '../../model/calendarSlice'
import { selectUserId } from '../../../auth/userSlice'

interface UseCalendar {
  valueTitle?: string
  action: 'create' | 'edit'
  id?: string
}

export const useCalendar = ({ valueTitle, action, id }: UseCalendar) => {
  const userID = useAppSelector(selectUserId)
  const calendars = useAppSelector(selectCalendars)

  const getInitialColor = () => {
    if (id) {
      return calendars?.find((calendar) => calendar.id === id)?.colour
    }
    return '#9F2957'
  }
  const initialColor = getInitialColor()
  const [title, setTitle] = useState(valueTitle)
  const [pickColor, setPickColor] = useState(initialColor)

  const dispatch = useAppDispatch()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const pickerHandle = (event: React.MouseEvent<HTMLDivElement>) => {
    const color = event.currentTarget.getAttribute('color')
    if (color) {
      setPickColor(color)
    }
  }

  const handleAction = () => {
    if (title) {
      const isActionCreate = action === 'create'
      const isActionEdit = action === 'edit'
      const isValidTitle = title.length > 3
      const isColorAndUserIdExist = pickColor && userID
      const isColorAndEditIdExist = pickColor && id

      if (isActionCreate && isValidTitle && isColorAndUserIdExist) {
        const newCalendar = { title: title, colour: pickColor, id: uuidv4(), isVisible: false, events: [] }
        dispatch(addNewCalendar({ calendar: newCalendar, userID: userID }))
        dispatch(fetchUserData(userID))
        setTitle('')
      }
      if (isActionEdit && isValidTitle && isColorAndEditIdExist) {
        const targetCalendar = calendars?.find((calendar) => calendar.id === id)
        if (targetCalendar && userID) {
          const updatedCalendar = { ...targetCalendar, title: title, colour: pickColor, id: id }
          dispatch(updateCalendar({ userID, calendar: updatedCalendar }))
          dispatch(fetchUserData(userID))
        }
      }
    }
  }

  return { title, pickColor, handleChange, pickerHandle, handleAction }
}
