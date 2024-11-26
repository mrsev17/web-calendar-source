interface IconProps {
  width?: number
  height?: number
}

export const IconArrowDown = ({ width = 16, height = 16 }: IconProps) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip1_449">
          <rect
            id="Property 1=chevron-down"
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
        id="Property 1=chevron-down"
        rx="0.500000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip1_449)">
        <path
          id="Vector"
          d="M2.66 6L8 11.33L13.33 6"
          stroke="#323749"
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}
