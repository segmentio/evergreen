/* @ts-ignore */
import { defineTest } from 'jscodeshift/dist/testUtils'

describe('replace-margin-top-default', () => {
  ;['replace-margin-top-default'].forEach(test => {
    defineTest(__dirname, 'replace-margin-top-default', { quote: 'single' }, test)
  })
})
