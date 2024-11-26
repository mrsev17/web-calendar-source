interface IconProps {
  width?: number
  height?: number
}

export const IconTriangleDark = ({ width = 16, height = 16 }: IconProps) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="clip1_471">
          <rect
            id="Property 1=down-small"
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
        id="Property 1=down-small"
        rx="0.500000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <g clipPath="url(#clip1_471)">
        <path
          id="Vector"
          d="M12 6C12.56 6 12.86 6.65 12.52 7.08L12.47 7.13L8.47 11.13C8.35 11.25 8.2 11.32 8.04 11.33C7.87 11.34 7.71 11.29 7.59 11.19L7.52 11.13L3.52 7.13L3.47 7.07L3.43 7.02L3.4 6.96L3.39 6.93L3.37 6.89L3.35 6.81L3.34 6.78L3.33 6.74L3.33 6.7L3.33 6.62L3.33 6.58L3.34 6.54L3.35 6.51L3.37 6.44L3.39 6.39L3.43 6.3L3.48 6.24L3.52 6.19L3.59 6.14L3.64 6.1L3.7 6.06L3.73 6.05L3.77 6.03L3.84 6.01L3.88 6.01L3.92 6L3.96 6L12 6Z"
          fill="#323749"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </g>
    </svg>
  )
}
