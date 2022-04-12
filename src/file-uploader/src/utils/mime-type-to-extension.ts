import { MimeType } from '../../../constants'

/**
 * Returns the corresponding file extension from the provided MimeType.
 * @returns Mapped file extension from the MimeType, or `undefined` if not found
 */
const mimeTypeToExtension = (mimeType: string | MimeType): string | undefined => {
  const keys = Object.keys(MimeType) as Array<keyof typeof MimeType>
  const key = keys.find(key => MimeType[key] === mimeType)

  if (key == null) {
    return undefined
  }

  return `.${key}`
}

export default mimeTypeToExtension
