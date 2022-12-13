/* @ts-ignore */
import { defineTest } from 'jscodeshift/dist/testUtils'

describe('replace-deprecated-default-theme-imports', () => {
  ;[
    'replace-deprecated-default-theme-imports',
    'replace-deprecated-default-theme-imports.alias',
    'replace-deprecated-default-theme-imports.skip-already-imported'
  ].forEach(test => {
    defineTest(
      __dirname,
      'replace-deprecated-default-theme-imports',
      { quote: 'single', localPath: 'themes/deprecated-default-theme' },
      test
    )
  })
})
