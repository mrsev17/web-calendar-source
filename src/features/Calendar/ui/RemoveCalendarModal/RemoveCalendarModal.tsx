import { Button, Toast } from '../../../../shared/ui'
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/reduxHooks'
import { showNotification, selectMessage, selectVisibility } from '../../../notification/model/notificationSlice'
import { RemoveCalendarModalProps } from './types'
import styles from './RemoveCalendarModal.module.css'

export const RemoveCalendarModal = ({ text, onClose, action, actionSub, color }: RemoveCalendarModalProps) => {
  const dispatch = useAppDispatch()
  const toastVisibility = useAppSelector(selectVisibility)
  const toastMessage = useAppSelector(selectMessage)

  return (
    <div className={styles.removeItemContent}>
      <p className={styles.removeItemText}>{text}</p>
      <div className={styles.removeItemControl}>
        <Button
          onClick={onClose}
          variant="secondary">
          Cancel
        </Button>
        <Button
          isDisabled={color === '#52616b'}
          onClick={() => {
            onClose()
            action()
            dispatch(showNotification(actionSub))
          }}
          variant="primary">
          Delete
        </Button>
      </div>
      <Toast
        isOpen={toastVisibility}
        text={toastMessage}
      />
    </div>
  )
}
