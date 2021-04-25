const randLetter = () => String.fromCharCode(Math.round(26 * Math.random() + 65))
const randHundred = () => Math.round(999 * Math.random()).toString()

let usedNames: Set<string> = new Set()

const makeName = (): string => {
  const name = randLetter() + randLetter() + randHundred()
  // Check uniqueness
  if (usedNames.size >=  26 * 26 * 10 * 10 * 10) {
    throw new Error('Out of names')
  } else if (!usedNames.has(name)) {
    usedNames.add(name)
    return name
  } else {
    return makeName()
  }
}

export default class Robot {
  private _name: string

  constructor() {
    this._name = makeName()
  }

  public get name(): string {
    return this._name
  }

  public resetName(): void {
    this._name = makeName()
  }

  public static releaseNames(): void {
    usedNames = new Set()
  }
}
