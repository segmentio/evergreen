import { expectAssignable, expectType, expectError } from 'tsd'
import { defaultTheme, mergeTheme, StyleProps, Intent, Theme, Fill, Partial, Pick } from '.'

interface ThemeOverrides extends Partial<Pick<Theme, 'fills' | 'components'>> {
  fills: {
    awesomeBlue: Fill
  }
  components: {
    Button: {
      appearances: {
        primary: Partial<StyleProps<'Button'>>
        warning: Partial<StyleProps<'Button'>>
      }
    }
  }
}

const themeOverridesOrAdditions: ThemeOverrides = {
  fills: {
    awesomeBlue: {
      color: '#3492eb',
      backgroundColor: '#057ceb'
    }
  },
  components: {
    Button: {
      appearances: {
        primary: {
          color: 'white',
          backgroundColor: '#fc7ef8',
          _hover: {
            backgroundColor: '#fc03f0'
          },
          _focus: {
            boxShadow: '0 0 0 2px #fccafa'
          }
        },
        warning: {
          color: 'white',
          backgroundColor: '#fcef79'
        }
      }
    }
  }
}

// Test cases for default theme
expectType<string>(defaultTheme.colors.gray100)
expectType<Fill>(defaultTheme.fills.neutral)
expectType<string>(defaultTheme.fills.neutral.color)
expectType<string>(defaultTheme.fills.neutral.backgroundColor)
expectType<Intent>(defaultTheme.intents.info)
expectType<Intent>(defaultTheme.intents.danger)
expectType<Intent>(defaultTheme.intents.warning)
expectType<Intent>(defaultTheme.intents.success)
expectType<Partial<StyleProps<'Button'>>>(defaultTheme.components.Button.baseStyle)
expectType<Partial<StyleProps<'Button'>>>(defaultTheme.components.Button.sizes.small)
expectType<Partial<StyleProps<'Button'>>>(defaultTheme.components.Button.sizes.medium)
expectType<Partial<StyleProps<'Button'>>>(defaultTheme.components.Button.sizes.large)
expectType<Partial<StyleProps<'Button'>>>(defaultTheme.components.Button.appearances.minimal)
expectType<Partial<StyleProps<'Button'>>>(defaultTheme.components.Button.appearances.default)
expectType<Partial<StyleProps<'Button'>>>(defaultTheme.components.Button.appearances.destructive)
expectType<Partial<StyleProps<'Button'>>>(defaultTheme.components.Button.appearances.primary)
expectType<Partial<StyleProps<'Text'>>>(defaultTheme.components.Text.sizes[300])

expectAssignable<Theme>(mergeTheme(defaultTheme, themeOverridesOrAdditions))

// Test cases for a custom theme merged w/ default
const customTheme = mergeTheme(defaultTheme, themeOverridesOrAdditions)

// Ensure original theme values are still strongly typed
expectAssignable<StyleProps<'Button'>['backgroundColor']>(
  customTheme.components.Button.appearances.minimal.backgroundColor
)
// Ensure new values are strongly typed
expectAssignable<StyleProps<'Button'>['backgroundColor']>(
  customTheme.components.Button.appearances.warning.backgroundColor
)

// Ensure original theme values are still strongly typed
expectType<string>(customTheme.colors.gray100)
expectType<Fill>(customTheme.fills.neutral)
expectType<string>(customTheme.fills.neutral.color)
expectType<string>(customTheme.fills.neutral.backgroundColor)
expectType<Intent>(customTheme.intents.info)
expectType<Intent>(customTheme.intents.danger)
expectType<Intent>(customTheme.intents.warning)
expectType<Intent>(customTheme.intents.success)
expectType<Partial<StyleProps<'Button'>>>(customTheme.components.Button.baseStyle)
expectType<Partial<StyleProps<'Button'>>>(customTheme.components.Button.sizes.small)
expectType<Partial<StyleProps<'Button'>>>(customTheme.components.Button.sizes.medium)
expectType<Partial<StyleProps<'Button'>>>(customTheme.components.Button.sizes.large)
expectType<Partial<StyleProps<'Button'>>>(customTheme.components.Button.appearances.minimal)
expectType<Partial<StyleProps<'Button'>>>(customTheme.components.Button.appearances.default)
expectType<Partial<StyleProps<'Button'>>>(customTheme.components.Button.appearances.destructive)
expectType<Partial<StyleProps<'Button'>>>(customTheme.components.Button.appearances.primary)
expectType<Partial<StyleProps<'Text'>>>(customTheme.components.Text.sizes[300])

// Ensure new values are strongly typed
expectAssignable<Fill>(customTheme.fills.awesomeBlue)

// Negative case - attempting to reference pseudoselector not defined in index.d.ts
const themeWithNonExistentPseudoSelector = {
  components: {
    Button: {
      baseStyle: {
        _doesNotExist: {
          backgroundColor: '#fc03f0'
        }
      }
    }
  }
}
expectError(mergeTheme(defaultTheme, themeWithNonExistentPseudoSelector))
