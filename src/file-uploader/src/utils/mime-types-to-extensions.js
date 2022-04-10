import hasValue from '../../../lib/has-value'
import mimeTypeToExtension from './mime-type-to-extension'

/**
 * Returns the corresponding file extensions from the provided MimeTypes.
 *
 * Unlike `mimeTypeToExtension`, this will never return `undefined` values. MimeTypes
 * that aren't found are discarded.
 *
 * @param {string[]} mimeTypes
 * @returns {string[]} Mapped file extensions each MimeType
 */
const mimeTypesToExtensions = mimeTypes => {
  const extensions = mimeTypes.map(mimeTypeToExtension)

  return extensions.filter(hasValue)
}

export default mimeTypesToExtensions
