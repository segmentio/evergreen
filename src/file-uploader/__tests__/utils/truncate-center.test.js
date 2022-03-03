import truncateCenter from '../../src/utils/truncate-center'

describe('truncateCenter', () => {
  it('should not truncate string when length less than maximumChars', () => {
    const input = 'a'.repeat(100)
    const maximumChars = input.length + 1

    const result = truncateCenter(input, maximumChars)

    expect(result).toBe(input)
  })

  it('should not truncate string when length equal to maximumChars', () => {
    const input = 'a'.repeat(100)
    const maximumChars = input.length

    const result = truncateCenter(input, maximumChars)

    expect(result).toBe(input)
  })

  test.each`
    value                                          | maximumChars | expected
    ${'Screen Shot 2022-02-08 at 10.01.41 AM.png'} | ${10}        | ${'Scre...png'}
    ${'Screen Shot 2022-02-08 at 10.01.41 AM.png'} | ${20}        | ${'Screen Sh...1 AM.png'}
  `('should truncate $value to $expected when maximumChars is $maximumChars', ({ expected, maximumChars, value }) => {
    expect(truncateCenter(value, maximumChars)).toBe(expected)
  })
})
