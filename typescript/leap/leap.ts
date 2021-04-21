export default (year: number): boolean => {
  const byFour = year % 4 === 0
  const byHundred = year % 100 === 0
  const byFourHundred = year % 400 === 0
  return byFour && (!byHundred || byFourHundred)
}
