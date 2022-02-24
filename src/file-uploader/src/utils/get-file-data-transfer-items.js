import isEmpty from 'lodash.isempty'

/**
 * Converts `DataTransferItemList` to an array of `DataTransferItem` objects filtered by the 'file' `kind`
 *
 * The other possible `kind` is 'string', but we don't really care about text being dragged onto
 * the dropzone
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DataTransferItem/kind
 *
 * @param {DataTransferItemList} dataTransferList
 * @returns {DataTransferItem[]}
 */
const getFileDataTransferItems = dataTransferList => {
  if (isEmpty(dataTransferList)) {
    return []
  }

  return [...dataTransferList].filter(dataTransferItem => dataTransferItem.kind === 'file')
}

export default getFileDataTransferItems
