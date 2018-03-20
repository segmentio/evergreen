import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import fuzzaldrin from 'fuzzaldrin-plus'
import Downshift from 'downshift'
import VirtualList from 'react-tiny-virtual-list'
import { Popover } from '../../popover'
import { Text } from '../../typography'
import { Pane } from '../../layers'
import AutocompleteItem from './AutocompleteItem'

const fuzzyFilter = (items, input) => fuzzaldrin.filter(items, input)

const autocompleteItemRenderer = props => <AutocompleteItem {...props} />

// https://github.com/paypal/downshift/issues/164
export default class Autocomplete extends PureComponent {
  static propTypes = {
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
     * The selected item to be selected & shown by default on the autocomplete
     */
    defaultSelectedItem: PropTypes.any,
    /**
     * In case the array of items is not an array of strings, this function is used on each item to return the string that will be shown on the filter
     */
    itemToString: PropTypes.func.isRequired,
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
    /**
     * To use or not use smart positioning (See "Positioner" for more information)
     */
    useSmartPositioning: PropTypes.bool,
    ...Downshift.propTypes
  }

  static defaultProps = {
    itemToString: i => (i ? String(i) : ''),
    itemSize: 32,
    itemsFilter: fuzzyFilter,
    isFilterDisabled: false,
    popoverMinWidth: 200,
    popoverMaxHeight: 240,
    useSmartPositioning: false,
    renderItem: autocompleteItemRenderer
  }

  renderResults = ({
    width,
    inputValue,
    highlightedIndex,
    selectItemAtIndex,
    selectedItem,
    getItemProps
  }) => {
    const {
      title,
      itemSize,
      itemsFilter,
      items: originalItems,
      itemToString,
      renderItem,
      popoverMaxHeight,
      isFilterDisabled
    } = this.props

    const items =
      isFilterDisabled || inputValue.trim() === ''
        ? originalItems
        : itemsFilter(originalItems, inputValue)

    if (items.length === 0) return null

    return (
      <Pane width={width}>
        {title && (
          <Pane padding={8} borderBottom="extraMuted">
            <Text size={200} color="muted" isUppercase>
              {title}
            </Text>
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
                  onMouseUp: () => {
                    selectItemAtIndex(index)
                  },
                  isSelected: selectedItem === item,
                  isHighlighted: highlightedIndex === index
                })
              )
            }}
          />
        )}
      </Pane>
    )
  }

  render() {
    const {
      children,
      itemSize,
      renderItem,
      itemsFilter,
      popoverMaxHeight,
      useSmartPositioning,
      popoverMinWidth,
      ...props
    } = this.props

    return (
      <Downshift {...props}>
        {({
          isOpen,
          inputValue,
          getItemProps,
          selectedItem,
          highlightedIndex,
          selectItemAtIndex,
          ...restDownshiftProps
        }) => (
          <div>
            <Popover
              isOpen={isOpen}
              minWidth={popoverMinWidth}
              content={({ targetRect }) =>
                this.renderResults({
                  width: Math.max(targetRect.width, popoverMinWidth),
                  inputValue,
                  getItemProps,
                  selectedItem,
                  highlightedIndex,
                  selectItemAtIndex
                })
              }
              minHeight={0}
              animationDuration={0}
              useSmartPositioning={useSmartPositioning}
            >
              {({ isOpen: isOpenPopover, toggle, getRef, key }) =>
                children({
                  key,
                  isOpen: isOpenPopover,
                  toggle,
                  getRef,
                  inputValue,
                  selectedItem,
                  highlightedIndex,
                  selectItemAtIndex,
                  ...restDownshiftProps
                })
              }
            </Popover>
          </div>
        )}
      </Downshift>
    )
  }
}
