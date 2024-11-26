import { useState, useEffect, useMemo } from 'react'
import { useAppSelector } from '../../../../shared/hooks/reduxHooks'
import { selectCalendars, selectCurrentWeek } from '../../../../features/Calendar/model/calendarSlice'
import {
  createMonthlyRecurringEvents,
  createDailyRecurringEvents,
  createWeeklyThursdayRecurringEvents,
  createAnnuallySecondNovemberRecurringEvents,
} from '../lib/recurringEventUtils'
import { getWeekDays } from '../../../../shared/lib'
import { Event } from '../../../../features/Calendar/model/types'

export interface RecurringEvent extends Event {
  calendarID?: string
}

export const useWeekView = () => {
  const [recurringEvents, setRecurringEvents] = useState<RecurringEvent[]>([])

  const calendars = useAppSelector(selectCalendars)
  const currentWeek = useAppSelector(selectCurrentWeek)

  const currentDate = useMemo(() => new Date(new Date(currentWeek || Date.now())), [currentWeek])
  const weekDays = useMemo(() => getWeekDays(currentDate), [currentDate])
  const firstDay = weekDays[0]
  const lastDay = weekDays[weekDays.length - 1]

  useEffect(() => {
    if (!calendars) return

    const recurrenceHandlers: Record<string, (event: Event, calendarID: string) => RecurringEvent[]> = {
      monthly: (event, calendarID) => createMonthlyRecurringEvents(event, calendarID, firstDay, lastDay),
      daily: (event, calendarID) => createDailyRecurringEvents(event, calendarID, lastDay),
      'weekly-thursday': (event, calendarID) => createWeeklyThursdayRecurringEvents(event, calendarID, lastDay),
      'annually-02-11': (event, calendarID) => createAnnuallySecondNovemberRecurringEvents(event, calendarID, lastDay),
    }

    const allNewRecurringEvents: RecurringEvent[] = []

    calendars.forEach((calendar) => {
      calendar.events.forEach((event) => {
        const recurring = event.reccurence
        if (typeof recurring !== 'string') {
          const handler = recurrenceHandlers[recurring.value]
          if (handler) {
            allNewRecurringEvents.push(...handler(event, calendar.id))
          }
        }
      })
    })

    setRecurringEvents(allNewRecurringEvents)
  }, [calendars, firstDay, lastDay])

  return { weekDays, recurringEvents }
}
