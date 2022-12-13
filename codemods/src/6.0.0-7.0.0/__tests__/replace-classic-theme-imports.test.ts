/* @ts-ignore */
import { defineTest } from 'jscodeshift/dist/testUtils'

describe('replace-classic-theme-imports', () => {
  ;['replace-classic-theme-imports', 'replace-classic-theme-imports.alias'].forEach(test => {
    defineTest(__dirname, 'replace-classic-theme-imports', { quote: 'single', localPath: 'themes/classic-theme' }, test)
  })
})
