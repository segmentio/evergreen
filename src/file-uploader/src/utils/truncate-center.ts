/**
 * Truncates a string in the center with ellipsis, if needed
 * @param value Value to truncate
 * @param maximumChars Maximum number of characters (including the ellipsis) to show
 */
const truncateCenter = (value: string, maximumChars: number = 55): string => {
  const { length } = value

  if (length <= maximumChars) {
    return value
  }

  const separator = '...'
  const charsToShow = maximumChars - separator.length
  const startCharCount = Math.ceil(charsToShow / 2)
  const endCharCount = Math.floor(charsToShow / 2)

  return [value.substring(0, startCharCount), separator, value.substring(value.length - endCharCount)].join('')
}

export default truncateCenter
