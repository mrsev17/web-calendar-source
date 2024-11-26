import { useState } from 'react'
import { IconCheckbox } from '../icons'
import styles from './Checkbox.module.css'

interface CheckboxProps {
  label?: string
  isCheck?: boolean
  onChange?: (checked: boolean) => void
  color?: string
}

export const Checkbox = ({ label, isCheck = false, onChange, color = '#00AE1C' }: CheckboxProps) => {
  const [check, setCheck] = useState(isCheck)

  const handleChange = () => {
    const newCheck = !check
    setCheck(newCheck)
    if (onChange) {
      onChange(newCheck)
    }
  }

  return (
    <label
      htmlFor={label}
      className={styles.checkbox}>
      <div className={styles.checkboxWrapper}>
        <input
          id={label}
          type="checkbox"
          name={label}
          checked={check}
          onChange={handleChange}
          className={styles.input}
          role="checkbox"
        />
        {!check && <div className={styles.checkboxSquare}></div>}
        {check && (
          <div className={styles.wrapperIcon}>
            <IconCheckbox
              width={12}
              height={12}
              color={color}
            />
          </div>
        )}
      </div>
      <span className={styles.label}>{label}</span>
    </label>
  )
}
