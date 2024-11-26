import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../../app/store'
import { SEVEN_DAYS_IN_MILLISECONDS, ONE_DAY_IN_MILLISECONDS } from '../../../shared/lib'
import { formatDate, formatDateWithoutTimeZone } from '../../../shared/lib'
import { fetchUserData } from './calendarAPI/calendarAPI'
import { getTransformedData } from './utils'
import { WriteUserData } from './calendarAPI/types'
import { InitialCalendarUISlice } from './types'

const initialState: InitialCalendarUISlice = {
  currentDate: null,
  selectedDate: null,
  calendars: null,
}

const calendarSlice = createSlice({
  name: 'calendarUI',
  initialState,
  reducers: {
    setInitialCalendarState(state) {
      state.currentDate = new Date().toISOString()
      state.selectedDate = formatDate(new Date())
    },
    resetCalendarState(state) {
      state.currentDate = null
      state.selectedDate = null
      state.calendars = null
    },
    moveToNextDay(state) {
      if (state.currentDate) {
        const currentDate = new Date(state.currentDate)
        currentDate.setTime(currentDate.getTime() + ONE_DAY_IN_MILLISECONDS)
        state.currentDate = currentDate.toISOString()
        state.selectedDate = formatDate(currentDate)
      }
    },
    moveToPreviousDay(state) {
      if (state.currentDate) {
        const currentDate = new Date(state.currentDate)
        currentDate.setTime(currentDate.getTime() - ONE_DAY_IN_MILLISECONDS)
        state.currentDate = currentDate.toISOString()
        state.selectedDate = formatDate(currentDate)
      }
    },
    moveToNextWeek(state) {
      if (state.currentDate) {
        const currentDate = new Date(state.currentDate)
        currentDate.setTime(currentDate.getTime() + SEVEN_DAYS_IN_MILLISECONDS)
        state.currentDate = currentDate.toISOString()
      }
    },
    moveToPreviousWeek(state) {
      if (state.currentDate) {
        const currentDate = new Date(state.currentDate)
        currentDate.setTime(currentDate.getTime() - SEVEN_DAYS_IN_MILLISECONDS)
        state.currentDate = currentDate.toISOString()
      }
    },
    setCurrentWeek(state) {
      const today = new Date()
      const startOfWeek = new Date(today)
      startOfWeek.setDate(today.getDate() - today.getDay() + 5)
      startOfWeek.setHours(0, 0, 0, 0)
      state.currentDate = startOfWeek.toISOString()
      state.selectedDate = formatDate(new Date())
    },
    setCurrentDay(state) {
      const today = new Date()
      const day = String(today.getDate()).padStart(2, '0')
      const month = String(today.getMonth() + 1).padStart(2, '0')
      const year = today.getFullYear()
      state.currentDate = today.toISOString()
      state.selectedDate = `${day}/${month}/${year}`
    },
    setDateToSpecificDay(state, action: PayloadAction<string>) {
      state.currentDate = formatDateWithoutTimeZone(action.payload)
    },
    setSelectDate(state, action: PayloadAction<string>) {
      state.selectedDate = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action: PayloadAction<WriteUserData | null>) => {
      if (!action.payload || !action.payload.calendars) {
        state.calendars = []
        return
      }
      const { calendars } = action.payload
      const transformedData = getTransformedData(calendars)
      state.calendars = transformedData
    })
  },
})

export const selectCurrentWeek = (state: RootState) => state.calendar.currentDate
export const selectSelectedDate = (state: RootState) => state.calendar.selectedDate
export const selectCalendars = (state: RootState) => state.calendar.calendars

export const {
  moveToNextWeek,
  moveToPreviousWeek,
  moveToNextDay,
  moveToPreviousDay,
  setCurrentWeek,
  setCurrentDay,
  setDateToSpecificDay,
  setSelectDate,
  setInitialCalendarState,
  resetCalendarState,
} = calendarSlice.actions
export default calendarSlice.reducer
