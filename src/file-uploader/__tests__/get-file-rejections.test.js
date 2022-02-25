import { MimeType } from '../../constants'
import { buildFiles, buildFile } from '../../test/utils'
import getFileRejections from '../src/utils/get-file-rejections'

describe('getFileRejections', () => {
  it.each([undefined, null, {}])('should return empty array when options is %p', options => {
    const files = buildFiles()
    const expected = []

    const result = getFileRejections(files, options)

    expect(result).toStrictEqual(expected)
  })

  describe('options.acceptedMimeTypes', () => {
    it('should return empty array when empty', () => {
      const acceptedMimeTypes = []
      const files = buildFiles(2, { type: MimeType.png })
      const expected = []

      const result = getFileRejections(files, { acceptedMimeTypes })

      expect(result).toStrictEqual(expected)
    })

    it('should not return files that match type', () => {
      const acceptedMimeTypes = [MimeType.png]
      const files = buildFiles(2, { type: MimeType.png })
      const expected = []

      const result = getFileRejections(files, { acceptedMimeTypes })

      expect(result).toStrictEqual(expected)
    })

    it('should return files that do not match type', () => {
      const acceptedMimeTypes = [MimeType.gif]
      const expected = [buildFile({ type: MimeType.png })]

      const result = getFileRejections(expected, { acceptedMimeTypes })

      expect(result).toHaveLength(expected.length)
    })
  })
})
