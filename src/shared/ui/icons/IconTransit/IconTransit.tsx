interface IconProps {
  width?: number
  height?: number
}

export const IconTransit = ({ width = 16, height = 16 }: IconProps) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip1_451">
          <rect
            id="Property 1=logout"
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
        id="Property 1=logout"
        rx="0.500000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip1_451)">
        <path
          id="Vector"
          d="M2.39 2.4C2.18 2.4 1.98 2.48 1.83 2.63C1.68 2.78 1.59 2.98 1.59 3.2L1.59 12.8C1.59 13.01 1.68 13.21 1.83 13.36C1.98 13.51 2.18 13.6 2.39 13.6C2.61 13.6 2.81 13.51 2.96 13.36C3.11 13.21 3.19 13.01 3.19 12.8L3.19 3.2C3.19 2.98 3.11 2.78 2.96 2.63C2.81 2.48 2.61 2.4 2.39 2.4ZM10.63 9.83C10.48 9.98 10.4 10.18 10.4 10.39C10.41 10.6 10.49 10.8 10.64 10.95C10.79 11.1 10.99 11.18 11.2 11.19C11.41 11.19 11.61 11.11 11.76 10.96L14.16 8.56C14.31 8.41 14.39 8.21 14.39 8C14.39 7.78 14.31 7.58 14.16 7.43L11.76 5.03C11.69 4.95 11.6 4.89 11.5 4.85C11.4 4.81 11.3 4.79 11.19 4.79C11.09 4.78 10.98 4.8 10.88 4.84C10.78 4.88 10.69 4.94 10.62 5.02C10.54 5.09 10.48 5.18 10.44 5.28C10.4 5.38 10.38 5.49 10.39 5.59C10.39 5.7 10.41 5.8 10.45 5.9C10.49 6 10.55 6.09 10.63 6.16L11.66 7.2L5.59 7.2C5.38 7.2 5.18 7.28 5.03 7.43C4.88 7.58 4.79 7.78 4.79 8C4.79 8.21 4.88 8.41 5.03 8.56C5.18 8.71 5.38 8.8 5.59 8.8L11.66 8.8L10.63 9.83Z"
          fill="#FFFFFF"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}
