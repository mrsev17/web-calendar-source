import { useEffect } from 'react'

export interface UseToast {
  isOpen: boolean
  onClose?: () => void
}

export const useToast = ({ isOpen, onClose }: UseToast) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        if (onClose) {
          onClose()
        }
      }, 4000)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [isOpen, onClose])
}
