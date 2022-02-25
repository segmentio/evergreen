import { MimeType, FileRejectionReason } from '../constants'

export const buildFile = () => new File([], `file-${new Date().getTime()}.gif`, { type: MimeType.gif })

export const buildFiles = (count = 2) => {
  const files = []
  for (let i = 0; i < count; i++) {
    files.push(buildFile())
  }

  return files
}

export const buildFileRejection = file => ({
  file,
  reason: FileRejectionReason.Unknown,
  message: 'Rejected'
})
