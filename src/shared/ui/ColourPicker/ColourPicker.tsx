import { colors } from './colors'
import styles from './ColourPicker.module.css'

interface ColourPickerProps {
  pickColor?: string
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const ColourPicker = ({ pickColor, onClick }: ColourPickerProps) => {
  return (
    <div
      className={styles.pickerWrapper}
      data-testid="colour-picker">
      {colors.map((color) => (
        <div
          key={color}
          className={styles.pickerContainer}>
          <div
            className={`${styles.colorWrapper}`}
            data-testid={`selected-color-indicator-${color}`}
            style={{ visibility: `${pickColor === color ? 'visible' : 'hidden'}` }}></div>
          <div
            onClick={onClick}
            data-testid={color}
            color={color}
            className={styles.pickerItem}
            style={{
              backgroundColor: color,
            }}></div>
        </div>
      ))}
    </div>
  )
}
