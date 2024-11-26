import { useSignIn } from './useSignIn'
import { FormAuth } from '../FormAuth/FormAuth'
import { Notification } from '../../../notification'
import styles from './SignIn.module.css'

export const SignIn = () => {
  const { handleSignIn, error } = useSignIn()

  return (
    <div className={styles.login}>
      <FormAuth
        title="Sign In"
        onAuth={handleSignIn}
      />
      <Notification
        text="Invalid user"
        isVisible={error}
      />
    </div>
  )
}
