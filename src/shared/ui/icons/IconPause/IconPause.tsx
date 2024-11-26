interface IconProps {
  width?: number
  height?: number
}

export const IconPause = ({ width = 16, height = 16 }: IconProps) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip1_406">
          <rect
            id="Property 1=pause"
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
        id="Property 1=pause"
        rx="0.500000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip1_406)">
        <path
          id="Vector"
          d="M6 3L5 3C4.73 3 4.48 3.1 4.29 3.29C4.1 3.48 4 3.73 4 4L4 12C4 12.26 4.1 12.51 4.29 12.7C4.48 12.89 4.73 13 5 13L6 13C6.26 13 6.51 12.89 6.7 12.7C6.89 12.51 7 12.26 7 12L7 4C7 3.73 6.89 3.48 6.7 3.29C6.51 3.1 6.26 3 6 3ZM11 3L10 3C9.73 3 9.48 3.1 9.29 3.29C9.1 3.48 9 3.73 9 4L9 12C9 12.26 9.1 12.51 9.29 12.7C9.48 12.89 9.73 13 10 13L11 13C11.26 13 11.51 12.89 11.7 12.7C11.89 12.51 12 12.26 12 12L12 4C12 3.73 11.89 3.48 11.7 3.29C11.51 3.1 11.26 3 11 3Z"
          fill="#FFFFFF"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  )
}
