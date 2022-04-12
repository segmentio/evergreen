import { MimeType } from '../../../constants'

/**
 * Returns whether or not the given MimeType is an image
 */
const isImage = (mimeType?: string | MimeType) => mimeType?.includes('image') ?? false

export default isImage
