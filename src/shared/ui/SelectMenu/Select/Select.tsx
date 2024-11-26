import { useSelectMenu } from '../../ui-hooks/useSelectMenu'
import { Option } from '../Option/Option'
import { OptionType } from '../../../types'
import styles from './Select.module.css'

interface SelectProps {
  label?: string
  selected: OptionType | null
  options: OptionType[]
  placeholder?: string
  onChange?: (selected: OptionType['value']) => void
  onClose?: () => void
  style?: React.CSSProperties
  isHaveColor?: boolean
}

export const Select = (props: SelectProps) => {
  const { options, placeholder, selected, onChange, onClose, label } = props
  const { rootRef, isOpen, handleKeyDown, handlePlaceHolderClick, handleOptionClick } = useSelectMenu({ onChange, onClose })

  return (
    <div
      className={styles.selectWrapper}
      style={props.style}
      role="button"
      ref={rootRef}
      data-is-active={isOpen}
      onKeyDown={handleKeyDown}>
      <span className={styles.selectLabel}>{label}</span>
      <div
        className={styles.placeholder}
        onClick={handlePlaceHolderClick}
        tabIndex={0}>
        {props.isHaveColor && (
          <div
            style={{
              width: '16px',
              height: '16px',
              backgroundColor: `${props.selected?.value}`,
              borderRadius: '4px',
            }}></div>
        )}
        {props.selected?.title || placeholder}
      </div>
      {isOpen && (
        <ul className={styles.select}>
          {options.map((option, index) => (
            <Option
              index={index}
              key={option.value}
              option={option}
              onClick={handleOptionClick}
              selected={selected}
              isHaveColor={props.isHaveColor}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
