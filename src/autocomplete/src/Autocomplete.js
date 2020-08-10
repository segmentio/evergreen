import React, {
  memo,
  forwardRef,
  useState,
  useEffect,
  useCallback
} from 'react'
import PropTypes from 'prop-types'
import fuzzaldrin from 'fuzzaldrin-plus'
import Downshift from 'downshift'
import VirtualList from 'react-tiny-virtual-list'
import { Popover } from '../../popover'
import { Position } from '../../constants'
import { Heading } from '../../typography'
import { Pane } from '../../layers'
import AutocompleteItem from './AutocompleteItem'

const fuzzyFilter = itemToString => {
  if (itemToString) {
    return (items, input) => {
      const wrappedItems = items.map(item => ({
        key: itemToString(item),
        item
      }))

      return fuzzaldrin
        .filter(wrappedItems, input, { key: 'key' })
        .map(({ item }) => item)
    }
  }

  return (items, input) => fuzzaldrin.filter(items, input)
}

const noop = () => {}

const autocompleteItemRenderer = props => <AutocompleteItem {...props} />

/* eslint-disable react/prop-types */
const AutocompleteItems = ({
  getItemProps,
  getMenuProps,
  highlightedIndex,
  inputValue,
  isFilterDisabled,
  itemsFilter,
  itemSize,
  itemToString,
  originalItems,
  popoverMaxHeight,
  renderItem,
  selectedItem,
  title,
  width
}) => {
  itemsFilter = itemsFilter || fuzzyFilter(itemToString)
  const items =
    isFilterDisabled || inputValue.trim() === ''
      ? originalItems
      : itemsFilter(originalItems, inputValue)

  if (items.length === 0) return null

  // Pass the actual DOM ref to downshift, this fixes touch support
  const menuProps = getMenuProps()

  return (
    <Pane width={width} {...menuProps}>
      {title && (
        <Pane padding={8} borderBottom="muted">
          <Heading size={100}>{title}</Heading>
        </Pane>
      )}
      {items.length > 0 && (
        <VirtualList
          width="100%"
          height={Math.min(items.length * itemSize, popoverMaxHeight)}
          itemSize={itemSize}
          itemCount={items.length}
          scrollToIndex={highlightedIndex || 0}
          overscanCount={3}
          scrollToAlignment="auto"
          renderItem={({ index, style }) => {
            const item = items[index]
            const itemString = itemToString(item)

            return renderItem(
              getItemProps({
                item,
                key: itemString,
                index,
                style,
                children: itemString,
                isSelected: itemToString(selectedItem) === itemString,
                isHighlighted: highlightedIndex === index
              })
            )
          }}
        />
      )}
    </Pane>
  )
}
/* eslint-enable react/prop-types */

const Autocomplete = memo(
  forwardRef(function Autocomplete(props, ref) {
    const {
      children,
      itemSize = 32,
      position,
      renderItem = autocompleteItemRenderer,
      isFilterDisabled = false,
      itemsFilter,
      itemToString = i => (i ? String(i) : ''),
      popoverMaxHeight = 240,
      popoverMinWidth = 240,
      ...restProps
    } = props

    const [targetWidth, setTargetWidth] = useState(0)
    const [targetRef, setTargetRef] = useState()

    useEffect(() => {
      if (targetRef) {
        setTargetWidth(targetRef.getBoundingClientRect().width)
      }
    }, [targetRef])

    const stateReducer = useCallback(
      (state, changes) => {
        const { items } = props

        if (
          Object.prototype.hasOwnProperty.call(changes, 'isOpen') &&
          changes.isOpen
        ) {
          return {
            ...changes,
            highlightedIndex: items.indexOf(state.selectedItem)
          }
        }

        return changes
      },
      [props.items]
    )

    return (
      <Downshift
        stateReducer={stateReducer}
        scrollIntoView={noop}
        itemToString={itemToString}
        ref={ref}
        {...restProps}
      >
        {({
          isOpen: isShown,
          inputValue,
          getItemProps,
          getMenuProps,
          selectedItem,
          highlightedIndex,
          getRootProps,
          ...restDownshiftProps
        }) => (
          <div style={{ width: '100%' }}>
            <Popover
              bringFocusInside={false}
              isShown={isShown}
              minWidth={popoverMinWidth}
              position={
                position ||
                (targetWidth < popoverMinWidth
                  ? Position.BOTTOM_LEFT
                  : Position.BOTTOM)
              }
              content={() => (
                <AutocompleteItems
                  getItemProps={getItemProps}
                  getMenuProps={getMenuProps}
                  highlightedIndex={highlightedIndex}
                  inputValue={inputValue}
                  isFilterDisabled={isFilterDisabled}
                  itemsFilter={itemsFilter}
                  itemSize={itemSize}
                  itemToString={itemToString}
                  originalItems={props.items}
                  popoverMaxHeight={popoverMaxHeight}
                  renderItem={renderItem}
                  selectedItem={selectedItem}
                  title={props.title}
                  width={Math.max(targetWidth, popoverMinWidth)}
                />
              )}
              minHeight={0}
              animationDuration={0}
            >
              {({ isShown: isShownPopover, toggle, getRef }) =>
                children({
                  isShown: isShownPopover,
                  toggle,
                  getRef: ref => {
                    // Use the ref internally to determine the width
                    setTargetRef(ref)
                    getRef(ref)
                  },
                  inputValue,
                  selectedItem,
                  highlightedIndex,
                  ...restDownshiftProps
                })
              }
            </Popover>
          </div>
        )}
      </Downshift>
    )
  })
)

Autocomplete.propTypes = {
  /**
   * This prop can be either a string or a Node.
   * It will provide a title for the items
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /**
   * An array of items to be used as options for the select
   */
  items: PropTypes.array.isRequired,

  /**
   * The selected Item to be shown on the autocomplete
   */
  selectedItem: PropTypes.any,

  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString: PropTypes.func,

  /**
   * Function that will render the 'filter' component.
   */
  children: PropTypes.func.isRequired,

  /**
   * The height of each item in the list
   * Because the list is virtualized this is required beforehand.
   */
  itemSize: PropTypes.number,

  /**
   * Function that returns a component to render the item
   */
  renderItem: PropTypes.func,

  /**
   * The position of the Popover the Autocomplete is rendered in.
   */
  position: PropTypes.oneOf([
    Position.TOP,
    Position.TOP_LEFT,
    Position.TOP_RIGHT,
    Position.BOTTOM,
    Position.BOTTOM_LEFT,
    Position.BOTTOM_RIGHT,
    Position.LEFT,
    Position.RIGHT
  ]),

  /**
   * A function that is used to filter the items.
   * It should return a subset of the initial items.
   * By default the "fuzzaldrin-plus" package is used.
   */
  itemsFilter: PropTypes.func,

  /**
   * Prop that enables and disables filtering
   * True: Enables Filtering
   * False: Disables Filtering
   */
  isFilterDisabled: PropTypes.bool,

  /**
   * Defines the minimum height the results container will be
   */
  popoverMinWidth: PropTypes.number,

  /**
   * Defines the maximum height the results container will be
   */
  popoverMaxHeight: PropTypes.number,

  ...Downshift.propTypes
}

export default Autocomplete
