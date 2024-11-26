import { IconDescription, Input } from '../../../../../shared/ui'
import { DescriptionFieldProps } from './type'
import styles from './DescriptionField.module.css'

export const DescriptionField = ({ value, onChange }: DescriptionFieldProps) => {
  return (
    <div className={styles.descriptionField}>
      <IconDescription />
      <Input
        placeholder="Enter description"
        type="text"
        value={value}
        label="Description"
        onChange={onChange}
      />
    </div>
  )
}
