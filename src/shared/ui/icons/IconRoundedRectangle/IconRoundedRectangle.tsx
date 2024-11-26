interface IconProps {
  width?: number
  height?: number
}

export const IconRoundedRectangle = ({ width = 16, height = 16 }: IconProps) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs />
      <rect
        id="Property 1=color"
        rx="0.500000"
        width="15.000000"
        height="15.000000"
        transform="translate(0.500000 0.500000)"
        fill="#FFFFFF"
        fillOpacity="0"
      />
      <rect
        id="Rectangle 4469"
        x="2.000000"
        y="2.000000"
        rx="4.000000"
        width="12.000000"
        height="12.000000"
        fill="#323749"
        fillOpacity="1.000000"
      />
    </svg>
  )
}
