import { MimeType, FileRejectionReason } from '../constants'

/**
 * Builds a `File` object for testing
 * @param {Pick<File, 'name' | 'size' | 'type'>} overrides Specific `File` properties to override
 * @returns {File}
 */
export const buildFile = (overrides = {}) => {
  const { name = `file-${new Date().getTime()}.gif`, size = 1024, type = MimeType.gif } = overrides

  // Allocate an array the given size, but set a reasonable 10MB ceiling for testing
  const file = new File(Buffer.alloc(Math.min(size, 10 * 1024 ** 2)), name, {
    type
  })
  return file
}

/**
 * Builds a collection of `File` objects for testing
 * @param {number} count Number of files to create (default: 2)
 * @param {Pick<File, 'name' | 'size' | 'type'>} overrides Specific `File` properties to override
 * @returns {File[]}
 */
export const buildFiles = (count = 2, overrides = {}) => {
  const files = []
  for (let i = 0; i < count; i++) {
    files.push(buildFile(overrides))
  }

  return files
}

/**
 * Builds a `FileRejection` object for testing
 * @param {File} file
 * @returns {import('../file-uploader/src/utils/get-file-rejections').FileRejection}
 */
export const buildFileRejection = file => ({
  file,
  reason: FileRejectionReason.Unknown,
  message: 'Rejected'
})
