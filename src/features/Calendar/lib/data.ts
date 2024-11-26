import { v4 as uuidv4 } from 'uuid'
import { Calendar } from '../model/types'

export const initialCalendar: Calendar = {
  isVisible: true,
  colour: '#52616b',
  title: 'Calendar 1',
  id: uuidv4(),
  events: [],
}

export const initialEvent = {
  id: uuidv4(),
  title: 'Initial event',
  description: 'Initial event',
  date: '07/11/2024',
  isAllDay: false,
  time: {
    from: { title: '12:30 am', value: '00:30' },
    to: { title: '3:00 am', value: '03:00' },
  },
  reccurence: { title: 'Does not repeat', value: 'not-repeat' },
}
