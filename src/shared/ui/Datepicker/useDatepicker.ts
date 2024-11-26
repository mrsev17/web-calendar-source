import { useState } from 'react'

const getCurrentDateData = (currentDate: Date): { titleMonth: string; year: number; numberMonth: number } => {
  const monthName = currentDate.toLocaleString('default', { month: 'long' })
  const year = currentDate.getFullYear()
  const numberMonth = currentDate.getMonth() + 1
  return { titleMonth: monthName, year, numberMonth }
}

interface CalendarDay {
  day: number
  isCurrentMonth: boolean
  isSelected: boolean
  date: string
  index?: number
}

interface UseDatepickerArgs {
  selectedDate: string
}

export const useDatepicker = ({ selectedDate }: UseDatepickerArgs) => {
  const [, setSelectedDate] = useState(selectedDate)
  const [currentDate, setCurrentDate] = useState(new Date())

  const selectDate = (date: string) => {
    setSelectedDate(date)
  }

  const goToNextMonth = () => {
    const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    setCurrentDate(nextMonth)
  }

  const goToPrevMonth = () => {
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    setCurrentDate(prevMonth)
  }

  const currentMonthAndYear = getCurrentDateData(currentDate)

  const getCalendarDays = (selectedMonth: number, selectedYear: number): CalendarDay[] => {
    const totalDays = 42
    const firstDayOfMonth = new Date(selectedYear, selectedMonth - 1, 1)
    const firstDayIndex = firstDayOfMonth.getDay()

    const prevMonth = selectedMonth === 1 ? 12 : selectedMonth - 1
    const prevMonthYear = selectedMonth === 1 ? selectedYear - 1 : selectedYear
    const daysInPrevMonth = new Date(prevMonthYear, prevMonth, 0).getDate()

    const daysInCurrentMonth = new Date(selectedYear, selectedMonth, 0).getDate()
    const calendarDays: CalendarDay[] = new Array(totalDays).fill({
      day: 0,
      isCurrentMonth: false,
      isToday: false,
      date: '',
    })

    const formatDate = (day: number, month: number, year: number): string => {
      return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`
    }

    for (let prevMonthDay = firstDayIndex - 1; prevMonthDay >= 0; prevMonthDay--) {
      const day = daysInPrevMonth - (firstDayIndex - prevMonthDay - 1)
      calendarDays[prevMonthDay] = {
        day,
        isCurrentMonth: false,
        isSelected: false,
        date: formatDate(day, prevMonth, prevMonthYear),
      }
    }

    for (let currentMonthDay = 1; currentMonthDay <= daysInCurrentMonth; currentMonthDay++) {
      const date = formatDate(currentMonthDay, selectedMonth, selectedYear)
      calendarDays[firstDayIndex + currentMonthDay - 1] = {
        day: currentMonthDay,
        isCurrentMonth: true,
        isSelected: date === selectedDate,
        date,
      }
    }

    const nextMonthStartIndex = firstDayIndex + daysInCurrentMonth
    const nextMonth = selectedMonth === 12 ? 1 : selectedMonth + 1
    const nextMonthYear = selectedMonth === 12 ? selectedYear + 1 : selectedYear

    for (let nextMonthDay = 1; nextMonthStartIndex + nextMonthDay - 1 < totalDays; nextMonthDay++) {
      calendarDays[nextMonthStartIndex + nextMonthDay - 1] = {
        day: nextMonthDay,
        isCurrentMonth: false,
        isSelected: false,
        date: formatDate(nextMonthDay, nextMonth, nextMonthYear),
      }
    }

    return calendarDays
  }

  const titleYear = currentMonthAndYear.year
  const numberMonth = +currentMonthAndYear.numberMonth
  const titleMonth = currentMonthAndYear.titleMonth

  const daysInCurrentMonth = getCalendarDays(+numberMonth, titleYear)

  return { titleMonth, titleYear, goToPrevMonth, goToNextMonth, daysInCurrentMonth, selectDate, selectedDate }
}
