/* @ts-ignore */
import { defineTest } from 'jscodeshift/dist/testUtils'

describe('replace-deprecated-default-theme-imports', () => {
  ;['replace-deprecated-default-theme-imports'].forEach(test => {
    defineTest(
      __dirname,
      'replace-deprecated-default-theme-imports',
      { quote: 'single', localPath: 'themes/deprecated-default-theme' },
      test
    )
  })
})
