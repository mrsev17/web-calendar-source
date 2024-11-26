export const formatDateFromDetailed = (dateStr: string): string => {
  const dateObj = new Date(dateStr)
  const day = dateObj.getDate().toString().padStart(2, '0')
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0')
  const year = dateObj.getFullYear()
  return `${day}/${month}/${year}`
}

export const formatDateDetailed = (dateString: string): string => {
  const [day, month, year] = dateString.split('/').map(Number)
  const date = new Date(year, month - 1, day)
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }
  const formattedDate = date.toLocaleDateString('en-US', options)
  return formattedDate
}

export const formatDate = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}

export const formatDateWithoutTimeZone = (dateStr: string) => {
  const [day, month, year] = dateStr.split('/').map(Number)
  const date = new Date(year, month - 1, day)
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString()
}

export const parseDate = (dateString: string) => {
  const [day, month, year] = dateString.split('/').map(Number)
  return new Date(year, month - 1, day)
}

export const isDayInRange = (from: Date, to: Date, targetDate: string) => {
  const [day, month, year] = targetDate.split('/').map(Number)
  const target = new Date(year, month - 1, day)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  for (let date = new Date(from); date <= to; date.setDate(date.getDate() + 1)) {
    date.setHours(0, 0, 0, 0)
    if (date.getDate() === target.getDate() && formatDate(date) !== formatDate(target)) {
      return formatDate(date)
    }
  }
  return
}

export const getWeekDays = (date: Date): Date[] => {
  const startOfWeek = new Date(date)
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay())
  const days: Date[] = []
  for (let i = 0; i < 7; i += 1) {
    const weekDate = new Date(startOfWeek)
    weekDate.setDate(startOfWeek.getDate() + i)
    days.push(weekDate)
  }
  return days
}

export const groupRecurringDates = (eventDate: string, lastDay: Date) => {
  let dates: string[] = []
  const currentDate = parseDate(eventDate)
  while (currentDate <= lastDay) {
    dates.push(formatDate(new Date(currentDate)))
    currentDate.setDate(currentDate.getDate() + 1)
  }
  if (dates.length > 7) {
    dates = dates.slice(-7)
  }
  return dates
}

export const isSecondNovember = (dateString: string) => {
  const [day, month] = dateString.split('/').map(Number)
  const isSecondDayOfMonth = day === 2
  const isNovember = month === 11
  return isSecondDayOfMonth && isNovember
}

export const isThursday = (dateString: string) => {
  const [day, month, year] = dateString.split('/').map(Number)
  const date = new Date(year, month - 1, day)
  return date.getDay() === 4
}

export const dropdownOptions = [
  { title: 'Week', value: '/' },
  { title: 'Day', value: '/day' },
]

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
