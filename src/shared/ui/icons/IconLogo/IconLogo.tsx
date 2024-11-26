interface IconProps {
  width?: number
  height?: number
}

export const IconLogo = ({ width = 52, height = 40 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 51.3137 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs />
      <rect
        id="Rectangle 39"
        x="11.313721"
        y="20.000000"
        rx="5.224828"
        width="28.284269"
        height="28.284269"
        transform="rotate(-45 11.313721 20.000000)"
        fill="#80D78D"
        fillOpacity="1.000000"
      />
      <rect
        id="Rectangle 40"
        y="20.000000"
        rx="5.224828"
        width="28.284269"
        height="28.284269"
        transform="rotate(-45 0.000000 20.000000)"
        fill="#00AE1C"
        fillOpacity="1.000000"
      />
    </svg>
  )
}
