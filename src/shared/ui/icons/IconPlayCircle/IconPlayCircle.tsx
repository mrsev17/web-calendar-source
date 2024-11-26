interface IconProps {
  width?: number
  height?: number
}

export const IconPlayCircle = ({ width = 16, height = 16 }: IconProps) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip1_400">
          <rect
            id="Property 1=Default"
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
        id="Property 1=Default"
        rx="0.500000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip1_400)">
        <path
          id="Vector"
          d="M8 14.66C4.31 14.66 1.33 11.68 1.33 7.99C1.33 4.31 4.31 1.33 8 1.33C11.68 1.33 14.66 4.31 14.66 7.99C14.66 11.68 11.68 14.66 8 14.66Z"
          stroke="#FFFFFF"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
        />
        <path
          id="Vector"
          d="M10.27 8.7L7.12 10.56C6.62 10.86 6 10.47 6 9.85L6 6.14C6 5.52 6.62 5.13 7.12 5.43L10.27 7.29L10.27 7.29C10.79 7.6 10.79 8.39 10.27 8.7Z"
          stroke="#FFFFFF"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
        />
      </g>
    </svg>
  )
}
