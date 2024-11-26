export interface CalendarProps {
  valueTitle?: string
  titleText: string
  isOpen: boolean
  onClose: () => void
  label: string
  action: 'create' | 'edit'
  id?: string
}
