import { expectAssignable, expectType, expectError } from 'tsd'
import { defaultTheme, mergeTheme, StyleProps, Intent, Theme, Fill, Partial, Pick } from '.'

const themeOverridesOrAdditions: Partial<Pick<Theme, 'fills' | 'components'>> = {
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
expectType<Partial<StyleProps<'Button'>>>(customTheme.components.Button.appearances.minimal)
expectType<Partial<StyleProps<'Button'>>>(customTheme.components.Button.appearances.default)
expectType<Partial<StyleProps<'Button'>>>(customTheme.components.Button.appearances.destructive)
expectType<Partial<StyleProps<'Button'>>>(customTheme.components.Button.appearances.primary)

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
