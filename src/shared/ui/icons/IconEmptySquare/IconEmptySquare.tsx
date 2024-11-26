interface IconProps {
  width?: number
  height?: number
}

export const IconEmptySquare = ({ width = 16, height = 16 }: IconProps) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip1_457">
          <rect
            id="Property 1=checkbox-line"
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
        id="Property 1=checkbox-line"
        rx="0.500000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip1_457)">
        <path
          id="Vector"
          d="M3.33 2C2.97 2 2.64 2.14 2.39 2.39C2.14 2.64 2 2.97 2 3.33L2 12.66C2 13.02 2.14 13.35 2.39 13.6C2.64 13.85 2.97 14 3.33 14L12.66 14C13.02 14 13.35 13.85 13.6 13.6C13.85 13.35 14 13.02 14 12.66L14 3.33C14 2.97 13.85 2.64 13.6 2.39C13.35 2.14 13.02 2 12.66 2L3.33 2ZM3.33 3.33L12.66 3.33L12.66 12.66L3.33 12.66L3.33 3.33Z"
          fill="#323749"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}
