import { useSelectMenu } from '../../ui-hooks/useSelectMenu'
import classNames from 'classnames'
import { DropdownOption } from '../DropdownOption/DropdownOption'
import { IconTriangleDark } from '../../icons'
import styles from './Dropdown.module.css'

interface OptionType {
  title: string
  value: string
}

interface SelectProps {
  label?: string
  selected: OptionType | null
  options: OptionType[]
  placeholder?: string
  onChange?: (selected: OptionType['value']) => void
  onClose?: () => void
}

export const Dropdown = (props: SelectProps) => {
  const { options, placeholder, selected, onChange, onClose } = props
  const { rootRef, isOpen, handleKeyDown, handlePlaceHolderClick, handleOptionClick } = useSelectMenu({ onChange, onClose })
  const placeholderStyle = classNames(styles.placeholderWrapper, { [styles.openDropdown]: isOpen })

  return (
    <div
      data-testid="dropdown"
      className={styles.dropdownWrapper}
      ref={rootRef}
      data-is-active={isOpen}
      onKeyDown={handleKeyDown}>
      <div
        data-testid="dropdown-placeholder-wrapper"
        onClick={handlePlaceHolderClick}
        role="button"
        tabIndex={0}
        className={placeholderStyle}>
        <div
          data-testid="dropdown-placeholder"
          className={styles.placeholder}>
          {selected?.title || placeholder}
        </div>
        <IconTriangleDark />
      </div>
      {isOpen && (
        <ul
          className={styles.dropdownList}
          data-testid="dropdown-list">
          {options.map((option, index) => (
            <DropdownOption
              key={option.value}
              option={option}
              onClick={handleOptionClick}
              selected={selected}
              index={index}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
