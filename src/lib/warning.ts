const shownWarnings: string[] = []

export default (condition: boolean, warning: string) => {
  if (condition && !shownWarnings.includes(warning)) {
    console.error(`Warning: ${warning}`)
    shownWarnings.push(warning)
  }
}
