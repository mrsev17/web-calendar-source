import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../../features/auth/useAuth'
import { SignIn } from '../../features/auth/ui/SignIn/SignIn'
import { IconLogo } from '../../shared/ui'
import styles from './LoginPage.module.css'

export const LoginPage = () => {
  const { isAuthorized } = useAuth()

  return isAuthorized ? (
    <Navigate
      to="/"
      replace
    />
  ) : (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.loginLogo}>
          <IconLogo
            width={52}
            height={52}
          />
          <h2 className={styles.logoTitle}>WebCalendar</h2>
        </div>
        <h1 className={styles.loginTitle}>Login</h1>
        <SignIn />
        <p>
          Or <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}
