/* tslint:disable:interface-name max-classes-per-file no-empty-interface */

declare module 'evergreen-ui' {
  import { IconName } from '@blueprintjs/icons'
  import * as React from 'react'
  import { extractStyles as boxExtractStyles } from 'ui-box'
  import Box from 'ui-box'
  import { BoxProps, Is } from 'ui-box/dist/types/box-types'
  import { DownshiftProps, GetInputPropsOptions } from 'downshift'

  type PositionTypes = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right'
  type IntentTypes = 'none' | 'success' | 'warning' | 'danger'
  type DefaultAppearance = 'default'
  type AlertAppearance = DefaultAppearance | 'card'
  type ButtonAppearance = DefaultAppearance | 'minimal' | 'primary'
  type CheckboxAppearance = DefaultAppearance
  type IconButtonAppearance = DefaultAppearance | 'minimal' | 'primary'
  type TextInputAppearance = DefaultAppearance | 'primary'
  type TooltipAppearance = DefaultAppearance | 'card'
  type PositionState = 'exited' | 'entering' | 'entered' | 'exiting'
  type FontFamily = 'ui' | 'display' | 'mono'
  type Elevation = 0 | 1 | 2 | 3 | 4
  type FontSizeSmall = 300 | 400

  export type IconName = IconName


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

  export interface AlertProps extends Omit<PaneProps, 'title'> {
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

  export class Alert extends React.PureComponent<AlertProps> {
  }

  interface OptionProps extends TableRowProps {
    height?: number | string
    label: string
    icon?: string
    disabled?: boolean
  }

  export interface AutocompleteItemProps extends OptionProps {
    children?: JSX.Element | null
  }

  export class AutocompleteItem extends React.PureComponent<AutocompleteItemProps> {
  }

  // https://github.com/downshift-js/downshift
  export interface AutocompleteProps extends Omit<DownshiftProps<any>, 'children'> {
    // @deprecated
    defaultSelectedItem?: string
    title?: React.ReactNode
    items: any[]
    renderItem?: (i: AutocompleteItemProps) => JSX.Element | null
    itemsFilter?: (items: string[], input: string) => string[]
    children: (props: {
                 toggle: () => void,
                 getRef: (ref: React.RefObject<HTMLElement>) => void,
                 isShown: NonNullable<PopoverProps['isShown']>,
                 getInputProps: <T>(options?: T) => T & {
                   onChange: (event: React.ChangeEvent) => void,
                   onKeyDown: (event: React.KeyboardEvent) => void,
                   onBlur: (event: React.FocusEvent) => void,
                   id: string,
                   value: string,
                   'aria-autocomplete': 'list',
                   'aria-activedescendant': number | null,
                   'aria-controls': string | null,
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
    buttonProps?: ButtonProps
    onChange: (selectedItem: any) => void
  }

  export class Autocomplete extends React.PureComponent<AutocompleteProps> {
  }

  export interface AvatarProps extends React.ComponentPropsWithoutRef<typeof Box> {
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

  export class Avatar extends React.PureComponent<AvatarProps> {
  }

  export type BackButtonProps = ButtonProps

  export class BackButton extends React.PureComponent<BackButtonProps> {
  }

  export interface BadgeProps extends StrongProps {
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

  export class Badge extends React.PureComponent<BadgeProps> {
  }

  export interface ButtonProps extends React.ComponentPropsWithoutRef<typeof Text> {
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
     * Sets an icon before the text. Can be any icon from Evergreen.
     */
    iconBefore?: IconName | null | false
    /**
     * Sets an icon after the text. Can be any icon from Evergreen.
     */
    iconAfter?: IconName | null | false
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

  export class Button extends React.PureComponent<ButtonProps> {
  }

  export type CardProps = React.ComponentProps<typeof Pane>

  export class Card extends React.PureComponent<CardProps> {
  }

  export interface CheckboxProps extends BoxProps<'input'> {
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

  export class Checkbox extends React.PureComponent<CheckboxProps> {
  }

  export type CodeProps = TextProps


  export class Code extends React.PureComponent<CodeProps> {
  }

  export interface ComboboxProps extends React.ComponentPropsWithoutRef<typeof Box> {
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
     * Default selected item when uncontrolled.
     */
    defaultSelectedItem?: string
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
    inputProps?: TextInputProps
    /**
     * Properties forwarded to the button. Use with caution.
     */
    buttonProps?: IconButtonProps
    /**
     * Makes the input element disabled.
     */
    disabled?: boolean
    /**
     * When true, show a loading spinner. This also disables the button.
     */
    isLoading?: boolean
  }

  export class Combobox extends React.PureComponent<ComboboxProps> {
  }

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
     * Title of the Dialog. Titles should use Title Case.
     */
    title?: string
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
    containerProps?: CardProps
  }

  export class CornerDialog extends React.PureComponent<CornerDialogProps> {
  }

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
    title?: string
    /**
     * When true, the header with the title and close icon button is shown.
     * Defaults to true.
     */
    hasHeader?: boolean
    /**
     * When true, the footer with the cancel and confirm button is shown.
     * Defaults to true.
     */
    hasFooter?: boolean
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
    containerProps?: object
    /**
     * Props that are passed to the content container.
     */
    contentContainerProps?: object
    /**
     * Whether or not to prevent scrolling in the outer body. Defaults to false.
     */
    preventBodyScrolling?: boolean
  }

  export class Dialog extends React.PureComponent<DialogProps> {
  }

  export interface IconProps extends BoxProps<'svg'> {
    icon: IconName | JSX.Element
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
    className?: string
  }

  export class Icon extends React.PureComponent<IconProps> {
  }

  export interface FormFieldProps extends React.ComponentPropsWithoutRef<typeof Box> {
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

  export class FormField extends React.PureComponent<FormFieldProps> {
  }

  export interface FormFieldDescriptionProps extends ParagraphProps {
  }

  export class FormFieldDescription extends React.PureComponent<FormFieldDescriptionProps> {
  }

  export interface FormFieldHintProps extends ParagraphProps {
  }

  export class FormFieldHint extends React.PureComponent<ParagraphProps> {
  }

  export interface FormFieldLabelProps extends LabelProps {
    /**
     * Whether or not to show an asterix after the label.
     */
    isAstrixShown?: boolean
  }

  export class FormFieldLabel extends React.PureComponent<FormFieldLabelProps> {
  }

  export interface FormFieldValidationMessageProps extends PaneProps {
  }

  export class FormFieldValidationMessage extends React.PureComponent<FormFieldValidationMessageProps> {
  }

  export interface HeadingProps extends React.ComponentPropsWithoutRef<typeof Box> {
    size?: keyof Typography['headings']
  }

  export class Heading extends React.PureComponent<HeadingProps> {
  }

  export interface IconButtonProps extends ButtonProps {
    /**
     * Name of a Blueprint UI icon, or an icon element, to render.
     */
    icon?: IconName
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

  export class IconButton extends React.PureComponent<IconButtonProps> {
  }

  export interface ImageProps extends BoxProps<'img'> {
    src?: string
  }

  export class Image extends React.PureComponent<ImageProps> {
  }

  export interface InlineAlertProps extends PaneProps {
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

  export class InlineAlert extends React.PureComponent<InlineAlertProps> {
  }

  export type LabelProps = TextProps

  export class Label extends React.PureComponent<LabelProps> {
  }

  export interface LinkProps extends TextProps {
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

  export class Link extends React.PureComponent<LinkProps> {
  }

  export interface ListItemProps extends TextProps {
    /**
     * When passed, adds a icon before the list item.
     * See Evergreen `Icon` for documentation.
     */
    icon?: IconName
    /**
     * The color of the icon.
     */
    iconColor?: string
  }

  export class ListItem extends React.PureComponent<ListItemProps> {
  }

  export interface MenuProps {
    children: React.ReactNode[] | React.ReactNode
  }

  export interface MenuItemProps extends PaneProps {
    onSelect?: (event: React.SyntheticEvent) => void
    icon?: JSX.Element | IconName
    secondaryText?: JSX.Element
    appearance?: DefaultAppearance
    intent?: IntentTypes
  }

  export interface MenuGroupProps extends Omit<PaneProps, 'title'> {
    title?: JSX.Element
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

  export class Menu extends React.PureComponent<MenuProps> {
    // @ts-ignore
    public static Item = class MenuItem extends React.PureComponent<MenuItemProps> {
    }
    // @ts-ignore
    public static Divider = class MenuDivider extends React.PureComponent {
    }
    // @ts-ignore
    public static Group = class MenuGroup extends React.PureComponent<MenuGroupProps> {
    }
    // @ts-ignore
    public static Option = class Option extends React.PureComponent<MenuOptionProps> {
    }
    // @ts-ignore
    public static OptionsGroup = class MenuOptionsGroup<T extends string | number | null> extends React.PureComponent<MenuOptionsGroupProps<T>> {
    }
  }

  export type PaneProps = Omit<React.ComponentPropsWithoutRef<typeof Box>, 'border' | 'borderTop' | 'borderRight' | 'borderBottom' | 'borderLeft'> & {
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

  export class Pane extends React.PureComponent<PaneProps> {
  }

  export type PillProps = BadgeProps

  export class Pill extends React.PureComponent<PillProps> {
  }

  export type PopoverStatelessProps = React.ComponentPropsWithoutRef<typeof Box>

  export interface PopoverProps {
    position?: PositionTypes
    isShown?: boolean
    trigger?: 'click' | 'hover'
    content: React.ReactNode | ((object: { close: () => void }) => React.ReactNode)
    children:
      ((props: { toggle: () => void, getRef: (ref: React.RefObject<HTMLElement>) => void, isShow: NonNullable<PopoverProps['isShown']> }) => React.ReactNode)
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

  export class Popover extends React.PureComponent<PopoverProps> {
  }

  export type ParagraphProps = React.ComponentPropsWithoutRef<typeof Box> & {
    size?: keyof Typography['paragraph']
    fontFamily?: FontFamily
  }

  export class Paragraph extends React.PureComponent<ParagraphProps> {
  }

  export interface PositionerProps {
    position?: PositionTypes
    isShown?: boolean
    children: (params: {
      top: number,
      left: number,
      zIndex: NonNullable<StackProps['value']>,
      css,
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
    innerRef?: (ref: React.RefObject<HTMLElement>) => void
    bodyOffset?: number
    targetOffset?: number
    target: (params: { getRef: () => React.RefObject<HTMLElement>, isShow: boolean }) => React.ReactNode
    initialScale?: number
    animationDuration?: number
    onCloseComplete?: () => void
    onOpenComplete?: () => void
  }

  export class Positioner extends React.PureComponent<PositionerProps> {
  }

  export interface RadioProps extends Omit<BoxProps<'input'>, 'onChange'> {
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
     * Function called when state changes
     */
    onChange?(event: React.ChangeEvent<HTMLInputElement>, checked: boolean): void
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

  export class Radio extends React.PureComponent<RadioProps> {
  }

  interface RadioGroupOption {
    label: React.ReactNode
    value: string
    isDisabled?: boolean
  }

  export interface RadioGroupProps extends Omit<PaneProps, 'onChange'> {
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
    onChange?(value: string): void
  }

  export class RadioGroup extends React.PureComponent<RadioGroupProps> {
  }

  export interface Option {
    label?: string
    value?: string | number
    disabled?: boolean
  }

  export interface OptionsListProps {
    options?: Option[]
    close?: () => void
    height?: number
    width?: number
    isMultiSelect?: boolean
    selected?: string
    onSelect?: (value: Option) => void
    onDeselect?: (value: Option) => void
    onFilterChange?: (value: string) => void
    hasFilter?: boolean
    optionSize?: number
    renderItem: (props: {
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
    filterIcon?: string
    optionsFilter?: (
      value: Option['label'][],
      filter: NonNullable<OptionsListProps['defaultSearchValue']>
    ) => void
    defaultSearchValue?: string
  }

  export class OptionsList extends React.PureComponent<OptionsListProps> {
  }

  export interface SearchInputProps extends TextInputProps {
    height?: number
  }

  export class SearchInput extends React.PureComponent<SearchInputProps> {
  }

  export interface SearchTableHeaderCellProps extends Omit<TableHeaderCellProps, 'onChange'> {
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
    icon?: IconProps['icon']
  }

  export class SearchTableHeaderCell extends React.PureComponent<SearchTableHeaderCellProps> {
  }

  export interface SegmentedControlProps extends Omit<React.ComponentPropsWithoutRef<typeof Box>, 'defaultValue' | 'onChange'> {
    options: Array<{ label: string, value: NonNullable<SegmentedControlProps['value']> }>
    value?: number | string | boolean
    defaultValue?: number | string | boolean
    onChange: (value: NonNullable<SegmentedControlProps['value']>) => void
    name?: string
    height?: number
  }

  export class SegmentedControl extends React.PureComponent<SegmentedControlProps> {
  }

  export interface SelectProps extends Omit<React.ComponentPropsWithoutRef<typeof Box>, 'onChange'> {
    /**
     * The initial value of an uncontrolled select
     */
    defaultValue?: string | number | string[]

    /**
     * The value of the select.
     */
    value?: string | number | string[]

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
  }

  export class Select extends React.PureComponent<SelectProps> {
  }

  export type SelectFieldProps = FormFieldProps

  export class SelectField extends React.PureComponent<SelectFieldProps> {
  }

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

  export class SelectMenuContent extends React.PureComponent<SelectMenuContentProps> {
  }

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
    filterIcon?: IconName
    /*
     * When true, menu closes on option selection.
     */
    closeOnSelect?: boolean
  }

  export class SelectMenu extends React.PureComponent<SelectMenuProps> {
  }

  export interface SideSheetProps {
    children: React.ReactNode | (() => React.ReactNode)
    isShown?: boolean
    onCloseComplete?: () => void
    onOpenComplete?: () => void
    onBeforeClose?: () => void
    shouldCloseOnOverlayClick?: boolean
    shouldCloseOnEscapePress?: boolean
    width?: string | number
    containerProps?: PaneProps
    // @ts-ignore
    position?: Pick<PositionTypes, 'top' | 'bottom' | 'left' | 'right'>
    preventBodyScrolling?: boolean
  }

  export class SideSheet extends React.PureComponent<SideSheetProps> {
  }

  export type SidebarTabProps = TabProps

  export class SidebarTab extends React.PureComponent<SidebarTabProps> {
  }

  export interface SmallProps extends BoxProps<'small'> {

  }

  export class Small extends React.PureComponent<SmallProps> {
  }

  export interface SpinnerProps extends React.ComponentPropsWithoutRef<typeof Box> {
    /**
     * Delay after which spinner should be visible.
     */
    delay?: number
    /**
     * The size of the spinner.
     */
    size?: number
  }

  export class Spinner extends React.PureComponent<SpinnerProps> {
  }

  export interface StackProps {
    children: (zIndex: number) => React.ReactNode
    value?: number
  }

  export class Stack extends React.PureComponent<StackProps> {
  }

  export type StrongProps = TextProps

  export class Strong extends React.PureComponent<StrongProps> {
  }

  export interface SwitchProps extends Omit<BoxProps<'label'>, 'onChange'> {
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

  export class Switch extends React.PureComponent<SwitchProps> {
  }

  export interface TableBodyProps extends PaneProps {
  }

  export class TableBody extends React.PureComponent<TableBodyProps> {
  }

  export interface TableCellProps extends PaneProps {
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

  export class TableCell extends React.PureComponent<TableCellProps> {
  }

  interface TableEditableCellProps extends Omit<TextTableCellProps, 'placeholder' | 'onChange'> {
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

  export interface TableHeaderCellProps extends TableCellProps {
  }

  export class TableHeaderCell extends React.PureComponent<TableHeaderCellProps> {
  }

  export interface TableHeadProps extends PaneProps {
    height?: number | string
    accountForScrollbar?: boolean
  }

  export class TableHead extends React.PureComponent<TableHeadProps> {
  }

  export interface TableRowProps extends PaneProps {
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

  export class TableRow extends React.PureComponent<TableRowProps> {
  }

  export interface TableSelectMenuCellProps extends Omit<TextTableCellProps, 'placeholder'> {
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

  interface TableVirtualBodyProps extends PaneProps {
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

  export interface TableProps extends PaneProps {
  }

  export class Table extends React.PureComponent<TableProps> {
    // @ts-ignore
    public static Body = TableBody

    // @ts-ignore
    public static VirtualBody = class VirtualBody extends React.PureComponent<TableVirtualBodyProps> {
    }

    // @ts-ignore
    public static Head = TableHead
    // @ts-ignore
    public static HeaderCell = TableHeaderCell
    // @ts-ignore
    public static TextHeaderCell = TextTableHeaderCell
    // @ts-ignore
    public static SearchHeaderCell = SearchTableHeaderCell
    // @ts-ignore
    public static Row = TableRow
    // @ts-ignore
    public static Cell = TableCell
    // @ts-ignore
    public static TextCell = TextTableCell

    // @ts-ignore
    public static EditableCell = class EditableCell extends React.PureComponent<TableEditableCellProps> {
    }
    // @ts-ignore
    public static SelectMenuCell = class SelectMenuCell extends React.PureComponent<TableSelectMenuCellProps> {
    }
  }

  export interface TabProps extends TextProps {
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

  export class Tab extends React.PureComponent<TabProps> {
  }

  export type TablistProps = React.ComponentPropsWithoutRef<typeof Box>

  export class Tablist extends React.PureComponent<TablistProps> {
  }

  export type TabNavigationProps = BoxProps<'nav'>

  export class TabNavigation extends React.PureComponent<TabNavigationProps> {
  }

  export interface TagInputProps extends Omit<React.ComponentPropsWithoutRef<typeof Box>, 'onChange'> {
    addOnBlur?: boolean
    className?: string
    disabled?: boolean
    height?: number
    inputProps?: TextProps
    inputRef?: (input: HTMLInputElement | null) => void
    onAdd?: (values: string[]) => void | false
    onBlur?: (event: React.FocusEvent) => void
    onChange?: (values: string[]) => void | false
    onFocus?: (event: React.FocusEvent) => void
    onInputChange?: (event: React.ChangeEvent) => void
    onRemove?: (value: string | React.ReactNode, index: number) => void
    separator?: string
    tagProps?: any
    values?: string[]
  }

  export class TagInput extends React.PureComponent<TagInputProps> {
  }

  export interface TextareaProps extends TextProps {
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

  export class Textarea extends React.PureComponent<TextareaProps> {
  }

  export interface TextDropdownButtonProps extends TextProps {
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
     * Name of a Blueprint UI icon, or an icon element, to render.
     * This prop is required because it determines the content of the component, but it can
     * be explicitly set to falsy values to render nothing.
     *
     * - If `null` or `undefined` or `false`, this component will render nothing.
     * - If given an `IconName` (a string literal union of all icon names),
     *   that icon will be rendered as an `<svg>` with `<path>` tags.
     * - If given a `JSX.Element`, that element will be rendered and _all other props on this component are ignored._
     *   This type is supported to simplify usage of this component in other Blueprint components.
     *   As a consumer, you should never use `<Icon icon={<element />}` directly; simply render `<element />` instead.
     */
    icon?: IconName | null | false
    /**
     * Class name passed to the button.
     */
    className?: string
  }

  export class TextDropdownButton extends React.PureComponent<TextDropdownButtonProps> {
  }

  export interface TextTableCellProps extends TableCellProps {
    /**
     * Adds textAlign: right and fontFamily: mono.
     */
    isNumber?: boolean
    /**
     * Pass additional props to the Text component.
     */
    textProps?: TextProps
  }

  export class TextTableCell extends React.PureComponent<TextTableCellProps> {
  }

  export interface TextTableHeaderCellProps extends PaneProps {
    textProps?: TextProps
  }

  export class TextTableHeaderCell extends React.PureComponent<TextTableHeaderCellProps> {
  }

  export type TextProps = React.ComponentPropsWithoutRef<typeof Box> & {
    size?: keyof Typography['text']
    fontFamily?: FontFamily | string
  }

  export class Text extends React.PureComponent<TextProps> {
  }

  export type TextInputProps = React.ComponentProps<typeof Text> & {
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

  export class TextInput extends React.PureComponent<TextInputProps> {
  }

  export interface TextInputFieldProps extends TextInputProps {
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

  export class TextInputField extends React.PureComponent<TextInputFieldProps> {
  }

  export interface TooltipStatelessProps extends PaneProps {
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
    statelessProps?: TooltipStatelessProps
  }

  export class Tooltip extends React.PureComponent<TooltipProps> {
  }

  export interface UnorderedListProps extends React.ComponentPropsWithoutRef<typeof Box> {
    /**
     * Size of the text used in a list item.
     */
    size?: keyof Typography['text']
    /**
     * When passed, adds a icon before each list item in the list
     * You can override this on a individual list item.
     */
    icon?: string
    /**
     * The color of the icon in each list item in the list.
     */
    iconColor?: string
  }

  export class UnorderedList extends React.PureComponent<UnorderedListProps> {
  }

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

  // ====================================================
  // The following component types have yet to be defined
  // ====================================================

  type UnknownProps = Record<string, any>

  export class FilePicker extends React.PureComponent<UnknownProps> {
  }

  export class Overlay extends React.PureComponent<UnknownProps> {
  }

  export class Portal extends React.PureComponent<UnknownProps> {
  }

  export class OptionShapePropType extends React.PureComponent<UnknownProps> {
  }

  export class SelectedPropType extends React.PureComponent<UnknownProps> {
  }

  export class StackingContext extends React.PureComponent<UnknownProps> {
  }

  export class Ul extends React.PureComponent<UnknownProps> {
  }

  export class OrderedList extends React.PureComponent<UnknownProps> {
  }

  export class Ol extends React.PureComponent<UnknownProps> {
  }

  export class Li extends React.PureComponent<UnknownProps> {
  }

  export class Pre extends React.PureComponent<UnknownProps> {
  }
}
