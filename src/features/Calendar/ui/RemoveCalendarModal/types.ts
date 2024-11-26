export interface RemoveCalendarModalProps {
  text: string
  onClose: () => void
  action: () => void
  actionSub: string
  isDisabled?: boolean
  id?: string
  color?: string
}
