import { OptionType } from '../../../../../shared/types'

export interface DurationControlProps {
  isAllDay: boolean
  allDayHandle: () => void
  selectedDuration: OptionType | undefined
  durationHandle: (arg: string) => void
}
