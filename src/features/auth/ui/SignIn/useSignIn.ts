import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../../shared/hooks/reduxHooks'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../../userSlice'
import { setInitialCalendarState } from '../../../Calendar/model/calendarSlice'
import { fetchUserData } from '../../../Calendar/model/calendarAPI/calendarAPI'

export const useSignIn = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [error, setError] = useState(false)

  const goToHomePage = () => {
    navigate('/')
  }

  const handleSignIn = async (email: string, password: string) => {
    const auth = getAuth()

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password)
      const token = await user.getIdToken()

      dispatch(setUser({ email: user.email, userID: user.uid, token }))
      await dispatch(fetchUserData(user.uid))
      dispatch(setInitialCalendarState())

      goToHomePage()
    } catch (error) {
      console.error(error)
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 4000)
    }
  }

  return { handleSignIn, error }
}
