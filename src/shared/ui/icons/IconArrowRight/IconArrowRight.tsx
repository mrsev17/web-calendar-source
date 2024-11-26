interface IconProps {
  width?: number
  height?: number
}

interface IconArrowRightProps extends IconProps {
  color?: string
}

export const IconArrowRight = ({ color = '#ffffff', width = 16, height = 16 }: IconArrowRightProps) => {
  return (
    <svg
      data-testid="icon-arrow-right"
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip1_445">
          <rect
            id="Property 1=chevron-right"
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
        id="Property 1=chevron-right"
        rx="0.500000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip1_445)">
        <path
          id="Vector"
          d="M5.33 2.66L10.66 8L5.33 13.33"
          stroke={color}
          data-testid="icon-arrow-right-path"
          strokeOpacity="1.000000"
          strokeWidth="2.000000"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}
