/* tslint:disable:interface-name max-classes-per-file no-empty-interface */


declare module 'evergreen-ui' {
  import { IconName } from '@blueprintjs/icons'
  import * as React from 'react'
  import { extractStyles as boxExtractStyles } from 'ui-box'
  import { BoxProps } from 'ui-box/dist/types/box-types'

  type PositionTypes = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right';
  type IntentTypes = 'none' | 'success' | 'warning' | 'danger';
  export type IconNames = IconName | '';

  export interface AlertProps extends PaneProps {
    intent: IntentTypes;
    title?: React.ReactNode;
    hasTrim?: boolean;
    hasIcon?: boolean;
    isRemoveable?: boolean;
    onRemove?: (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
    appearance?: 'default' | 'card';
  }

  export class Alert extends React.PureComponent<AlertProps> {
  }

  // https://github.com/downshift-js/downshift
  export interface AutocompleteProps {
    title?: React.ReactNode;
    items: any[];
    itemToString?: (i: any) => string;
    children: (props: {
                 toggle: () => void,
                 getRef: (ref: React.RefObject<HTMLElement>) => void,
                 isShown: NonNullable<PopoverProps['isShown']>,
                 getInputProps: () => {
                   onKeyDown: (e: React.ChangeEvent<any>) => void;
                   onChange: (e: React.ChangeEvent<any>) => void;
                   onBlur: (e: React.ChangeEvent<any>) => void;
                 },
                 openMenu: () => any,
                 inputValue: string,
               }
    ) => React.ReactNode;
    itemSize?: number;
    position?: PositionTypes;
    isFilterDisabled?: boolean;
    popoverMinWidth?: number;
    popoverMaxHeight?: number;
    selectedItem?: any;
    buttonProps?: ButtonProps;
    onChange: (selectedItem: any) => void;
  }

  export class Autocomplete extends React.PureComponent<AutocompleteProps> {
  }

  export interface AvatarProps extends BoxProps<'div'> {
    src?: string;
    size?: number;
    name?: string;
    hashValue?: string;
    isSolid?: boolean;
    color?: string;
    getInitials?: (name: string) => string;
    forceShowInitials?: boolean;
    sizeLimitOneCharacter?: number;
  }

  export class Avatar extends React.PureComponent<AvatarProps> {
  }

  export interface CheckboxProps extends BoxProps<'input'> {
    label?: React.ReactNode;
    indeterminate?: boolean;
    isInvalid?: boolean;
    appearance?: 'default';
  }

  export class Checkbox extends React.PureComponent<CheckboxProps> {
  }

  export interface ButtonProps extends Omit<TextProps, keyof BoxProps<'div'>>, BoxProps<'button'> {
    intent?: IntentTypes;
    appearance?: 'default' | 'minimal' | 'primary';
    isLoading?: boolean;
    isActive?: boolean;
    iconBefore?: IconNames;
    iconAfter?: IconNames;
  }

  export class Button extends React.PureComponent<ButtonProps> {
  }

  export interface CardProps extends PaneProps {
  }

  export class Card extends React.PureComponent<CardProps> {
  }

  export interface IconProps {
    color?: string;
    icon: IconNames;
    size?: number;
    title?: string;
    style?: object;
    className?: string;
  }

  export class Icon extends React.PureComponent<IconProps> {
  }

  export interface FormFieldProps extends BoxProps<'div'> {
    label: NonNullable<React.ReactNode>;
    labelFor?: string;
    description?: React.ReactNode;
    hint?: React.ReactNode;
    validationMessage?: React.ReactNode;
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
    isAstrixShown?: boolean;
  }

  export class FormFieldLabel extends React.PureComponent<FormFieldLabelProps> {
  }

  export interface FormFieldValidationMessageProps extends PaneProps {
  }

  export class FormFieldValidationMessage extends React.PureComponent<FormFieldValidationMessageProps> {
  }

  export interface IconButtonProps extends ButtonProps {
    icon: IconNames;
    iconAim?: 'down' | 'up';
    iconSize?: number;
  }

  export class IconButton extends React.PureComponent<IconButtonProps> {
  }

  export interface LabelProps extends TextProps {
    htmlFor?: string;
  }

  export class Label extends React.PureComponent<LabelProps> {
  }

  export interface MenuProps {
    children: React.ReactNode[] | React.ReactNode;
  }

  export interface MenuItemProps extends PaneProps {
    onSelect?: () => void;
    icon?: JSX.Element;
    secondaryText?: JSX.Element;
    appearance?: 'default';
    intent?: IntentTypes;
  }

  export interface MenuGroupProps extends PaneProps {
    title?: JSX.Element;
    children: React.ReactNode[] | React.ReactNode;
  }

  export interface MenuOptionProps {
    id?: string;
    onSelect?: () => void;
    isSelected?: boolean;
    children?: JSX.Element;
    secondaryText?: JSX.Element;
    appearance?: 'default';
  }

  export interface MenuOptionsGroupProps<T> {
    title?: JSX.Element;
    selected?: T;
    onChange?: (value: T) => void;
    options: Array<{ value: T, label: string }>;
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
    background?: 'tint1' | 'tint2' | 'overlay' | 'yellowTint' | 'greenTint' | 'orangeTint' | 'redTint' | 'blueTint' | 'purpleTint' | 'tealTint';
    elevation?: 0 | 1 | 2 | 3 | 4;
    hoverElevation?: 0 | 1 | 2 | 3 | 4;
    activeElevation?: 0 | 1 | 2 | 3 | 4;
  }

  export class Pane extends React.PureComponent<PaneProps> {
  }

  export interface PopoverStatelessProps extends BoxProps<'div'> {
  }

  export interface PopoverProps {
    position?: PositionTypes;
    isShown?: boolean;
    trigger?: 'click' | 'hover';
    content: React.ReactNode | ((object: { close: () => void }) => React.ReactNode);
    children:
      ((props: { toggle: () => void, getRef: (ref: React.RefObject<HTMLElement>) => void, isShow: NonNullable<PopoverProps['isShown']> }) => React.ReactNode)
      | React.ReactNode;
    display?: string;
    minWidth?: number | string;
    minHeight?: number | string;
    animationDuration?: number;
    onOpen?: () => void;
    onClose?: () => void;
    onOpenComplete?: () => void;
    onCloseComplete?: () => void;
    onBodyClick?: () => void;
    bringFocusInside?: boolean;
    shouldCloseOnExternalClick?: boolean;
    statelessProps?: PopoverStatelessProps;
  }

  export class Popover extends React.PureComponent<PopoverProps> {
  }

  export interface ParagraphProps extends BoxProps<'div'> {
    size?: 300 | 400 | 500;
    fontFamily?: 'ui' | 'display' | 'mono';
  }

  export class Paragraph extends React.PureComponent<ParagraphProps> {
  }

  export interface PositionerProps {
    position?: PositionTypes;
    isShown?: boolean;
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
      state: 'exited' | 'entering' | 'entered' | 'exiting';
    }) => React.ReactNode;
    innerRef?: (ref: React.RefObject<HTMLElement>) => void;
    bodyOffset?: number;
    targetOffset?: number;
    target: (params: { getRef: () => React.RefObject<HTMLElement>, isShow: boolean }) => React.ReactNode;
    initialScale?: number;
    animationDuration?: number;
    onCloseComplete?: () => void;
    onOpenComplete?: () => void;
  }

  export class Positioner extends React.PureComponent<PositionerProps> {
  }

  export interface RadioProps extends BoxProps<'input'> {
    label?: React.ReactNode;
    size?: 12 | 16;
    isInvalid?: boolean;
    appearance?: 'default';
  }

  export class Radio extends React.PureComponent<RadioProps> {
  }

  export interface RadioGroupProps extends PaneProps {
    options: Array<{ label: React.ReactNode, value: string, isDisabled?: boolean }>;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    label?: string;
    size?: 12 | 16;
    isRequired?: boolean;
  }

  export class RadioGroup extends React.PureComponent<RadioGroupProps> {
  }

  export interface OptionsListProps {
    options?: Array<{
      label?: string;
      value: string | number;
      disabled?: boolean;
    }>;
    close?: () => void;
    height?: number;
    width?: number;
    isMultiSelect?: boolean;
    selected?: string;
    onSelect?: (value: OptionsListProps['options'][number]) => void;
    onDeselect?: (value: OptionsListProps['options'][number]) => void;
    onFilterChange?: (value: string) => void;
    hasFilter?: boolean;
    optionSize?: number;
    renderItem: (props: {
      key: NonNullable<OptionsListProps['options']>[number]['value'];
      label: NonNullable<OptionsListProps['options']>[number]['label'];
      style: object,
      height: NonNullable<OptionsListProps['optionSize']>,
      onSelect: () => void;
      onDeselect: () => void;
      isSelectable: boolean;
      isSelected: boolean;
      disabled: NonNullable<OptionsListProps['options']>[number]['disabled'];
    }) => JSX.Element;
    filterPlaceholder?: string;
    filterIcon?: string;
    optionsFilter?: (
      value: Array<NonNullable<OptionsListProps['options']>[number]['label']>,
      filter: NonNullable<OptionsListProps['defaultSearchValue']>
    ) => void;
    defaultSearchValue?: string;
  }

  export class OptionsList extends React.PureComponent<OptionsListProps> {
  }

  interface SearchInputProps extends TextInputProps {
  }

  export class SearchInput extends React.PureComponent<SearchInputProps> {
  }

  export interface SearchTableHeaderCellProps extends TableHeaderCellProps {
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
    spellCheck?: boolean;
    placeholder?: string;
    icon?: IconProps['icon'];
  }

  export class SearchTableHeaderCell extends React.PureComponent<SearchTableHeaderCellProps> {
  }

  export interface SegmentedControlProps extends BoxProps<'div'> {
    options: Array<{ label: string, value: NonNullable<SegmentedControlProps['value']> }>;
    value?: number | string | boolean;
    defaultValue?: number | string | boolean;
    onChange: (value: NonNullable<SegmentedControlProps['value']>) => void;
    name?: string;
    height?: number;
  }

  export class SegmentedControl extends React.PureComponent<SegmentedControlProps> {
  }

  export interface SelectMenuContentProps {
    close?: OptionsListProps['close'];
    title?: string;
    width?: number;
    height?: number;
    headerHeight?: number;
    options?: OptionsListProps['options'];
    hasTitle?: boolean;
    hasFilter?: boolean;
    filterPlaceholder?: string;
    filterIcon?: OptionsListProps['filterIcon'];
    listProps?: OptionsListProps;
    isMultiSelect?: boolean;
    titleView?: React.ReactNode | ((props: {
      close: NonNullable<SelectMenuContentProps['close']>,
      title: SelectMenuContentProps['title'],
      headerHeight: NonNullable<SelectMenuContentProps['headerHeight']>,
    }) => React.ReactNode);
    detailView?: React.ReactNode;
    emptyView?: React.ReactNode;
  }

  export class SelectMenuContent extends React.PureComponent<SelectMenuContentProps> {
  }

  export interface SelectMenuProps extends Omit<PopoverProps, 'position' | 'content'> {
    title?: string;
    width?: string | number | null;
    height?: string | number;
    options: Array<{ label: string, value: string | null }>;
    onSelect?: (item: { label: string, value: string }) => void;
    onDeselect?: (item: { label: string, value: string }) => void;
    selected?: string | string[];
    isMultiSelect?: boolean;
    hasTitle?: boolean;
    hasFilter?: boolean;
    filterPlaceholder?: string;
    filterIcon?: IconNames;
    onFilterChange?: (searchValue: string) => void;
    position?: Omit<PositionTypes, 'left' | 'right'>;
    detailView?: PopoverProps['content'];
    titleView?: React.ReactNode | (() => React.ReactNode);
    emptyView?: React.ReactNode | (() => React.ReactNode);
    closeOnSelect?: boolean;
  }

  export class SelectMenu extends React.PureComponent<SelectMenuProps> {
  }

  export interface SideSheetProps {
    children: React.ReactNode | (() => React.ReactNode);
    isShown?: boolean;
    onCloseComplete?: () => void;
    onOpenComplete?: () => void;
    onBeforeClose?: () => void;
    shouldCloseOnOverlayClick?: boolean;
    shouldCloseOnEscapePress?: boolean;
    width?: string | number;
    containerProps?: PaneProps;
    // @ts-ignore
    position?: Pick<PositionTypes, 'top' | 'bottom' | 'left' | 'right'>;
    preventBodyScrolling?: boolean;
  }

  export class SideSheet extends React.PureComponent<SideSheetProps> {
  }

  export interface SidebarTabProps extends TabProps {
  }

  export class SidebarTab extends React.PureComponent<SidebarTabProps> {
  }

  export interface SpinnerProps extends BoxProps<'div'> {
    delay?: number;
    size: number;
  }

  export class Spinner extends React.PureComponent<SpinnerProps> {
  }

  export interface StackProps {
    children: (zIndex: number) => React.ReactNode;
    value?: number;
  }

  export class Stack extends React.PureComponent<StackProps> {
  }

  export interface TableBodyProps extends PaneProps {
  }

  export class TableBody extends React.PureComponent<TableBodyProps> {
  }

  export interface TableCellProps extends PaneProps {
    isSelectable?: boolean;
    appearance?: 'default';
    rightView?: React.ReactNode;
    arrowKeysOverrides?: {
      up: string | JSX.Element | false | (() => React.ReactNode);
      down: string | JSX.Element | false | (() => React.ReactNode);
      left: string | JSX.Element | false | (() => React.ReactNode);
      right: string | JSX.Element | false | (() => React.ReactNode);
    };
  }

  export class TableCell extends React.PureComponent<TableCellProps> {
  }

  interface TableEditableCellProps extends TextTableCellProps {
    isSelectable?: boolean;
    disabled?: boolean;
    placeholder?: React.ReactNode;
    size?: 300 | 400;
    children?: string | number;
    onChange?: (value: string | number) => void;
    autoFocus?: boolean;
  }

  export interface TableHeaderCellProps extends TableCellProps {
  }

  export class TableHeaderCell extends React.PureComponent<TableHeaderCellProps> {
  }

  export interface TableHeadProps extends PaneProps {
    height?: number;
    accountForScrollbar?: boolean;
  }

  export class TableHead extends React.PureComponent<TableHeadProps> {
  }

  export interface TableRowProps extends PaneProps {
    onSelect?: () => void;
    onDeselect?: () => void;
    isSelectable?: boolean;
    isSelected?: boolean;
    isHighlighted?: boolean;
    intent?: IntentTypes;
    appearance?: 'default';
  }

  export class TableRow extends React.PureComponent<TableRowProps> {
  }

  interface TableSelectMenuCellProps extends TextTableCellProps {
    isSelectable?: boolean;
    disabled?: boolean;
    placeholder?: React.ReactNode;
    size?: 300 | 400;
    selectMenuProps?: SelectMenuProps;
  }

  interface TableVirtualBodyProps extends PaneProps {
    children?: React.ReactNode | React.ReactNode[];
    defaultHeight?: number;
    allowAutoHeight?: boolean;
    overscanCount?: number;
    estimatedItemSize?: number;
    useAverageAutoHeightEstimation?: boolean;
    scrollToIndex?: number;
    scrollOffset?: number;
    scrollToAlignment?: 'start' | 'center' | 'end' | 'auto';
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
    onSelect?: () => void;
    isSelected?: boolean;
    disabled?: boolean;
    appearance?: 'default';
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
    isNumber?: boolean;
    textProps?: TextProps;
  }

  export class TextTableCell extends React.PureComponent<TextTableCellProps> {
  }

  export interface TextTableHeaderCellProps extends PaneProps {
    textProps?: TextProps;
  }

  export class TextTableHeaderCell extends React.PureComponent<TextTableHeaderCellProps> {
  }

  export interface TextProps extends BoxProps<'div'> {
    size?: 300 | 400 | 500 | 600;
    fontFamily?: 'ui' | 'display' | 'mono';
  }

  export class Text extends React.PureComponent<TextProps> {
  }

  export interface TextInputProps extends Omit<TextProps, keyof BoxProps<'div'>>, BoxProps<'input'> {
    isInvalid?: boolean;
    spellCheck?: boolean;
    appearance?: 'default' | 'primary';
  }

  export class TextInput extends React.PureComponent<TextInputProps> {
  }

  export interface TextInputFieldProps extends TextInputProps {
    label: NonNullable<React.ReactNode>;
    description?: React.ReactNode;
    hint?: React.ReactNode;
    validationMessage?: React.ReactNode;
    inputHeight?: number;
    inputWidth?: number | string;
  }

  export class TextInputField extends React.PureComponent<TextInputFieldProps> {
  }

  export interface TooltipProps extends Omit<TextProps, 'position'> {
    appearance?: 'default' | 'card';
    position?: PositionTypes;
    content: React.ReactNode;
    hideDelay?: number;
    isShown?: boolean;
  }

  export class Tooltip extends React.PureComponent<TooltipProps> {
  }

  export function majorScale(x: number): number;

  export function minorScale(x: number): number;

  export function extractStyles(options?: { nonce?: React.ScriptHTMLAttributes<'script'>['nonce'] }): {
    css: string;
    cache: {
      uiBoxCache: ReturnType<typeof boxExtractStyles>['cache'],
      glamorIds: string[],
    };
    hydrationScript: JSX.Element
  };

  // This is not defined components

  type UnknownProps = Record<string, any>;

  export class InlineAlert extends React.PureComponent<UnknownProps> {
  }

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

  export class StackingOrder extends React.PureComponent<UnknownProps> {
  }

  export class Intent extends React.PureComponent<UnknownProps> {
  }

  export class Position extends React.PureComponent<UnknownProps> {
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

  export class Select extends React.PureComponent<UnknownProps> {
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

  export class Heading extends React.PureComponent<UnknownProps> {
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
