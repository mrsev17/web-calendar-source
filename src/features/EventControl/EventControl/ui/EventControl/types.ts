import { OptionType } from '../../../../../shared/types'
import { EditEvent, Event } from '../../../../Calendar/model/types'

interface NewEventArguments {
  calendarID: string
  userID: string
  event: Event
}

export interface UseEventControl {
  action: 'Edit' | 'Create'
  id?: string
  selectedCalendar?: OptionType
  titleText: string
  date: string
  dateOfCreation: string
  isAllDay: boolean
  descriptionText: string
  time: {
    from: OptionType
    to: OptionType
  }
  reccurence: OptionType | string
  onSave?: (event: NewEventArguments) => void
  onEdit?: (args: EditEvent) => void
  onClose?: () => void
}
