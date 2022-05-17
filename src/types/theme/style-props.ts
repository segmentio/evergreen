import { EnhancerProps } from 'ui-box'
import { PropsOf, Without } from 'ui-box/dist/src/types/box-types'
import { PseudoSelectorMap } from './pseudo-selectors'
import { ThemeCallback } from './theme-callback'

export type _StyleProps = Without<EnhancerProps, PropsOf<'div'>>

export type StyleProps = {
  [Key in keyof _StyleProps & PseudoSelectorMap<_StyleProps>]: _StyleProps[Key] | ThemeCallback<_StyleProps[Key]>
}
