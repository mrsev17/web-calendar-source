import { useWeekView } from '../../WeekView/model'
import { useAppSelector } from '../../../../shared/hooks/reduxHooks'
import { selectCalendars } from '../../../../features/Calendar/model/calendarSlice'
import { EventView } from '../types'
import { Calendar } from '../../../../features/Calendar/model/types'
import { getMergedCalendars } from '../../../../features/Calendar/model/utils'
import { today } from '../../../../shared/lib/timeUtils'

interface UseDays {
  dayData: Date
}

export const useDays = ({ dayData }: UseDays) => {
  const { recurringEvents } = useWeekView()
  const calendars = useAppSelector(selectCalendars)

  const mergedCalendars = getMergedCalendars(calendars, recurringEvents)

  const visibleCalendars: Calendar[] = mergedCalendars?.filter((calendar) => calendar.isVisible) ?? []
  const todayString = today.toDateString()
  const isToday = dayData.toDateString() === todayString

  const getAllEvents = (visibleCalendars: Calendar[]) => {
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

  const allEvents = getAllEvents(visibleCalendars)

  const filterAllDayEvents = allEvents.filter((event) => !event.isAllDay)

  const groupByDate = (events: EventView[]) => {
    const dateMap = new Map()
    events.forEach((event) => {
      if (dateMap.has(event.date)) {
        dateMap.get(event.date).push(event)
      } else {
        dateMap.set(event.date, [event])
      }
    })
    return Array.from(dateMap.values())
  }

  const eventsGroupedByDay = groupByDate(filterAllDayEvents)

  return { eventsGroupedByDay, isToday }
}
