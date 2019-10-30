/* tslint:disable:interface-name max-classes-per-file no-empty-interface */

declare module 'evergreen-ui' {
  import { IconName } from '@blueprintjs/icons'
  import * as React from 'react'
  import { extractStyles as boxExtractStyles } from 'ui-box'
  import { BoxProps } from 'ui-box/dist/types/box-types'

  type PositionTypes = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right'
  type IntentTypes = 'none' | 'success' | 'warning' | 'danger'
  type DefaultAppearance = 'default'
  type AlertAppearance = DefaultAppearance | 'card'
  type ButtonAppearance = DefaultAppearance | 'minimal' | 'primary'
  type CheckboxAppearance = DefaultAppearance
  type TextInputAppearance = DefaultAppearance | 'primary'
  type TooltipAppearance = DefaultAppearance | 'card'
  type PositionState = 'exited' | 'entering' | 'entered' | 'exiting'
  type FontFamily = 'ui' | 'display' | 'mono'
  type Elevation = 0 | 1 | 2 | 3 | 4
  type PaneBackground =
    'tint1'
    | 'tint2'
    | 'overlay'
    | 'yellowTint'
    | 'greenTint'
    | 'orangeTint'
    | 'redTint'
    | 'blueTint'
    | 'purpleTint'
    | 'tealTint'
  type FontSizeSmall = 300 | 400;
  type FontSizeMedium = 500;
  type FontSizeLarge = 600;

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
      '500': {
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

  export interface AlertProps extends Omit<PaneProps, 'title'> {
    intent: IntentTypes
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

  export interface AutocompleteItemProps {
    isSelected: boolean
    isHighlighted: boolean
    key: string
  }

  // https://github.com/downshift-js/downshift
  export interface AutocompleteProps {
    defaultSelectedItem?: string
    title?: React.ReactNode
    items: any[]
    renderItem?: (i: AutocompleteItemProps) => React.ComponentClass<AutocompleteItemProps>
    itemsFilter?: (items: string[], input: string) => string[]
    itemToString?: (i: any) => string
    children: (props: {
                 toggle: () => void,
                 getRef: (ref: React.RefObject<HTMLElement>) => void,
                 isShown: NonNullable<PopoverProps['isShown']>,
                 getInputProps: () => {
                   onKeyDown: (e: React.ChangeEvent<any>) => void
                   onChange: (e: React.ChangeEvent<any>) => void
                   onBlur: (e: React.ChangeEvent<any>) => void
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

  export interface AvatarProps extends BoxProps<'div'> {
    src?: string
    size?: number
    name?: string
    hashValue?: string
    isSolid?: boolean
    color?: string
    getInitials?: (name: string) => string
    forceShowInitials?: boolean
    sizeLimitOneCharacter?: number
  }

  export class Avatar extends React.PureComponent<AvatarProps> {
  }

  export interface CheckboxProps extends BoxProps<'input'> {
    label?: React.ReactNode
    indeterminate?: boolean
    isInvalid?: boolean
    appearance?: CheckboxAppearance
  }

  export class Checkbox extends React.PureComponent<CheckboxProps> {
  }

  export interface ButtonProps extends Omit<TextProps, keyof BoxProps<'div'>>, BoxProps<'button'> {
    intent?: IntentTypes
    appearance?: ButtonAppearance
    isLoading?: boolean
    isActive?: boolean
    iconBefore?: IconName
    iconAfter?: IconName
  }

  export class Button extends React.PureComponent<ButtonProps> {
  }

  export interface CardProps extends PaneProps {
  }

  export class Card extends React.PureComponent<CardProps> {
  }

  export interface IconProps {
    icon: IconName
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

  export interface FormFieldProps extends BoxProps<'div'> {
    label: NonNullable<React.ReactNode>
    labelFor?: string
    description?: React.ReactNode
    hint?: React.ReactNode
    validationMessage?: React.ReactNode
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
    isAstrixShown?: boolean
  }

  export class FormFieldLabel extends React.PureComponent<FormFieldLabelProps> {
  }

  export interface FormFieldValidationMessageProps extends PaneProps {
  }

  export class FormFieldValidationMessage extends React.PureComponent<FormFieldValidationMessageProps> {
  }

  export interface HeadingProps extends BoxProps<'h2'> {
    size?: keyof Typography['headings']
  }

  export class Heading extends React.PureComponent<HeadingProps> {
  }

  export interface IconButtonProps extends ButtonProps {
    icon: IconName
    iconAim?: 'down' | 'up'
    iconSize?: number
  }

  export class IconButton extends React.PureComponent<IconButtonProps> {
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

  export interface LabelProps extends TextProps {
    htmlFor?: string
  }

  export class Label extends React.PureComponent<LabelProps> {
  }

  export interface MenuProps {
    children: React.ReactNode[] | React.ReactNode
  }

  export interface MenuItemProps extends PaneProps {
    onSelect?: () => void
    icon?: JSX.Element
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
    title?: JSX.Element
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
    public static OptionsGroup = class MenuOptionsGroup<T extends string | number> extends React.PureComponent<MenuOptionsGroupProps<T>> {
    }
  }

  export interface PaneProps extends BoxProps<'div'> {
    background?: PaneBackground
    elevation?: Elevation
    hoverElevation?: Elevation
    activeElevation?: Elevation
  }

  export class Pane extends React.PureComponent<PaneProps> {
  }

  export interface PopoverStatelessProps extends BoxProps<'div'> {
  }

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

  export interface ParagraphProps extends BoxProps<'div'> {
    size?: FontSizeSmall | FontSizeMedium
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

  export interface RadioProps extends BoxProps<'input'> {
    label?: React.ReactNode
    size?: 12 | 16
    isInvalid?: boolean
    appearance?: DefaultAppearance
  }

  export class Radio extends React.PureComponent<RadioProps> {
  }

  export interface RadioGroupProps extends Omit<PaneProps, 'onChange'> {
    options: Array<{ label: React.ReactNode, value: string, isDisabled?: boolean }>
    value?: string
    defaultValue?: string
    onChange: (value: string) => void
    label?: string
    size?: 12 | 16
    isRequired?: boolean
  }

  export class RadioGroup extends React.PureComponent<RadioGroupProps> {
  }

  export interface OptionsListProps {
    options?: Array<{
      label?: string
      value: string | number
      disabled?: boolean
    }>
    close?: () => void
    height?: number
    width?: number
    isMultiSelect?: boolean
    selected?: string
    onSelect?: (value: OptionsListProps['options'][number]) => void
    onDeselect?: (value: OptionsListProps['options'][number]) => void
    onFilterChange?: (value: string) => void
    hasFilter?: boolean
    optionSize?: number
    renderItem: (props: {
      key: NonNullable<OptionsListProps['options']>[number]['value']
      label: NonNullable<OptionsListProps['options']>[number]['label']
      style: object,
      height: NonNullable<OptionsListProps['optionSize']>,
      onSelect: () => void
      onDeselect: () => void
      isSelectable: boolean
      isSelected: boolean
      disabled: NonNullable<OptionsListProps['options']>[number]['disabled']
    }) => JSX.Element
    filterPlaceholder?: string
    filterIcon?: string
    optionsFilter?: (
      value: Array<NonNullable<OptionsListProps['options']>[number]['label']>,
      filter: NonNullable<OptionsListProps['defaultSearchValue']>
    ) => void
    defaultSearchValue?: string
  }

  export class OptionsList extends React.PureComponent<OptionsListProps> {
  }

  interface SearchInputProps extends TextInputProps {
  }

  export class SearchInput extends React.PureComponent<SearchInputProps> {
  }

  export interface SearchTableHeaderCellProps extends Omit<TableHeaderCellProps, 'onChange'> {
    value?: string
    onChange?: (value: string) => void
    autoFocus?: boolean
    spellCheck?: boolean
    placeholder?: string
    icon?: IconProps['icon']
  }

  export class SearchTableHeaderCell extends React.PureComponent<SearchTableHeaderCellProps> {
  }

  export interface SegmentedControlProps extends Omit<BoxProps<'div'>, 'defaultValue' | 'onChange'> {
    options: Array<{ label: string, value: NonNullable<SegmentedControlProps['value']> }>
    value?: number | string | boolean
    defaultValue?: number | string | boolean
    onChange: (value: NonNullable<SegmentedControlProps['value']>) => void
    name?: string
    height?: number
  }

  export class SegmentedControl extends React.PureComponent<SegmentedControlProps> {
  }

  export interface SelectProps extends Omit<BoxProps<'div'>, 'onChange'> {
    /**
     * The initial value of an uncontrolled select
     */
    defaultValue?: string

    /**
     * The value of the select.
     */
    value?: string

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

  export interface SelectMenuProps extends Omit<PopoverProps, 'position' | 'content'> {
    title?: string
    width?: string | number | null
    height?: string | number
    options: Array<{ label: string, value: string | null }>
    onSelect?: (item: { label: string, value: string }) => void
    onDeselect?: (item: { label: string, value: string }) => void
    selected?: string | string[]
    isMultiSelect?: boolean
    hasTitle?: boolean
    hasFilter?: boolean
    filterPlaceholder?: string
    filterIcon?: IconName
    onFilterChange?: (searchValue: string) => void
    position?: Omit<PositionTypes, 'left' | 'right'>
    detailView?: PopoverProps['content']
    titleView?: React.ReactNode | (() => React.ReactNode)
    emptyView?: React.ReactNode | (() => React.ReactNode)
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

  export interface SidebarTabProps extends TabProps {
  }

  export class SidebarTab extends React.PureComponent<SidebarTabProps> {
  }

  export interface SpinnerProps extends BoxProps<'div'> {
    delay?: number
    size: number
  }

  export class Spinner extends React.PureComponent<SpinnerProps> {
  }

  export interface StackProps {
    children: (zIndex: number) => React.ReactNode
    value?: number
  }

  export class Stack extends React.PureComponent<StackProps> {
  }

  export interface TableBodyProps extends PaneProps {
  }

  export class TableBody extends React.PureComponent<TableBodyProps> {
  }

  export interface TableCellProps extends PaneProps {
    isSelectable?: boolean
    appearance?: DefaultAppearance
    rightView?: React.ReactNode
    arrowKeysOverrides?: {
      up: string | JSX.Element | false | (() => React.ReactNode)
      down: string | JSX.Element | false | (() => React.ReactNode)
      left: string | JSX.Element | false | (() => React.ReactNode)
      right: string | JSX.Element | false | (() => React.ReactNode)
    }
  }

  export class TableCell extends React.PureComponent<TableCellProps> {
  }

  interface TableEditableCellProps extends Omit<TextTableCellProps, 'placeholder' | 'onChange'> {
    isSelectable?: boolean
    disabled?: boolean
    placeholder?: React.ReactNode
    size?: FontSizeSmall
    children?: string | number
    onChange?: (value: string | number) => void
    autoFocus?: boolean
  }

  export interface TableHeaderCellProps extends TableCellProps {
  }

  export class TableHeaderCell extends React.PureComponent<TableHeaderCellProps> {
  }

  export interface TableHeadProps extends PaneProps {
    height?: number
    accountForScrollbar?: boolean
  }

  export class TableHead extends React.PureComponent<TableHeadProps> {
  }

  export interface TableRowProps extends PaneProps {
    onSelect?: () => void
    onDeselect?: () => void
    isSelectable?: boolean
    isSelected?: boolean
    isHighlighted?: boolean
    intent?: IntentTypes
    appearance?: DefaultAppearance
  }

  export class TableRow extends React.PureComponent<TableRowProps> {
  }

  interface TableSelectMenuCellProps extends Omit<TextTableCellProps, 'placeholder'> {
    isSelectable?: boolean
    disabled?: boolean
    placeholder?: React.ReactNode
    size?: FontSizeSmall
    selectMenuProps?: SelectMenuProps
  }

  interface TableVirtualBodyProps extends PaneProps {
    children?: React.ReactNode | React.ReactNode[]
    defaultHeight?: number
    allowAutoHeight?: boolean
    overscanCount?: number
    estimatedItemSize?: number
    useAverageAutoHeightEstimation?: boolean
    scrollToIndex?: number
    scrollOffset?: number
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
    onSelect?: () => void
    isSelected?: boolean
    disabled?: boolean
    appearance?: DefaultAppearance
  }

  export class Tab extends React.PureComponent<TabProps> {
  }

  export interface TablistProps extends BoxProps<'div'> {
  }

  export class Tablist extends React.PureComponent<TablistProps> {
  }

  export interface TabNavigationProps extends BoxProps<'div'> {
  }

  export class TabNavigation extends React.PureComponent<TabNavigationProps> {
  }

  export interface TextTableCellProps extends TableCellProps {
    isNumber?: boolean
    textProps?: TextProps
  }

  export class TextTableCell extends React.PureComponent<TextTableCellProps> {
  }

  export interface TextTableHeaderCellProps extends PaneProps {
    textProps?: TextProps
  }

  export class TextTableHeaderCell extends React.PureComponent<TextTableHeaderCellProps> {
  }

  export interface TextProps extends BoxProps<'div'> {
    size?: FontSizeSmall | FontSizeMedium | FontSizeLarge
    fontFamily?: FontFamily
  }

  export class Text extends React.PureComponent<TextProps> {
  }

  export type TextInputProps = Omit<TextProps, keyof BoxProps<'div'>> & BoxProps<'input'> & {
    isInvalid?: boolean
    spellCheck?: boolean
    appearance?: TextInputAppearance
  }

  export class TextInput extends React.PureComponent<TextInputProps> {
  }

  export interface TextInputFieldProps extends TextInputProps {
    label: NonNullable<React.ReactNode>
    description?: React.ReactNode
    hint?: React.ReactNode
    validationMessage?: React.ReactNode
    inputHeight?: number
    inputWidth?: number | string
  }

  export class TextInputField extends React.PureComponent<TextInputFieldProps> {
  }


  export interface TooltipProps extends Omit<TextProps, 'position'> {
    appearance?: TooltipAppearance
    position?: PositionTypes
    content: React.ReactNode
    hideDelay?: number
    isShown?: boolean
  }

  export class Tooltip extends React.PureComponent<TooltipProps> {
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

  // ====================================================
  // The following component types have yet to be defined
  // ====================================================

  type UnknownProps = Record<string, any>

  export class AutocompleteItem extends React.PureComponent<UnknownProps> {
  }

  export class Badge extends React.PureComponent<UnknownProps> {
  }

  export class Pill extends React.PureComponent<UnknownProps> {
  }

  export class BackButton extends React.PureComponent<UnknownProps> {
  }

  export class TextDropdownButton extends React.PureComponent<UnknownProps> {
  }

  export class Combobox extends React.PureComponent<UnknownProps> {
  }

  export class CornerDialog extends React.PureComponent<UnknownProps> {
  }

  export class Dialog extends React.PureComponent<UnknownProps> {
  }

  export class FilePicker extends React.PureComponent<UnknownProps> {
  }

  export class Image extends React.PureComponent<UnknownProps> {
  }

  export class Overlay extends React.PureComponent<UnknownProps> {
  }

  export class Portal extends React.PureComponent<UnknownProps> {
  }

  export class SelectField extends React.PureComponent<UnknownProps> {
  }

  export class OptionShapePropType extends React.PureComponent<UnknownProps> {
  }

  export class SelectedPropType extends React.PureComponent<UnknownProps> {
  }

  export class Switch extends React.PureComponent<UnknownProps> {
  }

  export class StackingContext extends React.PureComponent<UnknownProps> {
  }

  export class TagInput extends React.PureComponent<UnknownProps> {
  }

  export class Textarea extends React.PureComponent<UnknownProps> {
  }

  export class toaster extends React.PureComponent<UnknownProps> {
  }

  export class UnorderedList extends React.PureComponent<UnknownProps> {
  }

  export class Ul extends React.PureComponent<UnknownProps> {
  }

  export class OrderedList extends React.PureComponent<UnknownProps> {
  }

  export class Ol extends React.PureComponent<UnknownProps> {
  }

  export class ListItem extends React.PureComponent<UnknownProps> {
  }

  export class Li extends React.PureComponent<UnknownProps> {
  }

  export class Code extends React.PureComponent<UnknownProps> {
  }

  export class Pre extends React.PureComponent<UnknownProps> {
  }

  export class Link extends React.PureComponent<UnknownProps> {
  }

  export class Small extends React.PureComponent<UnknownProps> {
  }

  export class Strong extends React.PureComponent<UnknownProps> {
  }
}
