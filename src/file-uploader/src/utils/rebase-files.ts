import merge from 'lodash.merge'
import { MimeType } from '../../../constants'
import { FileRejection } from '../types/file-rejection'
import splitFiles from './split-files'

export interface RebaseFilesOptions {
  acceptedMimeTypes?: MimeType[]
  maxFiles?: number
  maxSizeInBytes?: number
}

export interface RebaseFilesResult {
  accepted: File[]
  rejected: FileRejection[]
}

/**
 * Returns separate arrays for accepted and rejected files based on the provided options, similar to
 * `splitFiles`. This function should be used for rebasing files on removal (i.e. for removing files
 * from the `rejected` array when they are no longer over maximum limit, if there is one)
 */
const rebaseFiles = (files: File[], options?: RebaseFilesOptions) =>
  splitFiles(files, merge({}, options ?? {}, { currentFileCount: null }))

export default rebaseFiles
