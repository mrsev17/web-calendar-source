import { IconTitle, Input } from '../../../../../shared/ui'
import { TitleFieldProps } from './types'
import styles from './TitleField.module.css'

export const TitleField = ({ title, onChange }: TitleFieldProps) => {
  return (
    <div className={styles.newEventTitle}>
      <IconTitle />
      <Input
        placeholder="Enter title"
        type="text"
        value={title}
        label="Title"
        onChange={onChange}
      />
    </div>
  )
}
