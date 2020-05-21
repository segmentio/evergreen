import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import arrify from 'arrify'
import { Popover } from '../../popover'
import { Position } from '../../constants'
import { SearchIcon } from '../../icons'
import SelectMenuContent from './SelectMenuContent'
import OptionShapePropType from './OptionShapePropType'
import SelectedPropType from './SelectedPropType'

const getDetailView = (close, detailView) => {
  if (typeof detailView === 'function') {
    return {
      detailView: detailView({ close })
    }
  }

  if (detailView) {
    return { detailView }
  }

  return {}
}

const getEmptyView = (close, emptyView) => {
  if (typeof emptyView === 'function') {
    return {
      emptyView: emptyView({ close })
    }
  }

  if (emptyView) {
    return { emptyView }
  }

  return {}
}

const SelectMenu = memo(
  forwardRef((props, ref) => {
    const {
      title,
      width,
      height,
      options,
      onSelect,
      onDeselect,
      onFilterChange,
      selected,
      position,
      hasTitle,
      hasFilter,
      filterPlaceholder,
      filterIcon,
      detailView,
      emptyView,
      titleView,
      isMultiSelect,
      closeOnSelect,
      ...rest
    } = props

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
              selected: arrify(selected)
            }}
            close={close}
            {...getDetailView(close, detailView)}
            {...getEmptyView(close, emptyView)}
            closeOnSelect={closeOnSelect}
          />
        )}
        {...rest}
        ref={ref}
      />
    )
  })
)

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
  filterIcon: PropTypes.node,

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
  closeOnSelect: PropTypes.bool
}

SelectMenu.defaultProps = {
  onSelect: () => {},
  onDeselect: () => {},
  width: 240,
  height: 248,
  position: Position.BOTTOM_LEFT,
  isMultiSelect: false,
  filterPlaceholder: 'Filter...',
  filterIcon: <SearchIcon />,
  closeOnSelect: false
}

export default SelectMenu
