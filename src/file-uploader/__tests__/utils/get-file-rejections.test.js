import { MimeType } from '../../../constants'
import { buildFiles, buildFile } from '../../../test/utils'
import getFileRejections from '../../src/utils/get-file-rejections'

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

  describe('options.maxFiles', () => {
    it('should return empty array when under maxFiles', () => {
      const maxFiles = 5
      const files = buildFiles(maxFiles - 1)
      const expected = []

      const result = getFileRejections(files, { maxFiles })

      expect(result).toStrictEqual(expected)
    })

    it('should return empty array when equal to maxFiles', () => {
      const maxFiles = 5
      const files = buildFiles(maxFiles)
      const expected = []

      const result = getFileRejections(files, { maxFiles })

      expect(result).toStrictEqual(expected)
    })

    it('should return empty array when maxFiles less than 1', () => {
      const maxFiles = 0
      const files = buildFiles(maxFiles)
      const expected = []

      const result = getFileRejections(files, { maxFiles })

      expect(result).toStrictEqual(expected)
    })

    it('should return last N files when over maxFiles', () => {
      const maxFiles = 5
      const files = buildFiles(maxFiles + 3)

      const result = getFileRejections(files, { maxFiles })

      expect(result).toHaveLength(files.length - maxFiles)
    })

    describe('options.currentFileCount', () => {
      it('should return empty array when under maxFiles + currentFileCount', () => {
        const maxFiles = 5
        const currentFileCount = 1
        const files = buildFiles(maxFiles - currentFileCount - 1)
        const expected = []

        const result = getFileRejections(files, { currentFileCount, maxFiles })

        expect(result).toStrictEqual(expected)
      })

      it('should return empty array when equal to maxFiles + currentFileCount', () => {
        const maxFiles = 5
        const currentFileCount = 1
        const files = buildFiles(maxFiles - currentFileCount)
        const expected = []

        const result = getFileRejections(files, { currentFileCount, maxFiles })

        expect(result).toStrictEqual(expected)
      })

      it('should return empty array when currentFileCount less than 1', () => {
        const maxFiles = 5
        const currentFileCount = -5
        const files = buildFiles(maxFiles)
        const expected = []

        const result = getFileRejections(files, { currentFileCount, maxFiles })

        expect(result).toStrictEqual(expected)
      })

      it('should return last N files when over maxFiles + currentFileCount', () => {
        const maxFiles = 5
        const currentFileCount = 1
        const files = buildFiles(maxFiles + 3)

        const result = getFileRejections(files, { currentFileCount, maxFiles })

        expect(result).toHaveLength(files.length + currentFileCount - maxFiles)
      })
    })
  })

  describe('options.maxSizeInBytes', () => {
    it('should return file greater than maxSizeInBytes', () => {
      const maxSizeInBytes = 10000
      const files = [buildFile({ size: maxSizeInBytes + 1 })]

      const result = getFileRejections(files, { maxSizeInBytes })

      expect(result).toHaveLength(files.length)
    })

    it('should not return file equal to maxSizeInBytes', () => {
      const maxSizeInBytes = 10000
      const files = [buildFile({ size: maxSizeInBytes })]
      const expected = []

      const result = getFileRejections(files, { maxSizeInBytes })

      expect(result).toStrictEqual(expected)
    })

    it('should not return file less than maxSizeInBytes', () => {
      const maxSizeInBytes = 10000
      const files = [buildFile({ size: maxSizeInBytes - 1 })]
      const expected = []

      const result = getFileRejections(files, { maxSizeInBytes })

      expect(result).toStrictEqual(expected)
    })
  })
})
