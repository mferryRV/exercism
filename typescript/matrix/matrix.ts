const parseMatrix = (matrix: string) => {
  return matrix.split('\n')
    .map((r) => r.split(' ').map((s) => parseInt(s)))
}

const transpose = (matrix: number[][]): number[][] => {
  const rows = matrix.length
  const columns = matrix[0].length
  const output = []
  for (let i=0; i<columns; i++) {
    const col: number[] = []
    for (let j=0; j<rows; j++) {
      col.push(matrix[j][i])
    }
    output.push(col)
  }
  return output
}

class Matrix {
  private input: string
  public rows: number[][]
  public columns: number[][]

  constructor(matrix: string) {
    this.input = matrix
    this.rows = parseMatrix(this.input)
    this.columns = transpose(this.rows)
  }

}

export default Matrix
