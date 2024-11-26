interface IconProps {
  width?: number
  height?: number
}

export const IconPaint = ({ width = 16, height = 16 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip0_1375">
          <rect
            id="ic:outline-color-lens"
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
        id="ic:outline-color-lens"
        rx="0.500000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip0_1375)">
        <path
          id="Vector"
          d="M8 14.66C4.32 14.66 1.33 11.67 1.33 8C1.33 4.32 4.32 1.33 8 1.33C11.67 1.33 14.66 4.02 14.66 7.33C14.66 9.54 12.87 11.33 10.66 11.33L9.48 11.33C9.29 11.33 9.15 11.48 9.15 11.66C9.15 11.74 9.18 11.82 9.23 11.88C9.51 12.2 9.66 12.59 9.66 13C9.66 13.44 9.49 13.86 9.17 14.17C8.86 14.49 8.44 14.66 8 14.66ZM8 2.66C5.06 2.66 2.66 5.06 2.66 8C2.66 10.94 5.06 13.33 8 13.33C8.18 13.33 8.33 13.18 8.33 13C8.33 12.91 8.29 12.83 8.23 12.76C7.96 12.46 7.82 12.06 7.82 11.66C7.82 11.22 7.99 10.8 8.3 10.48C8.62 10.17 9.04 10 9.48 10L10.66 10C12.14 10 13.33 8.8 13.33 7.33C13.33 4.76 10.94 2.66 8 2.66Z"
          fill="#5B5F6E"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
        <path
          id="Vector"
          d="M5.33 7.66C5.33 8.21 4.88 8.66 4.33 8.66C3.78 8.66 3.33 8.21 3.33 7.66C3.33 7.11 3.78 6.66 4.33 6.66C4.88 6.66 5.33 7.11 5.33 7.66Z"
          fill="#5B5F6E"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
        <path
          id="Vector"
          d="M7.33 5C7.33 5.55 6.88 6 6.33 6C5.78 6 5.33 5.55 5.33 5C5.33 4.44 5.78 4 6.33 4C6.88 4 7.33 4.44 7.33 5Z"
          fill="#5B5F6E"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
        <path
          id="Vector"
          d="M10.66 5C10.66 5.55 10.21 6 9.66 6C9.11 6 8.66 5.55 8.66 5C8.66 4.44 9.11 4 9.66 4C10.21 4 10.66 4.44 10.66 5Z"
          fill="#5B5F6E"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
        <path
          id="Vector"
          d="M12.66 7.66C12.66 8.21 12.21 8.66 11.66 8.66C11.11 8.66 10.66 8.21 10.66 7.66C10.66 7.11 11.11 6.66 11.66 6.66C12.21 6.66 12.66 7.11 12.66 7.66Z"
          fill="#5B5F6E"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}
