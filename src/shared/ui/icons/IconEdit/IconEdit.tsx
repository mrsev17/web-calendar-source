interface IconProps {
  width?: number
  height?: number
}

interface IconEditProps extends IconProps {
  color?: string
}

export const IconEdit = ({ width = 16, height = 16, color = '#323749' }: IconEditProps) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip1_465">
          <rect
            id="Property 1=edit"
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
        id="Property 1=edit"
        rx="0.500000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip1_465)">
        <path
          id="Vector"
          d="M7.17 4.11L11.88 8.82L7.1 13.61C6.88 13.83 6.58 13.96 6.27 13.99L6.15 14L2.67 14C2.5 14 2.34 13.93 2.22 13.82C2.09 13.71 2.01 13.56 2 13.4L1.99 13.32L1.99 9.83C1.99 9.52 2.1 9.22 2.3 8.98L2.38 8.89L7.17 4.11ZM9.26 2.01C9.49 1.78 9.81 1.64 10.14 1.63C10.48 1.61 10.8 1.72 11.06 1.94L11.14 2.01L13.97 4.84C14.21 5.08 14.35 5.4 14.36 5.73C14.38 6.06 14.27 6.39 14.05 6.64L13.97 6.73L12.82 7.88L8.11 3.17L9.26 2.01Z"
          fill={color}
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  )
}
