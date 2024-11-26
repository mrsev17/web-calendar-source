import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../../features/auth/useAuth'
import { SignUp } from '../../features/auth/ui/SignUp/SignUp'
import { IconLogo } from '../../shared/ui'
import styles from './RegisterPage.module.css'

export const RegisterPage = () => {
  const { isAuthorized } = useAuth()

  return isAuthorized ? (
    <Navigate
      to="/"
      replace
    />
  ) : (
    <div className={styles.register}>
      <div className={styles.registerWrapper}>
        <div className={styles.registerLogo}>
          <IconLogo
            width={52}
            height={52}
          />
          <h2 className={styles.logoTitle}>WebCalendar</h2>
        </div>
        <h1 className={styles.registerTitle}>Register</h1>
        <SignUp />
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
