import classNames from 'classnames'
import styles from './Button.module.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary'
  icon?: React.ReactNode
  isDisabled?: boolean
  classes?: CSSModuleClasses
  isWidthFull?: boolean
}

export const Button = ({ children, variant, icon, onClick, isDisabled, isWidthFull }: ButtonProps) => {
  const buttonClasses = classNames(
    styles.button,
    styles[variant],
    { [styles[`${variant}Disable`]]: isDisabled },
    { [styles[`widthFull`]]: isWidthFull }
  )

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}>
      {icon}
      <span className={styles.buttonContent}>{children}</span>
    </button>
  )
}
