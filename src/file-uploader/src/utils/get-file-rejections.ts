import isEmpty from 'lodash.isempty'
import uniqBy from 'lodash.uniqby'
import FileRejectionReason from '../../../constants/src/FileRejectionReason'
import { FileRejection } from '../types/file-rejection'
import { getAcceptedTypesMessage, getFileSizeMessage, getMaxFilesMessage } from './messages'
import { SplitFilesOptions } from './split-files'

/**
 * Returns a list of objects containing rejected files and why they were rejected based on the provided options
 */
const getFileRejections = (files: File[], options?: SplitFilesOptions): FileRejection[] => {
  if (options == null || isEmpty(files)) {
    return []
  }

  const { acceptedMimeTypes, currentFileCount: currentCount, maxFiles, maxSizeInBytes } = options

  const typeRejections: Array<FileRejection | undefined> = files.map((file) => {
    if (isEmpty(acceptedMimeTypes) || acceptedMimeTypes?.some((type) => file.type === type)) {
      return
    }

    return {
      file,
      reason: FileRejectionReason.InvalidFileType,
      message: `This file is not an accepted format. ${getAcceptedTypesMessage(acceptedMimeTypes!)}`,
    }
  })

  const sizeRejections: Array<FileRejection | undefined> = files.map((file) => {
    if (maxSizeInBytes == null || maxSizeInBytes === 0 || file.size <= maxSizeInBytes) {
      return
    }

    return {
      file,
      reason: FileRejectionReason.FileTooLarge,
      message: `This file is too big. ${getFileSizeMessage(maxSizeInBytes)}`,
    }
  })

  const countRejections: Array<FileRejection | undefined> = files.map((file, index) => {
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
      message: getMaxFilesMessage(maxFiles),
    }
  })

  // Type rejections are arguably more important than size rejections, so those will take priority
  const fileRejections = [...typeRejections, ...sizeRejections, ...countRejections].filter(
    (fileRejection) => fileRejection != null
  ) as FileRejection[]

  return uniqBy(fileRejections, (rejection) => rejection.file)
}

export default getFileRejections
