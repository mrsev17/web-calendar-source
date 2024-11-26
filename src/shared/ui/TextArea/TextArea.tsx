import styles from './TextArea.module.css'
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  value: string
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  id?: string
}

export const TextArea = ({ label, value, onChange, id, ...props }: TextAreaProps) => {
  return (
    <div
      className={styles.textAreaContainer}
      data-testid="text-area-wrapper">
      {label && (
        <label
          htmlFor={id}
          className={styles.textAreaLabel}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        name="textarea"
        className={styles.textArea}
        data-testid="text-area"
        value={value}
        onChange={onChange}
        {...props}></textarea>
    </div>
  )
}
