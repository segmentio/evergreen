/**
 * Returns whether or not the given MimeType is an image
 * @param {string} mimeType MimeType to test
 * @returns {boolean}
 */
const isImage = mimeType => mimeType?.includes('image') ?? false

export default isImage
