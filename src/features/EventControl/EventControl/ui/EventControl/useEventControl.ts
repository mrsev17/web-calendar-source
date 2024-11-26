import { v4 as uuidv4 } from 'uuid'
import { formatDate, convertTimeValues } from '../../../../../shared/lib'
import { useState, useMemo, useCallback, useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../../../../shared/hooks/reduxHooks'
import { selectCalendars } from '../../../../Calendar/model/calendarSlice'
import { fetchUserData } from '../../../../Calendar/model/calendarAPI/calendarAPI'
import { showNotification } from '../../../../notification/model/notificationSlice'
import {
  formatDateDetailed,
  formatDateFromDetailed,
  reccurenceOptions,
  optionsHours,
  getLaterTime,
} from '../../../../../shared/lib'
import { OptionType } from '../../../../../shared/types'
import { Calendar, Event } from '../../../../Calendar/model/types'
import { UseEventControl } from './types'
import { selectUserId } from '../../../../auth/userSlice'

export const useEventControl = ({
  selectedCalendar,
  titleText,
  date,
  time,
  isAllDay,
  descriptionText,
  onSave,
  onEdit,
  action,
  id,
  onClose,
  reccurence = reccurenceOptions[0].title,
  dateOfCreation,
}: UseEventControl) => {
  const dispatch = useAppDispatch()
  const actionText = `${action === 'Create' ? 'created' : 'edited'}`
  const notificationText = `Event ${actionText}`

  const userID = useAppSelector(selectUserId)
  const calendars = useAppSelector(selectCalendars)
  const calendarsOptions: OptionType[] =
    calendars?.map((calendar) => ({
      title: calendar.title,
      value: calendar.colour,
      id: calendar.id,
    })) ?? []
  const initialCalendarOption = selectedCalendar ? selectedCalendar.value : calendarsOptions[0].value

  const [inputDate, setInputDate] = useState(formatDateDetailed(date))
  const [title, setTitle] = useState(titleText)

  const [reccurenceOption, setRecurrenceOption] = useState<OptionType | string>(reccurence)
  const [timeStart, setTimeStart] = useState(time.from.value)

  const [isAllDayCheck, setIsAllDayCheck] = useState<boolean>(isAllDay)

  const allDayHandle = () => {
    setIsAllDayCheck(!isAllDayCheck)
  }

  const getOptions = () => {
    const index = optionsHours.findIndex((item) => item.value === timeStart)
    return optionsHours.slice(index + 1)
  }

  const newOptions = useMemo(getOptions, [timeStart])

  const initialFinish = action === 'Create' ? newOptions[0].value : time.to
  const [timeFinish, setTimeFinish] = useState<OptionType | string>(initialFinish)

  const [calendar, setCalendar] = useState<Calendar | string>(initialCalendarOption)
  const [description, setDescription] = useState<string>(descriptionText)

  const inputDateHandle = (date: string) => {
    setInputDate(formatDateDetailed(date))
  }

  const durationHandle = (value: string) => {
    const reccurenceOption = reccurenceOptions.filter((item) => item.value === value)[0]
    setRecurrenceOption(reccurenceOption)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const handleTimeFinishSelect = (value: string) => {
    setTimeFinish(value)
  }

  const getSelectedTimeFinish = (): OptionType | undefined => {
    return newOptions.find((item) => item.value === timeFinish)
  }

  const getSelectDuration = (): OptionType | undefined => {
    return reccurenceOptions.filter((item) => {
      if (typeof reccurenceOption !== 'string') return item.title === reccurenceOption.title
      return reccurenceOption
    })[0]
  }

  const handleTimeStartSelect = (value: string) => {
    setTimeStart(value)
  }

  const calendarHandle = (value: string) => {
    setCalendar(value)
  }

  const getSelectCalendar = (): OptionType | undefined => {
    return calendarsOptions.find((item) => item.value === calendar)
  }

  const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value)
  }

  const selectedTimeFinish = getSelectedTimeFinish() || null
  const selectedDuration = getSelectDuration()

  const selectCalendar = getSelectCalendar()

  const validateForm = useCallback(() => {
    return title.length >= 3 && description.length >= 3 && timeStart && timeFinish
  }, [title, description, timeStart, timeFinish])

  const selectedTimeFrom = optionsHours.find((item) => item.value === timeStart) || null

  const saveAction = useCallback(() => {
    if (!validateForm()) {
      alert('Please fill in all required fields with at least 3 characters.')
      return
    }

    const correctTime = convertTimeValues(timeStart, timeFinish)
    const selectedCalendarId = calendars?.find((cal) => cal.colour === calendar)?.id

    const toastHandle = () => {
      dispatch(showNotification(notificationText))
    }
    interface NewEventArguments {
      calendarID: string
      userID: string
      event: Event
    }

    if (onSave && selectedCalendarId && action === 'Create' && userID && selectedDuration) {
      const currentDate = formatDate(new Date())
      const newEvent: Event = {
        id: uuidv4(),
        title,
        description,
        date: formatDateFromDetailed(inputDate),
        time: correctTime,
        isAllDay: isAllDayCheck,
        reccurence: selectedDuration,
        dateOfCreation: currentDate,
      }
      const calendarID = selectedCalendarId
      const dataBaseEvent: NewEventArguments = {
        event: newEvent,
        userID: userID,
        calendarID: calendarID,
      }
      onSave(dataBaseEvent)
      dispatch(fetchUserData(userID))
      toastHandle()
      if (onClose) onClose()
    }

    if (onEdit && selectedCalendarId && action === 'Edit' && id && onClose && selectedDuration) {
      const editedEvent: Event = {
        id,
        title,
        description,
        date: formatDateFromDetailed(inputDate),
        time: correctTime,
        isAllDay: isAllDayCheck,
        reccurence: selectedDuration,
        dateOfCreation: dateOfCreation,
      }
      onEdit({ event: editedEvent, calendar: selectedCalendarId })
      toastHandle()
      onClose()
    }
  }, [
    title,
    description,
    timeStart,
    timeFinish,
    inputDate,
    onSave,
    onEdit,
    id,
    action,
    validateForm,
    calendars,
    calendar,
    isAllDayCheck,
    onClose,
    dispatch,
    notificationText,
    userID,
    selectedDuration,
    dateOfCreation,
  ])

  useEffect(() => {
    if (!newOptions.find((item) => item.value === timeFinish)) {
      const laterTime = getLaterTime(newOptions[0].value, time.to.value)
      setTimeFinish(laterTime)
      return
    }
    if (!newOptions.find((item) => item.value === timeFinish) && action === 'Create') {
      setTimeFinish(newOptions[0].value)
      return
    }
  }, [newOptions, timeFinish, time.to.value, action])

  return {
    title,
    handleChange,
    inputDate,
    inputDateHandle,
    selectedTimeFrom,
    handleTimeStartSelect,
    newOptions,
    selectedTimeFinish,
    handleTimeFinishSelect,
    allDayHandle,
    selectedDuration,
    durationHandle,
    selectCalendar,
    calendarHandle,
    description,
    handleDescription,
    saveAction,
  }
}
