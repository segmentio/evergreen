import { MimeType, FileRejectionReason } from '../constants'

export const buildFile = (overrides = {}) => {
  const { name = `file-${new Date().getTime()}.gif`, size = 1024, type = MimeType.gif } = overrides

  // Allocate an array the given size, but set a reasonable 10MB ceiling for testing
  const file = new File(Buffer.alloc(Math.min(size, 10 * 1024 ** 2)), name, {
    type
  })
  return file
}

export const buildFiles = (count = 2, overrides = {}) => {
  const files = []
  for (let i = 0; i < count; i++) {
    files.push(buildFile(overrides))
  }

  return files
}

export const buildFileRejection = file => ({
  file,
  reason: FileRejectionReason.Unknown,
  message: 'Rejected'
})
