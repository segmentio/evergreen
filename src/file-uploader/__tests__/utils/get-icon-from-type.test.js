import { MimeType } from '../../../constants'
import { DocumentIcon, MediaIcon, VideoIcon } from '../../../icons'
import getIconFromType from '../../src/utils/get-icon-from-type'

const imageMimeTypes = Object.values(MimeType).filter(mimeType => mimeType.includes('image'))
const videoMimeTypes = Object.values(MimeType).filter(mimeType => mimeType.includes('video'))
const documentMimeTypes = Object.values(MimeType).filter(
  mimeType => !imageMimeTypes.includes(mimeType) && !videoMimeTypes.includes(mimeType)
)

describe('getIconFromType', () => {
  it.each(imageMimeTypes)('should return MediaIcon when mimeType is %p', mimeType => {
    const result = getIconFromType(mimeType)

    expect(result).toBe(MediaIcon)
  })

  it.each(videoMimeTypes)('should return VideoIcon when mimeType is %p', mimeType => {
    const result = getIconFromType(mimeType)

    expect(result).toBe(VideoIcon)
  })

  it.each(documentMimeTypes)('should return DocumentIcon when mimeType is %p', mimeType => {
    const result = getIconFromType(mimeType)

    expect(result).toBe(DocumentIcon)
  })
})
