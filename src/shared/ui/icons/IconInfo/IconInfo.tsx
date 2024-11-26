interface IconProps {
  width?: number
  height?: number
}

export const IconInfo = ({ width = 16, height = 16 }: IconProps) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip1_426">
          <rect
            id="Property 1=information"
            rx="0.500000"
            width="15.000000"
            height="15.000000"
            transform="translate(0.500000 0.500000)"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="Property 1=information"
        rx="0.500000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip1_426)">
        <path
          id="Vector"
          d="M8 1.33C11.68 1.33 14.66 4.31 14.66 7.99C14.66 11.68 11.68 14.66 8 14.66C4.31 14.66 1.33 11.68 1.33 7.99C1.33 4.31 4.31 1.33 8 1.33ZM7.99 6.66L7.33 6.66C7.16 6.66 7 6.73 6.87 6.84C6.75 6.96 6.67 7.12 6.66 7.29C6.65 7.46 6.71 7.63 6.82 7.76C6.93 7.89 7.08 7.97 7.25 7.99L7.33 7.99L7.33 11.32C7.33 11.67 7.59 11.96 7.93 11.99L8 12L8.33 12C8.47 12 8.61 11.95 8.72 11.87C8.83 11.79 8.92 11.67 8.96 11.54C9.01 11.4 9.01 11.26 8.96 11.13C8.92 10.99 8.84 10.88 8.73 10.79L8.66 10.75L8.66 7.33C8.66 6.99 8.4 6.7 8.06 6.67L7.99 6.66ZM8 4.66C7.82 4.66 7.65 4.73 7.52 4.86C7.4 4.98 7.33 5.15 7.33 5.33C7.33 5.51 7.4 5.67 7.52 5.8C7.65 5.92 7.82 5.99 8 5.99C8.17 5.99 8.34 5.92 8.47 5.8C8.59 5.67 8.66 5.51 8.66 5.33C8.66 5.15 8.59 4.98 8.47 4.86C8.34 4.73 8.17 4.66 8 4.66Z"
          fill="#FFFFFF"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  )
}
