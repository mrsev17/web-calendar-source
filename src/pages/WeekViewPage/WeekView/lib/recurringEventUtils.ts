import { Event, RecurringEvent } from '../../../../features/Calendar/model/types'
import { isDayInRange, isThursday, isSecondNovember, groupRecurringDates } from '../../../../shared/lib'

export const createMonthlyRecurringEvents = (
  event: Event,
  calendarID: string,
  firstDay: Date,
  lastDay: Date
): RecurringEvent[] => {
  const events: RecurringEvent[] = []
  const targetDay = isDayInRange(firstDay, lastDay, event.date)
  if (targetDay) {
    events.push({
      ...event,
      id: targetDay + event.id,
      calendarID,
      date: targetDay,
    })
  }
  return events
}

export const createDailyRecurringEvents = (event: Event, calendarID: string, lastDay: Date): RecurringEvent[] => {
  const groupedRecurringDates = groupRecurringDates(event.date, lastDay)
  return groupedRecurringDates
    .filter((date) => date !== event.date)
    .map((date) => ({
      ...event,
      id: date + event.id,
      calendarID,
      date,
    }))
}

export const createWeeklyThursdayRecurringEvents = (event: Event, calendarID: string, lastDay: Date): RecurringEvent[] => {
  const groupedRecurringDates = groupRecurringDates(event.date, lastDay)
  return groupedRecurringDates
    .filter((date) => date !== event.date && isThursday(date))
    .map((date) => ({
      ...event,
      id: date + event.id,
      calendarID,
      date,
    }))
}

export const createAnnuallySecondNovemberRecurringEvents = (
  event: Event,
  calendarID: string,
  lastDay: Date
): RecurringEvent[] => {
  const groupedRecurringDates = groupRecurringDates(event.date, lastDay)
  return groupedRecurringDates
    .filter((date) => date !== event.date && isSecondNovember(date))
    .map((date) => ({
      ...event,
      id: date + event.id,
      calendarID,
      date,
    }))
}
