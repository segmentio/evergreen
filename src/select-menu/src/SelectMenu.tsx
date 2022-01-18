import React, { memo, useMemo } from 'react'
import arrify from 'arrify'
import PropTypes from 'prop-types'
import { Position } from '../../constants'
import { SearchIcon } from '../../icons'
import { Popover } from '../../popover'
import OptionShapePropType from './OptionShapePropType'
import SelectedPropType from './SelectedPropType'
import SelectMenuContent from './SelectMenuContent'

const noop = () => {}

const SelectMenu = memo(function SelectMenu(props) {
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
      minWidth={width}
      position={position}
      minHeight={height}
      content={({ close }) => (
        <SelectMenuContent
          width={width}
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
            renderItem: itemRenderer,
            optionSize: itemHeight
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

SelectMenu.propTypes = {
  /**
   * The title of the Select Menu.
   */
  title: PropTypes.string,

  /**
   * The width of the Select Menu.
   */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The height of the Select Menu.
   */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The options to show in the menu.
   * [{ label: String, value: String | Number }]
   */
  options: PropTypes.arrayOf(OptionShapePropType),

  /**
   * Function that is called when an option is selected.
   */
  onSelect: PropTypes.func,

  /**
   * Function that is called when an option is deselected.
   */
  onDeselect: PropTypes.func,

  /**
   * The selected value/values.
   */
  selected: SelectedPropType,

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: PropTypes.bool,

  /**
   * When true, show the title.
   */
  hasTitle: PropTypes.bool,

  /**
   * When true, show the filter.
   */
  hasFilter: PropTypes.bool,

  /**
   * The placeholder of the search filter.
   */
  filterPlaceholder: PropTypes.string,

  /**
   * The icon of the search filter.
   */
  filterIcon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),

  /**
   * Function that is called as the onChange() event for the filter.
   */
  onFilterChange: PropTypes.func,

  /**
   * The position of the Select Menu.
   */
  position: PropTypes.oneOf([
    Position.TOP,
    Position.TOP_LEFT,
    Position.TOP_RIGHT,
    Position.BOTTOM,
    Position.BOTTOM_LEFT,
    Position.BOTTOM_RIGHT
  ]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered on the right side of the Select Menu to give additional
   * information when an option is selected.
   */
  detailView: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered in the header section of the Select Menu to customize
   * the header.
   */
  titleView: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /**
   * Can be a function that returns a node, or a node itself, that is
   * rendered instead of the options list when there are no options.
   */
  emptyView: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),

  /*
   * When true, menu closes on option selection.
   */
  closeOnSelect: PropTypes.bool,

  /**
   * Can pass a method that can be used to render custom items in the
   * select menu
   */
  itemRenderer: PropTypes.func,

  /**
   * The height of the items in the select menu list
   */
  itemHeight: PropTypes.number
}

export default SelectMenu
