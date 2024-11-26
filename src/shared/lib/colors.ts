export const hexToRgb = (hex: string, alpha: number = 0.75): string => {
  hex = hex.replace(/^#/, '')

  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)

  if (alpha >= 0 && alpha <= 1) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return `rgb(${r}, ${g}, ${b})`
  }
}
