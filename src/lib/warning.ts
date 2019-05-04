const shownWarnings: string[] = []

export default function warning(condition: boolean, message: string): void {
  if (condition && !shownWarnings.includes(message)) {
    console.error(`Warning: ${message}`)
    shownWarnings.push(message)
  }
}
