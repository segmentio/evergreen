import { FileRejectionReason } from '../../../constants'

export interface FileRejection {
  /**
   * The file that was rejected
   */
  file: File

  /**
   * Human-friendly message for why the file was rejected.
   * @see {getAcceptedTypesMessage}
   * @see {getFileSizeMessage}
   * @see {getMaxFilesMessage}
   */
  message: string

  /**
   * Error/status code for why the file was rejected. The `FileUploader` component
   * will return values from `FileRejectionReason`, but you can define your own if needed
   */
  reason: FileRejectionReason | string | number
}
