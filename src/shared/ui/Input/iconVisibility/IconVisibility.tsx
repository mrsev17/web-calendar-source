import { IconCloseEye, IconOpenEye } from '../../icons'

interface IconVisibilityProps {
  isVisible: boolean
  isDisabled?: boolean
}

export const IconVisibility = ({ isVisible, isDisabled }: IconVisibilityProps) => {
  return <>{!isVisible ? <IconCloseEye color={isDisabled ? '#737373' : '#323749'} /> : <IconOpenEye />}</>
}
