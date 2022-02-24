import differenceWith from 'lodash.differencewith'
import getFileRejections from './get-file-rejections'

/**
 * Returns a list of accepted files based on the provided options
 * @param {File[]} files
 * @param {import('./split-files').SplitFilesOptions | undefined} options
 * @returns {File[]}
 */
const getAcceptedFiles = (files, options) => {
  if (options == null) {
    return files
  }

  const fileRejections = getFileRejections(files, options)

  return differenceWith(files, fileRejections, (file, fileRejection) => file === fileRejection.file)
}

export default getAcceptedFiles
