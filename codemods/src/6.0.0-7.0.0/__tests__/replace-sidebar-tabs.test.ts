/* @ts-ignore */
import { defineTest } from 'jscodeshift/dist/testUtils'

describe('replace-sidebar-tabs', () => {
  ;['replace-sidebar-tabs', 'replace-sidebar-tabs.ignore-non-evergreen-imports'].forEach((test) => {
    defineTest(__dirname, 'replace-sidebar-tabs', { quote: 'single' }, test)
  })
})
