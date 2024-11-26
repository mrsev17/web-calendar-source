import classNames from 'classnames'
import { Link } from 'react-router-dom'
import styles from './AppLink.module.css'

export interface LinkProps {
  children: React.ReactNode
  to: string
  isDisabled?: boolean
  isHover?: boolean
  isActive?: boolean
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

export const AppLink = ({ to, children, isDisabled, onClick }: LinkProps) => {
  const linkStyles = classNames(styles.link, { [styles.linkDisable]: isDisabled })

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDisabled) {
      event.preventDefault()
      return
    }
    if (onClick) {
      onClick(event)
    }
  }

  return (
    <Link
      to={to}
      onClick={handleClick}
      role="link"
      aria-label={to}
      aria-disabled={isDisabled}
      className={linkStyles}>
      {children}
    </Link>
  )
}
