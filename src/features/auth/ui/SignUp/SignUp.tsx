import { useSignUp } from './useSignUp'
import { FormAuth } from '../FormAuth/FormAuth'
import { Button, IconGoogle } from '../../../../shared/ui'
import styles from './SignUp.module.css'

export const SignUp = () => {
  const { handleSignUp, handleGoogleSignIn } = useSignUp()

  return (
    <div className={styles.signUp}>
      <FormAuth
        title="Sign Up"
        onAuth={handleSignUp}
      />
      <Button
        icon={<IconGoogle />}
        variant="secondary"
        onClick={handleGoogleSignIn}>
        Continue with Google
      </Button>
    </div>
  )
}
