interface IconProps {
  width?: number
  height?: number
}

interface IconArrowLeftProps extends IconProps {
  color?: string
}

export const IconArrowLeft = ({ color = '#ffffff', width = 16, height = 16 }: IconArrowLeftProps) => {
  return (
    <svg
      data-testid="icon-arrow-left"
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip1_447">
          <rect
            id="Property 1=chevron-left"
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
        id="Property 1=chevron-left"
        rx="0.500000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip1_447)">
        <path
          id="Vector"
          d="M10 2.66L4.66 8L10 13.33"
          stroke={color}
          data-testid="icon-arrow-left-path"
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}
