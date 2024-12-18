interface IconProps {
  width?: number
  height?: number
}

interface IconCheckboxProps extends IconProps {
  color?: string
}

export const IconCheckbox = ({ width = 16, height = 16, color = '#00AE1C' }: IconCheckboxProps) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <desc>Created with Pixso.</desc>
      <defs />
      <path
        id="Vector"
        d="M10.66 0L1.33 0C0.97 0 0.64 0.14 0.39 0.39C0.14 0.64 0 0.97 0 1.33L0 10.66C0 11.02 0.14 11.35 0.39 11.6C0.64 11.85 0.97 12 1.33 12L10.66 12C11.02 12 11.35 11.85 11.6 11.6C11.85 11.35 12 11.02 12 10.66L12 1.33C12 0.97 11.85 0.64 11.6 0.39C11.35 0.14 11.02 0 10.66 0ZM4.66 9.33L1.33 6L2.27 5.06L4.66 7.44L9.72 2.38L10.66 3.33L4.66 9.33Z"
        fill={color}
        fillOpacity="1.000000"
        fillRule="nonzero"
      />
    </svg>
  )
}
