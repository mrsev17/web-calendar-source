import { useCalendarItem } from './useCalendarItem'
import { Checkbox, IconTrash, IconEdit, Modal } from '../../../../shared/ui'
import { RemoveCalendarModal } from '../RemoveCalendarModal/RemoveCalendarModal'
import { Calendar } from '../Calendar/Calendar'
import { CalendarItemProps } from './types'
import styles from './CalendarItem.module.css'

export const CalendarItem = ({ title, color, id, isVisible }: CalendarItemProps) => {
  const {
    modal,
    textRemoveModal,
    handleClose,
    editCalendarModalHandle,
    presenceHandler,
    deleteHandle,
    setModal,
    editCalendarModal,
  } = useCalendarItem({
    title,
    id,
    color,
  })

  return (
    <li className={styles.calendarItem}>
      <div className={styles.calendarItemLeft}>
        <Checkbox
          isCheck={isVisible}
          onChange={() => presenceHandler()}
          color={color}
        />
        <h4 className={styles.calendarItemTitle}>{title}</h4>
      </div>
      <div className={styles.calendarItemRight}>
        <button
          onClick={() => setModal(!modal)}
          className={styles.calendarItemButton}>
          <IconTrash color="#323749" />
        </button>
        <button
          onClick={() => editCalendarModalHandle()}
          className={styles.calendarItemButton}>
          <IconEdit color="#323749" />
        </button>
      </div>
      <Modal
        isOpen={modal}
        onClose={handleClose}
        title="Delete calendar">
        <RemoveCalendarModal
          id={id}
          actionSub="Calendar deleted"
          text={textRemoveModal}
          onClose={handleClose}
          action={() => deleteHandle(id)}
          color={color}
        />
      </Modal>
      <Calendar
        id={id}
        valueTitle={title}
        label="Title"
        action="edit"
        titleText="Edit calendar"
        isOpen={editCalendarModal}
        onClose={editCalendarModalHandle}
      />
    </li>
  )
}
