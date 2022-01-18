import React, { memo, useMemo } from 'react'
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'arri... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'title' does not exist on type '{ childre... Remove this comment to see the full error message
    title,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'width' does not exist on type '{ childre... Remove this comment to see the full error message
    width = 240,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'height' does not exist on type '{ childr... Remove this comment to see the full error message
    height = 248,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'options' does not exist on type '{ child... Remove this comment to see the full error message
    options,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onSelect' does not exist on type '{ chil... Remove this comment to see the full error message
    onSelect = noop,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onDeselect' does not exist on type '{ ch... Remove this comment to see the full error message
    onDeselect = noop,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onFilterChange' does not exist on type '... Remove this comment to see the full error message
    onFilterChange,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'selected' does not exist on type '{ chil... Remove this comment to see the full error message
    selected,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'position' does not exist on type '{ chil... Remove this comment to see the full error message
    position = Position.BOTTOM_LEFT,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'hasTitle' does not exist on type '{ chil... Remove this comment to see the full error message
    hasTitle,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'hasFilter' does not exist on type '{ chi... Remove this comment to see the full error message
    hasFilter,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'filterPlaceholder' does not exist on typ... Remove this comment to see the full error message
    filterPlaceholder = 'Filter...',
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'filterIcon' does not exist on type '{ ch... Remove this comment to see the full error message
    filterIcon = SearchIcon,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'detailView' does not exist on type '{ ch... Remove this comment to see the full error message
    detailView,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'emptyView' does not exist on type '{ chi... Remove this comment to see the full error message
    emptyView,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'titleView' does not exist on type '{ chi... Remove this comment to see the full error message
    titleView,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'isMultiSelect' does not exist on type '{... Remove this comment to see the full error message
    isMultiSelect = false,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'closeOnSelect' does not exist on type '{... Remove this comment to see the full error message
    closeOnSelect = false,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'itemRenderer' does not exist on type '{ ... Remove this comment to see the full error message
    itemRenderer,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'itemHeight' does not exist on type '{ ch... Remove this comment to see the full error message
    itemHeight,
    ...rest
  } = props

  const selectedArray = useMemo(() => arrify(selected), [selected])

  return (
   <Popover
     // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
     minWidth={width}
     // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
     position={position}
     // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
     minHeight={height}
     // @ts-expect-error ts-migrate(2322) FIXME: Type '({ close }: any) => JSX.Element' is not assi... Remove this comment to see the full error message
     content={({
      close
     }: any) => (
       <SelectMenuContent
         // @ts-expect-error ts-migrate(2322) FIXME: Type '{ width: any; height: any; options: any; tit... Remove this comment to see the full error message
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
  );
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
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
