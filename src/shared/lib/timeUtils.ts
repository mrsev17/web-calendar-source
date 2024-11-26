import { OptionType } from '../types'

export const today = new Date()

export const ONE_DAY_IN_MINUTES = 24 * 60

export const ONE_DAY_IN_MILLISECONDS = 1 * ONE_DAY_IN_MINUTES * 60 * 1000

export const SEVEN_DAYS_IN_MILLISECONDS = 7 * ONE_DAY_IN_MILLISECONDS

export const parseTime = (timeStr: string): number => {
  const [hours, minutes] = timeStr.split(':').map(Number)
  return hours * 60 + minutes
}

export const convertTimeValues = (timeStart: string, timeFinish: string | OptionType) => {
  const start = optionsHours.filter((time) => time.value === timeStart)[0]
  const finish = optionsHours.filter((time) => time.value === timeFinish)[0]
  return {
    from: start,
    to: finish,
  }
}

export const getLaterTime = (time1: string, time2: string): string => {
  const [hour1, minute1] = time1.split(':').map(Number)
  const [hour2, minute2] = time2.split(':').map(Number)
  if (hour1 > hour2 || (hour1 === hour2 && minute1 > minute2)) {
    return time1
  } else if (hour2 > hour1 || (hour1 === hour2 && minute2 > minute1)) {
    return time2
  }
  return time1
}

export const hours = [
  '1 am',
  '2 am',
  '3 am',
  '4 am',
  '5 am',
  '6 am',
  '7 am',
  '8 am',
  '9 am',
  '10 am',
  '11 am',
  '12 pm',
  '1 pm',
  '2 pm',
  '3 pm',
  '4 pm',
  '5 pm',
  '6 pm',
  '7 pm',
  '8 pm',
  '9 pm',
  '10 pm',
  '11 pm',
  '12 am',
]

export const optionsHours = [
  { title: '12:00 am', value: '00:00' },
  { title: '12:15 am', value: '00:15' },
  { title: '12:30 am', value: '00:30' },
  { title: '12:45 am', value: '00:45' },
  { title: '1:00 am', value: '01:00' },
  { title: '1:15 am', value: '01:15' },
  { title: '1:30 am', value: '01:30' },
  { title: '1:45 am', value: '01:45' },
  { title: '2:00 am', value: '02:00' },
  { title: '2:15 am', value: '02:15' },
  { title: '2:30 am', value: '02:30' },
  { title: '2:45 am', value: '02:45' },
  { title: '3:00 am', value: '03:00' },
  { title: '3:15 am', value: '03:15' },
  { title: '3:30 am', value: '03:30' },
  { title: '3:45 am', value: '03:45' },
  { title: '4:00 am', value: '04:00' },
  { title: '4:15 am', value: '04:15' },
  { title: '4:30 am', value: '04:30' },
  { title: '4:45 am', value: '04:45' },
  { title: '5:00 am', value: '05:00' },
  { title: '5:15 am', value: '05:15' },
  { title: '5:30 am', value: '05:30' },
  { title: '5:45 am', value: '05:45' },
  { title: '6:00 am', value: '06:00' },
  { title: '6:15 am', value: '06:15' },
  { title: '6:30 am', value: '06:30' },
  { title: '6:45 am', value: '06:45' },
  { title: '7:00 am', value: '07:00' },
  { title: '7:15 am', value: '07:15' },
  { title: '7:30 am', value: '07:30' },
  { title: '7:45 am', value: '07:45' },
  { title: '8:00 am', value: '08:00' },
  { title: '8:15 am', value: '08:15' },
  { title: '8:30 am', value: '08:30' },
  { title: '8:45 am', value: '08:45' },
  { title: '9:00 am', value: '09:00' },
  { title: '9:15 am', value: '09:15' },
  { title: '9:30 am', value: '09:30' },
  { title: '9:45 am', value: '09:45' },
  { title: '10:00 am', value: '10:00' },
  { title: '10:15 am', value: '10:15' },
  { title: '10:30 am', value: '10:30' },
  { title: '10:45 am', value: '10:45' },
  { title: '11:00 am', value: '11:00' },
  { title: '11:15 am', value: '11:15' },
  { title: '11:30 am', value: '11:30' },
  { title: '11:45 am', value: '11:45' },
  { title: '12:00 pm', value: '12:00' },
  { title: '12:15 pm', value: '12:15' },
  { title: '12:30 pm', value: '12:30' },
  { title: '12:45 pm', value: '12:45' },
  { title: '1:00 pm', value: '13:00' },
  { title: '1:15 pm', value: '13:15' },
  { title: '1:30 pm', value: '13:30' },
  { title: '1:45 pm', value: '13:45' },
  { title: '2:00 pm', value: '14:00' },
  { title: '2:15 pm', value: '14:15' },
  { title: '2:30 pm', value: '14:30' },
  { title: '2:45 pm', value: '14:45' },
  { title: '3:00 pm', value: '15:00' },
  { title: '3:15 pm', value: '15:15' },
  { title: '3:30 pm', value: '15:30' },
  { title: '3:45 pm', value: '15:45' },
  { title: '4:00 pm', value: '16:00' },
  { title: '4:15 pm', value: '16:15' },
  { title: '4:30 pm', value: '16:30' },
  { title: '4:45 pm', value: '16:45' },
  { title: '5:00 pm', value: '17:00' },
  { title: '5:15 pm', value: '17:15' },
  { title: '5:30 pm', value: '17:30' },
  { title: '5:45 pm', value: '17:45' },
  { title: '6:00 pm', value: '18:00' },
  { title: '6:15 pm', value: '18:15' },
  { title: '6:30 pm', value: '18:30' },
  { title: '6:45 pm', value: '18:45' },
  { title: '7:00 pm', value: '19:00' },
  { title: '7:15 pm', value: '19:15' },
  { title: '7:30 pm', value: '19:30' },
  { title: '7:45 pm', value: '19:45' },
  { title: '8:00 pm', value: '20:00' },
  { title: '8:15 pm', value: '20:15' },
  { title: '8:30 pm', value: '20:30' },
  { title: '8:45 pm', value: '20:45' },
  { title: '9:00 pm', value: '21:00' },
  { title: '9:15 pm', value: '21:15' },
  { title: '9:30 pm', value: '21:30' },
  { title: '9:45 pm', value: '21:45' },
  { title: '10:00 pm', value: '22:00' },
  { title: '10:15 pm', value: '22:15' },
  { title: '10:30 pm', value: '22:30' },
  { title: '10:45 pm', value: '22:45' },
  { title: '11:00 pm', value: '23:00' },
  { title: '11:15 pm', value: '23:15' },
  { title: '11:30 pm', value: '23:30' },
  { title: '11:45 pm', value: '23:45' },
]

export const reccurenceOptions = [
  { title: 'Does not repeat', value: 'not-repeat' },
  { title: 'Daily', value: 'daily' },
  { title: 'Weekly on Thursday', value: 'weekly-thursday' },
  { title: 'Monthly', value: 'monthly' },
  { title: 'Annually on November 2', value: 'annually-02-11' },
]
