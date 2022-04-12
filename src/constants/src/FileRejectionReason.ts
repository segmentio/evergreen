/**
 * Basic error codes for why a file is rejected or in an errored state
 */
export enum FileRejectionReason {
  FileTooLarge = 'FILE_TOO_LARGE',
  InvalidFileType = 'INVALID_FILE_TYPE',
  OverFileLimit = 'OVER_FILE_LIMIT',
  Unknown = 'UNKNOWN'
}

export default FileRejectionReason
