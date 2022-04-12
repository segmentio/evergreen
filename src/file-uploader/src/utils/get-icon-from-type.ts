import { MimeType } from '../../../constants'
import { MediaIcon, VideoIcon, DocumentIcon } from '../../../icons'
import { IconComponent } from '../../../types'
import isImage from './is-image'

/**
 * Maps a MimeType to an Icon component
 */
const getIconFromType = (mimeType?: string | MimeType): IconComponent => {
  if (isImage(mimeType)) {
    return MediaIcon
  }

  if (mimeType?.includes('video')) {
    return VideoIcon
  }

  return DocumentIcon
}

export default getIconFromType
