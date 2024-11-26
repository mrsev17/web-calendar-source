import { IconTitle, IconClock, IconCalendar, IconDescription, Modal } from '../../../../shared/ui'
import { EventInformationProps } from '../types'
import styles from './EventInformation.module.css'

export const EventInformation = ({
  title,
  time,
  calendarName,
  calendarColor,
  description,
  idItem,
  deleteModalHandle,
  editModalHandle,
  onClose,
}: EventInformationProps) => {
  return (
    <Modal
      isOpen
      isCrud
      idItem={idItem}
      openDeleteModal={deleteModalHandle}
      openEditModal={editModalHandle}
      onClose={onClose}
      title="Event information">
      <div className={styles.eventInfoWrapper}>
        <div className={styles.eventTitle}>
          <IconTitle />
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.eventTime}>
          <IconClock />
          <h3 className={styles.time}>{time}</h3>
        </div>
        <div className={styles.eventCalendar}>
          <IconCalendar />
          <h4 className={styles.calendar}>
            <span
              style={{ backgroundColor: `${calendarColor}` }}
              className={styles.color}></span>
            {calendarName}
          </h4>
        </div>
        <div className={styles.eventDescription}>
          <IconDescription />
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Modal>
  )
}
