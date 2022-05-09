import React, { memo, useMemo } from 'react'
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'arri... Remove this comment to see the full error message
import arrify from 'arrify'
import { Position } from '../../constants'
import { SearchIcon } from '../../icons'
import { Popover } from '../../popover'
import { PopoverProps } from '../../popover/src/Popover'
import { OptionsListProps } from './OptionsList'
import SelectMenuContent from './SelectMenuContent'

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
  position?:
    | Position.BOTTOM
    | Position.BOTTOM_LEFT
    | Position.BOTTOM_RIGHT
    | Position.TOP
    | Position.TOP_LEFT
    | Position.TOP_RIGHT
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
   * The placeholder of the search filter.
   */
  filterPlaceholder?: string
  /**
   * The icon of the search filter.
   */
  filterIcon?: React.ElementType | JSX.Element
  closeOnSelect?: boolean
  /**
   * Function that is used to render custom items in the select menu
   */
  itemRenderer?: (props: {
    key: SelectMenuItem['value']
    label: SelectMenuItem['label']
    item: SelectMenuItem
    style: object
    height: NonNullable<OptionsListProps['optionSize']>
    onSelect: () => void
    onDeselect: () => void
    isSelectable: boolean
    isSelected: boolean
    disabled: SelectMenuItem['disabled']
  }) => React.ElementType | JSX.Element
  /**
   * The height of the items in the select menu list (default is 33px)
   */
  itemHeight?: number
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
}

export interface SelectMenuItem {
  label?: string
  value?: string | number
  icon?: string
  disabled?: boolean
}

export type SelectMenuPropsViewCallback = (args: { close(): void }) => React.ReactNode

const noop = () => {}

const SelectMenu: React.FC<SelectMenuProps> = memo(function SelectMenu(props) {
  const {
    title,
    width = 240,
    height = 248,
    options,
    onSelect = noop,
    onDeselect = noop,
    onFilterChange,
    selected,
    position = Position.BOTTOM_LEFT,
    hasTitle,
    hasFilter,
    filterPlaceholder = 'Filter...',
    filterIcon = SearchIcon,
    detailView,
    emptyView,
    titleView,
    isMultiSelect = false,
    closeOnSelect = false,
    itemRenderer,
    itemHeight,
    ...rest
  } = props

  const selectedArray = useMemo(() => arrify(selected), [selected])

  return (
    <Popover
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'string | number | null' is not assignable to... Remove this comment to see the full error message
      minWidth={width}
      position={position}
      minHeight={height}
      content={({ close }: any) => (
        <SelectMenuContent
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string | number | null' is not assignable to... Remove this comment to see the full error message
          width={width}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string | number' is not assignable to type '... Remove this comment to see the full error message
          height={height}
          options={options}
          title={title}
          hasFilter={hasFilter}
          filterPlaceholder={filterPlaceholder}
          filterIcon={filterIcon}
          hasTitle={hasTitle}
          isMultiSelect={isMultiSelect}
          titleView={titleView}
          listProps={{
            onSelect,
            onDeselect,
            onFilterChange,
            selected: selectedArray,
            // @ts-expect-error ts-migrate(2322) FIXME: Type '((props: { key: string | number | undefined;... Remove this comment to see the full error message
            renderItem: itemRenderer,
            optionSize: itemHeight,
          }}
          close={close}
          detailView={typeof detailView === 'function' ? detailView({ close }) : detailView}
          emptyView={typeof emptyView === 'function' ? emptyView({ close }) : emptyView}
          closeOnSelect={closeOnSelect}
        />
      )}
      {...rest}
    />
  )
})

export default SelectMenu
