import { buildFiles } from '../../test/utils'
import getAcceptedFiles from '../src/utils/get-accepted-files'

describe('getAcceptedFiles', () => {
  it.each([undefined, null, {}])('should return unmodified files when options is %p', options => {
    const files = buildFiles()

    const result = getAcceptedFiles(files, options)

    expect(result).toStrictEqual(files)
  })
})
