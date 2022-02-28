import { MimeType } from '../../../constants'
import { buildFiles, buildFile } from '../../../test/utils'
import getAcceptedFiles from '../../src/utils/get-accepted-files'

describe('getAcceptedFiles', () => {
  it.each([undefined, null, {}])('should return unmodified files when options is %p', options => {
    const expected = buildFiles()

    const result = getAcceptedFiles(expected, options)

    expect(result).toStrictEqual(expected)
  })

  describe('options.acceptedMimeTypes', () => {
    it('should return all files when empty', () => {
      const acceptedMimeTypes = []
      const expected = buildFiles(2, { type: MimeType.png })

      const result = getAcceptedFiles(expected, { acceptedMimeTypes })

      expect(result).toStrictEqual(expected)
    })

    it('should return files that match type', () => {
      const acceptedMimeTypes = [MimeType.png]
      const expected = buildFiles(2, { type: MimeType.png })

      const result = getAcceptedFiles(expected, { acceptedMimeTypes })

      expect(result).toStrictEqual(expected)
    })

    it('should not return files that do not match type', () => {
      const acceptedMimeTypes = [MimeType.gif]
      const expected = buildFile({ type: MimeType.gif })
      const unexpected = buildFile({ type: MimeType.png })

      const result = getAcceptedFiles([expected, unexpected], { acceptedMimeTypes })

      expect(result).toStrictEqual([expected])
    })
  })

  describe('options.maxFiles', () => {
    it('should return all files when under maxFiles', () => {
      const maxFiles = 5
      const expected = buildFiles(maxFiles - 1)

      const result = getAcceptedFiles(expected, { maxFiles })

      expect(result).toStrictEqual(expected)
    })

    it('should return all files when equal to maxFiles', () => {
      const maxFiles = 5
      const expected = buildFiles(maxFiles)

      const result = getAcceptedFiles(expected, { maxFiles })

      expect(result).toStrictEqual(expected)
    })

    it('should return all files when maxFiles less than 1', () => {
      const maxFiles = 0
      const expected = buildFiles(maxFiles)

      const result = getAcceptedFiles(expected, { maxFiles })

      expect(result).toStrictEqual(expected)
    })

    it('should return first N files when over maxFiles', () => {
      const maxFiles = 5
      const files = buildFiles(maxFiles + 3)
      const expected = files.slice(0, maxFiles)

      const result = getAcceptedFiles(files, { maxFiles })

      expect(result).toStrictEqual(expected)
    })

    describe('options.currentFileCount', () => {
      it('should return all files when under maxFiles + currentFileCount', () => {
        const maxFiles = 5
        const currentFileCount = 1
        const expected = buildFiles(maxFiles - currentFileCount - 1)

        const result = getAcceptedFiles(expected, { currentFileCount, maxFiles })

        expect(result).toStrictEqual(expected)
      })

      it('should return all files when equal to maxFiles + currentFileCount', () => {
        const maxFiles = 5
        const currentFileCount = 1
        const expected = buildFiles(maxFiles - currentFileCount)

        const result = getAcceptedFiles(expected, { currentFileCount, maxFiles })

        expect(result).toStrictEqual(expected)
      })

      it('should return all files when currentFileCount less than 1', () => {
        const maxFiles = 5
        const currentFileCount = -5
        const expected = buildFiles(maxFiles)

        const result = getAcceptedFiles(expected, { currentFileCount, maxFiles })

        expect(result).toStrictEqual(expected)
      })

      it('should return first N files when over maxFiles + currentFileCount', () => {
        const maxFiles = 5
        const currentFileCount = 1
        const files = buildFiles(maxFiles + 3)
        const expected = files.slice(0, maxFiles - currentFileCount)

        const result = getAcceptedFiles(files, { currentFileCount, maxFiles })

        expect(result).toStrictEqual(expected)
      })
    })
  })

  describe('options.maxSizeInBytes', () => {
    it('should not return file greater than maxSizeInBytes', () => {
      const maxSizeInBytes = 10000
      const unexpected = [buildFile({ size: maxSizeInBytes + 1 })]
      const expected = []

      const result = getAcceptedFiles(unexpected, { maxSizeInBytes })

      expect(result).toStrictEqual(expected)
    })

    it('should return file equal to maxSizeInBytes', () => {
      const maxSizeInBytes = 10000
      const expected = [buildFile({ size: maxSizeInBytes })]

      const result = getAcceptedFiles(expected, { maxSizeInBytes })

      expect(result).toStrictEqual(expected)
    })

    it('should return file less than maxSizeInBytes', () => {
      const maxSizeInBytes = 10000
      const expected = [buildFile({ size: maxSizeInBytes - 1 })]

      const result = getAcceptedFiles(expected, { maxSizeInBytes })

      expect(result).toStrictEqual(expected)
    })
  })
})
