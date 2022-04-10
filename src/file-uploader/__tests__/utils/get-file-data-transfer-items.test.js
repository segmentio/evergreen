import { MimeType } from '../../../constants'
import getFileDataTransferItems from '../../src/utils/get-file-data-transfer-items'

describe('getFileDataTransferItems', () => {
  const buildDataTransferItem = (values = {}) => {
    const { kind = 'file', type = MimeType.gif } = values

    return { kind, type }
  }

  it("should only return items of kind 'file'", () => {
    const expected = buildDataTransferItem({ kind: 'file' })
    const unexpected = buildDataTransferItem({ kind: 'string' })

    const result = getFileDataTransferItems([expected, unexpected])

    expect(result).toContain(expected)
    expect(result).not.toContain(unexpected)
  })

  it('should return empty array when empty', () => {
    const expected = []

    const result = getFileDataTransferItems(expected)

    expect(result).toStrictEqual(expected)
  })

  it('should always return new array', () => {
    const item = buildDataTransferItem()
    const itemList = [item]

    const result = getFileDataTransferItems(itemList)

    // Checking for referential equality
    expect(result).not.toBe(itemList)
  })
})
