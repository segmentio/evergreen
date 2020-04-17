import { defineTest } from 'jscodeshift/dist/testUtils.js'

jest.mock('../replace-icon-imports', () => {
  return Object.assign(
    require.requireActual('../replace-icon-imports'),
    {
      parser: 'tsx',
    }
  )
})

describe('replace-icon-imports', () => {
  ['replace-icon-imports'].forEach(test => {
    defineTest(
      __dirname,
      'replace-icon-imports',
      { quote: 'single' },
      test
    )
  })
})
