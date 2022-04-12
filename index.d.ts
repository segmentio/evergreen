/* tslint:disable:interface-name max-classes-per-file no-empty-interface */

import * as React from 'react'
import { extractStyles as boxExtractStyles } from 'ui-box'

export { configureSafeHref, BoxProps, BoxOwnProps, BoxComponent, PolymorphicBoxProps, EnhancerProps } from 'ui-box'

// Re-exporting these utility types for testing + consumer usage if needed
export type Pick<T, Properties extends keyof T> = { [Key in Properties]: T[Key] }
export type Partial<T> = { [Key in keyof T]?: T[Key] }

export type PositionTypes =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'right'
export type IntentTypes = string
export type DefaultAppearance = 'default'
export type Small = 'small'
export type Medium = 'medium'
export type Large = 'large'
export type StandardSizes = Small | Medium | Large
export type AlertAppearance = DefaultAppearance | 'card'
export type ButtonAppearance = string
export type CodeAppearance = DefaultAppearance | 'minimal'
export type CheckboxAppearance = DefaultAppearance
export type IconButtonAppearance = DefaultAppearance | 'minimal' | 'primary'
export type TextInputAppearance = DefaultAppearance | 'primary'
export type TooltipAppearance = DefaultAppearance | 'card'
export type PositionState = 'exited' | 'entering' | 'entered' | 'exiting'
export type FontFamily = 'ui' | 'display' | 'mono'
export type Elevation = 0 | 1 | 2 | 3 | 4
export type FontSizeSmall = 300 | 400
export type HeadingSize = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
export type Size = number | string

export type Components =
  | 'Alert'
  | 'Avatar'
  | 'Badge'
  | 'Button'
  | 'Card'
  | 'Checkbox'
  | 'Code'
  | 'FileCard'
  | 'FileUploader'
  | 'Group'
  | 'Heading'
  | 'Icon'
  | 'InlineAlert'
  | 'Input'
  | 'Label'
  | 'List'
  | 'Link'
  | 'MenuItem'
  | 'Pane'
  | 'Paragraph'
  | 'Radio'
  | 'Select'
  | 'Spinner'
  | 'Switch'
  | 'Tab'
  | 'TableCell'
  | 'TableHead'
  | 'TableRow'
  | 'TagInput'
  | 'Text'
  | 'TextDropdownButton'
  | 'Tooltip'

type ButtonPseudoSelectors = '_active' | '_disabled' | '_focus' | '_focusAndActive' | '_hover' | '_disabled'
type CheckboxPseudoSelectors =
  | '_base'
  | '_disabled'
  | '_hover'
  | '_focus'
  | '_active'
  | '_checked'
  | '_checkedActive'
  | '_checkedDisabled'
  | '_checkedHover'
type GroupPseudoSelectors = '_child' | '_firstChild' | '_middleChild' | '_lastChild' | '&:focus' | '&:active'
type FileCardPseudoSelectors = '_invalid'
type FileUploaderPseudoSelectors =
  | '_focus'
  | '_hover'
  | '_hoverBrowseCopy'
  | '_hoverOrDragCopy'
  | '_disabled'
  | '_dragHover'
  | '_invalid'
type InputPseudoSelectors = '_placeholder' | '_disabled' | '_focus' | '_invalid'
type LinkPseudoSelectors = '_hover' | '_active' | '_focus'
type MenuItemPseudoSelectors = '_isSelectable' | '_disabled' | '_hover' | '_focus' | '_active' | '_current' | '&:before'
type RadioPseudoSelectors =
  | '_base'
  | '_disabled'
  | '_hover'
  | '_focus'
  | '_active'
  | '_checked'
  | '_checkedHover'
  | '_checkedActive'
  | '_checkedDisabled'
type SelectPseudoSelectors = '_disabled' | '_hover' | '_invalid' | '_focus' | '_active'
type SwitchPseudoSelectors =
  | '_base'
  | '_disabled'
  | '_hover'
  | '_focus'
  | '_active'
  | '_checked'
  | '_checkedHover'
  | '_checkedActive'
  | '_checkedDisabled'
type TabPseudoSelectors = '_before' | '_hover' | '_current' | '_focus' | '_disabled'
type TableCellPseudoSelectors = '_focus'
type TableRowPseudoSelectors = '_isSelectable' | '_hover' | '_focus' | '_active' | '_current'
type TagInputPseudoSelectors = '_focused' | '_disabled'
type TextDropdownButtonPseudoSelectors = '_disabled' | '_focus'

type ComponentAppearances<C extends Components = Components> = C extends 'Button'
  ? DefaultThemeButtonAppearance
  : C extends 'Input'
  ? DefaultThemeInputAppearance
  : C extends 'Tooltip'
  ? DefaultThemeTooltipAppearance
  : C extends 'Tab'
  ? DefaultThemeTabAppearance
  : C extends
      | 'Checkbox'
      | 'Code'
      | 'MenuItem'
      | 'Radio'
      | 'Select'
      | 'Switch'
      | 'Tab'
      | 'TableCell'
      | 'TableRow'
      | 'TagInput'
  ? DefaultAppearance
  : ''

type ComponentSizes<C extends Components = Components> = C extends 'Button'
  ? DefaultThemeButtonSize
  : C extends 'Text'
  ? DefaultThemeTextSize
  : C extends 'Heading'
  ? DefaultThemeHeadingSize
  : C extends 'Input'
  ? DefaultThemeInputSize
  : C extends 'Label'
  ? DefaultThemeLabelSize
  : C extends 'Paragraph'
  ? DefaultThemeParagraphSize
  : C extends 'Select'
  ? DefaultThemeSelectSize
  : C extends 'Spinner'
  ? DefaultThemeSpinnerSize
  : C extends 'TextDropdownButton'
  ? DefaultThemeTextDropdownButtonSize
  : ''

type ComponentPseudoSelectors<C extends Components = Components> = C extends 'Button'
  ? ButtonPseudoSelectors
  : C extends 'Checkbox'
  ? CheckboxPseudoSelectors
  : C extends 'FileCard'
  ? FileCardPseudoSelectors
  : C extends 'FileUploader'
  ? FileUploaderPseudoSelectors
  : C extends 'Group'
  ? GroupPseudoSelectors
  : C extends 'Input'
  ? InputPseudoSelectors
  : C extends 'Link'
  ? LinkPseudoSelectors
  : C extends 'MenuItem'
  ? MenuItemPseudoSelectors
  : C extends 'Radio'
  ? RadioPseudoSelectors
  : C extends 'Select'
  ? SelectPseudoSelectors
  : C extends 'Switch'
  ? SwitchPseudoSelectors
  : C extends 'Tab'
  ? TabPseudoSelectors
  : C extends 'TableCell'
  ? TableCellPseudoSelectors
  : C extends 'TableRow'
  ? TableRowPseudoSelectors
  : C extends 'TagInput'
  ? TagInputPseudoSelectors
  : C extends 'TextDropdownButton'
  ? TextDropdownButtonPseudoSelectors
  : ''

export type DefaultThemeButtonSize = StandardSizes
export type DefaultThemeTextSize = 300 | 400 | 500 | 600 | StandardSizes
export type DefaultThemeHeadingSize = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
export type DefaultThemeInputAppearance = DefaultAppearance | 'none'
export type DefaultThemeInputSize = StandardSizes
export type DefaultThemeLabelSize = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
export type DefaultThemeParagraphSize = 300 | 400 | 500 | 600 | StandardSizes
export type DefaultThemeSelectSize = StandardSizes
export type DefaultThemeSpinnerSize = StandardSizes
export type DefaultThemeTextDropdownButtonSize = StandardSizes
export type DefaultThemeTooltipAppearance = 'card' | DefaultAppearance
export type DefaultThemeTabAppearance = 'primary' | 'secondary'
export type DefaultThemeButtonAppearance = DefaultAppearance | 'minimal' | 'destructive' | 'primary'
export type DefaultThemeFill = 'neutral' | 'blue' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'purple'
export type DefaultThemeIntent = 'info' | 'success' | 'warning' | 'danger'
export type DefaultThemeColors =
  | 'gray900'
  | 'gray800'
  | 'gray700'
  | 'gray600'
  | 'gray500'
  | 'gray400'
  | 'gray300'
  | 'gray200'
  | 'gray100'
  | 'gray90'
  | 'gray75'
  | 'gray50'
  | 'white'
  | 'blue900'
  | 'blue800'
  | 'blue700'
  | 'blue600'
  | 'blue500'
  | 'blue400'
  | 'blue300'
  | 'blue200'
  | 'blue100'
  | 'blue50'
  | 'blue25'
  | 'red700'
  | 'red600'
  | 'red500'
  | 'red300'
  | 'red100'
  | 'red25'
  | 'green900'
  | 'green800'
  | 'green700'
  | 'green600'
  | 'green500'
  | 'green400'
  | 'green300'
  | 'green200'
  | 'green100'
  | 'green25'
  | 'orange700'
  | 'orange500'
  | 'orange100'
  | 'orange25'
  | 'purple600'
  | 'purple100'
  | 'teal800'
  | 'teal100'
  | 'yellow800'
  | 'yellow100'
  | 'muted'
  | 'default'
  | 'dark'
  | 'selected'
  | 'tint1'
  | 'tint2'
  | 'overlay'
  | 'yellowTint'
  | 'greenTint'
  | 'orangeTint'
  | 'redTint'
  | 'blueTint'
  | 'purpleTint'
  | 'tealTint'

/** START DEPRECATED THEME */
interface DeprecatedColors {
  background: {
    blueTint: string
    greenTint: string
    orangeTint: string
    overlay: string
    purpleTint: string
    redTint: string
    tealTint: string
    tint1: string
    tint2: string
    yellowTint: string
  }
  border: {
    default: string
    muted: string
  }
  icon: {
    danger: string
    default: string
    disabled: string
    info: string
    muted: string
    selected: string
    success: string
    warning: string
  }
  intent: {
    danger: string
    none: string
    success: string
    warning: string
  }
  text: {
    danger: string
    dark: string
    default: string
    info: string
    muted: string
    selected: string
    success: string
    warning: string
  }
}

interface DeprecatedSolidFills {
  blue: {
    backgroundColor: string
    color: string
  }
  green: {
    backgroundColor: string
    color: string
  }
  neutral: {
    backgroundColor: string
    color: string
  }
  orange: {
    backgroundColor: string
    color: string
  }
  purple: {
    backgroundColor: string
    color: string
  }
  red: {
    backgroundColor: string
    color: string
  }
  teal: {
    backgroundColor: string
    color: string
  }
  yellow: {
    backgroundColor: string
    color: string
  }
}

interface DeprecatedSubtleFills {
  blue: {
    backgroundColor: string
    color: string
  }
  green: {
    backgroundColor: string
    color: string
  }
  neutral: {
    backgroundColor: string
    color: string
  }
  orange: {
    backgroundColor: string
    color: string
  }
  purple: {
    backgroundColor: string
    color: string
  }
  red: {
    backgroundColor: string
    color: string
  }
  teal: {
    backgroundColor: string
    color: string
  }
  yellow: {
    backgroundColor: string
    color: string
  }
}

interface DeprecatedFills {
  options: string[]
  solid: DeprecatedSolidFills
  subtle: DeprecatedSubtleFills
}

interface DeprecatedPalette {
  blue: {
    base: string
    dark: string
    light: string
    lightest: string
  }
  green: {
    base: string
    dark: string
    light: string
    lightest: string
  }
  neutral: {
    base: string
    dark: string
    light: string
    lightest: string
  }
  orange: {
    base: string
    dark: string
    light: string
    lightest: string
  }
  purple: {
    base: string
    dark: string
    light: string
    lightest: string
  }
  red: {
    base: string
    dark: string
    light: string
    lightest: string
  }
  teal: {
    base: string
    dark: string
    light: string
    lightest: string
  }
  yellow: {
    base: string
    dark: string
    light: string
    lightest: string
  }
}

interface DeprecatedColorScales {
  blue: {
    B1: string
    B10: string
    B1A: string
    B2: string
    B2A: string
    B3: string
    B3A: string
    B4: string
    B4A: string
    B5: string
    B5A: string
    B6: string
    B6A: string
    B7: string
    B7A: string
    B8: string
    B8A: string
    B9: string
  }
  neutral: {
    N1: string
    N10: string
    N1A: string
    N2: string
    N2A: string
    N3: string
    N3A: string
    N4: string
    N4A: string
    N5: string
    N5A: string
    N6: string
    N6A: string
    N7: string
    N7A: string
    N8: string
    N8A: string
    N9: string
  }
}

interface DeprecatedTypography {
  fontFamilies: {
    display: string
    mono: string
    ui: string
  }
  paragraph: {
    300: {
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
    400: {
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
    500: {
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
  }
  headings: {
    100: {
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
    200: {
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
    300: {
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
    400: {
      fontFamily: string
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
    500: {
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
    600: {
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
    700: {
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
    800: {
      fontFamily: string
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
    900: {
      fontFamily: string
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
  }
  text: {
    300: {
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
    400: {
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
    500: {
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
    600: {
      fontFamily: string
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
  }
}

interface DeprecatedDefaultTheme {
  colors: DeprecatedColors
  scales: DeprecatedColorScales
  typography: DeprecatedTypography
  fills: DeprecatedFills
  palette: DeprecatedPalette
}

export const deprecatedDefaultTheme: DeprecatedDefaultTheme

/** END DEPRECATED THEME  */

interface UsePaginationBehaviorInput {
  page?: number
}

interface UsePaginationBehaviorOutput extends Required<UsePaginationBehaviorInput> {
  onNextPage: () => void
  onPreviousPage: () => void
  onPageChange: (page: number) => void
}

export declare const usePaginationBehavior: (input: UsePaginationBehaviorInput) => UsePaginationBehaviorOutput

export class Portal extends React.Component {}

export interface GetPositionInput {
  position: PositionTypes
  dimensions: {
    height: number
    width: number
  }
  viewport: {
    height: number
    width: number
  }
  targetRect: DOMRect
  targetOffset: number
  viewportOffset?: number
}
export interface GetPositionOutput {
  rect: DOMRect
  position: PositionTypes
  transformOrigin: string
}
export declare const getPosition: (params: GetPositionInput) => GetPositionOutput

export declare const StackingContext: React.Context<number>

export const StackingOrder: {
  FOCUSED: number
  STACKING_CONTEXT: number
  POSITIONER: number
  OVERLAY: number
  TOASTER: number
}

export function extractStyles(options?: {
  nonce?: React.ScriptHTMLAttributes<'script'>['nonce']
}): {
  css: string
  cache: {
    uiBoxCache: ReturnType<typeof boxExtractStyles>['cache']
    glamorIds: string[]
  }
  hydrationScript: JSX.Element
}

// ====================================================
// The following component types have yet to be defined
// ====================================================

export declare const OptionShapePropType: unknown
export declare const SelectedPropType: unknown
