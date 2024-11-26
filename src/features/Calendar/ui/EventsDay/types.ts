export interface OptionType {
  title: string
  value: string
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
  reccurence: OptionType
}

export interface EventView extends Event {
  calendarColor: string
}

export interface EventsDayProps {
  events: EventView[][]
  day: Date
}
