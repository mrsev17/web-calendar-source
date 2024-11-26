interface IconProps {
  width?: number
  height?: number
}

export const IconCrossDark = ({ width = 16, height = 16 }: IconProps) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip1_476">
          <rect
            id="Property 1=close"
            rx="7.500000"
            width="15.000000"
            height="15.000000"
            transform="translate(0.500000 0.500000)"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <path
        id="Property 1=close"
        d="M8 0L16 0L16 16L8 16C3.58 16 0 12.41 0 8C0 3.58 3.58 0 8 0Z"
        fill="#FFFFFF"
        fillOpacity="0"
        fillRule="evenodd"
      />
      <g clipPath="url(#clip1_476)">
        <path
          id="Vector"
          d="M8 8.94L11.77 12.71C11.89 12.83 12.06 12.9 12.24 12.9C12.41 12.89 12.58 12.82 12.7 12.7C12.82 12.58 12.89 12.41 12.9 12.24C12.9 12.06 12.83 11.89 12.71 11.77L8.94 8L12.71 4.22C12.83 4.1 12.9 3.93 12.9 3.75C12.89 3.58 12.82 3.41 12.7 3.29C12.58 3.17 12.41 3.1 12.24 3.09C12.06 3.09 11.89 3.16 11.77 3.28L8 7.05L4.22 3.28C4.1 3.16 3.93 3.1 3.76 3.1C3.58 3.1 3.42 3.17 3.3 3.3C3.17 3.42 3.1 3.58 3.1 3.76C3.1 3.93 3.16 4.1 3.28 4.22L7.05 8L3.28 11.77C3.22 11.83 3.17 11.9 3.13 11.98C3.1 12.06 3.08 12.15 3.08 12.24C3.08 12.33 3.09 12.42 3.13 12.5C3.16 12.58 3.21 12.65 3.27 12.72C3.34 12.78 3.41 12.83 3.49 12.86C3.57 12.9 3.66 12.91 3.75 12.91C3.84 12.91 3.93 12.89 4.01 12.86C4.09 12.82 4.16 12.77 4.22 12.71L8 8.94Z"
          fill="#323749"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}
