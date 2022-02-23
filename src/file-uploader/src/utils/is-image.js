/**
 * Returns whether or not the given MimeType is an image
 * @param {string} type MimeType to test
 * @returns {boolean}
 */
export const isImage = type => type?.includes('image') ?? false
