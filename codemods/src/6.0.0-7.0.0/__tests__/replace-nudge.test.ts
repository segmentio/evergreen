/* @ts-ignore */
import { defineTest } from 'jscodeshift/dist/testUtils'

describe('replace-nudge', () => {
  ;['replace-nudge', 'replace-nudge.remove-unnecessary-import'].forEach((test) => {
    defineTest(__dirname, 'replace-nudge', { quote: 'single' }, test)
  })
})
