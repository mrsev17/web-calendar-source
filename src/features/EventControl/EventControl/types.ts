import { Event, EditEvent } from '../../../features/Calendar/model/types'
import { OptionType } from '../../../shared/types'

export interface CreateEvent extends Event {
  calendar: string
}

export interface NewEventArguments {
  calendarID: string
  userID: string
  event: Event
}

export interface EventFormProps {
  action: 'Edit' | 'Create'
  idExistingEvent?: string
  titleText: string
  date?: string
  dateOfCreation?: string
  time?: {
    from: OptionType
    to: OptionType
  }
  reccurence: OptionType
  isAllDay?: boolean
  repeat?: string
  descriptionText: string
  onSave?: (event: NewEventArguments) => void
  onEdit?: (args: EditEvent) => void
  onClose: () => void
  id?: string
  selectedCalendar?: OptionType
}
