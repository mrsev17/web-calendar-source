interface IconProps {
  width?: number
  height?: number
}

export const IconDescription = ({ width = 16, height = 16 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip0_1733">
          <rect
            id="pdescription"
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
        id="pdescription"
        rx="0.333333"
        width="15.333333"
        height="15.333333"
        transform="translate(0.333333 0.333333)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip0_1733)">
        <path
          id="Vector"
          d="M2 4.08C2 3.88 2.05 3.69 2.16 3.55C2.27 3.41 2.41 3.33 2.56 3.33L13.43 3.33C13.58 3.33 13.72 3.41 13.83 3.55C13.94 3.69 14 3.88 14 4.08C14 4.28 13.94 4.47 13.83 4.61C13.72 4.75 13.58 4.83 13.43 4.83L2.56 4.83C2.41 4.83 2.27 4.75 2.16 4.61C2.05 4.47 2 4.28 2 4.08ZM2 8.33C2 8.13 2.05 7.94 2.16 7.8C2.27 7.66 2.41 7.58 2.56 7.58L13.43 7.58C13.58 7.58 13.72 7.66 13.83 7.8C13.94 7.94 14 8.13 14 8.33C14 8.53 13.94 8.72 13.83 8.86C13.72 9 13.58 9.08 13.43 9.08L2.56 9.08C2.41 9.08 2.27 9 2.16 8.86C2.05 8.72 2 8.53 2 8.33ZM2.56 11.83C2.41 11.83 2.27 11.91 2.16 12.05C2.05 12.19 2 12.38 2 12.58C2 12.78 2.05 12.97 2.16 13.11C2.27 13.25 2.41 13.33 2.56 13.33L9.68 13.33C9.83 13.33 9.97 13.25 10.08 13.11C10.19 12.97 10.25 12.78 10.25 12.58C10.25 12.38 10.19 12.19 10.08 12.05C9.97 11.91 9.83 11.83 9.68 11.83L2.56 11.83Z"
          fill="#5B5F6E"
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}
