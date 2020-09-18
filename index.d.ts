/* tslint:disable:interface-name max-classes-per-file no-empty-interface */

import * as React from 'react'
import { extractStyles as boxExtractStyles, BoxProps, BoxComponent, PolymorphicBoxProps } from 'ui-box'
import { StyleAttribute, CSSProperties } from 'glamor'
import { DownshiftProps } from 'downshift'
import { TransitionProps, TransitionStatus } from 'react-transition-group/Transition'

export { configureSafeHref, BoxProps, BoxOwnProps, BoxComponent, PolymorphicBoxProps, EnhancerProps } from 'ui-box'

export type PositionTypes = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right'
export type IntentTypes = 'none' | 'success' | 'warning' | 'danger'
export type DefaultAppearance = 'default'
export type AlertAppearance = DefaultAppearance | 'card'
export type ButtonAppearance = DefaultAppearance | 'minimal' | 'primary'
export type CodeAppearance = DefaultAppearance | 'minimal'
export type CheckboxAppearance = DefaultAppearance
export type IconButtonAppearance = DefaultAppearance | 'minimal' | 'primary'
export type TextInputAppearance = DefaultAppearance | 'primary'
export type TooltipAppearance = DefaultAppearance | 'card'
export type PositionState = 'exited' | 'entering' | 'entered' | 'exiting'
export type FontFamily = 'ui' | 'display' | 'mono'
export type Elevation = 0 | 1 | 2 | 3 | 4
export type FontSizeSmall = 300 | 400

export interface Colors {
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

interface SolidFills {
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

interface SubtleFills {
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

interface Fills {
  options: string[]
  solid: SolidFills
  subtle: SubtleFills
}

interface Palette {
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

interface ColorScales {
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

interface Typography {
  fontFamilies: {
    display: string
    mono: string
    ui: string
  }
  headings: {
    100: {
      color: string
      fontFamily: string
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
      textTransform: string
    }
    200: {
      color: string
      fontFamily: string
      fontSize: string
      fontWeight: number
      lineHeight: string
      marginTop: number
    }
    300: {
      color: string
      fontFamily: string
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
    400: {
      color: string
      fontFamily: string
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
    500: {
      color: string
      fontFamily: string
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
    600: {
      color: string
      fontFamily: string
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
    700: {
      color: string
      fontFamily: string
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
    800: {
      color: string
      fontFamily: string
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
    900: {
      color: string
      fontFamily: string
      fontSize: string
      fontWeight: number
      letterSpacing: string
      lineHeight: string
      marginTop: number
    }
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

export interface Theme {
  avatarColors: string[]
  badgeColors: string[]
  colors: Colors
  elevations: Elevation[]
  fills: Fills
  overlayBackgroundColor: string
  palette: Palette
  scales: ColorScales
  spinnerColor: string
  typography: Typography
  getIconColor(color: string): string
  getAvatarProps(args: {
    isSolid?: boolean
    color: string
    hashValue?: string
  }): { color: string; backgroundColor: string }
}

export const defaultTheme: Theme

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

type ForwardRefComponent<P = {}, T = any> = React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<T>>

export interface AlertOwnProps extends Omit<PaneOwnProps, 'title'> {
  intent?: IntentTypes
  title?: React.ReactNode
  hasTrim?: boolean
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
  label: string
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
  renderItem?: (i: AutocompleteItemProps) => JSX.Element | null
  itemsFilter?: (items: string[], input: string) => string[]
  children: (props: {
                toggle: () => void,
                getRef: React.Ref<any>,
                isShown: NonNullable<PopoverProps['isShown']>,
                getInputProps: <T>(options?: T) => T & {
                  onChange: (event: React.ChangeEvent) => void,
                  onKeyDown: (event: React.KeyboardEvent) => void,
                  onBlur: (event: React.FocusEvent) => void,
                  id: string,
                  value: string,
                  'aria-autocomplete': 'list',
                  'aria-activedescendant'?: string,
                  'aria-controls'?: string,
                  'aria-labelledby': string,
                  autoComplete: 'off'
                },
                openMenu: () => any,
                inputValue: string,
              }
  ) => React.ReactNode
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
  isSolid?: boolean
  color?: string
  getInitials?: (name: string) => string
  forceShowInitials?: boolean
  sizeLimitOneCharacter?: number
}

export type AvatarProps = PolymorphicBoxProps<'div', AvatarOwnProps>
export declare const Avatar: BoxComponent<AvatarOwnProps>

export type BackButtonOwnProps = ButtonOwnProps
export type BackButtonProps = PolymorphicBoxProps<'button', BackButtonOwnProps>
export declare const BackButton: BoxComponent<BackButtonOwnProps, 'button'>

export interface BadgeOwnProps extends StrongOwnProps {
  /**
   * The color used for the badge. When the value is `automatic`, use the hash function to determine the color.
   */
  color?: 'automatic' | 'neutral' | 'blue' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'purple'
  /**
   * Whether or not to apply hover/focus/active styles.
   */
  isInteractive?: boolean
  isSolid?: boolean
}

export type BadgeProps = PolymorphicBoxProps<'strong', BadgeOwnProps>
export declare const Badge: BoxComponent<BadgeOwnProps, 'strong'>

export interface ButtonOwnProps extends TextOwnProps {
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
}

export declare const Dialog: React.FC<DialogProps>

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

export interface FormFieldDescriptionOwnProps extends ParagraphOwnProps {
}

export type FormFieldDescriptionProps = PolymorphicBoxProps<'p', FormFieldDescriptionOwnProps>
export declare const FormFieldDescription: BoxComponent<FormFieldDescriptionOwnProps, 'p'>


export interface FormFieldHintOwnProps extends ParagraphOwnProps {
}

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

export interface HeadingOwnProps {
  size?: keyof Typography['headings']
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
  size?: keyof Typography['text']
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
  secondaryText?: JSX.Element
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
  options: Array<{ value: T, label: string }>
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

export interface PaneOwnProps {
  background?: keyof Colors['background'] | string
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
    ((props: { toggle: () => void, getRef: (ref: React.RefObject<HTMLElement>) => void, isShown: NonNullable<PopoverProps['isShown']> }) => React.ReactNode)
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
  size?: keyof Typography['paragraph']
  fontFamily?: FontFamily
}

export type ParagraphProps = PolymorphicBoxProps<'p', ParagraphOwnProps>
export declare const Paragraph: BoxComponent<ParagraphOwnProps, 'p'>

export class Portal extends React.Component {}

export interface PositionerProps {
  position?: PositionTypes
  isShown?: boolean
  children: (params: {
    top: number,
    left: number,
    zIndex: NonNullable<StackProps['value']>,
    css: StyleAttribute | CSSProperties,
    style: {
      transformOrigin: string,
      left: number,
      top: number,
      zIndex: NonNullable<StackProps['value']>,
    },
    getRef: (ref: React.RefObject<HTMLElement>) => void,
    animationDuration: PositionerProps['animationDuration'],
    state: PositionState
  }) => React.ReactNode
  bodyOffset?: number
  targetOffset?: number
  target: (params: { getRef: () => React.RefObject<HTMLElement>, isShown: boolean }) => React.ReactNode
  initialScale?: number
  animationDuration?: number
  onCloseComplete?: () => void
  onOpenComplete?: () => void
}

export declare const Positioner: React.FC<PositionerProps>

export type PreOwnProps = TextOwnProps
export type PreProps = PolymorphicBoxProps<'pre', PreOwnProps>
export declare const Pre: BoxComponent<PreOwnProps, 'pre'>

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

export interface Option {
  label?: string
  value?: string | number
  disabled?: boolean
}

export interface OptionsListProps extends PaneOwnProps {
  options?: Option[]
  close?: () => void
  height?: number
  width?: number
  isMultiSelect?: boolean
  selected?: string | string[]
  onSelect?: (value: Option) => void
  onDeselect?: (value: Option) => void
  onFilterChange?: (value: string) => void
  hasFilter?: boolean
  optionSize?: number
  renderItem?: (props: {
    key: Option['value']
    label: Option['label']
    style: object,
    height: NonNullable<OptionsListProps['optionSize']>,
    onSelect: () => void
    onDeselect: () => void
    isSelectable: boolean
    isSelected: boolean
    disabled: Option['disabled']
  }) => JSX.Element
  filterPlaceholder?: string
  filterIcon?: React.ElementType | JSX.Element
  optionsFilter?: (
    value: Option['label'][],
    filter: NonNullable<OptionsListProps['defaultSearchValue']>
  ) => void
  defaultSearchValue?: string
}

export class OptionsList extends React.PureComponent<OptionsListProps & BoxProps<'div'>> {
}

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

export interface SegmentedControlOwnProps {
  /**
   * The options (elements) displayed by the segmented control
   */
  options: Array<{ label: string, value: NonNullable<SegmentedControlOwnProps['value']> }>
  
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

  /**
   * The height of the segmented control
   */
  height?: number

  /**
   * Whether or not the component is disabled
   */
  disabled?: boolean
}

export type SegmentedControlProps = PolymorphicBoxProps<'div', SegmentedControlOwnProps>
export declare const SegmentedControl: BoxComponent<SegmentedControlOwnProps, 'div'>

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
}

export type SelectProps = PolymorphicBoxProps<'div', SelectOwnProps>
export declare const Select: BoxComponent<SelectOwnProps, 'div'>

export type SelectFieldOwnProps = FormFieldOwnProps & SelectOwnProps
export type SelectFieldProps = PolymorphicBoxProps<'div', SelectFieldOwnProps>
export declare const SelectField: BoxComponent<SelectFieldOwnProps, 'div'>

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
  titleView?: React.ReactNode | ((props: {
    close: NonNullable<SelectMenuContentProps['close']>,
    title: SelectMenuContentProps['title'],
    headerHeight: NonNullable<SelectMenuContentProps['headerHeight']>,
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
}

export declare const SelectMenu: React.FC<SelectMenuProps>

export interface SideSheetProps {
  children: React.ReactNode | (() => React.ReactNode)
  isShown?: boolean
  onCloseComplete?: () => void
  onOpenComplete?: () => void
  onBeforeClose?: () => void
  shouldCloseOnOverlayClick?: boolean
  shouldCloseOnEscapePress?: boolean
  width?: string | number
  containerProps?: PaneOwnProps & BoxProps<'div'>
  position?: Extract<PositionTypes, 'top' | 'bottom' | 'left' | 'right'>
  preventBodyScrolling?: boolean
}

export declare const SideSheet: React.FC<SideSheetProps>

export type SidebarTabOwnProps = TabOwnProps
export type SidebarTabProps = PolymorphicBoxProps<'span', SidebarTabOwnProps>
export declare const SidebarTab: BoxComponent<SidebarTabOwnProps, 'span'>

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

export interface TableBodyOwnProps extends PaneOwnProps {
}

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

export interface TableHeaderCellOwnProps extends TableCellOwnProps {
}

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

export interface TableOwnProps extends PaneOwnProps {
}

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
  appearance?: DefaultAppearance
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
  className?: string
  disabled?: boolean
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
  tagSubmitKey?: "enter" | "space"
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

export interface TextDropdownButtonOwnProps extends TextOwnProps {
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
   * An Evergreen icon or custom icon node. By default it uses CaretDownIcon
   */
  icon?: React.ElementType | JSX.Element | null | false
  /**
   * Class name passed to the button.
   */
  className?: string
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
  size?: keyof Typography['text']
  fontFamily?: FontFamily | string
}

export type TextProps = PolymorphicBoxProps<'span', TextOwnProps>
export declare const Text: BoxComponent<TextOwnProps, 'span'>

export interface TextInputOwnProps extends TextOwnProps {
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
  size?: keyof Typography['text']
}

export type OrderedListProps = PolymorphicBoxProps<'ol', OrderedListOwnProps>
export declare const OrderedList: BoxComponent<OrderedListOwnProps, 'ol'>
export declare const Ol: typeof OrderedList

export interface UnorderedListOwnProps {
  /**
   * Size of the text used in a list item.
   */
  size?: keyof Typography['text']
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

export function extractStyles(options?: { nonce?: React.ScriptHTMLAttributes<'script'>['nonce'] }): {
  css: string
  cache: {
    uiBoxCache: ReturnType<typeof boxExtractStyles>['cache'],
    glamorIds: string[],
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
  children: React.ReactNode | ((props: { state: TransitionStatus, close: () => void }) => JSX.Element);

  isShown?: boolean;
  containerProps?: BoxProps<'div'>;
  preventBodyScrolling?: boolean;
  shouldCloseOnClick?: boolean;
  shouldCloseOnEscapePress?: boolean;
  onBeforeClose?: () => void;
  onExit?: TransitionProps['onExit'];
  onExiting?: TransitionProps['onExiting'];
  onExited?: TransitionProps['onExited'];
  onEnter?: TransitionProps['onEnter'];
  onEntering?: TransitionProps['onEntering'];
  onEntered?: TransitionProps['onEntered'];
}

export declare const Overlay: React.FC<OverlayProps>

export declare const ThemeContext: React.Context<Theme>
export declare const ThemeProvider: React.Context<Theme>['Provider']
export declare const ThemeConsumer: React.Context<Theme>['Consumer']
export declare const useTheme: () => Theme

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
  /**
   * CSS style properties.
   */
  style?: React.CSSProperties
}


/* Start generated icons */
type IconComponent = React.ForwardRefExoticComponent<React.PropsWithoutRef<IconProps> & React.RefAttributes<SVGElement>>
export declare const AddIcon: IconComponent
export declare const AddColumnLeftIcon: IconComponent
export declare const AddColumnRightIcon: IconComponent
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
export declare const ApplicationIcon: IconComponent
export declare const ApplicationsIcon: IconComponent
export declare const ArchiveIcon: IconComponent
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
export declare const DashboardIcon: IconComponent
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
export declare const DriveTimeIcon: IconComponent
export declare const DuplicateIcon: IconComponent
export declare const EditIcon: IconComponent
export declare const EjectIcon: IconComponent
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
export declare const HeaderTwoIcon: IconComponent
export declare const HeadsetIcon: IconComponent
export declare const HeartIcon: IconComponent
export declare const HeartBrokenIcon: IconComponent
export declare const HeatGridIcon: IconComponent
export declare const HeatmapIcon: IconComponent
export declare const HelpIcon: IconComponent
export declare const HelperManagementIcon: IconComponent
export declare const HighlightIcon: IconComponent
export declare const HistoryIcon: IconComponent
export declare const HomeIcon: IconComponent
export declare const HorizontalBarChartIcon: IconComponent
export declare const HorizontalBarChartAscIcon: IconComponent
export declare const HorizontalBarChartDescIcon: IconComponent
export declare const HorizontalDistributionIcon: IconComponent
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
export declare const MoonIcon: IconComponent
export declare const MoreIcon: IconComponent
export declare const MountainIcon: IconComponent
export declare const MoveIcon: IconComponent
export declare const MugshotIcon: IconComponent
export declare const MultiSelectIcon: IconComponent
export declare const MusicIcon: IconComponent
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
export declare const NotificationsUpdatedIcon: IconComponent
export declare const NumberedListIcon: IconComponent
export declare const NumericalIcon: IconComponent
export declare const OfficeIcon: IconComponent
export declare const OfflineIcon: IconComponent
export declare const OilFieldIcon: IconComponent
export declare const OneColumnIcon: IconComponent
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
export declare const RotateDocumentIcon: IconComponent
export declare const RotatePageIcon: IconComponent
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
export declare const SendToIcon: IconComponent
export declare const SendToGraphIcon: IconComponent
export declare const SendToMapIcon: IconComponent
export declare const SeriesAddIcon: IconComponent
export declare const SeriesConfigurationIcon: IconComponent
export declare const SeriesDerivedIcon: IconComponent
export declare const SeriesFilteredIcon: IconComponent
export declare const SeriesSearchIcon: IconComponent
export declare const SettingsIcon: IconComponent
export declare const ShareIcon: IconComponent
export declare const ShieldIcon: IconComponent
export declare const ShopIcon: IconComponent
export declare const ShoppingCartIcon: IconComponent
export declare const SignalSearchIcon: IconComponent
export declare const SimCardIcon: IconComponent
export declare const SlashIcon: IconComponent
export declare const SmallCrossIcon: IconComponent
export declare const SmallMinusIcon: IconComponent
export declare const SmallPlusIcon: IconComponent
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
export declare const SymbolCircleIcon: IconComponent
export declare const SymbolCrossIcon: IconComponent
export declare const SymbolDiamondIcon: IconComponent
export declare const SymbolSquareIcon: IconComponent
export declare const SymbolTriangleDownIcon: IconComponent
export declare const SymbolTriangleUpIcon: IconComponent
export declare const TagIcon: IconComponent
export declare const TakeActionIcon: IconComponent
export declare const TaxiIcon: IconComponent
export declare const TextHighlightIcon: IconComponent
export declare const ThIcon: IconComponent
export declare const ThDerivedIcon: IconComponent
export declare const ThDisconnectIcon: IconComponent
export declare const ThFilteredIcon: IconComponent
export declare const ThListIcon: IconComponent
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
export declare const WidgetIcon: IconComponent
export declare const WidgetButtonIcon: IconComponent
export declare const WidgetFooterIcon: IconComponent
export declare const WidgetHeaderIcon: IconComponent
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
