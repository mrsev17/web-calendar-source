interface IconProps {
  width?: number
  height?: number
}

export const IconDone = ({ width = 16, height = 16 }: IconProps) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip1_414">
          <rect
            id="Property 1=check"
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
        id="Property 1=check"
        rx="0.500000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip1_414)">
        <path
          id="Vector"
          d="M14.53 5.03L6.53 13.03C6.46 13.1 6.37 13.15 6.28 13.19C6.19 13.23 6.09 13.25 5.99 13.25C5.9 13.25 5.8 13.23 5.71 13.19C5.62 13.15 5.53 13.1 5.46 13.03L1.96 9.53C1.89 9.46 1.84 9.37 1.8 9.28C1.76 9.19 1.74 9.09 1.74 8.99C1.74 8.9 1.76 8.8 1.8 8.71C1.84 8.62 1.89 8.53 1.96 8.46C2.03 8.39 2.12 8.34 2.21 8.3C2.3 8.26 2.4 8.24 2.49 8.24C2.59 8.24 2.69 8.26 2.78 8.3C2.87 8.34 2.96 8.39 3.03 8.46L6 11.43L13.46 3.96C13.61 3.82 13.8 3.74 14 3.74C14.19 3.74 14.39 3.82 14.53 3.96C14.67 4.11 14.75 4.3 14.75 4.5C14.75 4.69 14.67 4.89 14.53 5.03L14.53 5.03Z"
          fill="#FFFFFF"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  )
}
