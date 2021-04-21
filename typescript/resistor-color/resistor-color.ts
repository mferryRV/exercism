// Define a type to map strings to numbers
interface ColorMap {
  black: number
  brown: number
  red: number
  orange: number
  yellow: number
  green: number
  blue: number
  violet: number
  grey: number
  white: number
}

// Make a type for keys in the map
type Color = keyof ColorMap

// Map resistors to colors
const colorMap: ColorMap = {
  "black": 0,
  "brown": 1,
  "red": 2,
  "orange": 3,
  "yellow": 4,
  "green": 5,
  "blue": 6,
  "violet": 7,
  "grey": 8,
  "white": 9
}

export const colorCode = (color: string) : number => {
  return colorMap[color as Color]
}

export const COLORS: string[] = Object.keys(colorMap)
