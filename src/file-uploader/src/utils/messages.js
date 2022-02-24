import humanize from 'humanize-plus'
import mimeTypesToExtensions from './mime-types-to-extensions'

/**
 * Returns a standard message informing the user what file extensions are accepted based
 * on the provided array of MimeTypes
 * @param {string[]} acceptedMimeTypes
 * @returns {string}
 */
export const getAcceptedTypesMessage = acceptedMimeTypes => {
  const fileExtensions = humanize.oxford(mimeTypesToExtensions(acceptedMimeTypes))
  return `You can upload ${fileExtensions} formats.`
}

/**
 * Returns a standard message informing the user of the maximum individual file size
 * @param {number} maxSizeInBytes
 * @returns {string}
 */
export const getFileSizeMessage = maxSizeInBytes =>
  `You can upload files up to ${humanize.fileSize(maxSizeInBytes, 0)}.`

/**
 * Returns a standard message informing the user of the maximum number of files that can be uploaded
 * @param {number} maxFiles
 * @returns {string}
 */
export const getMaxFilesMessage = maxFiles => `You can upload up to ${maxFiles} ${maxFiles === 1 ? 'file' : 'files'}.`
