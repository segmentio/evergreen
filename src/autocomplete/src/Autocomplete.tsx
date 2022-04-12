import React, { memo, forwardRef, useState, useEffect, useCallback } from 'react'
import VirtualList from '@segment/react-tiny-virtual-list'
import Downshift, { DownshiftProps } from 'downshift'
import fuzzaldrin from 'fuzzaldrin-plus'
import { PositionTypes } from '../../..'
import { ButtonOwnProps } from '../../buttons/src/Button'
import { Position } from '../../constants'
import { Pane } from '../../layers'
import { Popover } from '../../popover'
import { PopoverProps } from '../../popover/src/Popover'
import { Text } from '../../typography'
import AutocompleteItem, { AutocompleteItemProps } from './AutocompleteItem'

export interface AutocompleteProps extends Omit<DownshiftProps<any>, 'children'> {
  title?: React.ReactNode
  items: any[]
  allowOtherValues?: boolean
  renderItem?: (i: AutocompleteItemProps) => JSX.Element | null
  itemsFilter?: (items: string[], input: string) => string[]
  children: (props: {
    toggle: () => void
    getRef: React.Ref<any>
    isShown: NonNullable<PopoverProps['isShown']>
    getInputProps: <T>(
      options?: T
    ) => T & {
      onChange: (event: React.ChangeEvent) => void
      onKeyDown: (event: React.KeyboardEvent) => void
      onBlur: (event: React.FocusEvent) => void
      id: string
      value: string
      'aria-autocomplete': 'list'
      'aria-activedescendant'?: string
      'aria-controls'?: string
      'aria-labelledby': string
      autoComplete: 'off'
    }
    openMenu: () => any
    inputValue: string
  }) => React.ReactNode
  itemSize?: number
  position?: PositionTypes
  isFilterDisabled?: boolean
  popoverMinWidth?: number
  popoverMaxHeight?: number
  selectedItem?: any
  buttonProps?: ButtonOwnProps
  onChange: (selectedItem: any) => void
}

const fuzzyFilter = (itemToString: any) => {
  if (itemToString) {
    return (items: any, input: any) => {
      const wrappedItems = items.map((item: any) => ({
        key: itemToString(item),
        item
      }))

      return fuzzaldrin.filter(wrappedItems, input, { key: 'key' }).map(({ item }: any) => item)
    }
  }

  return (items: any, input: any) => fuzzaldrin.filter(items, input)
}

const noop = () => {}

const autocompleteItemRenderer = (props: any) => <AutocompleteItem {...props} />

/* eslint-disable react/prop-types */
const AutocompleteItems = ({
  getItemProps,
  getMenuProps,
  highlightedIndex,
  inputValue,
  isFilterDisabled,
  itemSize,
  itemToString,
  itemsFilter,
  originalItems,
  popoverMaxHeight,
  renderItem,
  selectedItem,
  title,
  width
}: any) => {
  itemsFilter = itemsFilter || fuzzyFilter(itemToString)
  const items = isFilterDisabled || inputValue.trim() === '' ? originalItems : itemsFilter(originalItems, inputValue)

  if (items.length === 0) return null

  // Pass the actual DOM ref to downshift, this fixes touch support
  const menuProps = getMenuProps()

  return (
    <Pane width={width} {...menuProps}>
      {title && (
        <Pane padding={8} borderBottom="muted">
          <Text size={300} textTransform="uppercase">
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
          // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
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

const containerStyle = { width: '100%' }

const Autocomplete: React.FC<AutocompleteProps> = memo(
  forwardRef(function Autocomplete(props, ref) {
    const {
      children,
      itemSize = 32,
      position,
      renderItem = autocompleteItemRenderer,
      isFilterDisabled = false,
      itemsFilter,
      itemToString = (i: any) => (i ? String(i) : ''),
      popoverMaxHeight = 240,
      popoverMinWidth = 240,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      allowOtherValues,
      ...restProps
    } = props

    const [targetWidth, setTargetWidth] = useState(0)
    const [targetRef, setTargetRef] = useState()

    useEffect(() => {
      if (targetRef) {
        // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
        setTargetWidth(targetRef.getBoundingClientRect().width)
      }
    }, [targetRef])

    const stateReducer = useCallback(
      (state, changes) => {
        if (Object.prototype.hasOwnProperty.call(changes, 'isOpen') && changes.isOpen) {
          return {
            ...changes,
            highlightedIndex: props.items.indexOf(state.selectedItem)
          }
        }

        if (props.allowOtherValues && state.isOpen && !changes.isOpen) {
          return {
            ...changes,
            selectedItem: changes.selectedItem || state.inputValue,
            inputValue: state.inputValue
          }
        }

        return changes
      },
      [props.items, props.allowOtherValues]
    )

    return (
      // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
      <Downshift stateReducer={stateReducer} scrollIntoView={noop} itemToString={itemToString} ref={ref} {...restProps}>
        {({
          getItemProps,
          getMenuProps,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          getRootProps,
          highlightedIndex,
          inputValue,
          isOpen: isShown,
          selectedItem,
          ...restDownshiftProps
        }) => (
          <div style={containerStyle}>
            <Popover
              bringFocusInside={false}
              isShown={isShown}
              minWidth={popoverMinWidth}
              position={position || (targetWidth < popoverMinWidth ? Position.BOTTOM_LEFT : Position.BOTTOM)}
              content={
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
              }
              minHeight={0}
              animationDuration={0}
            >
              {({ getRef, isShown: isShownPopover, toggle }: any) =>
                children({
                  isShown: isShownPopover,
                  toggle,
                  getRef: (ref: any) => {
                    // Use the ref internally to determine the width
                    setTargetRef(ref)
                    getRef(ref)
                  },
                  // @ts-expect-error ts-migrate(2322) FIXME: Type 'string | null' is not assignable to type 'st... Remove this comment to see the full error message
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

export default Autocomplete
