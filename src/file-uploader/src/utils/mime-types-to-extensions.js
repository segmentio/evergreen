import hasValue from '../../../lib/has-value'
import mimeTypeToExtension from './mime-type-to-extension'

const mimeTypesToExtensions = mimeTypes => {
  const extensions = mimeTypes.map(mimeTypeToExtension)

  return extensions.filter(hasValue)
}

export default mimeTypesToExtensions
