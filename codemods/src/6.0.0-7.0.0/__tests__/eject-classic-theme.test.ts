/* @ts-ignore */
import { defineTest } from 'jscodeshift/dist/testUtils'

describe('eject-classic-theme', () => {
  ;['eject-classic-theme'].forEach(test => {
    defineTest(__dirname, 'eject-classic-theme', { quote: 'single' }, test)
  })
})
