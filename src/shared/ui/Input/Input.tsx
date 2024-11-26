import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { IconVisibility } from './iconVisibility/IconVisibility'
import classNames from 'classnames'
import styles from './Input.module.css'

export interface InputProps {
  type: 'text' | 'password' | 'email' | 'number'
  placeholder: string
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  error?: string
  isDisabled?: boolean
  readonly?: boolean
}

export const Input = ({ type, placeholder, value, label, error, isDisabled, onChange, readonly = false }: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(type !== 'password')

  const inputType = type === 'password' && !isPasswordVisible ? 'password' : 'text'

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(() => !isPasswordVisible)
  }

  const inputStyles = classNames(styles.inputField, { [styles.disabled]: isDisabled, [styles.errorInput]: error })
  const labelStyles = classNames(styles.inputLabel, { [styles.disabled]: isDisabled })

  const uniqueID = `${uuidv4()}-input-${label}`

  return (
    <div
      className={styles.inputWrapper}
      data-testid="input">
      <label
        className={labelStyles}
        htmlFor={uniqueID}>
        {label}
      </label>
      <div className={styles.inputFieldWrapper}>
        <input
          id={uniqueID}
          data-testid="input-field"
          name="input"
          className={inputStyles}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={isDisabled}
          readOnly={readonly}
        />
        {type === 'password' && (
          <button
            className={styles.inputButton}
            type="button"
            disabled={isDisabled}
            aria-disabled={isDisabled}
            onClick={togglePasswordVisibility}>
            <IconVisibility
              isVisible={isPasswordVisible}
              isDisabled={isDisabled}
            />
          </button>
        )}
      </div>
      {error && (
        <span
          data-testid="input-error"
          className={styles.error}>
          Error message
        </span>
      )}
    </div>
  )
}
