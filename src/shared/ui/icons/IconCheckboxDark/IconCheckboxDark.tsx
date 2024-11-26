interface IconProps {
  width?: number
  height?: number
}

export const IconCheckboxDark = ({ width = 16, height = 16 }: IconProps) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip1_453">
          <rect
            id="Property 1=checkbox-fill"
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
        id="Property 1=checkbox-fill"
        rx="0.500000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip1_453)">
        <path
          id="Vector"
          d="M3.33 2C2.97 2 2.64 2.14 2.39 2.39C2.14 2.64 2 2.97 2 3.33L2 12.66C2 13.02 2.14 13.35 2.39 13.6C2.64 13.85 2.97 14 3.33 14L12.66 14C13.02 14 13.35 13.85 13.6 13.6C13.85 13.35 14 13.02 14 12.66L14 3.33C14 2.97 13.85 2.64 13.6 2.39C13.35 2.14 13.02 2 12.66 2L3.33 2ZM11.3 6.53C11.42 6.4 11.49 6.23 11.49 6.05C11.49 5.88 11.42 5.71 11.3 5.58C11.17 5.46 11 5.39 10.82 5.39C10.65 5.39 10.48 5.46 10.35 5.58L7.05 8.88L5.64 7.47C5.58 7.41 5.5 7.36 5.42 7.32C5.34 7.29 5.25 7.27 5.17 7.27C4.99 7.27 4.82 7.34 4.7 7.47C4.57 7.59 4.5 7.76 4.5 7.94C4.5 8.12 4.57 8.29 4.7 8.41L6.53 10.25C6.6 10.32 6.68 10.37 6.77 10.41C6.86 10.45 6.96 10.46 7.05 10.46C7.15 10.46 7.24 10.45 7.33 10.41C7.42 10.37 7.5 10.32 7.57 10.25L11.3 6.53Z"
          fill="#323749"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}
