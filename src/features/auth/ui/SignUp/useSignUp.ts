import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../../shared/hooks/reduxHooks'
import { setUser } from '../../userSlice'
import { setInitialCalendarState } from '../../../Calendar/model/calendarSlice'
import { writeUserInitialData, addInitialEvents, fetchUserData } from '../../../Calendar/model/calendarAPI/calendarAPI'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../../firebase'

export const useSignUp = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate('/')
  }

  const newUserHandle = async (email: string, userID: string, token: string) => {
    dispatch(setUser({ email, userID, token }))
    await dispatch(writeUserInitialData({ userID, email }))
    await dispatch(addInitialEvents(userID))
    await dispatch(fetchUserData(userID))
    dispatch(setInitialCalendarState())
  }

  const handleSignUp = async (email: string, password: string) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      const token = await user.getIdToken()
      newUserHandle(user.email ?? '', user.uid, token)
      goToHomePage()
    } catch (error) {
      alert('User already exist')
      console.error(error)
    }
  }

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      const user = result.user
      const token = await user.getIdToken()
      newUserHandle(user.email ?? '', user.uid, token)
      goToHomePage()
    } catch (error) {
      console.error('Error during Google Sign-In:', error)
    }
  }

  return { handleSignUp, handleGoogleSignIn }
}
