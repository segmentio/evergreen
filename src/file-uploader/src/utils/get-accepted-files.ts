import differenceWith from 'lodash.differencewith'
import getFileRejections from './get-file-rejections'
import { SplitFilesOptions } from './split-files'

/**
 * Returns a list of accepted files based on the provided options
 */
const getAcceptedFiles = (files: File[], options?: SplitFilesOptions): File[] => {
  if (options == null) {
    return files
  }

  const fileRejections = getFileRejections(files, options)

  return differenceWith(files, fileRejections, (file, fileRejection) => file === fileRejection.file)
}

export default getAcceptedFiles
