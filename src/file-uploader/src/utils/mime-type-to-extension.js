import { MimeType } from '../../../constants'

/**
 * Returns the corresponding file extension from the provided MimeType.
 * @param {string} mimeType
 * @returns {string | undefined} Mapped file extension from the MimeType, or `undefined` if not found
 */
const mimeTypeToExtension = mimeType => {
  const keys = Object.keys(MimeType)
  const key = keys.find(key => MimeType[key] === mimeType)

  if (key == null) {
    return undefined
  }

  return `.${key}`
}

export default mimeTypeToExtension
