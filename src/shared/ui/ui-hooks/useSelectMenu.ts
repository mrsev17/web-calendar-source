import { useState, useRef, useEffect, useCallback } from 'react'
import { OptionType } from '../../types/index'

interface UseSelect {
  onChange?: (selected: OptionType['value']) => void
  onClose?: () => void
}

export const useSelectMenu = ({ onChange, onClose }: UseSelect) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const rootRef = useRef<HTMLDivElement>(null)

  const handleOptionClick = useCallback(
    (value: OptionType['value']) => {
      setIsOpen(false)
      onChange?.(value)
    },
    [onChange]
  )

  const handlePlaceHolderClick: React.MouseEventHandler<HTMLDivElement> = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }, [])

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = useCallback((event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      setIsOpen((prevIsOpen) => !prevIsOpen)
    }
  }, [])

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const { target } = event
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        if (isOpen && onClose) {
          onClose()
        }
        setIsOpen(false)
      }
    },
    [isOpen, onClose]
  )

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [handleClickOutside])

  return { rootRef, isOpen, handleKeyDown, handlePlaceHolderClick, handleOptionClick }
}
