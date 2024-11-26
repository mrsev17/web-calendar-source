interface IconProps {
  width?: number
  height?: number
}

export const IconUser = ({ width = 16, height = 16 }: IconProps) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip1_422">
          <rect
            id="Property 1=user"
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
        id="Property 1=user"
        rx="0.500000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip1_422)">
        <path
          id="Vector"
          d="M8 8.66C9.59 8.66 11.05 9.12 12.11 9.78C12.65 10.1 13.1 10.49 13.43 10.9C13.76 11.31 14 11.8 14 12.33C14 12.89 13.72 13.34 13.33 13.65C12.95 13.95 12.46 14.15 11.94 14.29C10.89 14.57 9.48 14.66 8 14.66C6.51 14.66 5.1 14.57 4.05 14.29C3.53 14.15 3.04 13.95 2.66 13.65C2.27 13.34 2 12.89 2 12.33C2 11.8 2.23 11.31 2.56 10.9C2.89 10.49 3.34 10.1 3.88 9.78C4.95 9.12 6.4 8.66 8 8.66ZM8 1.33C8.88 1.33 9.73 1.68 10.35 2.3C10.98 2.93 11.33 3.78 11.33 4.66C11.33 5.55 10.98 6.39 10.35 7.02C9.73 7.64 8.88 7.99 8 7.99C7.11 7.99 6.26 7.64 5.64 7.02C5.01 6.39 4.66 5.55 4.66 4.66C4.66 3.78 5.01 2.93 5.64 2.3C6.26 1.68 7.11 1.33 8 1.33Z"
          fill="#FFFFFF"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  )
}
