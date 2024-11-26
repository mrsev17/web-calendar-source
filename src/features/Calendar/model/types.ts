import { OptionType } from '../../../shared/types'

export type EventsInDatabase = Record<string, Event>

export interface Calendar {
  isVisible: boolean
  colour: string
  title: string
  id: string
  events: Event[]
}

export interface Event {
  id: string
  title: string
  description: string
  date: string
  dateOfCreation: string
  isAllDay: boolean
  time: {
    from: OptionType
    to: OptionType
  }
  reccurence: OptionType | string
}

export interface CreateEvent extends Event {
  calendar: string
}

export interface InitialCalendarUISlice {
  selectedDate: string | null
  currentDate: string | null
  calendars: Calendar[] | null
}

export interface EditEvent {
  calendar: string
  event: Event
  id?: string
}

export interface RecurringEvent extends Event {
  calendarID?: string
}
