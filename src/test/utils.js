import { faker } from '@faker-js/faker'
import { MimeType, FileRejectionReason } from '../constants'

/**
 * Builds a `File` object for testing
 * @param {Pick<File, 'name' | 'size' | 'type'>} overrides Specific `File` properties to override
 * @returns {File}
 */
export const buildFile = (overrides = {}) => {
  const maxSizeInBytes = 10 * 1024 ** 2
  const {
    name = faker.system.fileName(),
    size = faker.datatype.number({ min: 1024, max: 1024 * 3 }),
    type = MimeType.gif
  } = overrides

  // Allocate an array the given size, but set a reasonable ceiling for testing
  const file = new File(Buffer.alloc(Math.min(size, maxSizeInBytes)), name, {
    type
  })
  return file
}

/**
 * Builds a collection of `File` objects for testing
 * @param {number} count Number of files to create (default: 2)
 * @param {Pick<File, 'name' | 'size' | 'type'>} overrides Specific `File` properties to override
 * @returns {File[]}
 */
export const buildFiles = (count = 2, overrides = {}) => {
  const files = []
  for (let i = 0; i < count; i++) {
    files.push(buildFile(overrides))
  }

  return files
}

/**
 * Builds a `FileRejection` object for testing
 * @param {File} file
 * @returns {import('../file-uploader/src/utils/get-file-rejections').FileRejection}
 */
export const buildFileRejection = file => ({
  file,
  reason: faker.random.arrayElement(Object.values(FileRejectionReason)),
  message: faker.random.words()
})

/**
 * Returns a mock ref object in the shape of `{ current: jest.fn() }`
 */
export const mockRef = () => ({
  // eslint-disable-next-line no-undef
  current: jest.fn()
})
