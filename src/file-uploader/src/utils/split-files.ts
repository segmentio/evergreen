import getAcceptedFiles from './get-accepted-files'
import getFileRejections from './get-file-rejections'
import { RebaseFilesOptions, RebaseFilesResult } from './rebase-files'

export interface SplitFilesOptions extends RebaseFilesOptions {
  /**
   * Current count of files used for validating whether the dropped files are over the `maxFiles` limit
   */
  currentFileCount?: number | null
}

export type SplitFilesResult = RebaseFilesResult

/**
 * Returns separate arrays for accepted and rejected files based on the provided options.
 * This should be used for accepting and rejecting files on drop
 * @param {File[]} files
 * @param {SplitFilesOptions | undefined} options
 * @returns {SplitFilesResult}
 */
const splitFiles = (files: File[], options?: SplitFilesOptions) => {
  const accepted = getAcceptedFiles(files, options)
  const rejected = getFileRejections(files, options)
  return { accepted, rejected }
}

export default splitFiles
