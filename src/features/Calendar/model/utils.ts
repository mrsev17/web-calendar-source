import { Calendar, Event, EventsInDatabase, RecurringEvent } from './types'

export const getTransformedData = (calendars: Calendar[]): Calendar[] => {
  const result = []

  for (const key in calendars) {
    const targetCalendar = calendars[key]
    const events = targetCalendar.events
    const transformedArrayWithEvents = []

    for (const eventKey in events) {
      const transformEvent = { ...events[eventKey], id: eventKey }
      transformedArrayWithEvents.push(transformEvent)
    }

    const updatedCalendar = {
      ...targetCalendar,
      id: key,
      events: targetCalendar.events ? transformedArrayWithEvents : [],
    }
    result.push(updatedCalendar)
  }

  return result
}

export const eventsToObject = (arr: Event[]): EventsInDatabase => {
  return arr.reduce((acc, item) => {
    acc[item.id] = item
    return acc
  }, {} as Record<string, Event>)
}

export const getMergedCalendars = (calendars: Calendar[] | null, recurringEvents: RecurringEvent[]) => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const upcomingEvents = recurringEvents.filter((event) => {
    const [day, month, year] = event.date.split('/').map(Number)
    const eventDate = new Date(year, month - 1, day)
    return eventDate
  })

  if (!calendars) return []
  const result = []

  if (calendars) {
    for (let i = 0; i < calendars.length; i += 1) {
      const mergedEvents = [...calendars[i].events]

      for (let j = 0; j < upcomingEvents.length; j += 1) {
        if (calendars[i].id === upcomingEvents[j].calendarID) {
          const reccuringEvent: Event = {
            id: upcomingEvents[j].id,
            title: upcomingEvents[j].title,
            description: upcomingEvents[j].description,
            date: upcomingEvents[j].date,
            isAllDay: upcomingEvents[j].isAllDay,
            time: upcomingEvents[j].time,
            reccurence: upcomingEvents[j].reccurence,
            dateOfCreation: upcomingEvents[j].dateOfCreation,
          }
          mergedEvents.push(reccuringEvent)
        }
      }

      result.push({ ...calendars[i], events: mergedEvents })
    }
  }

  return result
}
