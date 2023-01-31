import merge from 'lodash.merge'
import splitFiles from './split-files'

/**
 * @typedef {object} RebaseFilesOptions
 * @property {string[] | undefined} acceptedMimeTypes
 * @property {number | undefined} maxFiles
 * @property {number | undefined} maxSizeInBytes
 */

/**
 * @typedef {object} RebaseFilesResult
 * @property {File[]} accepted
 * @property {import('./get-file-rejections').FileRejection[]} rejected
 */

/**
 * Returns separate arrays for accepted and rejected files based on the provided options, similar to
 * `splitFiles`. This function should be used for rebasing files on removal (i.e. for removing files
 * from the `rejected` array when they are no longer over maximum limit, if there is one)
 * @param {File[]} files
 * @param {RebaseFilesOptions | undefined} options
 * @returns {RebaseFilesResult}
 */
const rebaseFiles = (files, options) => splitFiles(files, merge({}, options ?? {}, { currentFileCount: null }))

export default rebaseFiles
