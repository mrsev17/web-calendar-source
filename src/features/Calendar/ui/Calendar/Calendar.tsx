import { useCalendar } from './useCalendar'
import { useAppDispatch } from '../../../../shared/hooks/reduxHooks'
import { showNotification } from '../../../notification/model/notificationSlice'
import { Modal, Input, ColourPicker, Button, IconTitle, IconPaint } from '../../../../shared/ui'
import { CalendarProps } from './types'
import styles from './Calendar.module.css'

export const Calendar = ({ titleText, isOpen, onClose, action, valueTitle, label, id }: CalendarProps) => {
  const dispatch = useAppDispatch()
  const { title, pickColor, handleChange, pickerHandle, handleAction } = useCalendar({ valueTitle, action, id })
  const actionText = `${action === 'create' ? 'created' : 'edited'}`
  const targetToast = `${titleText.split(' ')[1] === 'calendar' ? 'Calendar' : 'Event'}`
  const notificationText = `${targetToast} ${actionText}`

  const toastHandle = () => {
    dispatch(showNotification(notificationText))
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="278px"
      title={titleText}>
      <div className={styles.createCalendar}>
        <div className={styles.createTitleWrapper}>
          <IconTitle />
          <Input
            placeholder="Enter title"
            type="text"
            value={title || ''}
            label={label}
            onChange={handleChange}
          />
        </div>
        <div className={styles.chooseColour}>
          <IconPaint />
          <div className={styles.colourPickerWrapper}>
            <span className={styles.colourSub}>Colour</span>
            <ColourPicker
              pickColor={pickColor}
              onClick={pickerHandle}
            />
          </div>
        </div>
        <div className={styles.save}>
          <Button
            onClick={() => {
              handleAction()
              onClose()
              toastHandle()
            }}
            variant="primary">
            Save
          </Button>
        </div>
      </div>
    </Modal>
  )
}
