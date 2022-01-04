import { expectAssignable, expectType } from 'tsd'
import { defaultTheme, mergeTheme, StyleProps, Intent, Theme, Fill } from '.'

// For some the TS language server picks this up but tsd can't, so we're redefining it
type Partial<T> = { [P in keyof T]?: T[P] }

const themeOverridesOrAdditions = {
  components: {
    Button: {
      appearances: {
        primary: {
          color: 'white',
          backgroundColor: '#fc03f0'
        },
        warning: {
          color: 'white',
          backgroundColor: '#fcef79'
        }
      }
    }
  }
}

// Expect defaultTheme to have these values strongly typed
expectType<string>(defaultTheme.colors.gray100)

expectType<Fill>(defaultTheme.fills.neutral)
expectType<string>(defaultTheme.fills.neutral.color)
expectType<string>(defaultTheme.fills.neutral.backgroundColor)
expectType<Intent>(defaultTheme.intents.info)
expectType<Partial<StyleProps<'Button'>>>(defaultTheme.components.Button.appearances.minimal)

expectAssignable<Theme>(mergeTheme(defaultTheme, themeOverridesOrAdditions))

const customTheme = mergeTheme(defaultTheme, themeOverridesOrAdditions)
// Ensure original theme values are still strongly typed
expectAssignable<StyleProps<'Button'>['backgroundColor']>(
  customTheme.components.Button.appearances.minimal.backgroundColor
)
// Ensure new values are strongly typed
expectAssignable<StyleProps<'Button'>['backgroundColor']>(
  customTheme.components.Button.appearances.warning.backgroundColor
)
