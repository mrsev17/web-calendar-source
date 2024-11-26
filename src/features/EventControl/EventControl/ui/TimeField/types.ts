import { OptionType } from '../../../../../shared/types'

export interface TimeFieldProps {
  optionsFrom: OptionType[]
  selectedFrom: OptionType | null
  handleTimeFrom: (arg: string) => void
  optionsTo: OptionType[]
  selectedTo: OptionType | null
  handleTimeTo: (arg: string) => void
}
