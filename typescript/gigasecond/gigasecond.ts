export default class Gigasecond {
  private startDate: Date
  constructor(startDate: Date) {
    this.startDate = startDate
  }

  date() {
    // Add a gigasecond (10^9 s) to the start date
    return new Date(this.startDate.getTime() + 1000 * (10**9))
  }
}
