const isAscii = (char: string): boolean => !!char.match(/[A-Za-z]/)

const distill = (content: string): Set<string> => {
  return new Set(content.toLowerCase()
    .split('')
    .filter((char: string) => isAscii(char)))
}

class Pangram {
  private content: string
  private distilledContent: Set<string>

  constructor(content: string) {
    this.content = content
    this.distilledContent = distill(content)
  }

  isPangram(): boolean {
    return this.distilledContent.size === 26
  }
}

export default Pangram