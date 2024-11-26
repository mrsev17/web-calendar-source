interface IconProps {
  width?: number
  height?: number
}

export const IconTitle = ({ width = 16, height = 16 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip0_1371">
          <rect
            id="title"
            rx="0.333333"
            width="15.333333"
            height="15.333333"
            transform="translate(0.333333 0.333333)"
            fill="white"
            fillOpacity="0"
          />
        </clipPath>
      </defs>
      <rect
        id="title"
        rx="0.333333"
        width="15.333333"
        height="15.333333"
        transform="translate(0.333333 0.333333)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip0_1371)">
        <path
          id="Vector"
          d="M7.23 3.59L2.75 3.59C2.54 3.59 2.36 3.51 2.22 3.36C2.07 3.21 2 3.02 2 2.8C2 2.58 2.07 2.39 2.22 2.23C2.36 2.07 2.54 2 2.75 2L13.24 2C13.45 2 13.63 2.07 13.77 2.22C13.92 2.38 14 2.56 14 2.78C14 3 13.92 3.19 13.77 3.35C13.63 3.51 13.45 3.59 13.24 3.59L8.77 3.59L8.77 13.21C8.77 13.43 8.69 13.61 8.54 13.77C8.4 13.92 8.22 14 8 14C7.79 14 7.61 13.92 7.46 13.76C7.3 13.6 7.23 13.41 7.23 13.19L7.23 3.59Z"
          fill="#5B5F6E"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  )
}
