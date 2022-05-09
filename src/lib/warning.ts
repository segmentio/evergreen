const shownWarnings: string[] = []

const warning = (condition: boolean, warning: string) => {
  if (condition && !shownWarnings.includes(warning)) {
    console.error(`Warning: ${warning}`)
    shownWarnings.push(warning)
  }
}

export default warning
