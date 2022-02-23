import { MediaIcon, VideoIcon, DocumentIcon } from '../../../icons'
import { isImage } from './is-image'

/**
 * Maps a MimeType to an Icon component
 * @param {string} type MimeType to test
 * @returns {IconComponent}
 */
export const getIconFromType = type => {
  if (isImage(type)) {
    return MediaIcon
  }

  if (type?.includes('video')) {
    return VideoIcon
  }

  return DocumentIcon
}
