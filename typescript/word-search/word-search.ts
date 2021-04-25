const transpose = (matrix: string[]): string[] => matrix[0]
  .split('')
  .map((_letter: string, colIndex: number) => {
    return matrix.map((row: string) => row[colIndex]).join('')
  })

type Rotation = -45 | 45 | 90

const rotate = (matrix: string[], rotation: Rotation): string[] => {
  const getColIndex = (colIndex: number, rowIndex: number): number => {
    if (rotation === 90) {
      return colIndex
    } else if (rotation === 45) {
      return colIndex + rowIndex
    } else if (rotation === -45) {
      return colIndex - rowIndex
    } else {
      throw new Error('Invalid rotation')
    }
  }

  return matrix[0].split('')
  .map((_letter: string, colIndex: number) => {
    return matrix.map((row: string, rowIndex) => row[getColIndex(colIndex, rowIndex)] || '').join('')
  })
}

export default class WordSearch {
  private rows: string[]
  private columns: string[]
  // private fwdDiagonal: string[]
  // private backDiagonal: string[]

  constructor(grid: string[]) {
    this.rows = grid
    this.columns = transpose(grid)
  }


  public find(words: string[]) {
    return words
  }
}
