import { MimeType } from '../../../constants'
import mimeTypeToExtension from '../../src/utils/mime-type-to-extension'

describe('mimeTypeToExtension', () => {
  it.each(Object.entries(MimeType))('should return .%s when mimeType is %p', (key, mimeType) => {
    const result = mimeTypeToExtension(mimeType)

    expect(result).toBe(`.${key}`)
  })

  it('should return undefined when mimeType cannot be found', () => {
    const badMimeType = 'does-not/exist'

    const result = mimeTypeToExtension(badMimeType)

    expect(result).toBeUndefined()
  })
})
