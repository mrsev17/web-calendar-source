import classNames from 'classnames'
import { useSelectOption } from '../../ui-hooks/useSelectOption'
import { OptionType } from '../../../types'
import styles from './Option.module.css'

export interface OptionProps {
  option: OptionType
  selected: OptionType | null
  onClick: (value: OptionType['value']) => void
  index: number
  isHaveColor?: boolean
}

export const Option = (props: OptionProps) => {
  const { option, selected, onClick } = props
  const { value, title, handleClick, optionRef } = useSelectOption({ option, onClick })

  const optionStyle = classNames(styles.option, { [styles.optionSelected]: selected?.value === value })

  return (
    <div
      className={styles.optionWrapper}
      style={{ backgroundColor: `${selected?.value === value ? '#e3e3e3' : ''}` }}>
      {props.isHaveColor && (
        <div
          style={{
            width: '16px',
            height: '16px',
            backgroundColor: `${props.option.value}`,
            borderRadius: '4px',
            marginLeft: '16px',
          }}></div>
      )}
      <li
        className={optionStyle}
        value={value}
        onClick={handleClick(value)}
        tabIndex={0}
        ref={optionRef}>
        {title}
      </li>
    </div>
  )
}
