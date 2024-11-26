interface IconProps {
  width?: number
  height?: number
}

interface IconPlusProps extends IconProps {
  color?: string
}

export const IconPlus = ({ width = 16, height = 16, color = '#FFFFFF' }: IconPlusProps) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip1_412">
          <rect
            id="Property 1=plus"
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
        id="Property 1=plus"
        rx="0.500000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip1_412)">
        <path
          id="Vector"
          d="M14.25 8C14.25 8.19 14.17 8.38 14.03 8.53C13.88 8.67 13.69 8.75 13.5 8.75L8.75 8.75L8.75 13.5C8.75 13.69 8.67 13.88 8.53 14.03C8.38 14.17 8.19 14.25 8 14.25C7.8 14.25 7.61 14.17 7.46 14.03C7.32 13.88 7.25 13.69 7.25 13.5L7.25 8.75L2.5 8.75C2.3 8.75 2.11 8.67 1.96 8.53C1.82 8.38 1.75 8.19 1.75 8C1.75 7.8 1.82 7.61 1.96 7.46C2.11 7.32 2.3 7.25 2.5 7.25L7.25 7.25L7.25 2.5C7.25 2.3 7.32 2.11 7.46 1.96C7.61 1.82 7.8 1.75 8 1.75C8.19 1.75 8.38 1.82 8.53 1.96C8.67 2.11 8.75 2.3 8.75 2.5L8.75 7.25L13.5 7.25C13.69 7.25 13.88 7.32 14.03 7.46C14.17 7.61 14.25 7.8 14.25 8Z"
          fill={color}
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  )
}
