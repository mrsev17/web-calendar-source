export interface EventInformationProps {
  title?: string
  time?: string
  calendarName?: string
  calendarColor?: string
  description?: string
  idItem?: string
  deleteModalHandle?: () => void
  editModalHandle?: () => void
  onClose: () => void
}
