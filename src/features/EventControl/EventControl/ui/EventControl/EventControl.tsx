import { useEventControl } from './useEventControl'
import { TitleField } from '../TitleField'
import { TimeField } from '../TimeField/TimeField'
import { DateField } from '../DateField/DateField'
import { GroupField } from '../GroupField/GroupField'
import { DurationControl } from '../DurationControl/DurationControl'
import { DescriptionField } from '../DescriptionField/DescriptionField'
import { Modal, Button } from '../../../../../shared/ui'
import { formatDate, optionsHours } from '../../../../../shared/lib'
import { EventFormProps } from '../../types'
import styles from './EventControl.module.css'

const defaultTimeForProps = {
  from: { title: '12:00 am', value: '00:00' },
  to: { title: '12:00 am', value: '00:00' },
}

export const EventControl = ({
  action,
  titleText,
  date = formatDate(new Date()),
  time = defaultTimeForProps,
  isAllDay = false,
  descriptionText,
  onSave,
  onEdit,
  onClose,
  id,
  selectedCalendar,
  reccurence,
  dateOfCreation = formatDate(new Date()),
}: EventFormProps) => {
  const {
    title,
    handleChange,
    inputDate,
    inputDateHandle,
    selectedTimeFrom,
    handleTimeStartSelect,
    newOptions,
    selectedTimeFinish,
    handleTimeFinishSelect,
    allDayHandle,
    selectedDuration,
    durationHandle,
    selectCalendar,
    calendarHandle,
    description,
    handleDescription,
    saveAction,
  } = useEventControl({
    selectedCalendar,
    titleText,
    date,
    time,
    isAllDay,
    descriptionText,
    onSave,
    onEdit,
    action,
    id,
    onClose,
    reccurence,
    dateOfCreation,
  })

  return (
    <Modal
      isOpen
      onClose={onClose}
      title={`${action} event`}>
      <div className={styles.newEvent}>
        <TitleField
          title={title}
          onChange={handleChange}
        />
        <div className={styles.newEventTime}>
          <div className={styles.datePickWrapper}>
            <div className={styles.newEventInputTime}>
              <DateField
                inputDate={inputDate}
                inputDateHandle={inputDateHandle}
              />
              <TimeField
                optionsFrom={optionsHours}
                selectedFrom={selectedTimeFrom}
                handleTimeFrom={handleTimeStartSelect}
                optionsTo={newOptions}
                selectedTo={selectedTimeFinish}
                handleTimeTo={handleTimeFinishSelect}
              />
            </div>
          </div>
        </div>
        <DurationControl
          isAllDay={isAllDay}
          allDayHandle={allDayHandle}
          selectedDuration={selectedDuration}
          durationHandle={durationHandle}
        />
        <GroupField
          selectCalendar={selectCalendar || null}
          calendarHandle={calendarHandle}
        />
        <DescriptionField
          value={description}
          onChange={handleDescription}
        />
        <div className={styles.save}>
          <Button
            variant="primary"
            onClick={() => {
              saveAction()
            }}>
            Save
          </Button>
        </div>
      </div>
    </Modal>
  )
}
