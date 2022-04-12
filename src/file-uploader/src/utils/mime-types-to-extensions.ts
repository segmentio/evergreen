import { MimeType } from '../../../constants'
import hasValue from '../../../lib/has-value'
import mimeTypeToExtension from './mime-type-to-extension'

/**
 * Returns the corresponding file extensions from the provided MimeTypes.
 *
 * Unlike `mimeTypeToExtension`, this will never return `undefined` values. MimeTypes
 * that aren't found are discarded.
 */
const mimeTypesToExtensions = (mimeTypes: Array<string | MimeType>): string[] => {
  const extensions = mimeTypes.map(mimeTypeToExtension)

  return extensions.filter(hasValue) as string[]
}

export default mimeTypesToExtensions
