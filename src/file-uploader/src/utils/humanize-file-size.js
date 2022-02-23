const byteUnits = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

/**
 * Returns a human-readable version of the file size
 * @param {number | null | undefined} sizeInBytes
 * @returns {string | undefined}
 */
const humanizeFileSize = sizeInBytes => {
  if (typeof sizeInBytes !== 'number') {
    return undefined
  }

  if (sizeInBytes < 1) {
    return `${sizeInBytes} ${byteUnits[0]}`
  }

  const exponent = Math.min(Math.floor(Math.log10(sizeInBytes) / 3), byteUnits.length - 1)
  const value = (sizeInBytes /= 1024 ** exponent).toPrecision(3)

  // Strip off unnecessary precision
  return `${value.replace('.00', '')} ${byteUnits[exponent]}`
}

export default humanizeFileSize
