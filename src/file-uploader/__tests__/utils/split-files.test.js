import { buildFile } from '../../../test/utils'
import getAcceptedFiles from '../../src/utils/get-accepted-files'
import getFileRejections from '../../src/utils/get-file-rejections'
import splitFiles from '../../src/utils/split-files'

describe('splitFiles', () => {
  it('returns expected accepted/rejected values', () => {
    const maxSizeInBytes = 10000
    const fileUnderLimit = buildFile({ size: maxSizeInBytes - 1 })
    const fileOverLimit = buildFile({ size: maxSizeInBytes + 1 })
    const files = [fileUnderLimit, fileOverLimit]

    const result = splitFiles(files, { maxSizeInBytes })

    expect(result.accepted).toStrictEqual(getAcceptedFiles(files, { maxSizeInBytes }))
    expect(result.rejected).toStrictEqual(getFileRejections(files, { maxSizeInBytes }))
  })
})
