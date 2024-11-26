import { useEventItem } from './useEventItem'
import { EventInformation, EventControl } from '../../../EventControl'
import { Modal } from '../../../../shared/ui'
import { RemoveCalendarModal } from '../RemoveCalendarModal/RemoveCalendarModal'
import { hexToRgb } from '../../../../shared/lib/colors'
import { EventItemProps } from './types'
import styles from './EventItem.module.css'

export const EventItem = ({
  eventTop,
  eventHeight,
  calendarColor,
  eventTitle,
  index,
  timeFrom,
  timeTo,
  eventID,
  width,
  left,
  isAllDay,
  reccurence,
  style,
  dateOfCreation,
}: EventItemProps) => {
  const {
    openEventInfo,
    modalInfo,
    modalRemoveHandle,
    modalEditHandle,
    removeModal,
    eventInformation,
    removeItem,
    editModal,
    isEventConfirm,
    selectedCalendar,
    handleSetNewEvent,
    targetEvent,
  } = useEventItem({
    eventIdArg: eventID,
  })

  const textModalRemove = `Are you sure you want to delete Event ${eventInformation.title}? You'll no longer have access to it. `

  const rgbBackground = hexToRgb(calendarColor)

  const eventStyle = {
    display: `${!isAllDay ? 'flex' : 'none'}`,
    top: `${eventTop}px`,
    height: `${eventHeight}px`,
    backgroundColor: rgbBackground,
    right: `${isAllDay ? 0 : 'auto'}`,
    left: `${left}%`,
    width: `${width}%`,
    zIndex: `${index + 1}`,
  }

  return (
    <>
      <div
        onClick={openEventInfo}
        className={`${styles.event} ${eventStyle}`}
        style={{ ...eventStyle, ...style }}>
        <div
          className={styles.eventAccent}
          style={{ backgroundColor: calendarColor }}></div>
        <div className={styles.eventContent}>
          <div className={styles.eventTitle}>
            <h3 className={styles.eventTitle}>{eventTitle}</h3>
            <h4
              className={styles.eventTime}
              style={{ maxWidth: `${50 / index}%` }}>
              {timeFrom} {timeTo}
            </h4>
          </div>
        </div>
      </div>
      {modalInfo && (
        <EventInformation
          onClose={openEventInfo}
          idItem={eventInformation.id}
          title={eventInformation.title}
          description={eventInformation.description}
          time={eventInformation.time}
          calendarName={eventInformation.calendarName}
          calendarColor={eventInformation.calendarColor}
          deleteModalHandle={modalRemoveHandle}
          editModalHandle={modalEditHandle}
        />
      )}
      {removeModal && (
        <Modal
          onClose={modalRemoveHandle}
          isOpen={removeModal}
          title="Delete event"
          openDeleteModal={modalRemoveHandle}>
          <RemoveCalendarModal
            actionSub="Event deleted"
            text={textModalRemove}
            onClose={modalRemoveHandle}
            action={removeItem}
          />
        </Modal>
      )}
      {editModal && isEventConfirm && targetEvent && (
        <EventControl
          selectedCalendar={selectedCalendar}
          action="Edit"
          titleText={targetEvent.title}
          descriptionText={targetEvent.description}
          date={targetEvent?.date}
          time={{ from: targetEvent.time.from, to: targetEvent.time.to }}
          onEdit={handleSetNewEvent}
          id={eventID}
          onClose={modalEditHandle}
          isAllDay={targetEvent.isAllDay}
          reccurence={reccurence}
          dateOfCreation={dateOfCreation}
        />
      )}
    </>
  )
}
