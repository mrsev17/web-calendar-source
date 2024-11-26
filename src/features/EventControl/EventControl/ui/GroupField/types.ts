import { OptionType } from '../../../../../shared/types'

export interface GroupFieldProps {
  selectCalendar: OptionType | null
  calendarHandle: (arg: string) => void
}
