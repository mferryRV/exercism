const roundToHundredths = (num: number): number => {
  return Math.round(100 * num) / 100
} 

class SpaceAge {
  public seconds

  constructor(seconds: number) {
    this.seconds = seconds
  }

  toEarthYears() {
    return this.seconds / 31557600
  }

  onEarth() {
    return roundToHundredths(this.toEarthYears())
  }
  
  onMercury() {
    return roundToHundredths(this.toEarthYears() / 0.2408467)
  }
  
  onVenus() {
    return roundToHundredths(this.toEarthYears() / 0.61519726)
  }
  
  onMars() {
    return roundToHundredths(this.toEarthYears() / 1.8808158)
  }

  onJupiter() {
    return roundToHundredths(this.toEarthYears() / 11.862615)
  }

  onSaturn() {
    return roundToHundredths(this.toEarthYears() / 29.447498)
  }

  onUranus() {
    return roundToHundredths(this.toEarthYears() / 84.016846)
  }

  onNeptune() {
    return roundToHundredths(this.toEarthYears() / 164.79132)
  }
}

export default SpaceAge