import { faker } from '@faker-js/faker'
import { MimeType, FileRejectionReason } from '../constants'
import { FileRejection } from '../file-uploader/src/types/file-rejection'

/**
 * Builds a `File` object for testing
 * @param overrides Specific `File` properties to override
 */
export const buildFile = (overrides: Partial<Pick<File, 'name' | 'size' | 'type'>> = {}): File => {
  const maxSizeInBytes = 10 * 1024 ** 2
  const {
    name = faker.system.fileName(),
    size = faker.datatype.number({ min: 1024, max: 1024 * 3 }),
    type = MimeType.gif
  } = overrides

  // Allocate an array the given size, but set a reasonable ceiling for testing
  const file = new File((Buffer.alloc(Math.min(size, maxSizeInBytes)) as any) as BlobPart[], name, {
    type
  })
  return file
}

/**
 * Builds a collection of `File` objects for testing
 * @param count Number of files to create (default: 2)
 * @param overrides Specific `File` properties to override
 */
export const buildFiles = (
  count: number = 2,
  overrides: Partial<Pick<File, 'name' | 'size' | 'type'>> = {}
): File[] => {
  const files = []
  for (let i = 0; i < count; i++) {
    files.push(buildFile(overrides))
  }

  return files
}

/**
 * Builds a `FileRejection` object for testing
 */
export const buildFileRejection = (file: File): FileRejection => ({
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
