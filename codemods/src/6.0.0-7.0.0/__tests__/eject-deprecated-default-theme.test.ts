/* @ts-ignore */
import { defineTest } from 'jscodeshift/dist/testUtils'

describe('eject-deprecated-default-theme', () => {
  ;['eject-deprecated-default-theme'].forEach(test => {
    defineTest(__dirname, 'eject-deprecated-default-theme', { quote: 'single' }, test)
  })
})
