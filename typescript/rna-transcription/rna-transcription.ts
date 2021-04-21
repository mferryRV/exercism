interface RnaMap {
  A: string
  C: string
  G: string
  T: string
}

type Dna = keyof RnaMap

const rnaMap : RnaMap = {
  A: 'U',
  C: 'G',
  G: 'C',
  T: 'A'
}

const isNucleotide = (nuc: string): nuc is Dna => Object.keys(rnaMap).includes(nuc)

const dnaToRna = (nuc: string): string => {
  if (!isNucleotide(nuc)) {
    throw new Error('Invalid input DNA.')
  }
  return rnaMap[nuc]
}

class Transcriptor {
  toRna(dna: string) : string {
    return dna.split('').map((nuc) => dnaToRna(nuc)).join('')
  }
}

export default Transcriptor
