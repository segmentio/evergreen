/**
 * Returns separate arrays for accepted and rejected files based on the provided options.
 * This should be used for accepting and rejecting files on drop
 */
export const splitFiles = (files: File[], options?: SplitFilesOptions): SplitFilesResult => {
  const accepted = getAcceptedFiles(files, options)
  const rejected = getFileRejections(files, options)
  return { accepted, rejected }
}
