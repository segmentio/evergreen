import { buildFiles } from '../../../test/utils'
import rebaseFiles from '../../src/utils/rebase-files'
import * as splitFilesModule from '../../src/utils/split-files'

describe('rebaseFiles', () => {
  it("should not take 'currentFileCount' into consideration in split files", () => {
    const maxFiles = 5
    const files = buildFiles(maxFiles)
    // Despite passing a value for currentFileCount, it should be wiped out
    const currentFileCount = 3
    const splitFilesSpy = jest.spyOn(splitFilesModule, 'default')

    const result = rebaseFiles(files, { currentFileCount, maxFiles })

    expect(result.rejected).toStrictEqual([])
    expect(splitFilesSpy).toHaveBeenCalledWith(files, expect.objectContaining({ currentFileCount: null }))
  })
})
