import { defineTest } from 'jscodeshift/dist/testUtils.js'

jest.mock('../replace-margin-top-default', () => {
  return Object.assign(
    require.requireActual('../replace-margin-top-default'),
    {
      parser: 'tsx',
    }
  )
})

describe('replace-margin-top-default', () => {
  ['replace-margin-top-default'].forEach(test => {
    defineTest(
      __dirname,
      'replace-margin-top-default',
      { quote: 'single' },
      test
    )
  })
})
