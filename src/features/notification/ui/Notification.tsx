import { Toast } from '../../../shared/ui'

interface NotificationProps {
  text: string
  isVisible: boolean
}

export const Notification = ({ text, isVisible }: NotificationProps) => {
  return (
    <Toast
      text={text}
      isOpen={isVisible}
    />
  )
}
