import { useAppSelector } from '../../shared/hooks/reduxHooks'

export const useAuth = () => {
  const { email, token, userID } = useAppSelector((state) => state.user)
  return { isAuthorized: !!email, email, token, userID }
}
