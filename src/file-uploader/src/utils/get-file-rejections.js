import FileRejectionReason from '../../../constants/src/FileRejectionReason'
import hasValue from '../../../lib/has-value'
import isEmpty from '../../../lib/is-empty'
import uniqBy from '../../../lib/uniq-by'
import { getAcceptedTypesMessage, getFileSizeMessage, getMaxFilesMessage } from './messages'

const getFileRejections = (files, options) => {
  if (options == null || isEmpty(files)) {
    return []
  }

  const { acceptedMimeTypes, currentFileCount: currentCount, maxFiles, maxSizeInBytes } = options

  const typeRejections = files.map(file => {
    if (isEmpty(acceptedMimeTypes) || acceptedMimeTypes?.some(type => file.type === type)) {
      return
    }

    return {
      file,
      reason: FileRejectionReason.InvalidFileType,
      message: `This file is not an accepted format. ${getAcceptedTypesMessage(acceptedMimeTypes)}`
    }
  })

  const sizeRejections = files.map(file => {
    if (maxSizeInBytes == null || maxSizeInBytes === 0 || file.size <= maxSizeInBytes) {
      return
    }

    return {
      file,
      reason: FileRejectionReason.FileTooLarge,
      message: `This file is too big. ${getFileSizeMessage(maxSizeInBytes)}`
    }
  })

  const countRejections = files.map((file, index) => {
    if (maxFiles == null) {
      return
    }

    const fileNumber = index + 1

    if ((currentCount ?? 0) + fileNumber <= maxFiles) {
      return
    }

    return {
      file,
      reason: FileRejectionReason.OverFileLimit,
      message: getMaxFilesMessage(maxFiles)
    }
  })

  // Type rejections are arguably more important than size rejections, so those will take priority
  const fileRejections = [...typeRejections, ...sizeRejections, ...countRejections].filter(hasValue)
  return uniqBy(fileRejections, rejection => rejection.file)
}

export default getFileRejections
