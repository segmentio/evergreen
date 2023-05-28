/* @ts-ignore */
import { defineTest } from 'jscodeshift/dist/testUtils'

describe('replace-icon-imports', () => {
  ;['replace-icon-imports'].forEach(test => {
    defineTest(__dirname, 'replace-icon-imports', { quote: 'single' }, test)
  })
})
