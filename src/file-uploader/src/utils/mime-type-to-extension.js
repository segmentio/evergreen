import { MimeType } from '../../../constants'

const mimeTypeToExtension = mimeType => {
  const keys = Object.keys(MimeType)
  const key = keys.find(key => mimeType[key] === mimeType)

  if (key == null) {
    return undefined
  }

  return `.${key}`
}

export default mimeTypeToExtension
