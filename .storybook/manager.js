import { addons } from '@storybook/addons'
import theme from './theme'

addons.setConfig({
  theme,
  /** Whether or not to show the add-on panel by default */
  showPanel: false
})
