import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import fuzzaldrin from 'fuzzaldrin-plus'
import Downshift, { DownshiftProps } from 'downshift'
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

const autocompleteItemRenderer = props => <AutocompleteItem {...props} />

interface AutocompleteProps extends DownshiftProps {
  /**
   * Function that will render the 'filter' component.
   */
  children: (props: any) => React.ReactNode
  /**
   * The selected item to be selected & shown by default on the autocomplete
   */
  defaultSelectedItem?: any
  /**
   * Prop that enables and disables filtering
   * True: Enables Filtering
   * False: Disables Filtering
   */
  isFilterDisabled?: boolean
  /**
   * An array of items to be used as options for the select
   */
  items: any[]
  /**
   * A function that is used to filter the items.
   * It should return a subset of the initial items.
   * By default the "fuzzaldrin-plus" package is used.
   */
  itemsFilter?: (items: any[], search: string) => any[]
  /**
   * The height of each item in the list
   * Because the list is virtualized this is required beforehand.
   */
  itemSize?: number
  /**
   * In case the array of items is not an array of strings,
   * this function is used on each item to return the string that will be shown on the filter
   */
  itemToString?: (item: any) => string
  /**
   * Defines the maximum height the results container will be
   */
  popoverMaxHeight?: number
  /**
   * Defines the minimum width the results container will be
   */
  popoverMinWidth?: number
  /**
   * The position of the Popover the Autocomplete is rendered in.
   */
  position?: string
  /**
   * Function that returns a component to render the item
   */
  renderItem: (props: any) => JSX.Element
  /**
   * The selected Item to be shown on the autocomplete
   */
  selectedItem?: any
  /**
   * This prop can be either a string or a Node.
   * It will provide a title for the items
   */
  title?: string
}

interface AutocompleteState {
  targetWidth: number
}

// https://github.com/paypal/downshift/issues/164
export default class Autocomplete extends PureComponent<
  AutocompleteProps,
  AutocompleteState
> {
  static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    items: PropTypes.array.isRequired,
    selectedItem: PropTypes.any,
    itemToString: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
    itemSize: PropTypes.number,
    renderItem: PropTypes.func,
    position: PropTypes.oneOf(Object.keys(Position)),
    itemsFilter: PropTypes.func,
    isFilterDisabled: PropTypes.bool,
    popoverMinWidth: PropTypes.number,
    popoverMaxHeight: PropTypes.number,

    ...Downshift.propTypes
  }

  static defaultProps = {
    itemToString: i => (i ? String(i) : ''),
    itemSize: 32,
    isFilterDisabled: false,
    popoverMinWidth: 240,
    popoverMaxHeight: 240,
    renderItem: autocompleteItemRenderer
  }

  state = {
    targetWidth: 0
  }

  targetRef: HTMLElement

  componentDidMount() {
    this.setState({
      targetWidth: this.targetRef.getBoundingClientRect().width
    })
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
    } = this.props as any

    const filter = itemsFilter || fuzzyFilter(itemToString)
    const items =
      isFilterDisabled || inputValue.trim() === ''
        ? originalItems
        : filter(originalItems, inputValue)

    if (items.length === 0) return null

    return (
      <Pane width={width}>
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
            scrollToAlignment={'auto' as any}
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

  render() {
    const {
      children,
      itemSize,
      position,
      renderItem,
      itemsFilter,
      popoverMaxHeight,
      popoverMinWidth,
      ...props
    } = this.props as any

    return (
      <Downshift {...props}>
        {({
          isOpen: isShown,
          inputValue,
          getItemProps,
          selectedItem,
          highlightedIndex,
          selectItemAtIndex,
          getRootProps,
          ...restDownshiftProps
        }) => (
          <Pane width="100%" {...getRootProps({ refKey: 'innerRef' })}>
            <Popover
              bringFocusInside={false}
              isShown={isShown}
              minWidth={popoverMinWidth}
              position={
                position ||
                (this.state.targetWidth < popoverMinWidth
                  ? Position.BOTTOM_LEFT
                  : Position.BOTTOM)
              }
              content={() => {
                return this.renderResults({
                  width: Math.max(this.state.targetWidth, popoverMinWidth),
                  inputValue,
                  getItemProps,
                  selectedItem,
                  highlightedIndex,
                  selectItemAtIndex
                })
              }}
              minHeight={0}
              animationDuration={0}
            >
              {({ isShown: isShownPopover, toggle, getRef }) =>
                children({
                  isShown: isShownPopover,
                  toggle,
                  getRef: ref => {
                    // Use the ref internally to determine the width
                    this.targetRef = ref
                    getRef(ref)
                  },
                  inputValue,
                  selectedItem,
                  highlightedIndex,
                  selectItemAtIndex,
                  ...restDownshiftProps
                })
              }
            </Popover>
          </Pane>
        )}
      </Downshift>
    )
  }
}
