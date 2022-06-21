/* tslint:disable:interface-name max-classes-per-file no-empty-interface */

import * as React from 'react'
import { extractStyles as boxExtractStyles, BoxProps, BoxComponent, PolymorphicBoxProps } from 'ui-box'
import { StyleAttribute, CSSProperties } from 'glamor'
import { DownshiftProps } from 'downshift'
import { TransitionProps, TransitionStatus } from 'react-transition-group/Transition'

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
  | 'DialogBody'
  | 'DialogFooter'
  | 'DialogHeader'
  | 'FileCard'
  | 'FileUploader'
  | 'Group'
  | 'Heading'
  | 'Icon'
  | 'InlineAlert'
  | 'Input'
  | 'Label'
  | 'Link'
  | 'List'
  | 'MenuItem'
  | 'Option'
  | 'Pane'
  | 'Paragraph'
  | 'Radio'
  | 'Select'
  | 'Spinner'
  | 'Switch'
  | 'Tab'
  | 'Table'
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
type OptionPseudoSelectors = '_active' | '_before' | '_disabled' | '_focus' | '_hover' | '_isSelectable' | '_selected'
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
  : C extends 'Option'
  ? OptionPseudoSelectors
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

type BaseHTMLElement<T extends Components = Components> = T extends 'Button' | 'IconButton' | 'TextDropdownButton'
  ? 'button'
  : T extends 'Icon'
  ? 'svg'
  : T extends 'Paragraph'
  ? 'p'
  : T extends 'Link'
  ? 'a'
  : T extends 'Text' | 'Tab'
  ? 'span'
  : T extends 'Checkbox' | 'Input'
  ? 'input'
  : T extends 'Label'
  ? 'label'
  : 'div'

/** Allow these properties to be tokenizable (i.e. assignable as a string) */
type TokenizableProps = 'elevation' | 'fontWeight' | 'zIndex'

type PolymorphicBoxPropsOrTokens<T extends Components = Components> = Omit<
  PolymorphicBoxProps<BaseHTMLElement<T>>,
  TokenizableProps
> &
  { [key in TokenizableProps]?: string }

export type StyleProps<T extends Components = Components> = {
  [key in ComponentPseudoSelectors<T>]: PolymorphicBoxPropsOrTokens<T>
} &
  PolymorphicBoxPropsOrTokens<T>

export type ComponentStyle<T extends Components = Components> = {
  baseStyle?: Partial<StyleProps<T>>
  appearances?: { [appearance: string]: Partial<StyleProps<T>> }
  sizes?: { [size: Size]: Partial<StyleProps<T>> }
}

export type ComponentStyles<T extends Components = Components> = {
  [Component in T]: Partial<ComponentStyle<Component>>
}

export interface Theme<TComponents extends Components = Components> {
  colors: { [color: string]: Color<string | string[] | { [group: string]: Color }> }
  fills: { [fill: string]: Fill }
  intents: { [intent: string]: Intent }
  fontFamilies: FontFamilies
  radii: string[]
  shadows: string[] & { focusRing: string }
  fontSizes: string[]
  fontWeights: FontWeights
  letterSpacings: LettingSpacings
  lineHeights: string[]
  zIndices: ZIndices
  components: Partial<ComponentStyles<TComponents>>
}

export type Color<T extends string | string[] | { [group: string]: Color } = string> = T
export interface Fill {
  backgroundColor: string
  color: string
}

export interface Intent {
  background: string
  border: string
  text: string
  icon: string
}

export interface FontFamilies {
  display: string
  ui: string
  mono: string
}

export interface FontWeights {
  light: number
  normal: number
  semibold: number
  bold: number
}

export interface LettingSpacings {
  tightest: string
  tighter: string
  tight: string
  normal: string
  wide: string
}

export interface ZIndices {
  focused: number
  stack: number
  positioner: number
  overlay: number
  toaster: number
}

export interface DefaultTheme extends Theme {
  colors: { [color in DefaultThemeColors]: Color } & {
    border: Color<{ default: string; muted: string }>
    icon: Color<{
      default: string
      muted: string
      disabled: string
      selected: string
    }>
    text: Color<{ danger: string; success: string; info: string }>
  }
  fills: { [fill in DefaultThemeFill]: Fill }
  intents: { [intent in DefaultThemeIntent]: Intent }
  components: {
    [Component in Components]: {
      baseStyle: Partial<StyleProps<Component>>
      appearances: Record<string & ComponentAppearances<Component>, Partial<StyleProps<Component>>>
      sizes: Record<Size & ComponentSizes<Component>, Partial<StyleProps<Component>>>
    }
  }
}

export const defaultTheme: DefaultTheme

export const classicTheme: Theme

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

/**
 * Basic error codes for why a file is rejected or in an errored state
 */
export enum FileRejectionReason {
  FileTooLarge = 'FILE_TOO_LARGE',
  InvalidFileType = 'INVALID_FILE_TYPE',
  OverFileLimit = 'OVER_FILE_LIMIT',
  Unknown = 'UNKNOWN'
}

/**
 * Non-exhaustive list of common MimeTypes
 */
export enum MimeType {
  css = 'text/css',
  csv = 'text/csv',
  doc = 'application/msword',
  docx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  gif = 'image/gif',
  gz = 'application/gzip',
  ico = 'image/vnd.microsoft.icon',
  jpeg = 'image/jpeg',
  js = 'text/javascript',
  json = 'application/json',
  mp3 = 'audio/mpeg',
  mp4 = 'video/mp4',
  mpeg = 'video/mpeg',
  pdf = 'application/pdf',
  png = 'image/png',
  ppt = 'application/vnd.ms-powerpoint',
  pptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  rar = 'application/vnd.rar',
  rtf = 'application/rtf',
  svg = 'image/svg+xml',
  tar = 'application/x-tar',
  tiff = 'image/tiff',
  txt = 'text/plain',
  wav = 'audio/wav',
  webp = 'image/webp',
  xls = 'application/vnd.ms-excel',
  xlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  xml = 'application/xml',
  zip = 'application/zip'
}

export enum Position {
  TOP = 'top',
  TOP_LEFT = 'top-left',
  TOP_RIGHT = 'top-right',
  BOTTOM = 'bottom',
  BOTTOM_LEFT = 'bottom-left',
  BOTTOM_RIGHT = 'bottom-right',
  LEFT = 'left',
  RIGHT = 'right'
}

type ForwardRefComponent<P = {}, T = any> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<P> & React.RefAttributes<T>
>

export interface AlertOwnProps extends PaneOwnProps {
  intent?: IntentTypes
  title?: React.ReactNode
  /**
   * When true, show a icon on the left matching the type,
   */
  hasIcon?: boolean
  /**
   * When true, show a remove icon button.
   */
  isRemoveable?: boolean
  /**
   * Function called when the remove button is clicked.
   */
  onRemove?: (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void
  /**
   * The appearance of the alert.
   */
  appearance?: AlertAppearance
}

export type AlertProps = PolymorphicBoxProps<'div', AlertOwnProps>
export declare const Alert: BoxComponent<AlertOwnProps, 'div'>

interface OptionProps extends TableRowOwnProps {
  height?: number | string
  label?: string
  icon?: string
  disabled?: boolean
}

export interface AutocompleteItemProps extends OptionProps {
  children?: JSX.Element | null
}

export declare const AutocompleteItem: ForwardRefComponent<AutocompleteItemProps>

// https://github.com/downshift-js/downshift
export interface AutocompleteProps extends Omit<DownshiftProps<any>, 'children'> {
  title?: React.ReactNode
  items: any[]
  allowOtherValues?: boolean
  renderItem?: (i: AutocompleteItemProps) => JSX.Element | null
  itemsFilter?: (items: string[], input: string) => string[]
  children: (props: {
    toggle: () => void
    getRef: React.Ref<any>
    isShown: NonNullable<PopoverProps['isShown']>
    getInputProps: <T>(
      options?: T
    ) => T & {
      onChange: (event: React.ChangeEvent) => void
      onKeyDown: (event: React.KeyboardEvent) => void
      onBlur: (event: React.FocusEvent) => void
      id: string
      value: string
      'aria-autocomplete': 'list'
      'aria-activedescendant'?: string
      'aria-controls'?: string
      'aria-labelledby': string
      autoComplete: 'off'
    }
    openMenu: () => any
    inputValue: string
  }) => React.ReactNode
  itemSize?: number
  position?: PositionTypes
  isFilterDisabled?: boolean
  popoverMinWidth?: number
  popoverMaxHeight?: number
  selectedItem?: any
  buttonProps?: ButtonOwnProps
  onChange: (selectedItem: any) => void
}

export declare const Autocomplete: ForwardRefComponent<AutocompleteProps>

export interface AvatarOwnProps {
  src?: string
  size?: number
  /**
   * When provided, the first and last initial of the name will be used.
   * For example: Foo Bar -> FB
   */
  name?: string | null
  hashValue?: string
  color?: string
  shape?: 'round' | 'square'
  getInitials?: (name: string) => string
  forceShowInitials?: boolean
  sizeLimitOneCharacter?: number
}

export type AvatarProps = PolymorphicBoxProps<'div', AvatarOwnProps>
export declare const Avatar: BoxComponent<AvatarOwnProps>

export interface BadgeOwnProps extends StrongOwnProps {
  /**
   * The color used for the badge. When the value is `automatic`, use the hash function to determine the color.
   */
  color?: 'automatic' | 'neutral' | 'blue' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'purple'
  /**
   * Whether or not to apply hover/focus/active styles.
   */
  isInteractive?: boolean
}

export type BadgeProps = PolymorphicBoxProps<'strong', BadgeOwnProps>
export declare const Badge: BoxComponent<BadgeOwnProps, 'strong'>

export interface ButtonOwnProps {
  intent?: IntentTypes
  appearance?: ButtonAppearance
  /**
   * When true, show a loading spinner before the children.
   * This also disables the button.
   */
  isLoading?: boolean
  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive?: boolean
  /**
   * Sets an icon before the text. Can be any icon from Evergreen or a custom icon library.
   */
  iconBefore?: React.ElementType | JSX.Element | null | false
  /**
   * Sets an icon after the text. Can be any icon from Evergreen or a custom icon library.
   */
  iconAfter?: React.ElementType | JSX.Element | null | false
  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled?: boolean
  /**
   * Class name passed to the button.
   */
  className?: string
  /**
   * Size of the button
   */
  size?: 'small' | 'medium' | 'large'
}

export type ButtonProps = PolymorphicBoxProps<'button', ButtonOwnProps>
export declare const Button: BoxComponent<ButtonOwnProps, 'button'>

export type CardOwnProps = PaneOwnProps
export type CardProps = PolymorphicBoxProps<'div', CardOwnProps>
export declare const Card: BoxComponent<CardOwnProps, 'div'>

export interface CheckboxOwnProps {
  /**
   * The id attribute of the checkbox.
   */
  id?: string
  /**
   * The id attribute of the radio.
   */
  name?: string
  /**
   * Label of the checkbox.
   */
  label?: React.ReactNode
  /**
   * The value attribute of the radio.
   */
  value?: string
  /**
   * The checked attribute of the radio.
   */
  checked?: boolean
  /**
   * State in addition to "checked" and "unchecked".
   * When true, the radio displays a "minus" icon.
   */
  indeterminate?: boolean
  /**
   * When true, the radio is disabled.
   */
  disabled?: boolean
  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid?: boolean
  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance?: CheckboxAppearance
  /**
   * Function called when state changes.
   */
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
}

export type CheckboxProps = PolymorphicBoxProps<'input', CheckboxOwnProps>
export declare const Checkbox: BoxComponent<CheckboxOwnProps, 'input'>

export type CodeOwnProps = TextOwnProps & { appearance?: CodeAppearance }
export type CodeProps = PolymorphicBoxProps<'code', CodeOwnProps>
export declare const Code: BoxComponent<CodeOwnProps, 'code'>

export interface ComboboxOwnProps {
  /**
   * The options to show in the menu.
   */
  items: AutocompleteProps['items']
  /**
   * The selected item when controlled.
   */
  selectedItem?: AutocompleteProps['selectedItem']
  /**
   * Function called when value changes.
   */
  onChange?: AutocompleteProps['onChange']
  /**
   * Properties forwarded to the autocomplete component. Use with caution.
   */
  autocompleteProps?: AutocompleteProps
  /**
   * When true, open the autocomplete on focus.
   */
  openOnFocus?: boolean
  /**
   * Default selected item when uncontrolled.
   */
  initialSelectedItem?: any
  /**
   * The placeholder text when there is no value present.
   */
  placeholder?: string
  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString?: AutocompleteProps['itemToString']
  /**
   * Properties forwarded to the input. Use with caution.
   */
  inputProps?: TextInputOwnProps
  /**
   * Properties forwarded to the button. Use with caution.
   */
  buttonProps?: IconButtonOwnProps
  /**
   * Makes the input element disabled.
   */
  disabled?: boolean
  /**
   * When true, show a loading spinner. This also disables the button.
   */
  isLoading?: boolean
  /**
   * Size of the component
   */
  size?: 'small' | 'medium' | 'large'
}

export type ComboboxProps = PolymorphicBoxProps<'div', ComboboxOwnProps>
export declare const Combobox: BoxComponent<ComboboxOwnProps>

export interface CornerDialogProps {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph /> is used to wrap the string.
   */
  children?: React.ReactNode | (({ close }: { close: () => void }) => void)
  /**
   * The intent of the Dialog. Used for the button. Defaults to none.
   */
  intent?: IntentTypes
  /**
   * When true, the dialog is shown. Defaults to false.
   */
  isShown?: boolean
  /**
   * Title of the Dialog. The text for the title should use Title Case.
   */
  title?: string | React.ReactNode
  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete?: () => void
  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete?: () => void
  /**
   * When true, the footer with the cancel and confirm button is shown.
   * Defaults to true.
   */
  hasFooter?: boolean
  /**
   * Function that will be called when the confirm button is clicked.
   * This does not close the Dialog. A close function will be passed
   * as a paramater you can use to close the dialog.
   * If unspecified, this defaults to closing the Dialog.
   */
  onConfirm?: (close: () => void) => void
  /**
   * Label of the confirm button. Default to 'Confirm'.
   */
  confirmLabel?: string
  /**
   * When true, the cancel button is shown. Defaults to true.
   */
  hasCancel?: boolean
  /**
   * When true, the close button is shown. Defaults to true.
   */
  hasClose?: boolean
  /**
   * Function that will be called when the cancel button is clicked.
   * This closes the Dialog by default.
   */
  onCancel?: (close: () => void) => void
  /**
   * Label of the cancel button. Defaults to 'Cancel'.
   */
  cancelLabel?: string
  /**
   * Width of the Dialog.
   */
  width?: string | number
  /**
   * Props that are passed to the dialog container.
   */
  containerProps?: React.ComponentProps<typeof Card>
  /**
   * Props that will set position of corner dialog
   */
  position?: Exclude<PositionTypes, 'top' | 'bottom' | 'left' | 'right'>
}

export declare const CornerDialog: React.FC<CornerDialogProps>

export interface DialogProps {
  /**
   * Children can be a string, node or a function accepting `({ close })`.
   * When passing a string, <Paragraph /> is used to wrap the string.
   */
  children?: React.ReactNode | (({ close }: { close: () => void }) => void)
  /**
   * The intent of the Dialog. Used for the button. Defaults to none.
   */
  intent?: IntentTypes
  /**
   * When true, the dialog is shown. Defaults to false.
   */
  isShown?: boolean
  /**
   * Title of the Dialog. Titles should use Title Case.
   */
  title?: React.ReactNode
  /**
   * When true, the header with the title and close icon button is shown.
   * Defaults to true.
   */
  hasHeader?: boolean
  /**
   * You can override the default header with your own custom component.
   *
   * This is useful if you want to provide a custom header and footer, while
   * also enabling your Dialog's content to scroll.
   *
   * Header can either be a React node or a function accepting `({ close })`.
   */
  header?: React.ReactNode | (({ close }: { close: () => void }) => void)
  /**
   * When true, the footer with the cancel and confirm button is shown.
   * Defaults to true.
   */
  hasFooter?: boolean
  /**
   * You can override the default footer with your own custom component.
   *
   * This is useful if you want to provide a custom header and footer, while
   * also enabling your Dialog's content to scroll.
   *
   * Footer can either be a React node or a function accepting `({ close })`.
   */
  footer?: React.ReactNode | (({ close }: { close: () => void }) => void)
  /**
   * When true, the cancel button is shown. Defaults to true.
   */
  hasCancel?: boolean
  /**
   * When true, the close button is shown. Defaults to true.
   */
  hasClose?: boolean
  /**
   * Function that will be called when the exit transition is complete.
   */
  onCloseComplete?: () => void
  /**
   * Function that will be called when the enter transition is complete.
   */
  onOpenComplete?: () => void
  /**
   * Function that will be called when the confirm button is clicked.
   * This does not close the Dialog. A close function will be passed
   * as a paramater you can use to close the dialog.
   * If unspecified, this defaults to closing the Dialog.
   */
  onConfirm?: (close: () => void) => void
  /**
   * Label of the confirm button. Default to 'Confirm'.
   */
  confirmLabel?: string
  /**
   * When true, the confirm button is set to loading. Defaults to false.
   */
  isConfirmLoading?: boolean
  /**
   * When true, the confirm button is set to disabled. Defaults to false.
   */
  isConfirmDisabled?: boolean
  /**
   * Function that will be called when the cancel button is clicked.
   * This closes the Dialog by default.
   */
  onCancel?: (close: () => void) => void
  /**
   * Label of the cancel button. Defaults to 'Cancel'.
   */
  cancelLabel?: string
  /**
   * Boolean indicating if clicking the overlay should close the overlay.
   * Defaults to true.
   */
  shouldCloseOnOverlayClick?: boolean
  /**
   * Boolean indicating if pressing the esc key should close the overlay.
   * Defaults to true.
   */
  shouldCloseOnEscapePress?: boolean
  /**
   * Width of the Dialog.
   */
  width?: string | number
  /**
   * The space above the dialog.
   * This offset is also used at the bottom when there is not enough vertical
   * space available on screen — and the dialog scrolls internally.
   */
  topOffset?: string | number
  /**
   * The space on the left/right sides of the dialog when there isn't enough
   * horizontal space available on screen.
   */
  sideOffset?: string | number
  /**
   * The min height of the body content.
   * Makes it less weird when only showing little content.
   */
  minHeightContent?: string | number
  /**
   * Props that are passed to the dialog container.
   */
  containerProps?: React.ComponentProps<typeof Pane>
  /**
   * Props that are passed to the content container.
   */
  contentContainerProps?: React.ComponentProps<typeof Pane>
  /**
   * Whether or not to prevent scrolling in the outer body. Defaults to false.
   */
  preventBodyScrolling?: boolean
  /**
   * Props that are passed to the Overlay component.
   */
  overlayProps?: React.ComponentProps<typeof Pane>
}

export declare const Dialog: React.FC<DialogProps>

export interface EmptyStateOwnProps {
  /** the title of the empty state */
  title: string
  /** the icon used in the empty state */
  icon: React.ReactNode
  /** the background used for the icon circle */
  iconBgColor: string
  /** specify the orientation of how the content flows */
  orientation?: 'horizontal' | 'vertical'
  /** the description of the empty state */
  description?: React.ReactNode
  /** the background used for the entire empty state container */
  background?: 'light' | 'dark'
  /** the primary cta of the empty state */
  primaryCta?: React.ReactNode
  /** the link cta of the empty state */
  anchorCta?: React.ReactNode
}

export declare const EmptyState: React.FC<EmptyStateOwnProps> & {
  PrimaryButton: typeof Button
  LinkButton: typeof Link
}

export interface FileCardOwnProps {
  /**
   * Description to display under the file name. If not provided, defaults to the file size
   */
  description?: string
  /**
   * Disables the button to remove the file.
   */
  disabled?: boolean
  /**
   * When true, displays the card in an error state
   */
  isInvalid?: boolean
  /**
   * Sets a loading state on the card. If the remove button is rendered, it will be disabled.
   */
  isLoading?: boolean
  /**
   * Name of the file to display
   */
  name?: string
  /**
   * Callback to be fired when the remove button is clicked. If not provided, the button will not
   * render
   */
  onRemove?: () => void
  /**
   * Size of the file
   */
  sizeInBytes?: number
  /**
   * Url of the uploaded image
   */
  src?: string
  /**
   * MimeType of the file to display, which controls what type of icon is rendered
   */
  type?: string
  /**
   * Message to display underneath the card
   */
  validationMessage?: string
}

export type FileCardProps = PolymorphicBoxProps<'div', FileCardOwnProps>
export declare const FileCard: BoxComponent<FileCardOwnProps, 'div'>

export interface FilePickerOwnProps {
  /** the name attribute of the input */
  name?: string
  /** the accept attribute of the input */
  accept?: string | string[]
  /** whether or not the field is required */
  required?: boolean
  /** whether or not the file input accepts multiple files */
  multiple?: boolean
  /** whether or not the filepicker is disabled */
  disabled?: boolean
  /** the capture attribute of the input */
  capture?: boolean
  /** the height of the filepicker */
  height?: number
  /** function called when onChange is fired */
  onChange?: (files: FileList) => void
  /** function called when onBlur is fired */
  onBlur?: (event: React.FocusEvent) => void
  /** placeholder of the text input */
  placeholder?: string
}

export type FilePickerProps = PolymorphicBoxProps<'div', FilePickerOwnProps>
export declare const FilePicker: BoxComponent<FilePickerOwnProps, 'div'>

export interface FileRejection {
  /**
   * The file that was rejected
   */
  file: File
  /**
   * Human-friendly message for why the file was rejected.
   * @see {getAcceptedTypesMessage}
   * @see {getFileSizeMessage}
   * @see {getMaxFilesMessage}
   */
  message: string
  /**
   * Error/status code for why the file was rejected. The `FileUploader` component
   * will return values from `FileRejectionReason`, but you can define your own if needed
   */
  reason: FileRejectionReason | string | number
}

export interface FileUploaderOwnProps extends FormFieldOwnProps {
  /**
   * MIME types (not file extensions) to accept
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
   */
  acceptedMimeTypes?: MimeType[]
  /**
   * When true, displays a disabled state where drops don't fire and the native browser picker doesn't open
   */
  disabled?: boolean
  /**
   * Maximum number of files to accept
   */
  maxFiles?: number
  /**
   * Maximum size of an **individual** file to accept
   */
  maxSizeInBytes?: number
  /**
   * Callback for when files are accepted via drop or the native browser picker.
   */
  onAccepted?: (files: File[]) => void
  /**
   * Callback for when files are added via drop or the native browser picker, which includes both
   * the accepted and rejected files.
   */
  onChange?: (files: File[]) => void
  /**
   * Callback for when files are rejected via drop or the native browser picker
   */
  onRejected?: (fileRejections: FileRejection[]) => void
  /**
   * Callback to fire when a file should be removed
   */
  onRemove?: (file: File) => void
  /**
   * Custom render function for displaying the file underneath the uploader
   */
  renderFile?: (file: File, index: number) => React.ReactNode
  /**
   * File values to render underneath the uploader
   */
  values?: File[]
}

export type FileUploaderProps = PolymorphicBoxProps<'div', FileUploaderOwnProps>
export declare const FileUploader: BoxComponent<FileUploaderProps, 'div'>

/**
 * Returns a standard message informing the user what file extensions are accepted based
 * on the provided array of MimeTypes
 */
export declare const getAcceptedTypesMessage: (acceptedMimeTypes: MimeType[]) => string

/**
 * Returns a standard message informing the user of the maximum individual file size
 */
export declare const getFileSizeMessage: (maxSizeInBytes: number) => string

/**
 * Returns a standard message informing the user of the maximum number of files that can be uploaded
 */
export declare const getMaxFilesMessage: (maxFiles: number) => string

/**
 * Returns the corresponding file extension from the provided MimeType.
 *
 * If the MimeType cannot be found, it returns `undefined`
 */
export declare const mimeTypeToExtension: (mimeType: MimeType) => string | undefined

/**
 * Returns the corresponding file extensions from the provided MimeTypes.
 *
 * Unlike `mimeTypeToExtension`, this will never return `undefined` values. MimeTypes
 * that aren't found are discarded.
 */
export declare const mimeTypesToExtensions: (mimeTypes: MimeType[]) => string[]

export interface RebaseFilesOptions {
  acceptedMimeTypes?: MimeType[]
  maxFiles?: number
  maxSizeInBytes?: number
}

export interface RebaseFilesResult {
  accepted: File[]
  rejected: FileRejection[]
}

/**
 * Returns separate arrays for accepted and rejected files based on the provided options, similar to
 * `splitFiles`. This function should be used for rebasing files on removal (i.e. for removing files
 * from the `rejected` array when they are no longer over maximum limit, if there is one)
 */
export declare const rebaseFiles: (files: File[], options?: RebaseFilesOptions) => RebaseFilesResult

export interface SplitFilesOptions extends RebaseFilesOptions {
  /**
   * Current count of files used for validating whether the dropped files are over the `maxFiles` limit
   */
  currentFileCount?: number
}

export type SplitFilesResult = RebaseFilesResult

/*
 * Returns separate arrays for accepted and rejected files based on the provided options.
 * This should be used for accepting and rejecting files on drop
 */
export declare const splitFiles: (files: File[], options?: SplitFilesOptions) => SplitFilesResult

/**
 * Truncates a string in the center with ellipsis, if needed
 *
 * @param value Value to truncate
 * @param maximumChars Maximum number of characters (including the ellipsis) to show. Defaults to 55
 */
export declare const truncateCenter: (value: string, maximumChars?: number) => string

export interface FormFieldOwnProps {
  /**
   * The label used above the input element.
   */
  label?: React.ReactNode
  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor?: string
  /**
   * Wether or not show a asterix after the label.
   */
  isRequired?: boolean
  /**
   * A optional description of the field under the label, above the input element.
   */
  description?: React.ReactNode
  /**
   * A optional hint under the input element.
   */
  hint?: React.ReactNode
  /**
   * If a validation message is passed it is shown under the input element
   * and above the hint.
   */
  validationMessage?: React.ReactNode
  /**
   * The height of the input element.
   */
  inputHeight?: number
  /**
   * The width of the input width.
   */
  inputWidth?: number | string
}

export type FormFieldProps = PolymorphicBoxProps<'div', FormFieldOwnProps>
export declare const FormField: BoxComponent<FormFieldOwnProps>

export interface FormFieldDescriptionOwnProps extends ParagraphOwnProps {}

export type FormFieldDescriptionProps = PolymorphicBoxProps<'p', FormFieldDescriptionOwnProps>
export declare const FormFieldDescription: BoxComponent<FormFieldDescriptionOwnProps, 'p'>

export interface FormFieldHintOwnProps extends ParagraphOwnProps {}

export type FormFieldHintProps = PolymorphicBoxProps<'p', FormFieldHintOwnProps>
export declare const FormFieldHint: BoxComponent<FormFieldHintOwnProps, 'p'>

export interface FormFieldLabelOwnProps extends LabelOwnProps {
  /**
   * Whether or not to show an asterix after the label.
   */
  isAstrixShown?: boolean
}

export type FormFieldLabelProps = PolymorphicBoxProps<'label', FormFieldLabelOwnProps>
export declare const FormFieldLabel: BoxComponent<FormFieldLabelOwnProps, 'label'>

export interface FormFieldValidationMessageOwnProps extends PaneOwnProps {}
export type FormFieldValidationMessageProps = PolymorphicBoxProps<'div', FormFieldValidationMessageOwnProps>
export declare const FormFieldValidationMessage: BoxComponent<FormFieldValidationMessageOwnProps, 'div'>

export interface GroupOwnProps {
  size?: 'small' | 'medium' | 'large'
}

export type GroupProps = PolymorphicBoxProps<'div', GroupOwnProps>
export declare const Group: BoxComponent<GroupOwnProps, 'div'>

export interface HeadingOwnProps {
  size?: Size
}

export type HeadingProps = PolymorphicBoxProps<'h2', HeadingOwnProps>
export declare const Heading: BoxComponent<HeadingOwnProps, 'h2'>

export type IconOwnProps = IconProps & {
  icon: React.ElementType | JSX.Element
}

export declare const Icon: ForwardRefComponent<IconOwnProps>

export interface IconButtonOwnProps extends ButtonOwnProps {
  /**
   * Name of a Blueprint UI icon, or an icon element, to render.
   */
  icon?: React.ElementType | JSX.Element | null | false
  /**
   * Specifies an explicit icon size instead of the default value.
   */
  iconSize?: number
  /**
   * The intent of the button.
   */
  intent?: IntentTypes
  /**
   * The appearance of the button.
   */
  appearance?: IconButtonAppearance
  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive?: boolean
  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled?: boolean
  /**
   * Class name passed to the button.
   */
  className?: string
}

export type IconButtonProps = PolymorphicBoxProps<'button', IconButtonOwnProps>
export declare const IconButton: BoxComponent<IconButtonOwnProps, 'button'>

export interface ImageOwnProps {
  src?: string
}

export type ImageProps = PolymorphicBoxProps<'img', ImageOwnProps>
export declare const Image: BoxComponent<ImageOwnProps, 'img'>

export interface InlineAlertOwnProps extends PaneOwnProps {
  intent?: IntentTypes

  /**
   * When true, show a icon on the left matching the type,
   */
  hasIcon?: boolean

  /**
   * The size of the Text.
   */
  size?: Size
}

export type InlineAlertProps = PolymorphicBoxProps<'div', InlineAlertOwnProps>
export declare const InlineAlert: BoxComponent<InlineAlertOwnProps, 'div'>

export type LabelOwnProps = TextOwnProps
export type LabelProps = PolymorphicBoxProps<'label', LabelOwnProps>
export declare const Label: BoxComponent<LabelOwnProps, 'label'>

export interface LinkOwnProps extends TextOwnProps {
  /**
   * This attribute names a relationship of the linked document to the current document.
   * Common use case is: rel="noopener noreferrer".
   */
  rel?: string
  /**
   * Specifies the URL of the linked resource. A URL might be absolute or relative.
   */
  href?: string
  /**
   * Target atrribute, common use case is target="_blank."
   */
  target?: string
  /**
   * The color (and styling) of the Link. Can be default, blue, green or neutral.
   */
  color?: string
  /**
   * Class name passed to the link.
   */
  className?: string
}

export type LinkProps = PolymorphicBoxProps<'a', LinkOwnProps>
export declare const Link: BoxComponent<LinkOwnProps, 'a'>

export interface ListItemOwnProps extends TextOwnProps {
  /**
   * When passed, adds a icon before the list item.
   * See Evergreen `Icon` for documentation.
   */
  icon?: React.ElementType | JSX.Element | null | false
  /**
   * The color of the icon.
   */
  iconColor?: string
}

export type ListItemProps = PolymorphicBoxProps<'li', ListItemOwnProps>
export declare const ListItem: BoxComponent<ListItemOwnProps, 'li'>
export declare const Li: typeof ListItem

export interface MenuProps {
  children: React.ReactNode[] | React.ReactNode
}

export interface MenuItemOwnProps extends PaneOwnProps {
  onSelect?: (event: React.SyntheticEvent) => void
  icon?: React.ElementType | JSX.Element | null | false
  secondaryText?: JSX.Element | string
  appearance?: DefaultAppearance
  intent?: IntentTypes
  disabled?: boolean
}

export type MenuItemProps = PolymorphicBoxProps<'div', MenuItemOwnProps>

export interface MenuGroupProps extends Omit<PaneOwnProps, 'title'> {
  title?: React.ReactNode
  children: React.ReactNode[] | React.ReactNode
}

export interface MenuOptionProps {
  id?: string
  onSelect?: () => void
  isSelected?: boolean
  children?: JSX.Element
  secondaryText?: JSX.Element
  appearance?: DefaultAppearance
}

export interface MenuOptionsGroupProps<T> {
  title?: React.ReactNode
  selected?: T
  onChange?: (value: T) => void
  options: Array<{ value: T; label: string }>
}

declare const MenuItem: BoxComponent<MenuItemOwnProps, 'div'>
declare const MenuDivider: React.FC<{}>
declare const MenuGroup: React.FC<MenuGroupProps>
declare const MenuOption: React.FC<MenuOptionProps>
declare const MenuOptionsGroup: React.FC<MenuOptionsGroupProps<any>>

export declare const Menu: React.FC<MenuProps> & {
  Item: typeof MenuItem
  Divider: typeof MenuDivider
  Group: typeof MenuGroup
  Option: typeof MenuOption
  OptionsGroup: typeof MenuOptionsGroup
}

/** @deprecated This component will be renamed to Pulsar in the next major version of Evergreen */
export interface NudgeProps {
  /**
   * The position the Tooltip is on.
   */
  position?: Exclude<PositionTypes, 'top' | 'bottom' | 'left' | 'right'>
  /**
   * The size of the Pulsar
   */
  size?: number
  /**
   * The content of the Tooltip.
   */
  tooltipContent?: React.ReactNode | ((object: { close: () => void }) => React.ReactNode)
  /**
   * When true, manually show the Tooltip.
   */
  isShown?: boolean
  /**
   * Called when the Pulsar is clicked
   */
  onClick?: PaneProps['onClick']
}

export declare const Nudge: React.FC<NudgeProps>

export interface PaneOwnProps {
  background?: string
  border?: boolean | string
  borderTop?: boolean | string
  borderRight?: boolean | string
  borderBottom?: boolean | string
  borderLeft?: boolean | string
  elevation?: Elevation
  hoverElevation?: Elevation
  activeElevation?: Elevation
}

export type PaneProps = PolymorphicBoxProps<'div', PaneOwnProps>
export declare const Pane: BoxComponent<PaneOwnProps, 'div'>

export interface PaginationOwnProps {
  /**
   * The current page that a user is on - defaults to 1.
   */
  page: number
  /**
   * The total number of pages to render. If ommitted, the page numbers will not be shown to the end user.
   */
  totalPages?: number
  /**
   * Callback handler when the next page button is clicked.
   */
  onNextPage?: () => void
  /**
   * Callback handler when the previous page button is clicked.
   */
  onPreviousPage?: () => void
  /**
   * Callback handler when a specific page # is clicked
   */
  onPageChange?: (page: number) => void
}

export type PaginationProps = PolymorphicBoxProps<'nav', PaginationOwnProps>
export declare const Pagination: BoxComponent<PaginationOwnProps, 'nav'>

interface UsePaginationBehaviorInput {
  page?: number
}

interface UsePaginationBehaviorOutput extends Required<UsePaginationBehaviorInput> {
  onNextPage: () => void
  onPreviousPage: () => void
  onPageChange: (page: number) => void
}

export declare const usePaginationBehavior: (input: UsePaginationBehaviorInput) => UsePaginationBehaviorOutput

export type PillOwnProps = BadgeOwnProps
export type PillProps = PolymorphicBoxProps<'strong', PillOwnProps>
export declare const Pill: BoxComponent<PillOwnProps, 'strong'>

export type PopoverStatelessProps = BoxProps<'div'>

export interface PopoverProps {
  position?: PositionTypes
  isShown?: boolean
  trigger?: 'click' | 'hover'
  content: React.ReactNode | ((object: { close: () => void }) => React.ReactNode)
  children:
    | ((props: {
        toggle: () => void
        getRef: (ref: React.RefObject<HTMLElement>) => void
        isShown: NonNullable<PopoverProps['isShown']>
      }) => React.ReactNode)
    | React.ReactNode
  display?: string
  minWidth?: number | string
  minHeight?: number | string
  animationDuration?: number
  onOpen?: () => void
  onClose?: () => void
  onOpenComplete?: () => void
  onCloseComplete?: () => void
  onBodyClick?: () => void
  bringFocusInside?: boolean
  shouldCloseOnExternalClick?: boolean
  statelessProps?: PopoverStatelessProps
}

export declare const Popover: React.FC<PopoverProps>

export type ParagraphOwnProps = {
  size?: Size
  fontFamily?: FontFamily
}

export type ParagraphProps = PolymorphicBoxProps<'p', ParagraphOwnProps>
export declare const Paragraph: BoxComponent<ParagraphOwnProps, 'p'>

export class Portal extends React.Component {}

export interface PositionerProps {
  position?: PositionTypes
  isShown?: boolean
  children: (params: {
    top: number
    left: number
    zIndex: NonNullable<StackProps['value']>
    css: StyleAttribute | CSSProperties
    style: {
      transformOrigin: string
      left: number
      top: number
      zIndex: NonNullable<StackProps['value']>
    }
    getRef: (ref: React.RefObject<HTMLElement>) => void
    animationDuration: PositionerProps['animationDuration']
    state: PositionState
  }) => React.ReactNode
  bodyOffset?: number
  targetOffset?: number
  target: (params: { getRef: () => React.RefObject<HTMLElement>; isShown: boolean }) => React.ReactNode
  initialScale?: number
  animationDuration?: number
  onCloseComplete?: () => void
  onOpenComplete?: () => void
}

export declare const Positioner: React.FC<PositionerProps>

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

export type PreOwnProps = TextOwnProps
export type PreProps = PolymorphicBoxProps<'pre', PreOwnProps>
export declare const Pre: BoxComponent<PreOwnProps, 'pre'>

export interface PulsarProps {
  /**
   * The position the Tooltip is on.
   */
  position?: Exclude<PositionTypes, 'top' | 'bottom' | 'left' | 'right'>
  /**
   * The size of the pulsar
   */
  size?: number
  /**
   * Called when the Pulsar is clicked
   */
  onClick?: PaneProps['onClick']
}

export declare const Pulsar: React.FC<PulsarProps>

export interface RadioOwnProps {
  /**
   * The id attribute of the radio.
   */
  id?: string
  /**
   * The name attribute of the radio.
   */
  name?: string
  /**
   * Label of the radio.
   */
  label?: React.ReactNode
  /**
   * The value attribute of the radio.
   */
  value?: string
  /**
   * Function called when state changes.
   */
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
  /**
   * When true, the radio is disabled.
   */
  disabled?: boolean
  /**
   * When true, the radio is checked.
   */
  checked?: boolean
  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size?: 12 | 16 | number
  /**
   * When true, the radio get the required attribute.
   */
  isRequired?: boolean
  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid?: boolean
  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance?: DefaultAppearance
}

export type RadioProps = PolymorphicBoxProps<'label', RadioOwnProps>
export declare const Radio: BoxComponent<RadioOwnProps, 'label'>

interface RadioGroupOption {
  label: React.ReactNode
  value: string
  isDisabled?: boolean
}

export interface RadioGroupOwnProps extends PaneOwnProps {
  /**
   * The default value of the Radio Group when uncontrolled.
   */
  defaultValue?: string
  /**
   * The options for the radios of the Radio Group.
   */
  options?: RadioGroupOption[]
  /**
   * The selected item value when controlled.
   */
  value?: string
  /**
   * Label to display above the radio button options.
   */
  label?: string
  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size?: 12 | 16
  /**
   * When true, the radio get the required attribute.
   */
  isRequired?: boolean
  /**
   * Function called when state changes.
   */
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
}

export type RadioGroupProps = PolymorphicBoxProps<'div', RadioGroupOwnProps>
export declare const RadioGroup: BoxComponent<RadioGroupOwnProps, 'div'>

export interface SelectMenuOption {
  label?: string
  value?: string | number
  icon?: string
  disabled?: boolean
}

export interface OptionsListProps extends PaneOwnProps {
  options?: SelectMenuOption[]
  close?: () => void
  height?: number
  width?: number
  isMultiSelect?: boolean
  selected?: string | string[]
  onSelect?: (value: SelectMenuOption) => void
  onDeselect?: (value: SelectMenuOption) => void
  onFilterChange?: (value: string) => void
  hasFilter?: boolean
  optionSize?: number
  renderItem?: (props: {
    key: SelectMenuOption['value']
    label: SelectMenuOption['label']
    icon?: SelectMenuOption['icon']
    item: SelectMenuOption
    style: object
    height: NonNullable<OptionsListProps['optionSize']>
    onSelect: () => void
    onDeselect: () => void
    isSelectable: boolean
    isSelected: boolean
    disabled: SelectMenuOption['disabled']
    tabIndex: number
  }) => JSX.Element
  filterPlaceholder?: string
  filterIcon?: React.ElementType | JSX.Element
  optionsFilter?: (
    value: SelectMenuOption['label'][],
    filter: NonNullable<OptionsListProps['defaultSearchValue']>
  ) => void
  defaultSearchValue?: string
}

export declare const Option: BoxComponent<OptionProps, 'div'>
export class OptionsList extends React.PureComponent<OptionsListProps & BoxProps<'div'>> {}

export interface SearchInputOwnProps extends TextInputOwnProps {
  height?: number
}

export type SearchInputProps = PolymorphicBoxProps<'input', SearchInputOwnProps>
export declare const SearchInput: BoxComponent<SearchInputOwnProps, 'input'>

export interface SearchTableHeaderCellOwnProps extends TableHeaderCellOwnProps {
  /**
   * The value of the input.
   */
  value?: string
  /**
   * Sets whether the component should be automatically focused on component render.
   */
  autoFocus?: boolean
  /**
   * Sets whether to apply spell checking to the content.
   */
  spellCheck?: boolean
  /**
   * Text to display in the input if the input is empty.
   */
  placeholder?: string
  /**
   * Handler to be called when the input changes.
   */
  onChange?(value: string): void
  /**
   * Icon to display in the input.
   */
  icon?: React.ElementType | JSX.Element | null | false
}

export type SearchTableHeaderCellProps = PolymorphicBoxProps<'div', SearchTableHeaderCellOwnProps>
export declare const SearchTableHeaderCell: BoxComponent<SearchTableHeaderCellOwnProps, 'div'>

/** @deprecated This component will be removed in the next major version of Evergreen */
export interface SegmentedControlOwnProps {
  /**
   * The options (elements) displayed by the segmented control
   */
  options: Array<{
    label: string
    value: NonNullable<SegmentedControlOwnProps['value']>
  }>
  /**
   * The value of the segmented control
   */
  value?: number | string | boolean
  /**
   * The initial value of an uncontrolled segmented control
   */
  defaultValue?: number | string | boolean
  /**
   * Function called when value changes.
   */
  onChange: (value: NonNullable<SegmentedControlOwnProps['value']>) => void

  /**
   * The name attribute of the segmented control
   */
  name?: string

  size?: 'small' | 'medium' | 'large'

  /**
   * Whether or not the component is disabled
   */
  disabled?: boolean
}

/** @deprecated This component will be removed in the next major version of Evergreen */
export type SegmentedControlProps = PolymorphicBoxProps<'div', SegmentedControlOwnProps>

/** @deprecated This component will be removed in the next major version of Evergreen */
export declare const SegmentedControl: BoxComponent<SegmentedControlOwnProps, 'div'>

/** @deprecated This component will be removed in the next major version of Evergreen */
export type SidebarTabProps = PolymorphicBoxProps<'span', TabOwnProps>

/** @deprecated This component will be removed in the next major version of Evergreen */
export declare const SidebarTab: BoxComponent<TabOwnProps, 'span'>

export interface SelectOwnProps {
  /**
   * The initial value of an uncontrolled select
   */
  defaultValue?: string | number | string[]

  /**
   * The value of the select.
   */
  value?: string | number | string[]

  /**
   * Whether or not the field is disabled
   */
  disabled?: boolean

  /**
   * When true, the select is required.
   */
  required?: boolean

  /**
   * When true, the select should auto focus.
   */
  autoFocus?: boolean

  /**
   * When true, the select is invalid.
   */
  isInvalid?: boolean

  /**
   * The appearance of the select. The default theme only supports default.
   */
  appearance?: string

  /**
   * Function called when value changes.
   */
  onChange?(event: React.ChangeEvent<HTMLSelectElement>): void

  name?: string
  /**
   * Size of the input
   */
  size?: 'small' | 'medium' | 'large'
}

export type SelectProps = PolymorphicBoxProps<'select', SelectOwnProps>
export declare const Select: BoxComponent<SelectOwnProps, 'select'>

export type SelectFieldOwnProps = FormFieldOwnProps & SelectOwnProps
export type SelectFieldProps = PolymorphicBoxProps<'select', SelectFieldOwnProps>
export declare const SelectField: BoxComponent<SelectFieldOwnProps, 'select'>

export interface SelectMenuContentProps {
  close?: OptionsListProps['close']
  title?: string
  width?: number
  height?: number
  headerHeight?: number
  options?: OptionsListProps['options']
  hasTitle?: boolean
  hasFilter?: boolean
  filterPlaceholder?: string
  filterIcon?: OptionsListProps['filterIcon']
  listProps?: OptionsListProps
  isMultiSelect?: boolean
  titleView?:
    | React.ReactNode
    | ((props: {
        close: NonNullable<SelectMenuContentProps['close']>
        title: SelectMenuContentProps['title']
        headerHeight: NonNullable<SelectMenuContentProps['headerHeight']>
      }) => React.ReactNode)
  detailView?: React.ReactNode
  emptyView?: React.ReactNode
}

export declare const SelectMenuContent: React.FC<SelectMenuContentProps>

export interface SelectMenuItem {
  label: string
  value: string | number
  labelInList?: string
  disabled?: boolean
}

export type SelectMenuPropsViewCallback = (args: { close(): void }) => React.ReactNode

export interface SelectMenuProps extends Omit<PopoverProps, 'position' | 'content'> {
  /**
   * The title of the Select Menu.
   */
  title?: string
  /**
   * The width of the Select Menu.
   */
  width?: string | number | null
  /**
   * The height of the Select Menu.
   */
  height?: string | number
  /**
   * The options to show in the menu.
   */
  options?: SelectMenuItem[]
  /**
   * The selected value/values.
   */
  selected?: string | string[]
  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect?: boolean
  /**
   * When true, show the title.
   */
  hasTitle?: boolean
  /**
   * When true, show the filter.
   */
  hasFilter?: boolean
  /**
   * The position of the Select Menu.
   */
  position?: Omit<PositionTypes, 'left' | 'right'>
  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered on the right side of the Select Menu to give additional
   * information when an option is selected.
   */
  detailView?: React.ReactNode | SelectMenuPropsViewCallback
  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered instead of the options list when there are no options.
   */
  emptyView?: React.ReactNode | SelectMenuPropsViewCallback
  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered in the header section of the Select Menu to customize
   * the header.
   */
  titleView?: React.ReactNode | SelectMenuPropsViewCallback
  /**
   * Function that is called when an option is selected.
   */
  onSelect?(item: SelectMenuItem): void
  /**
   * Function that is called when an option is deselected.
   */
  onDeselect?(item: SelectMenuItem): void
  /**
   * Function that is called as the onChange() event for the filter.
   */
  onFilterChange?(searchValue: string): void
  /**
   * The placeholder of the search filter.
   */
  filterPlaceholder?: string
  /**
   * The icon of the search filter.
   */
  filterIcon?: React.ElementType | JSX.Element
  /*
   * When true, menu closes on option selection.
   */
  closeOnSelect?: boolean
  /**
   * Function that is used to render custom items in the select menu
   */
  itemRenderer?: (props: {
    key: SelectMenuOption['value']
    label: SelectMenuOption['label']
    item: SelectMenuOption
    style: object
    height: NonNullable<OptionsListProps['optionSize']>
    onSelect: () => void
    onDeselect: () => void
    isSelectable: boolean
    isSelected: boolean
    disabled: SelectMenuOption['disabled']
  }) => React.ElementType | JSX.Element
  /**
   * The height of the items in the select menu list (default is 33px)
   */
  itemHeight?: number
}

export declare const SelectMenu: React.FC<SelectMenuProps>

export interface SideSheetProps {
  children: React.ReactNode | (() => React.ReactNode)
  isShown?: boolean
  onCloseComplete?: () => void
  onOpenComplete?: () => void
  onBeforeClose?: () => boolean
  shouldCloseOnOverlayClick?: boolean
  shouldCloseOnEscapePress?: boolean
  width?: string | number
  containerProps?: PaneOwnProps & BoxProps<'div'>
  position?: Extract<PositionTypes, 'top' | 'bottom' | 'left' | 'right'>
  preventBodyScrolling?: boolean
}

export declare const SideSheet: React.FC<SideSheetProps>

export interface SmallOwnProps {}
export type SmallProps = PolymorphicBoxProps<'small', SmallOwnProps>
export declare const Small: BoxComponent<SmallOwnProps, 'small'>

export interface SpinnerOwnProps {
  /**
   * Delay after which spinner should be visible.
   */
  delay?: number
  /**
   * The size of the spinner.
   */
  size?: number
}

export type SpinnerProps = PolymorphicBoxProps<'div', SpinnerOwnProps>
export declare const Spinner: BoxComponent<SpinnerOwnProps, 'div'>

export interface StackProps {
  children: (zIndex: number) => React.ReactNode
  value?: number
}

export declare const Stack: React.FC<StackProps>

export declare const StackingContext: React.Context<number>

export const StackingOrder: {
  FOCUSED: number
  STACKING_CONTEXT: number
  POSITIONER: number
  OVERLAY: number
  TOASTER: number
}

export interface StatusIndicatorOwnProps extends TextOwnProps {
  disabled?: boolean
  color?: IntentTypes | string
  dotSize?: number
}

export type StatusIndicatorProps = PolymorphicBoxProps<'span', StatusIndicatorOwnProps>
export declare const StatusIndicator: BoxComponent<StatusIndicatorOwnProps, 'span'>

export type StrongOwnProps = TextOwnProps
export type StrongProps = PolymorphicBoxProps<'strong', StrongOwnProps>
export declare const Strong: BoxComponent<StrongOwnProps, 'strong'>

export interface SwitchOwnProps {
  /**
   * The id attribute of the radio.
   */
  id?: string
  /**
   * The name attribute of the radio.
   */
  name?: string
  /**
   * The value attribute of the radio.
   */
  value?: string
  /**
   * The height of the switch.
   */
  height?: number
  /**
   * When true, the switch is checked (on).
   */
  checked?: boolean
  /**
   * Function called when state changes.
   */
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void
  /**
   * When true, the switch is disabled.
   */
  disabled?: boolean
  /**
   * When true, the switch is invalid.
   */
  isInvalid?: boolean
  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance?: DefaultAppearance
  /**
   * When true, the switch has a check icon.
   */
  hasCheckIcon?: boolean
  /**
   * When true, the switch is true by default.
   * This is for uncontrolled usage.
   */
  defaultChecked?: boolean
}

export type SwitchProps = PolymorphicBoxProps<'label', SwitchOwnProps>
export declare const Switch: BoxComponent<SwitchOwnProps, 'label'>

export interface TableBodyOwnProps extends PaneOwnProps {}

export type TableBodyProps = PolymorphicBoxProps<'div', TableBodyOwnProps>
export declare const TableBody: BoxComponent<TableBodyOwnProps, 'div'>

export interface TableCellOwnProps extends PaneOwnProps {
  /**
   * Makes the TableCell focusable. Used by EditableCell.
   * Will add tabIndex={-1 || this.props.tabIndex}.
   */
  isSelectable?: boolean
  /**
   * The appearance of the table row. Default theme only support default.
   */
  appearance?: DefaultAppearance
  /**
   * Optional node to be placed on the right side of the table cell.
   * Useful for icons and icon buttons.
   */
  rightView?: React.ReactNode
  /**
   * Advanced arrow keys overrides for selectable cells.
   * A string will be used as a selector.
   */
  arrowKeysOverrides?: {
    up: string | JSX.Element | false | (() => React.ReactNode)
    down: string | JSX.Element | false | (() => React.ReactNode)
    left: string | JSX.Element | false | (() => React.ReactNode)
    right: string | JSX.Element | false | (() => React.ReactNode)
  }
  /**
   * Class name passed to the table cell.
   */
  className?: string
}

export type TableCellProps = PolymorphicBoxProps<'div', TableCellOwnProps>
export declare const TableCell: BoxComponent<TableCellOwnProps, 'div'>

interface TableEditableCellProps extends Omit<TextTableCellOwnProps, 'placeholder' | 'onChange'> {
  autoFocus?: boolean
  /**
   * Makes the TableCell focusable.
   * Will add tabIndex={-1 || this.props.tabIndex}.
   */
  isSelectable?: boolean
  /**
   * When true, the cell can't be edited.
   */
  disabled?: boolean
  /**
   * Optional placeholder when children is falsy.
   */
  placeholder?: React.ReactNode
  /**
   * The size used for the TextTableCell and Textarea.
   */
  size?: FontSizeSmall
  /**
   * This is the value of the cell.
   */
  children?: string | number
  /**
   * Function called when value changes.
   */
  onChange?(value: string): void
}

export interface TableHeaderCellOwnProps extends TableCellOwnProps {}

export type TableHeaderCellProps = PolymorphicBoxProps<'div', TableHeaderCellOwnProps>
export declare const TableHeaderCell: BoxComponent<TableHeaderCellOwnProps, 'div'>

export interface TableHeadOwnProps extends PaneOwnProps {
  height?: number | string
  accountForScrollbar?: boolean
}

export type TableHeadProps = PolymorphicBoxProps<'div', TableHeadOwnProps>
export declare const TableHead: BoxComponent<TableHeadOwnProps, 'div'>

export interface TableRowOwnProps extends PaneOwnProps {
  /**
   * The height of the row. Remember to add paddings when using "auto".
   */
  height?: number | string
  /**
   * Makes the TableRow selectable.
   */
  isSelectable?: boolean
  /**
   * Makes the TableRow selected.
   */
  isSelected?: boolean
  /**
   * Manually set the TableRow to be highlighted.
   */
  isHighlighted?: boolean
  /**
   * The intent of the alert.
   */
  intent?: IntentTypes
  /**
   * The appearance of the table row. Default theme only support default.
   */
  appearance?: DefaultAppearance
  /**
   * Theme provided by ThemeProvider.
   */
  theme?: Theme
  /**
   * Class name passed to the table row.
   * Only use if you know what you are doing.
   */
  className?: string
  /**
   * Function that is called on click and enter/space keypress.
   */
  onSelect?(): void
  /**
   * Function that is called on click and enter/space keypress.
   */
  onDeselect?(): void
}

export type TableRowProps = PolymorphicBoxProps<'div', TableRowOwnProps>
export declare const TableRow: BoxComponent<TableRowOwnProps, 'div'>

export interface TableSelectMenuCellProps extends Omit<TextTableCellOwnProps, 'placeholder'> {
  /**
   * Makes the TableCell focusable.
   * Will add tabIndex={-1 || this.props.tabIndex}.
   */
  isSelectable?: boolean
  /**
   * When true, the cell can't be edited.
   */
  disabled?: boolean
  /**
   * Optional placeholder when children is falsy.
   */
  placeholder?: React.ReactNode
  /**
   * The size used for the TextTableCell and Textarea.
   */
  size?: FontSizeSmall
  /**
   * The size used for the TextTableCell and Textarea.
   */
  selectMenuProps?: Omit<SelectMenuProps, 'children'>
}

interface TableVirtualBodyProps extends PaneOwnProps {
  children?: React.ReactNode | React.ReactNode[]
  /**
   * Default height of each row.
   * 48 is the default height of a TableRow.
   */
  defaultHeight?: number
  /**
   * When true, support `height="auto"` on children being rendered.
   * This is somewhat of an expirmental feature.
   */
  allowAutoHeight?: boolean
  /**
   * The overscanCount property passed to react-tiny-virtual-list.
   */
  overscanCount?: number
  /**
   * When passed, this is used as the `estimatedItemSize` in react-tiny-virtual-list.
   * Only when `allowAutoHeight` and`useAverageAutoHeightEstimation` are false.
   */
  estimatedItemSize?: number
  /**
   * When allowAutoHeight is true and this prop is true, the estimated height
   * will be computed based on the average height of auto height rows.
   */
  useAverageAutoHeightEstimation?: boolean
  /**
   * The scrollToIndex property passed to react-tiny-virtual-list
   */
  scrollToIndex?: number
  /**
   * The scrollOffset property passed to react-tiny-virtual-list
   */
  scrollOffset?: number
  /**
   * The scrollToAlignment property passed to react-tiny-virtual-list
   */
  scrollToAlignment?: 'start' | 'center' | 'end' | 'auto'
}

export interface TableOwnProps extends PaneOwnProps {}

export type TableProps = PolymorphicBoxProps<'div', TableOwnProps>

export declare const Table: BoxComponent<TableOwnProps, 'div'> & {
  Body: typeof TableBody
  VirtualBody: BoxComponent<TableVirtualBodyProps, 'div'>
  Head: typeof TableHead
  HeaderCell: typeof TableHeaderCell
  TextHeaderCell: typeof TextTableHeaderCell
  SearchHeaderCell: typeof SearchTableHeaderCell
  Row: typeof TableRow
  Cell: typeof TableCell
  TextCell: typeof TextTableCell
  EditableCell: BoxComponent<TableEditableCellProps, 'div'>
  SelectMenuCell: BoxComponent<TableSelectMenuCellProps, 'div'>
}

export interface TabOwnProps extends TextOwnProps {
  /**
   * Function triggered when tab is selected.
   */
  onSelect?(): void
  /**
   * When true, the tab is selected.
   */
  isSelected?: boolean
  disabled?: boolean
  /**
   * The appearance of the tab.
   * The default theme only comes with a default style.
   */
  appearance?: 'primary' | 'secondary'
  direction?: 'vertical' | 'horizontal'
}

export type TabProps = PolymorphicBoxProps<'span', TabOwnProps>
export declare const Tab: BoxComponent<TabOwnProps, 'span'>

export interface TablistOwnProps {}
export type TablistProps = PolymorphicBoxProps<'div', TablistOwnProps>
export declare const Tablist: BoxComponent<TablistOwnProps>

export interface TabNavigationOwnProps {}
export type TabNavigationProps = PolymorphicBoxProps<'nav', TabNavigationOwnProps>
export declare const TabNavigation: BoxComponent<TabNavigationOwnProps, 'nav'>

export interface TagInputOwnProps {
  addOnBlur?: boolean
  autocompleteItems?: Array<string>
  className?: string
  disabled?: boolean
  isInvalid?: boolean
  height?: number
  inputProps?: PolymorphicBoxProps<'input', TextOwnProps>
  inputRef?: React.Ref<HTMLInputElement>
  onAdd?: (values: string[]) => void | false
  onBlur?: (event: React.FocusEvent) => void
  onChange?: (values: string[]) => void | false
  onFocus?: (event: React.FocusEvent) => void
  onInputChange?: (event: React.ChangeEvent) => void
  onRemove?: (value: string | React.ReactNode, index: number) => void
  separator?: string
  tagSubmitKey?: 'enter' | 'space'
  tagProps?: any
  values?: string[]
}

export type TagInputProps = PolymorphicBoxProps<'div', TagInputOwnProps>
export declare const TagInput: BoxComponent<TagInputOwnProps, 'div'>

export interface TextareaOwnProps extends TextOwnProps {
  required?: boolean
  disabled?: boolean
  isInvalid?: boolean
  spellCheck?: boolean
  grammarly?: boolean
  appearance?: string
  name?: string
  placeholder?: string
  theme?: Theme
  className?: string
}

export type TextareaProps = PolymorphicBoxProps<'textarea', TextareaOwnProps>
export declare const Textarea: BoxComponent<TextareaOwnProps, 'textarea'>

export interface TextareaFieldOwnProps extends TextareaOwnProps {
  /**
   * The label used above the input element.
   */
  label?: React.ReactNode
  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor?: string
  /**
   * Wether or not show a asterix after the label.
   */
  required?: boolean
  /**
   * A optional description of the field under the label, above the input element.
   */
  description?: React.ReactNode
  /**
   * A optional hint under the input element.
   */
  hint?: React.ReactNode
  /**
   * If a validation message is passed it is shown under the input element
   * and above the hint.
   */
  validationMessage?: React.ReactNode
  /**
   * The height of the input element.
   */
  inputHeight?: number
  /**
   * The width of the input width.
   */
  inputWidth?: number | string
}

export type TextareaFieldProps = PolymorphicBoxProps<'textarea', TextareaFieldOwnProps>
export declare const TextareaField: BoxComponent<TextareaFieldOwnProps, 'textarea'>

export interface TextDropdownButtonOwnProps {
  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive?: boolean
  /**
   * Whether or not the button is loading.
   * Automatically sets `disabled` when `isLoading={true}`
   */
  isLoading?: boolean
  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled?: boolean
  /**
   * An Evergreen icon or custom icon node. By default it uses CaretDownIcon
   */
  icon?: React.ElementType | JSX.Element | null | false
  /**
   * Class name passed to the button.
   */
  className?: string
  /**
   * Size of the button
   */
  size?: 'small' | 'medium' | 'large'
}

export type TextDropdownButtonProps = PolymorphicBoxProps<'button', TextDropdownButtonOwnProps>
export declare const TextDropdownButton: BoxComponent<TextDropdownButtonOwnProps, 'button'>

export interface TextTableCellOwnProps extends TableCellOwnProps {
  /**
   * Adds textAlign: right and fontFamily: mono.
   */
  isNumber?: boolean
  /**
   * Pass additional props to the Text component.
   */
  textProps?: PolymorphicBoxProps<'span', TextOwnProps>
}

export type TextTableCellProps = PolymorphicBoxProps<'div', TextTableCellOwnProps>
export declare const TextTableCell: BoxComponent<TextTableCellOwnProps, 'div'>

export type TextTableHeaderCellOwnProps = TableCellOwnProps & {
  textProps?: PolymorphicBoxProps<'span', TextOwnProps>
}

export type TextTableHeaderCellProps = PolymorphicBoxProps<'div', TextTableHeaderCellOwnProps>
export declare const TextTableHeaderCell: BoxComponent<TextTableHeaderCellOwnProps, 'div'>

export type TextOwnProps = {
  size?: Size
  fontFamily?: FontFamily | string
}

export type TextProps = PolymorphicBoxProps<'span', TextOwnProps>
export declare const Text: BoxComponent<TextOwnProps, 'span'>

export interface TextInputOwnProps {
  /**
   * Makes the input element required.
   */
  required?: boolean
  /**
   * Makes the input element disabled.
   */
  disabled?: boolean
  /**
   * Sets visual styling of _only_ the text input to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid?: boolean
  /**
   * Use the native spell check functionality of the browser.
   */
  spellCheck?: boolean
  /**
   * The placeholder text when there is no value present.
   */
  placeholder?: string
  /**
   * The appearance of the TextInput.
   */
  appearance?: TextInputAppearance
  /**
   * The width of the TextInput.
   */
  width?: string | number
  /**
   * Class name passed to the button.
   */
  className?: string
  /**
   * Size of the input
   */
  size?: 'small' | 'medium' | 'large'
}

export type TextInputProps = PolymorphicBoxProps<'input', TextInputOwnProps>
export declare const TextInput: BoxComponent<TextInputOwnProps, 'input'>

export interface TextInputFieldOwnProps extends FormFieldOwnProps {
  /**
   * The label used above the input element.
   */
  label?: React.ReactNode
  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor?: string
  /**
   * Whether or not show a asterix after the label.
   */
  required?: boolean
  /**
   * Whether or not the field is invalid
   */
  isInvalid?: boolean
  /**
   * A optional description of the field under the label, above the input element.
   */
  description?: React.ReactNode
  /**
   * A optional hint under the input element.
   */
  hint?: React.ReactNode
  /**
   * If a validation message is passed it is shown under the input element
   * and above the hint.
   */
  validationMessage?: React.ReactNode
  /**
   * The height of the input element.
   */
  inputHeight?: number
  /**
   * The width of the input width.
   */
  inputWidth?: number | string
}

export type TextInputFieldProps = PolymorphicBoxProps<'input', TextInputFieldOwnProps>
export declare const TextInputField: BoxComponent<TextInputFieldOwnProps, 'input'>

export interface TooltipStatelessProps extends PaneOwnProps {
  /**
   * The appearance of the tooltip.
   */
  appearance?: TooltipAppearance
}

export interface TooltipProps {
  /**
   * The appearance of the Tooltip.
   */
  appearance?: TooltipAppearance
  /**
   * The position the Tooltip is on.
   */
  position?: PositionTypes
  /**
   * The content of the Tooltip.
   */
  content: React.ReactNode
  /**
   * Time in ms before hiding the Tooltip.
   */
  hideDelay?: number
  /**
   * Time in ms before showing the Tooltip.
   */
  showDelay?: number
  /**
   * When true, manually show the Tooltip.
   */
  isShown?: boolean
  /**
   * Properties passed through to the Tooltip.
   */
  statelessProps?: PolymorphicBoxProps<'div', TooltipStatelessProps>
}

export declare const Tooltip: React.FC<TooltipProps>

export interface OrderedListOwnProps {
  /**
   * Size of the text used in a list item.
   */
  size?: Size
}

export type OrderedListProps = PolymorphicBoxProps<'ol', OrderedListOwnProps>
export declare const OrderedList: BoxComponent<OrderedListOwnProps, 'ol'>
export declare const Ol: typeof OrderedList

export interface UnorderedListOwnProps {
  /**
   * Size of the text used in a list item.
   */
  size?: Size
  /**
   * When passed, adds a icon before each list item in the list
   * You can override this on a individual list item.
   */
  icon?: React.ElementType | JSX.Element
  /**
   * The color of the icon in each list item in the list.
   */
  iconColor?: string
}

export type UnorderedListProps = PolymorphicBoxProps<'ul', UnorderedListOwnProps>
export declare const UnorderedList: BoxComponent<UnorderedListOwnProps, 'ul'>
export declare const Ul: typeof UnorderedList

export function majorScale(x: number): number

export function minorScale(x: number): number

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

/**
 * Optional settings that can be set when creating a new Toast.
 */
interface ToasterSettings {
  /**
   * A description of the toast which is rendered as the children of the Toast's Alert component.
   */
  description?: React.ReactNode
  /**
   * How long the Toast will be visible (in seconds). Defaults to 5 seconds.
   */
  duration?: number
  /**
   * Assign a Toast an id if you want only one instance of that toast visible at any given time.
   * When a new toast with an id is opened, any visible toasts with the same id will be closed.
   */
  id?: string
  /**
   * Whether to show a close button on the Toast. Defaults to true.
   */
  hasCloseButton?: boolean
}

interface Toast {
  /**
   * The id of the Toast.
   */
  id: string
  /**
   * The title of the Toast.
   */
  title: React.ReactNode
  /**
   * The description of the Toast.
   */
  description?: React.ReactNode
  /**
   * Whether the Toast is showing a close button.
   */
  hasCloseButton: boolean
  /**
   * How long the Toast is visible for.
   */
  duration: number
  /**
   * Close will close this Toast.
   */
  close(): void
  /**
   * The intent of this Toast. One of none, success, warning, or danger.
   */
  intent?: IntentTypes
}

/**
 * The toaster is used to show toasts (alerts) on top of an overlay. The toasts will close
 * themselves when the close button is clicked, or after a timeout — the default is 5 seconds.
 */
export const toaster: {
  /**
   * Opens a Toast with an intent of none.
   */
  notify: (title: string, settings?: ToasterSettings) => void
  /**
   * Opens a Toast with an intent of success.
   */
  success: (title: string, settings?: ToasterSettings) => void
  /**
   * Opens a Toast with an intent of warning.
   */
  warning: (title: string, settings?: ToasterSettings) => void
  /**
   * Opens a Toast with an intent of danger.
   */
  danger: (title: string, settings?: ToasterSettings) => void
  /**
   * Closes all visible Toasts.
   */
  closeAll: () => void
  /**
   * Returns all visible Toasts.
   */
  getToasts: () => Toast[]
}

export interface OverlayProps {
  children: React.ReactNode | ((props: { state: TransitionStatus; close: () => void }) => JSX.Element)

  isShown?: boolean
  containerProps?: BoxProps<'div'>
  preventBodyScrolling?: boolean
  shouldCloseOnClick?: boolean
  shouldCloseOnEscapePress?: boolean
  onBeforeClose?: () => boolean
  onExit?: TransitionProps['onExit']
  onExiting?: TransitionProps['onExiting']
  onExited?: TransitionProps['onExited']
  onEnter?: TransitionProps['onEnter']
  onEntering?: TransitionProps['onEntering']
  onEntered?: TransitionProps['onEntered']
}

export declare const Overlay: React.FC<OverlayProps>

export type ThemeContext<T extends Theme = DefaultTheme> = React.Context<T>
export declare const ThemeContext: ThemeContext
export declare const ThemeProvider: ThemeContext['Provider']
export declare const ThemeConsumer: ThemeContext['Consumer']
export declare const getThemeContext: <T extends Theme = DefaultTheme>() => ThemeContext<T>
export declare const useTheme: <T extends Theme = DefaultTheme>() => T
/**
 * Adds or overrides theme values on top of an existing theme object
 * @param destinationTheme Theme object to merge on top of
 * @param sourceTheme Theme object that adds or overrides values
 */
export declare const mergeTheme: <TDestinationTheme extends Theme, TSourceTheme extends Partial<Theme>>(
  destinationTheme: TDestinationTheme,
  sourceTheme: TSourceTheme
) => TDestinationTheme & TSourceTheme

export interface IconProps extends BoxProps<'svg'> {
  /**
   * Color of icon. Equivalent to setting CSS `fill` property.
   */
  color?: string
  /**
   * Size of the icon, in pixels.
   * Blueprint contains 16px and 20px SVG icon images,
   * and chooses the appropriate resolution based on this prop.
   */
  size?: number
  /**
   * Description string.
   * Browsers usually render this as a tooltip on hover, whereas screen
   * readers will use it for aural feedback.
   * By default, this is set to the icon's name for accessibility.
   */
  title?: string
}

/* Start generated icons */
export type IconComponent = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<IconProps> & React.RefAttributes<SVGElement>
>
export declare const AddIcon: IconComponent
export declare const AddColumnLeftIcon: IconComponent
export declare const AddColumnRightIcon: IconComponent
export declare const AddLocationIcon: IconComponent
export declare const AddRowBottomIcon: IconComponent
export declare const AddRowTopIcon: IconComponent
export declare const AddToArtifactIcon: IconComponent
export declare const AddToFolderIcon: IconComponent
export declare const AirplaneIcon: IconComponent
export declare const AlignCenterIcon: IconComponent
export declare const AlignJustifyIcon: IconComponent
export declare const AlignLeftIcon: IconComponent
export declare const AlignRightIcon: IconComponent
export declare const AlignmentBottomIcon: IconComponent
export declare const AlignmentHorizontalCenterIcon: IconComponent
export declare const AlignmentLeftIcon: IconComponent
export declare const AlignmentRightIcon: IconComponent
export declare const AlignmentTopIcon: IconComponent
export declare const AlignmentVerticalCenterIcon: IconComponent
export declare const AnnotationIcon: IconComponent
export declare const AntennaIcon: IconComponent
export declare const AppHeaderIcon: IconComponent
export declare const ApplicationIcon: IconComponent
export declare const ApplicationsIcon: IconComponent
export declare const ArchiveIcon: IconComponent
export declare const AreaOfInterestIcon: IconComponent
export declare const ArrayIcon: IconComponent
export declare const ArrayBooleanIcon: IconComponent
export declare const ArrayDateIcon: IconComponent
export declare const ArrayNumericIcon: IconComponent
export declare const ArrayStringIcon: IconComponent
export declare const ArrayTimestampIcon: IconComponent
export declare const ArrowBottomLeftIcon: IconComponent
export declare const ArrowBottomRightIcon: IconComponent
export declare const ArrowDownIcon: IconComponent
export declare const ArrowLeftIcon: IconComponent
export declare const ArrowRightIcon: IconComponent
export declare const ArrowTopLeftIcon: IconComponent
export declare const ArrowTopRightIcon: IconComponent
export declare const ArrowUpIcon: IconComponent
export declare const ArrowsHorizontalIcon: IconComponent
export declare const ArrowsVerticalIcon: IconComponent
export declare const AsteriskIcon: IconComponent
export declare const AutomaticUpdatesIcon: IconComponent
export declare const BacklinkIcon: IconComponent
export declare const BadgeIcon: IconComponent
export declare const BanCircleIcon: IconComponent
export declare const BankAccountIcon: IconComponent
export declare const BarcodeIcon: IconComponent
export declare const BlankIcon: IconComponent
export declare const BlockedPersonIcon: IconComponent
export declare const BoldIcon: IconComponent
export declare const BookIcon: IconComponent
export declare const BookmarkIcon: IconComponent
export declare const BoxIcon: IconComponent
export declare const BriefcaseIcon: IconComponent
export declare const BringDataIcon: IconComponent
export declare const BuggyIcon: IconComponent
export declare const BuildIcon: IconComponent
export declare const CalculatorIcon: IconComponent
export declare const CalendarIcon: IconComponent
export declare const CameraIcon: IconComponent
export declare const CaretDownIcon: IconComponent
export declare const CaretLeftIcon: IconComponent
export declare const CaretRightIcon: IconComponent
export declare const CaretUpIcon: IconComponent
export declare const CellTowerIcon: IconComponent
export declare const ChangesIcon: IconComponent
export declare const ChartIcon: IconComponent
export declare const ChatIcon: IconComponent
export declare const ChevronBackwardIcon: IconComponent
export declare const ChevronDownIcon: IconComponent
export declare const ChevronForwardIcon: IconComponent
export declare const ChevronLeftIcon: IconComponent
export declare const ChevronRightIcon: IconComponent
export declare const ChevronUpIcon: IconComponent
export declare const CircleIcon: IconComponent
export declare const CircleArrowDownIcon: IconComponent
export declare const CircleArrowLeftIcon: IconComponent
export declare const CircleArrowRightIcon: IconComponent
export declare const CircleArrowUpIcon: IconComponent
export declare const CitationIcon: IconComponent
export declare const CleanIcon: IconComponent
export declare const ClipboardIcon: IconComponent
export declare const CloudIcon: IconComponent
export declare const CloudDownloadIcon: IconComponent
export declare const CloudUploadIcon: IconComponent
export declare const CodeIcon: IconComponent
export declare const CodeBlockIcon: IconComponent
export declare const CogIcon: IconComponent
export declare const CollapseAllIcon: IconComponent
export declare const ColumnLayoutIcon: IconComponent
export declare const CommentIcon: IconComponent
export declare const ComparisonIcon: IconComponent
export declare const CompassIcon: IconComponent
export declare const CompressedIcon: IconComponent
export declare const ConfirmIcon: IconComponent
export declare const ConsoleIcon: IconComponent
export declare const ContrastIcon: IconComponent
export declare const ControlIcon: IconComponent
export declare const CreditCardIcon: IconComponent
export declare const CrossIcon: IconComponent
export declare const CrownIcon: IconComponent
export declare const CubeIcon: IconComponent
export declare const CubeAddIcon: IconComponent
export declare const CubeRemoveIcon: IconComponent
export declare const CurvedRangeChartIcon: IconComponent
export declare const CutIcon: IconComponent
export declare const CycleIcon: IconComponent
export declare const DashboardIcon: IconComponent
export declare const DataConnectionIcon: IconComponent
export declare const DataLineageIcon: IconComponent
export declare const DatabaseIcon: IconComponent
export declare const DeleteIcon: IconComponent
export declare const DeltaIcon: IconComponent
export declare const DeriveColumnIcon: IconComponent
export declare const DesktopIcon: IconComponent
export declare const DiagnosisIcon: IconComponent
export declare const DiagramTreeIcon: IconComponent
export declare const DirectionLeftIcon: IconComponent
export declare const DirectionRightIcon: IconComponent
export declare const DisableIcon: IconComponent
export declare const DocumentIcon: IconComponent
export declare const DocumentOpenIcon: IconComponent
export declare const DocumentShareIcon: IconComponent
export declare const DollarIcon: IconComponent
export declare const DotIcon: IconComponent
export declare const DoubleCaretHorizontalIcon: IconComponent
export declare const DoubleCaretVerticalIcon: IconComponent
export declare const DoubleChevronDownIcon: IconComponent
export declare const DoubleChevronLeftIcon: IconComponent
export declare const DoubleChevronRightIcon: IconComponent
export declare const DoubleChevronUpIcon: IconComponent
export declare const DoughnutChartIcon: IconComponent
export declare const DownloadIcon: IconComponent
export declare const DragHandleHorizontalIcon: IconComponent
export declare const DragHandleVerticalIcon: IconComponent
export declare const DrawIcon: IconComponent
export declare const DrawerLeftIcon: IconComponent
export declare const DrawerLeftFilledIcon: IconComponent
export declare const DrawerRightIcon: IconComponent
export declare const DrawerRightFilledIcon: IconComponent
export declare const DriveTimeIcon: IconComponent
export declare const DuplicateIcon: IconComponent
export declare const EditIcon: IconComponent
export declare const EjectIcon: IconComponent
export declare const EmojiIcon: IconComponent
export declare const EndorsedIcon: IconComponent
export declare const EnvelopeIcon: IconComponent
export declare const EqualsIcon: IconComponent
export declare const EraserIcon: IconComponent
export declare const ErrorIcon: IconComponent
export declare const EuroIcon: IconComponent
export declare const ExchangeIcon: IconComponent
export declare const ExcludeRowIcon: IconComponent
export declare const ExpandAllIcon: IconComponent
export declare const ExportIcon: IconComponent
export declare const EyeOffIcon: IconComponent
export declare const EyeOnIcon: IconComponent
export declare const EyeOpenIcon: IconComponent
export declare const FastBackwardIcon: IconComponent
export declare const FastForwardIcon: IconComponent
export declare const FeedIcon: IconComponent
export declare const FeedSubscribedIcon: IconComponent
export declare const FilmIcon: IconComponent
export declare const FilterIcon: IconComponent
export declare const FilterKeepIcon: IconComponent
export declare const FilterListIcon: IconComponent
export declare const FilterOpenIcon: IconComponent
export declare const FilterRemoveIcon: IconComponent
export declare const FlagIcon: IconComponent
export declare const FlameIcon: IconComponent
export declare const FlashIcon: IconComponent
export declare const FloppyDiskIcon: IconComponent
export declare const FlowBranchIcon: IconComponent
export declare const FlowEndIcon: IconComponent
export declare const FlowLinearIcon: IconComponent
export declare const FlowReviewIcon: IconComponent
export declare const FlowReviewBranchIcon: IconComponent
export declare const FlowsIcon: IconComponent
export declare const FolderCloseIcon: IconComponent
export declare const FolderNewIcon: IconComponent
export declare const FolderOpenIcon: IconComponent
export declare const FolderSharedIcon: IconComponent
export declare const FolderSharedOpenIcon: IconComponent
export declare const FollowerIcon: IconComponent
export declare const FollowingIcon: IconComponent
export declare const FontIcon: IconComponent
export declare const ForkIcon: IconComponent
export declare const FormIcon: IconComponent
export declare const FullCircleIcon: IconComponent
export declare const FullStackedChartIcon: IconComponent
export declare const FullscreenIcon: IconComponent
export declare const FunctionIcon: IconComponent
export declare const GanttChartIcon: IconComponent
export declare const GeofenceIcon: IconComponent
export declare const GeolocationIcon: IconComponent
export declare const GeosearchIcon: IconComponent
export declare const GitBranchIcon: IconComponent
export declare const GitCommitIcon: IconComponent
export declare const GitMergeIcon: IconComponent
export declare const GitNewBranchIcon: IconComponent
export declare const GitPullIcon: IconComponent
export declare const GitPushIcon: IconComponent
export declare const GitRepoIcon: IconComponent
export declare const GlassIcon: IconComponent
export declare const GlobeIcon: IconComponent
export declare const GlobeNetworkIcon: IconComponent
export declare const GraphIcon: IconComponent
export declare const GraphRemoveIcon: IconComponent
export declare const GreaterThanIcon: IconComponent
export declare const GreaterThanOrEqualToIcon: IconComponent
export declare const GridIcon: IconComponent
export declare const GridViewIcon: IconComponent
export declare const GroupObjectsIcon: IconComponent
export declare const GroupedBarChartIcon: IconComponent
export declare const HandIcon: IconComponent
export declare const HandDownIcon: IconComponent
export declare const HandLeftIcon: IconComponent
export declare const HandRightIcon: IconComponent
export declare const HandUpIcon: IconComponent
export declare const HatIcon: IconComponent
export declare const HeaderIcon: IconComponent
export declare const HeaderOneIcon: IconComponent
export declare const HeaderThreeIcon: IconComponent
export declare const HeaderTwoIcon: IconComponent
export declare const HeadsetIcon: IconComponent
export declare const HeartIcon: IconComponent
export declare const HeartBrokenIcon: IconComponent
export declare const HeatGridIcon: IconComponent
export declare const HeatmapIcon: IconComponent
export declare const HelicopterIcon: IconComponent
export declare const HelpIcon: IconComponent
export declare const HelperManagementIcon: IconComponent
export declare const HighPriorityIcon: IconComponent
export declare const HighlightIcon: IconComponent
export declare const HistoryIcon: IconComponent
export declare const HomeIcon: IconComponent
export declare const HorizontalBarChartIcon: IconComponent
export declare const HorizontalBarChartAscIcon: IconComponent
export declare const HorizontalBarChartDescIcon: IconComponent
export declare const HorizontalDistributionIcon: IconComponent
export declare const HurricaneIcon: IconComponent
export declare const IdNumberIcon: IconComponent
export declare const ImageRotateLeftIcon: IconComponent
export declare const ImageRotateRightIcon: IconComponent
export declare const ImportIcon: IconComponent
export declare const InboxIcon: IconComponent
export declare const InboxFilteredIcon: IconComponent
export declare const InboxGeoIcon: IconComponent
export declare const InboxSearchIcon: IconComponent
export declare const InboxUpdateIcon: IconComponent
export declare const InfoSignIcon: IconComponent
export declare const InheritanceIcon: IconComponent
export declare const InheritedGroupIcon: IconComponent
export declare const InnerJoinIcon: IconComponent
export declare const InsertIcon: IconComponent
export declare const IntersectionIcon: IconComponent
export declare const IpAddressIcon: IconComponent
export declare const IssueIcon: IconComponent
export declare const IssueClosedIcon: IconComponent
export declare const IssueNewIcon: IconComponent
export declare const ItalicIcon: IconComponent
export declare const JoinTableIcon: IconComponent
export declare const KeyIcon: IconComponent
export declare const KeyBackspaceIcon: IconComponent
export declare const KeyCommandIcon: IconComponent
export declare const KeyControlIcon: IconComponent
export declare const KeyDeleteIcon: IconComponent
export declare const KeyEnterIcon: IconComponent
export declare const KeyEscapeIcon: IconComponent
export declare const KeyOptionIcon: IconComponent
export declare const KeyShiftIcon: IconComponent
export declare const KeyTabIcon: IconComponent
export declare const KnownVehicleIcon: IconComponent
export declare const LabTestIcon: IconComponent
export declare const LabelIcon: IconComponent
export declare const LayerIcon: IconComponent
export declare const LayerOutlineIcon: IconComponent
export declare const LayersIcon: IconComponent
export declare const LayoutIcon: IconComponent
export declare const LayoutAutoIcon: IconComponent
export declare const LayoutBalloonIcon: IconComponent
export declare const LayoutCircleIcon: IconComponent
export declare const LayoutGridIcon: IconComponent
export declare const LayoutGroupByIcon: IconComponent
export declare const LayoutHierarchyIcon: IconComponent
export declare const LayoutLinearIcon: IconComponent
export declare const LayoutSkewGridIcon: IconComponent
export declare const LayoutSortedClustersIcon: IconComponent
export declare const LearningIcon: IconComponent
export declare const LeftJoinIcon: IconComponent
export declare const LessThanIcon: IconComponent
export declare const LessThanOrEqualToIcon: IconComponent
export declare const LifesaverIcon: IconComponent
export declare const LightbulbIcon: IconComponent
export declare const LightningIcon: IconComponent
export declare const LinkIcon: IconComponent
export declare const ListIcon: IconComponent
export declare const ListColumnsIcon: IconComponent
export declare const ListDetailViewIcon: IconComponent
export declare const LocateIcon: IconComponent
export declare const LockIcon: IconComponent
export declare const LogInIcon: IconComponent
export declare const LogOutIcon: IconComponent
export declare const ManualIcon: IconComponent
export declare const ManuallyEnteredDataIcon: IconComponent
export declare const ManyToManyIcon: IconComponent
export declare const ManyToOneIcon: IconComponent
export declare const MapIcon: IconComponent
export declare const MapCreateIcon: IconComponent
export declare const MapMarkerIcon: IconComponent
export declare const MaximizeIcon: IconComponent
export declare const MediaIcon: IconComponent
export declare const MenuIcon: IconComponent
export declare const MenuClosedIcon: IconComponent
export declare const MenuOpenIcon: IconComponent
export declare const MergeColumnsIcon: IconComponent
export declare const MergeLinksIcon: IconComponent
export declare const MinimizeIcon: IconComponent
export declare const MinusIcon: IconComponent
export declare const MobilePhoneIcon: IconComponent
export declare const MobileVideoIcon: IconComponent
export declare const ModalIcon: IconComponent
export declare const ModalFilledIcon: IconComponent
export declare const MoonIcon: IconComponent
export declare const MoreIcon: IconComponent
export declare const MountainIcon: IconComponent
export declare const MoveIcon: IconComponent
export declare const MugshotIcon: IconComponent
export declare const MultiSelectIcon: IconComponent
export declare const MusicIcon: IconComponent
export declare const NestIcon: IconComponent
export declare const NewDrawingIcon: IconComponent
export declare const NewGridItemIcon: IconComponent
export declare const NewLayerIcon: IconComponent
export declare const NewLayersIcon: IconComponent
export declare const NewLinkIcon: IconComponent
export declare const NewObjectIcon: IconComponent
export declare const NewPersonIcon: IconComponent
export declare const NewPrescriptionIcon: IconComponent
export declare const NewTextBoxIcon: IconComponent
export declare const NinjaIcon: IconComponent
export declare const NotEqualToIcon: IconComponent
export declare const NotificationsIcon: IconComponent
export declare const NotificationsSnoozeIcon: IconComponent
export declare const NotificationsUpdatedIcon: IconComponent
export declare const NumberedListIcon: IconComponent
export declare const NumericalIcon: IconComponent
export declare const OfficeIcon: IconComponent
export declare const OfflineIcon: IconComponent
export declare const OilFieldIcon: IconComponent
export declare const OneColumnIcon: IconComponent
export declare const OneToManyIcon: IconComponent
export declare const OneToOneIcon: IconComponent
export declare const OutdatedIcon: IconComponent
export declare const PageLayoutIcon: IconComponent
export declare const PanelStatsIcon: IconComponent
export declare const PanelTableIcon: IconComponent
export declare const PaperclipIcon: IconComponent
export declare const ParagraphIcon: IconComponent
export declare const PathIcon: IconComponent
export declare const PathSearchIcon: IconComponent
export declare const PauseIcon: IconComponent
export declare const PeopleIcon: IconComponent
export declare const PercentageIcon: IconComponent
export declare const PersonIcon: IconComponent
export declare const PhoneIcon: IconComponent
export declare const PieChartIcon: IconComponent
export declare const PinIcon: IconComponent
export declare const PivotIcon: IconComponent
export declare const PivotTableIcon: IconComponent
export declare const PlayIcon: IconComponent
export declare const PlusIcon: IconComponent
export declare const PolygonFilterIcon: IconComponent
export declare const PowerIcon: IconComponent
export declare const PredictiveAnalysisIcon: IconComponent
export declare const PrescriptionIcon: IconComponent
export declare const PresentationIcon: IconComponent
export declare const PrintIcon: IconComponent
export declare const ProjectsIcon: IconComponent
export declare const PropertiesIcon: IconComponent
export declare const PropertyIcon: IconComponent
export declare const PublishFunctionIcon: IconComponent
export declare const PulseIcon: IconComponent
export declare const RainIcon: IconComponent
export declare const RandomIcon: IconComponent
export declare const RecordIcon: IconComponent
export declare const RedoIcon: IconComponent
export declare const RefreshIcon: IconComponent
export declare const RegressionChartIcon: IconComponent
export declare const RemoveIcon: IconComponent
export declare const RemoveColumnIcon: IconComponent
export declare const RemoveColumnLeftIcon: IconComponent
export declare const RemoveColumnRightIcon: IconComponent
export declare const RemoveRowBottomIcon: IconComponent
export declare const RemoveRowTopIcon: IconComponent
export declare const RepeatIcon: IconComponent
export declare const ResetIcon: IconComponent
export declare const ResolveIcon: IconComponent
export declare const RigIcon: IconComponent
export declare const RightJoinIcon: IconComponent
export declare const RingIcon: IconComponent
export declare const RocketIcon: IconComponent
export declare const RocketSlantIcon: IconComponent
export declare const RotateDocumentIcon: IconComponent
export declare const RotatePageIcon: IconComponent
export declare const RouteIcon: IconComponent
export declare const SatelliteIcon: IconComponent
export declare const SavedIcon: IconComponent
export declare const ScatterPlotIcon: IconComponent
export declare const SearchIcon: IconComponent
export declare const SearchAroundIcon: IconComponent
export declare const SearchTemplateIcon: IconComponent
export declare const SearchTextIcon: IconComponent
export declare const SegmentedControlIcon: IconComponent
export declare const SelectIcon: IconComponent
export declare const SelectionIcon: IconComponent
export declare const SendMessageIcon: IconComponent
export declare const SendToIcon: IconComponent
export declare const SendToGraphIcon: IconComponent
export declare const SendToMapIcon: IconComponent
export declare const SeriesAddIcon: IconComponent
export declare const SeriesConfigurationIcon: IconComponent
export declare const SeriesDerivedIcon: IconComponent
export declare const SeriesFilteredIcon: IconComponent
export declare const SeriesSearchIcon: IconComponent
export declare const SettingsIcon: IconComponent
export declare const ShapesIcon: IconComponent
export declare const ShareIcon: IconComponent
export declare const SharedFilterIcon: IconComponent
export declare const ShieldIcon: IconComponent
export declare const ShopIcon: IconComponent
export declare const ShoppingCartIcon: IconComponent
export declare const SignalSearchIcon: IconComponent
export declare const SimCardIcon: IconComponent
export declare const SlashIcon: IconComponent
export declare const SmallCrossIcon: IconComponent
export declare const SmallMinusIcon: IconComponent
export declare const SmallPlusIcon: IconComponent
export declare const SmallSquareIcon: IconComponent
export declare const SmallTickIcon: IconComponent
export declare const SnowflakeIcon: IconComponent
export declare const SocialMediaIcon: IconComponent
export declare const SortIcon: IconComponent
export declare const SortAlphabeticalIcon: IconComponent
export declare const SortAlphabeticalDescIcon: IconComponent
export declare const SortAscIcon: IconComponent
export declare const SortDescIcon: IconComponent
export declare const SortNumericalIcon: IconComponent
export declare const SortNumericalDescIcon: IconComponent
export declare const SplitColumnsIcon: IconComponent
export declare const SquareIcon: IconComponent
export declare const StackedChartIcon: IconComponent
export declare const StadiumGeometryIcon: IconComponent
export declare const StarIcon: IconComponent
export declare const StarEmptyIcon: IconComponent
export declare const StepBackwardIcon: IconComponent
export declare const StepChartIcon: IconComponent
export declare const StepForwardIcon: IconComponent
export declare const StopIcon: IconComponent
export declare const StopwatchIcon: IconComponent
export declare const StrikethroughIcon: IconComponent
export declare const StyleIcon: IconComponent
export declare const SwapHorizontalIcon: IconComponent
export declare const SwapVerticalIcon: IconComponent
export declare const SwitchIcon: IconComponent
export declare const SymbolCircleIcon: IconComponent
export declare const SymbolCrossIcon: IconComponent
export declare const SymbolDiamondIcon: IconComponent
export declare const SymbolSquareIcon: IconComponent
export declare const SymbolTriangleDownIcon: IconComponent
export declare const SymbolTriangleUpIcon: IconComponent
export declare const SyringeIcon: IconComponent
export declare const TagIcon: IconComponent
export declare const TakeActionIcon: IconComponent
export declare const TankIcon: IconComponent
export declare const TaxiIcon: IconComponent
export declare const TemperatureIcon: IconComponent
export declare const TextHighlightIcon: IconComponent
export declare const ThIcon: IconComponent
export declare const ThDerivedIcon: IconComponent
export declare const ThDisconnectIcon: IconComponent
export declare const ThFilteredIcon: IconComponent
export declare const ThListIcon: IconComponent
export declare const ThirdPartyIcon: IconComponent
export declare const ThumbsDownIcon: IconComponent
export declare const ThumbsUpIcon: IconComponent
export declare const TickIcon: IconComponent
export declare const TickCircleIcon: IconComponent
export declare const TimeIcon: IconComponent
export declare const TimelineAreaChartIcon: IconComponent
export declare const TimelineBarChartIcon: IconComponent
export declare const TimelineEventsIcon: IconComponent
export declare const TimelineLineChartIcon: IconComponent
export declare const TintIcon: IconComponent
export declare const TorchIcon: IconComponent
export declare const TractorIcon: IconComponent
export declare const TrainIcon: IconComponent
export declare const TranslateIcon: IconComponent
export declare const TrashIcon: IconComponent
export declare const TreeIcon: IconComponent
export declare const TrendingDownIcon: IconComponent
export declare const TrendingUpIcon: IconComponent
export declare const TruckIcon: IconComponent
export declare const TwoColumnsIcon: IconComponent
export declare const UnarchiveIcon: IconComponent
export declare const UnderlineIcon: IconComponent
export declare const UndoIcon: IconComponent
export declare const UngroupObjectsIcon: IconComponent
export declare const UnknownVehicleIcon: IconComponent
export declare const UnlockIcon: IconComponent
export declare const UnpinIcon: IconComponent
export declare const UnresolveIcon: IconComponent
export declare const UpdatedIcon: IconComponent
export declare const UploadIcon: IconComponent
export declare const UserIcon: IconComponent
export declare const VariableIcon: IconComponent
export declare const VerticalBarChartAscIcon: IconComponent
export declare const VerticalBarChartDescIcon: IconComponent
export declare const VerticalDistributionIcon: IconComponent
export declare const VideoIcon: IconComponent
export declare const VirusIcon: IconComponent
export declare const VolumeDownIcon: IconComponent
export declare const VolumeOffIcon: IconComponent
export declare const VolumeUpIcon: IconComponent
export declare const WalkIcon: IconComponent
export declare const WarningSignIcon: IconComponent
export declare const WaterfallChartIcon: IconComponent
export declare const WavesIcon: IconComponent
export declare const WidgetIcon: IconComponent
export declare const WidgetButtonIcon: IconComponent
export declare const WidgetFooterIcon: IconComponent
export declare const WidgetHeaderIcon: IconComponent
export declare const WindIcon: IconComponent
export declare const WrenchIcon: IconComponent
export declare const ZoomInIcon: IconComponent
export declare const ZoomOutIcon: IconComponent
export declare const ZoomToFitIcon: IconComponent
/* End generated icons */

// ====================================================
// The following component types have yet to be defined
// ====================================================

export declare const OptionShapePropType: unknown
export declare const SelectedPropType: unknown
