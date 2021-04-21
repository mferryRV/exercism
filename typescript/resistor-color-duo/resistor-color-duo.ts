// Define a type to map strings to numbers
interface ColorMap {
  black: string
  brown: string
  red: string
  orange: string
  yellow: string
  green: string
  blue: string
  violet: string
  grey: string
  white: string
}

// Make a type for keys in the map
type Color = keyof ColorMap

// Map resistors to colors
const colorMap: ColorMap = {
  "black": "0",
  "brown": "1",
  "red": "2",
  "orange": "3",
  "yellow": "4",
  "green": "5",
  "blue": "6",
  "violet": "7",
  "grey": "8",
  "white": "9"
}

export class ResistorColor {
  private colors: string[]

  constructor(colors: string[]) {
    // Get mad about short ones
    if (colors.length < 2) {
      throw new Error('At least two colors need to be present')
    }

    this.colors = colors
  }

  // Sum the values of all resistor colors
  value = (): number => {
    // Ignore long ones
    const resColors = this.colors.slice(0, 2)

    // Add resistors
    const str = resColors
      .map((c: string): string => colorMap[c as Color])
      .reduce((sum: string, num: string) => sum + num, '')

    return parseInt(str)
  }
}
