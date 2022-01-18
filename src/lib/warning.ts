const shownWarnings = []

export default (condition, warning) => {
  if (condition && !shownWarnings.includes(warning)) {
    console.error(`Warning: ${warning}`)
    shownWarnings.push(warning)
  }
}
