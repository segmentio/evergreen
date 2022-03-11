import { faker } from '@faker-js/faker'
import arrayToCsv from '../array-to-csv'

describe('arrayToCsv', () => {
  it.each([undefined, null, '', []])('should return an empty string when value is %p', value => {
    const result = arrayToCsv(value)

    expect(result).toBe('')
  })

  it('should return comma separated string of values', () => {
    const values = faker.random.words(10).split(' ')

    const result = arrayToCsv(values)

    expect(result).toStrictEqual(values.join(','))
  })
})
