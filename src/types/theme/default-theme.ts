import { DefaultThemeAppearances, DefaultThemeSizes } from '../../themes/default/components'
import { DefaultThemeColors } from '../../themes/default/tokens/colors'
import { DefaultThemeFills } from '../../themes/default/tokens/fills'
import { DefaultThemeIntents } from '../../themes/default/tokens/intents'
import { Components } from './components'
import { StyleProps } from './style-props'
import { Theme } from './theme'

export interface DefaultTheme extends Theme {
  colors: DefaultThemeColors
  fills: DefaultThemeFills
  intents: DefaultThemeIntents
  components: {
    [Component in Components]: {
      baseStyle: StyleProps
      appearances: { [key in DefaultThemeAppearances<Component>]: StyleProps }
      sizes: { [key in DefaultThemeSizes<Component>]: StyleProps }
    }
  }
}
