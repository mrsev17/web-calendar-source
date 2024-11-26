import { Calendar, Event } from '../types'

export interface WriteUserData {
  userID: string
  email: string | null
  calendars?: Calendar[]
}

export interface NewCalendarArgs {
  calendar: Calendar
  userID: string
}

export interface NewEventArgs {
  calendarID: string
  userID: string
  event: Event
}

export interface EditCalendarArgs {
  userID: string
  calendarID: string
  newCalendar: Calendar
}

export interface EditEventArgs {
  userID: string
  calendarID: string
  newEvent: Event
  eventID: string
}

export interface DeleteCalendarArgs {
  calendarID: string
  userID: string
}

export interface DeleteEventArgs {
  calendarID: string
  eventID: string
  userID: string
}

export interface UserData {
  userID: string
  email: string
}

export interface Reject {
  rejectValue: string
}
