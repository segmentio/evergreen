import { MediaIcon, VideoIcon, DocumentIcon } from '../../../icons'
import isImage from './is-image'

/**
 * Maps a MimeType to an Icon component
 * @param {string} mimeType MimeType to test
 * @returns {IconComponent}
 */
const getIconFromType = mimeType => {
  if (isImage(mimeType)) {
    return MediaIcon
  }

  if (mimeType?.includes('video')) {
    return VideoIcon
  }

  return DocumentIcon
}

export default getIconFromType
