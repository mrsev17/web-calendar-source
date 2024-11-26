interface IconProps {
  width?: number
  height?: number
}

export const IconTrashDark = ({ width = 16, height = 16 }: IconProps) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip1_461">
          <rect
            id="Property 1=delete"
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
        id="Property 1=delete"
        rx="0.500000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip1_461)">
        <path
          id="Vector"
          d="M5.21 2.24C5.3 1.97 5.47 1.74 5.7 1.58C5.92 1.42 6.2 1.33 6.48 1.33L9.51 1.33C9.79 1.33 10.07 1.42 10.29 1.58C10.52 1.74 10.69 1.97 10.78 2.24L11.14 3.33L13.33 3.33C13.51 3.33 13.67 3.4 13.8 3.52C13.92 3.65 14 3.82 14 3.99C14 4.17 13.92 4.34 13.8 4.47C13.67 4.59 13.51 4.66 13.33 4.66L12.66 4.66L12.66 12.66C12.66 13.19 12.45 13.7 12.08 14.08C11.7 14.45 11.19 14.66 10.66 14.66L5.33 14.66C4.8 14.66 4.29 14.45 3.91 14.08C3.54 13.7 3.33 13.19 3.33 12.66L3.33 4.66L2.66 4.66C2.48 4.66 2.32 4.59 2.19 4.47C2.07 4.34 2 4.17 2 3.99C2 3.82 2.07 3.65 2.19 3.52C2.32 3.4 2.48 3.33 2.66 3.33L4.85 3.33L5.21 2.24ZM6.25 3.33L6.48 2.66L9.51 2.66L9.74 3.33L6.25 3.33Z"
          fill="#323749"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}
