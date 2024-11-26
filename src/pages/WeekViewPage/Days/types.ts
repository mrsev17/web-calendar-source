import { Event } from '../../../features/Calendar/model/types'

export interface EventView extends Event {
  calendarColor: string
}

export interface DaysProps {
  day: Date
}
