import { useSelectOption } from '../../ui-hooks/useSelectOption'
import classNames from 'classnames'
import styles from './DropdownOption.module.css'

interface OptionType {
  title: string
  value: string
}

interface OptionProps {
  option: OptionType
  selected: OptionType | null
  onClick: (value: OptionType['value']) => void
  index: number
}

export const DropdownOption = (props: OptionProps) => {
  const { option, selected, onClick } = props
  const { value, title, handleClick, optionRef } = useSelectOption({ option, onClick })

  const selectStyle = classNames({ [styles.selectedItem]: selected?.value === value }, styles.option)

  return (
    <li
      data-testid={`dropdown-option-${props.index + 1}`}
      className={selectStyle}
      value={value}
      onClick={handleClick(value)}
      tabIndex={0}
      ref={optionRef}>
      {title}
    </li>
  )
}
