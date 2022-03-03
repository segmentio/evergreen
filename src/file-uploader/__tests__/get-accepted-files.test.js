import { buildFiles, buildFile } from '../../test/utils'
import getAcceptedFiles from '../src/utils/get-accepted-files'

describe('getAcceptedFiles', () => {
  it.each([undefined, null, {}])('should return unmodified files when options is %p', options => {
    const files = buildFiles()

    const result = getAcceptedFiles(files, options)

    expect(result).toStrictEqual(files)
  })

  describe('options.maxSizeInBytes', () => {
    it('should not return file greater than maxSizeInBytes', () => {
      const maxSizeInBytes = 10000
      const file = buildFile({ size: maxSizeInBytes + 1 })

      const result = getAcceptedFiles([file], { maxSizeInBytes })

      expect(result).toStrictEqual([])
    })

    it('should return file equal to maxSizeInBytes', () => {
      const maxSizeInBytes = 10000
      const file = buildFile({ size: maxSizeInBytes })

      const result = getAcceptedFiles([file], { maxSizeInBytes })

      expect(result).toStrictEqual([file])
    })

    it('should return file less than maxSizeInBytes', () => {
      const maxSizeInBytes = 10000
      const file = buildFile({ size: maxSizeInBytes - 1 })

      const result = getAcceptedFiles([file], { maxSizeInBytes })

      expect(result).toStrictEqual([file])
    })
  })
})
