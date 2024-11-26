import { useLocation } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks/reduxHooks'
import {
  selectCurrentWeek,
  setCurrentDay,
  setCurrentWeek,
  moveToNextDay,
  moveToPreviousDay,
  moveToNextWeek,
  moveToPreviousWeek,
} from '../../../../features/Calendar/model/calendarSlice'
import { monthNames } from '../../../../shared/lib'

type UsePeriodControl = 'day' | 'week'

export const usePeriodControl = (currentPeriod: UsePeriodControl) => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const currentWeek = useAppSelector(selectCurrentWeek)
  const isSetDayView = location.pathname === '/day'
  const date = new Date(currentWeek ?? new Date())
  const day = date.getUTCDate()
  const month = monthNames[date.getUTCMonth()]
  const year = date.getUTCFullYear()

  const viewsMap = {
    day: {
      currentPeriodHandler: () => dispatch(setCurrentDay()),
      previousPeriodHandler: () => dispatch(moveToPreviousDay()),
      nextPeriodHandler: () => dispatch(moveToNextDay()),
    },
    week: {
      currentPeriodHandler: () => dispatch(setCurrentWeek()),
      previousPeriodHandler: () => dispatch(moveToPreviousWeek()),
      nextPeriodHandler: () => dispatch(moveToNextWeek()),
    },
  }

  const { currentPeriodHandler, previousPeriodHandler, nextPeriodHandler } = viewsMap[currentPeriod]

  return { day, month, year, isSetDayView, currentPeriodHandler, previousPeriodHandler, nextPeriodHandler }
}
