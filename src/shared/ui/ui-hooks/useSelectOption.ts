import { useEffect, useCallback, useRef } from 'react'
import { OptionType } from '../../types/index'

interface UseSelectOption {
  option: OptionType
  onClick: (value: OptionType['value']) => void
}

export const useSelectOption = (props: UseSelectOption) => {
  const {
    option: { value, title },
    onClick,
  } = props
  const optionRef = useRef<HTMLLIElement>(null)

  const handleClick =
    (clickedValue: OptionType['value']): React.MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue)
    }

  const handleEnterPress = useCallback(
    (event: KeyboardEvent) => {
      const option = optionRef.current
      if (!option) return
      if (document.activeElement === option && event.key === 'Enter') {
        onClick(value)
      }
    },
    [value, onClick]
  )

  useEffect(() => {
    const option = optionRef.current
    if (!option) return
    option.addEventListener('keydown', handleEnterPress)
    return () => {
      option.removeEventListener('keydown', handleEnterPress)
    }
  }, [handleEnterPress])

  return { value, title, handleClick, optionRef }
}
