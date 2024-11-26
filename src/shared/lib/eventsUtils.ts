import { Event, Calendar } from '../../features/Calendar/model/types'
export interface EventView extends Event {
  calendarColor: string
}

export const getAllEvents = (visibleCalendars: Calendar[]) => {
  let result: EventView[] = []
  for (let i = 0; i < visibleCalendars.length; i += 1) {
    const updatedEvents: EventView[] = visibleCalendars[i].events.map((event) => ({
      ...event,
      calendarColor: visibleCalendars[i].colour,
    }))
    result = result.concat(updatedEvents)
  }

  return result
}
