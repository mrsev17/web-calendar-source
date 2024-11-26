import { ONE_DAY_IN_MINUTES, parseTime } from '../../../../shared/lib'
import { OptionType } from '../../../../shared/types'

interface Event {
  id: string
  title: string
  description: string
  date: string
  isAllDay: boolean
  dateOfCreation: string
  time: {
    from: OptionType
    to: OptionType
  }
  reccurence: OptionType
}

interface EventView extends Event {
  calendarColor: string
}

interface UseEventsDay {
  events: EventView[][]
  day: Date
}

export const useEventsDay = ({ events, day }: UseEventsDay) => {
  const containerHeight = 2040
  const pixelsPerMinute = containerHeight / ONE_DAY_IN_MINUTES

  const isOverlapping = (event1: EventView, event2: EventView): boolean => {
    const start1 = parseTime(event1.time.from.value)
    const end1 = parseTime(event1.time.to.value)
    const start2 = parseTime(event2.time.from.value)
    const end2 = parseTime(event2.time.to.value)

    return start1 < end2 && start2 < end1
  }

  const groupByOverlappingTimes = (events: EventView[][]): EventView[][] => {
    const groupedEvents: EventView[][] = []
    const allEvents = events.flat()
    allEvents.forEach((event) => {
      let added = false
      for (const group of groupedEvents) {
        if (group.some((existingEvent) => isOverlapping(existingEvent, event))) {
          group.push(event)
          added = true
          return
        }
      }
      if (!added) {
        groupedEvents.push([event])
      }
    })
    return groupedEvents
  }

  const dayEvents: EventView[] = events.flat().filter((event) => event.date === day.toLocaleDateString('en-GB'))

  const eventsGroupedByTime = groupByOverlappingTimes([dayEvents])

  return { pixelsPerMinute, eventsGroupedByTime }
}
