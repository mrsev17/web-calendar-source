interface IconProps {
  width?: number
  height?: number
}

interface IconTrashProps extends IconProps {
  color?: string
}

export const IconTrash = ({ width = 16, height = 16, color = '#FFFFFF' }: IconTrashProps) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip1_416">
          <rect
            id="Property 1=trash"
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
        id="Property 1=trash"
        rx="0.500000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip1_416)">
        <path
          id="Vector"
          d="M13.5 3L11 3L11 2.5C11 2.1 10.84 1.72 10.56 1.43C10.27 1.15 9.89 1 9.5 1L6.5 1C6.1 1 5.72 1.15 5.43 1.43C5.15 1.72 5 2.1 5 2.5L5 3L2.5 3C2.36 3 2.24 3.05 2.14 3.14C2.05 3.24 2 3.36 2 3.5C2 3.63 2.05 3.75 2.14 3.85C2.24 3.94 2.36 4 2.5 4L3 4L3 13C3 13.26 3.1 13.51 3.29 13.7C3.48 13.89 3.73 14 4 14L12 14C12.26 14 12.51 13.89 12.7 13.7C12.89 13.51 13 13.26 13 13L13 4L13.5 4C13.63 4 13.75 3.94 13.85 3.85C13.94 3.75 14 3.63 14 3.5C14 3.36 13.94 3.24 13.85 3.14C13.75 3.05 13.63 3 13.5 3ZM7 10.5C7 10.63 6.94 10.75 6.85 10.85C6.75 10.94 6.63 11 6.5 11C6.36 11 6.24 10.94 6.14 10.85C6.05 10.75 6 10.63 6 10.5L6 6.5C6 6.36 6.05 6.24 6.14 6.14C6.24 6.05 6.36 6 6.5 6C6.63 6 6.75 6.05 6.85 6.14C6.94 6.24 7 6.36 7 6.5L7 10.5ZM10 10.5C10 10.63 9.94 10.75 9.85 10.85C9.75 10.94 9.63 11 9.5 11C9.36 11 9.24 10.94 9.14 10.85C9.05 10.75 9 10.63 9 10.5L9 6.5C9 6.36 9.05 6.24 9.14 6.14C9.24 6.05 9.36 6 9.5 6C9.63 6 9.75 6.05 9.85 6.14C9.94 6.24 10 6.36 10 6.5L10 10.5ZM10 3L6 3L6 2.5C6 2.36 6.05 2.24 6.14 2.14C6.24 2.05 6.36 2 6.5 2L9.5 2C9.63 2 9.75 2.05 9.85 2.14C9.94 2.24 10 2.36 10 2.5L10 3Z"
          fill={color}
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  )
}
