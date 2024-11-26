import { useEventsDay } from './useEventsDay'
import { EventItem } from '../EventItem/EventItem'
import { parseTime } from '../../../../shared/lib/timeUtils'
import { EventsDayProps } from './types'

export const EventsDay = ({ events, day }: EventsDayProps) => {
  const { eventsGroupedByTime, pixelsPerMinute } = useEventsDay({ events, day })

  return (
    <div>
      {eventsGroupedByTime.map((group) => (
        <div key={group[0].id}>
          {group.length < 2 &&
            group.map((event, index) => {
              const fromMinutes = parseTime(event.time.from.value)
              const toMinutes = parseTime(event.time.to.value)
              const eventHeight = (toMinutes - fromMinutes) * pixelsPerMinute
              const eventTop = fromMinutes * pixelsPerMinute
              const width = 100 * 1
              return (
                <EventItem
                  key={event.id}
                  eventID={event.id}
                  eventTop={eventTop}
                  eventHeight={eventHeight}
                  calendarColor={event.calendarColor}
                  eventTitle={event.title}
                  timeFrom={event.time.from.title}
                  timeTo={event.time.to.title}
                  isAllDay={event.isAllDay}
                  index={index}
                  width={width}
                  reccurence={event.reccurence}
                  dateOfCreation={event.dateOfCreation}
                />
              )
            })}
          {group.length > 1 &&
            group.map((event, index) => {
              const fromMinutes = parseTime(event.time.from.value)
              const toMinutes = parseTime(event.time.to.value)
              const eventHeight = (toMinutes - fromMinutes) * pixelsPerMinute
              const eventTop = fromMinutes * pixelsPerMinute
              const width = 100 / group.length
              const left = (100 / group.length) * index
              return (
                <EventItem
                  key={event.id}
                  eventID={event.id}
                  eventTop={eventTop}
                  eventHeight={eventHeight}
                  calendarColor={event.calendarColor}
                  eventTitle={event.title}
                  timeFrom={event.time.from.title}
                  timeTo={event.time.to.title}
                  index={index}
                  width={width}
                  left={left}
                  isAllDay={event.isAllDay}
                  reccurence={event.reccurence}
                  dateOfCreation={event.dateOfCreation}
                />
              )
            })}
        </div>
      ))}
    </div>
  )
}
