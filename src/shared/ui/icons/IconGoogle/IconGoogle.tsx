interface IconProps {
  width?: number
  height?: number
}

export const IconGoogle = ({ width = 16, height = 16 }: IconProps) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip1_438">
          <rect
            id="Property 1=Google"
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
        id="Property 1=Google"
        rx="0.500000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip1_438)">
        <path
          id="Vector"
          d="M14.53 6.69L14 6.69L14 6.66L8 6.66L8 9.33L11.76 9.33C11.21 10.88 9.74 12 8 12C5.79 12 4 10.2 4 7.99C4 5.79 5.79 3.99 8 3.99C9.01 3.99 9.94 4.38 10.65 5.01L12.53 3.12C11.34 2.01 9.75 1.33 8 1.33C4.31 1.33 1.33 4.31 1.33 7.99C1.33 11.68 4.31 14.66 8 14.66C11.68 14.66 14.66 11.68 14.66 7.99C14.66 7.55 14.62 7.11 14.53 6.69Z"
          fill="#FFC107"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          id="Vector"
          d="M2.1 4.89L4.29 6.5C4.88 5.03 6.32 3.99 8 3.99C9.01 3.99 9.94 4.38 10.65 5.01L12.53 3.12C11.34 2.01 9.75 1.33 8 1.33C5.43 1.33 3.21 2.77 2.1 4.89Z"
          fill="#FF3D00"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          id="Vector"
          d="M8 14.66C9.72 14.66 11.28 14 12.46 12.93L10.4 11.19C9.71 11.71 8.86 12 8 12C6.26 12 4.79 10.89 4.23 9.35L2.06 11.02C3.16 13.18 5.4 14.66 8 14.66Z"
          fill="#4CAF50"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          id="Vector"
          d="M14.53 6.69L14 6.69L14 6.66L8 6.66L8 9.33L11.76 9.33C11.5 10.07 11.03 10.71 10.4 11.19L10.4 11.18L12.46 12.93C12.32 13.06 14.66 11.33 14.66 8C14.66 7.55 14.62 7.11 14.53 6.69Z"
          fill="#1976D2"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  )
}
