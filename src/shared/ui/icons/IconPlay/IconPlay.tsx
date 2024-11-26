interface IconProps {
  width?: number
  height?: number
}

interface IconPlay extends IconProps {
  variant: string
}

export const IconPlay = ({ variant, width = 16, height = 16 }: IconPlay) => {
  const getColor = () => {
    if (variant === 'primary') return '#ffffff'
    if (variant === 'secondary') return '#323749'
  }

  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip1_404">
          <rect
            id="Property 1=play"
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
        id="Property 1=play"
        rx="0.500000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip1_404)">
        <path
          id="Vector"
          d="M4.6 3.02C4.54 2.98 4.47 2.96 4.4 2.96C4.33 2.96 4.26 2.98 4.2 3.02C4.14 3.05 4.08 3.1 4.05 3.16C4.01 3.22 4 3.29 4 3.36L4 12.63C4 12.7 4.01 12.77 4.05 12.83C4.08 12.89 4.14 12.94 4.2 12.97C4.26 13.01 4.33 13.03 4.4 13.03C4.47 13.03 4.54 13.01 4.6 12.97L12.41 8.34C12.47 8.3 12.52 8.25 12.56 8.19C12.59 8.13 12.61 8.06 12.61 8C12.61 7.93 12.59 7.86 12.56 7.8C12.52 7.74 12.47 7.69 12.41 7.65L4.6 3.02Z"
          fill={getColor()}
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          id="Vector"
          d="M4.4 2.96C4.33 2.96 4.26 2.98 4.2 3.02C4.14 3.05 4.08 3.1 4.05 3.16C4.01 3.22 4 3.29 4 3.36L4 12.63C4 12.7 4.01 12.77 4.05 12.83C4.08 12.89 4.14 12.94 4.2 12.97C4.26 13.01 4.33 13.03 4.4 13.03C4.47 13.03 4.54 13.01 4.6 12.97L12.41 8.34C12.47 8.3 12.52 8.25 12.56 8.19C12.59 8.13 12.61 8.06 12.61 8C12.61 7.93 12.59 7.86 12.56 7.8C12.52 7.74 12.47 7.69 12.41 7.65L4.6 3.02C4.54 2.98 4.47 2.96 4.4 2.96Z"
          stroke={getColor()}
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}
