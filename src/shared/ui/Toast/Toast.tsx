import { useToast } from './useToast'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { hideNotification } from '../../../features/notification/model/notificationSlice'
import classNames from 'classnames'
import { IconCrossDark } from '../icons'
import styles from './Toast.module.css'

export interface ToastProps {
  text: string
  isOpen: boolean
  onClose?: () => void
}

export const Toast = ({ text, isOpen, onClose }: ToastProps) => {
  const dispatch = useAppDispatch()
  const toastStyle = classNames(styles.toast, { [styles.hide]: !isOpen, [styles.show]: isOpen })

  const closeHandle = () => {
    if (onClose) {
      onClose()
      dispatch(hideNotification())
    }
  }

  useToast({ isOpen, onClose })

  return (
    <div
      className={toastStyle}
      data-testid="toast">
      <span>{text}</span>
      <button
        data-testid="close-toast"
        aria-label="Close toast notification"
        className={styles.toastClose}
        onClick={closeHandle}>
        <IconCrossDark />
      </button>
    </div>
  )
}
