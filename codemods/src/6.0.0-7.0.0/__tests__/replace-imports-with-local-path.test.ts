/* @ts-ignore */
import { defineTest } from 'jscodeshift/dist/testUtils'

describe('replace-imports-with-local-path', () => {
  ;[
    'replace-imports-with-local-path',
    'replace-imports-with-local-path.alias',
    'replace-imports-with-local-path.skip-already-imported'
  ].forEach(test => {
    defineTest(
      __dirname,
      'replace-imports-with-local-path',
      { quote: 'single', localPath: 'themes/classic-theme', importName: 'classicTheme' },
      test
    )
  })
})
