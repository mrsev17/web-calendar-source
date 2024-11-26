import { useState } from 'react'
import { Input, Button } from '../../../../shared/ui'
import styles from './FormAuth.module.css'

interface FormProps {
  title: string
  onAuth: (email: string, password: string) => void
}

export const FormAuth = ({ title, onAuth }: FormProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const passwordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleAuth = () => onAuth(email, password)

  return (
    <div className={styles.formAuth}>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={emailChange}
        label="Email"
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={passwordChange}
        label="Password"
      />
      <Button
        variant="primary"
        onClick={handleAuth}>
        {title}
      </Button>
    </div>
  )
}
