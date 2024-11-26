import { useState, useEffect } from 'react'

export const useCurrentTime = (containerHeight: number) => {
  const [currentPosition, setCurrentPosition] = useState(0)
  const minutesInDay = 24 * 60
  const pixelsPerMinute = containerHeight / minutesInDay

  useEffect(() => {
    const updateTimePosition = () => {
      const now = new Date()
      const currentMinutes = now.getHours() * 60 + now.getMinutes()
      const position = currentMinutes * pixelsPerMinute
      setCurrentPosition(position)
    }
    updateTimePosition()
    const intervalId = setInterval(updateTimePosition, 60000)
    return () => clearInterval(intervalId)
  }, [pixelsPerMinute])

  return { currentPosition }
}
