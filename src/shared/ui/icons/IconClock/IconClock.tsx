interface IconProps {
  width?: number
  height?: number
}

export const IconClock = ({ width = 16, height = 16 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13.3335 13.3333"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs />
      <path
        id="Vector"
        d="M1.12 8.96C1.42 9.69 1.86 10.35 2.42 10.9C2.98 11.46 3.64 11.9 4.37 12.2C5.09 12.51 5.87 12.66 6.66 12.66C7.45 12.66 8.23 12.51 8.96 12.2C9.69 11.9 10.35 11.46 10.9 10.9C11.46 10.35 11.9 9.69 12.21 8.96C12.51 8.23 12.66 7.45 12.66 6.66C12.66 5.07 12.03 3.54 10.9 2.42C9.78 1.29 8.25 0.66 6.66 0.66C5.07 0.66 3.54 1.29 2.42 2.42C1.29 3.54 0.66 5.07 0.66 6.66C0.66 7.45 0.82 8.23 1.12 8.96Z"
        stroke="#5B5F6E"
        strokeOpacity="1.000000"
        strokeWidth="1.333333"
        strokeLinejoin="round"
      />
      <path
        id="Vector"
        d="M6.66 3.33L6.66 6.66L8.66 8.66"
        stroke="#5B5F6E"
        strokeOpacity="1.000000"
        strokeWidth="1.333333"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}
