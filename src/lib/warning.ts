const shownWarnings: any = []

export default (condition: any, warning: any) => {
  if (condition && !shownWarnings.includes(warning)) {
    console.error(`Warning: ${warning}`)
    shownWarnings.push(warning)
  }
}
