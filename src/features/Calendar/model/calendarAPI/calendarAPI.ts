import { initialCalendar, initialEvent } from '../../lib/data'
import { getDatabase, ref, set, get, push, remove, update } from 'firebase/database'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { eventsToObject } from '../utils'
import { formatDate } from '../../../../shared/lib'
import { Calendar, Event } from '../types'
import { NewCalendarArgs, NewEventArgs, EditEventArgs, DeleteCalendarArgs, DeleteEventArgs, UserData, Reject } from './types'

export const writeUserInitialData = createAsyncThunk<UserData, UserData, Reject>(
  'users/writeUserData',
  async ({ userID, email }: UserData, thunkAPI) => {
    try {
      const db = getDatabase()
      const reference = ref(db, `users/${userID}`)
      const snapshot = await get(reference)
      if (snapshot.exists()) {
        return thunkAPI.rejectWithValue('User already exists')
      }
      await set(reference, { email })
      return { userID, email }
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message)
    }
  }
)

export const fetchUserData = createAsyncThunk<UserData | null, string, Reject>(
  'users/fetchUserData',
  async (userID: string, thunkAPI) => {
    try {
      const db = getDatabase()
      const reference = ref(db, `users/${userID}`)
      const snapshot = await get(reference)
      if (snapshot.exists()) {
        return snapshot.val() as UserData
      } else {
        return null
      }
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message)
    }
  }
)

export const addNewCalendar = createAsyncThunk<Calendar, NewCalendarArgs, Reject>(
  'users/addNewCalendar',
  async ({ userID, calendar }: NewCalendarArgs, thunkAPI) => {
    try {
      const db = getDatabase()
      const reference = ref(db, `users/${userID}/calendars/${calendar.id}`)
      await set(reference, calendar)
      const snapshot = await get(reference)
      const createdCalendar = snapshot.val()
      return createdCalendar
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message)
    }
  }
)

export const updateCalendar = createAsyncThunk<Calendar, NewCalendarArgs, Reject>(
  'users/updateCalendar',
  async ({ userID, calendar }: NewCalendarArgs, thunkAPI) => {
    const convertedEvents = eventsToObject(calendar.events)
    const convertedCalendar = { ...calendar, events: convertedEvents }
    try {
      const db = getDatabase()
      const reference = ref(db, `users/${userID}/calendars/${calendar.id}`)
      await update(reference, convertedCalendar)
      const snapshot = await get(reference)
      const updatedCalendar = snapshot.val()
      return updatedCalendar
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message)
    }
  }
)

export const addNewEvent = createAsyncThunk<Event, NewEventArgs, Reject>(
  'users/addNewEvent',
  async ({ calendarID, userID, event }: NewEventArgs, thunkAPI) => {
    try {
      const db = getDatabase()
      const reference = ref(db, `users/${userID}/calendars/${calendarID}/events`)
      const newEventRef = push(reference)
      await set(newEventRef, event)
      const snapshot = await get(newEventRef)
      const createdEvent = snapshot.val()

      return createdEvent
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message)
    }
  }
)

export const editEvent = createAsyncThunk<Event, EditEventArgs, Reject>(
  'users/editEvent',
  async ({ userID, calendarID, newEvent, eventID }: EditEventArgs, thunkAPI) => {
    try {
      const db = getDatabase()
      const reference = ref(db, `users/${userID}/calendars/${calendarID}/events/${eventID}`)
      await update(reference, newEvent)
      const snapshot = await get(reference)
      const editedEvent = snapshot.val()
      if (!editedEvent) {
        return thunkAPI.rejectWithValue('Event not found or update failed')
      }
      return editedEvent
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error'
      return thunkAPI.rejectWithValue(errorMessage)
    }
  }
)

export const deleteCalendar = createAsyncThunk<void, DeleteCalendarArgs, Reject>(
  'users/deleteCalendar',
  async ({ calendarID, userID }: DeleteCalendarArgs, thunkAPI) => {
    try {
      const db = getDatabase()
      const reference = ref(db, `users/${userID}/calendars/${calendarID}`)
      await remove(reference)
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message)
    }
  }
)

export const deleteEvent = createAsyncThunk<void, DeleteEventArgs, Reject>(
  'users/deleteEvent',
  async ({ calendarID, userID, eventID }: DeleteEventArgs, thunkAPI) => {
    try {
      const db = getDatabase()
      const reference = ref(db, `users/${userID}/calendars/${calendarID}/events/${eventID}`)
      await remove(reference)
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message)
    }
  }
)

export const addInitialEvents = createAsyncThunk<{ message: string }, string, { rejectValue: string }>(
  'users/ensureUserHasCalendar',
  async (userID: string, thunkAPI) => {
    try {
      const db = getDatabase()
      const reference = ref(db, `users/${userID}/calendars`)
      const snapshot = await get(reference)
      if (snapshot.exists()) {
        return { message: 'User already has a calendar' }
      }
      const newCalendarRef = push(reference)
      await set(newCalendarRef, initialCalendar)
      const newEventRef = push(ref(db, `users/${userID}/calendars/${newCalendarRef.key}/events`))
      const currentDate = formatDate(new Date())
      const updatedEvent: Event = { ...initialEvent, dateOfCreation: currentDate }
      await set(newEventRef, updatedEvent)
      return { message: 'Default calendar and event created successfully' }
    } catch (error) {
      return thunkAPI.rejectWithValue((error as Error).message)
    }
  }
)
