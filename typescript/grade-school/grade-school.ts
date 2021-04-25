interface StudentRosterInput {
  [key: string]: string[]
}

export default class GradeSchool {
  // This makes adding students easy
  // Also prevents internal registry exposure
  private roster: Map<string, number>

  constructor() {
    this.roster = new Map()
  }

  public addStudent(name: string, grade: number): void {
    this.roster.set(name, grade)
  }

  public studentsInGrade(grade: number): string[] {
    return Array.from(this.roster.entries())
      .filter((student) => student[1] === grade)
      .map((student) => student[0]).sort()
  }

  public studentRoster(): Map<string, string[]> {
    // Restructure the map to focus on grades
    return new Map(Object.entries(Array.from(this.roster.entries())
      .reduce((school, [name, gradeNum]) => {
        const grade = gradeNum.toString()
        school[grade] = school[grade] || []
        school[grade].push(name)
        return school
      }, {} as StudentRosterInput))
      .map(([grade, students]) => [grade, students.sort()]))
  }
}