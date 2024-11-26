import { OptionType } from '../../../../shared/types'

export interface EventItemProps {
  eventTop?: number
  eventHeight?: number
  calendarColor: string
  eventTitle: string
  index: number
  timeFrom?: string
  timeTo?: string
  eventID: string
  width?: number
  left?: number
  isAllDay?: boolean
  reccurence: OptionType
  style?: React.CSSProperties
  dateOfCreation: string
}
