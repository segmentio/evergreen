import { MimeType } from '../../../constants'
import mimeTypesToExtensions from '../../src/utils/mime-types-to-extensions'

describe('mimeTypesToExtensions', () => {
  it('should return extensions based on mimeTypes', () => {
    const mimeTypes = Object.values(MimeType)
    const expected = Object.keys(MimeType).map(key => `.${key}`)

    const result = mimeTypesToExtensions(mimeTypes)

    expect(result).toStrictEqual(expected)
  })

  it('should discard mimeTypes not found', () => {
    const badMimeType = 'does-not/exist'
    const expected = []

    const result = mimeTypesToExtensions([badMimeType])

    expect(result).toStrictEqual(expected)
  })
})
