import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import VirtualList from '@segment/react-tiny-virtual-list'
import fuzzaldrin from 'fuzzaldrin-plus'
import PropTypes from 'prop-types'
import { SearchIcon } from '../../icons'
import { Image } from '../../image'
import { Pane } from '../../layers'
import SearchTableHeaderCell from '../../table/src/SearchTableHeaderCell'
import TableHead from '../../table/src/TableHead'
import { useTheme } from '../../theme'
import Option from './Option'
import OptionShapePropType from './OptionShapePropType'

/**
 * Fuzzaldrin-plus is the default filter, but you can use your own
 * as long as they follow the following signature:
 * @param options <Array[String]> - ['label', 'label2', ...]
 * @param input <String>
 */
const fuzzyFilter = (options: any, input: any, {
  key
}: any) => {
  return fuzzaldrin.filter(options, input, { key })
}

const noop = () => {}

const defaultRenderItem = (props: any) => {
  return (
    <Option {...props}>
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
      {props.icon && <Image src={props.icon} width={24} marginRight={8} />}
      {props.label}
    </Option>
  )
}

const OptionsList = memo(function OptionsList(props) {
  const {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'options' does not exist on type '{ child... Remove this comment to see the full error message
    options: originalOptions = [],
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'optionSize' does not exist on type '{ ch... Remove this comment to see the full error message
    optionSize = 33,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'close' does not exist on type '{ childre... Remove this comment to see the full error message
    close,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'closeOnSelect' does not exist on type '{... Remove this comment to see the full error message
    closeOnSelect,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onSelect' does not exist on type '{ chil... Remove this comment to see the full error message
    onSelect = noop,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onDeselect' does not exist on type '{ ch... Remove this comment to see the full error message
    onDeselect = noop,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onFilterChange' does not exist on type '... Remove this comment to see the full error message
    onFilterChange = noop,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'hasFilter' does not exist on type '{ chi... Remove this comment to see the full error message
    hasFilter,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'selected' does not exist on type '{ chil... Remove this comment to see the full error message
    selected = [],
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'optionsFilter' does not exist on type '{... Remove this comment to see the full error message
    optionsFilter,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'isMultiSelect' does not exist on type '{... Remove this comment to see the full error message
    isMultiSelect,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'height' does not exist on type '{ childr... Remove this comment to see the full error message
    height,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'width' does not exist on type '{ childre... Remove this comment to see the full error message
    width,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'renderItem' does not exist on type '{ ch... Remove this comment to see the full error message
    renderItem = defaultRenderItem,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'filterPlaceholder' does not exist on typ... Remove this comment to see the full error message
    filterPlaceholder = 'Filter...',
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'filterIcon' does not exist on type '{ ch... Remove this comment to see the full error message
    filterIcon = SearchIcon,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultSearchValue' does not exist on ty... Remove this comment to see the full error message
    defaultSearchValue = '',
    ...rest
  } = props

  const [searchValue, setSearchValue] = useState(defaultSearchValue)
  const [searchRef, setSearchRef] = useState(null)
  const requestId = useRef()
  const theme = useTheme()
  const { tokens } = theme

  const isSelected = useCallback(
    item => {
      return Boolean(selected.find((selectedItem: any) => selectedItem === item.value));
    },
    [selected]
  )

  const optionLabels = useMemo(() => {
    return originalOptions.map((item: any) => item.label);
  }, [originalOptions])

  // Gets filtered options any time the filter fn, value, or options change
  const options = useMemo(() => {
    if (searchValue.trim() === '') {
      return originalOptions
    }

    // Preserve backwards compatibility with allowing custom filters, which accept array of strings
    if (typeof optionsFilter === 'function') {
      return optionsFilter(optionLabels, searchValue).map((name: any) => {
        return originalOptions.find((item: any) => item.label === name);
      });
    }

    return fuzzyFilter(originalOptions, searchValue, { key: 'label' })
  }, [originalOptions, optionLabels, optionsFilter, searchValue])

  const getCurrentIndex = useCallback(() => {
    return options.findIndex((option: any) => option.value === selected[selected.length - 1]);
  }, [selected, options])

  const handleArrowUp = useCallback(() => {
    let nextIndex = getCurrentIndex() - 1

    if (nextIndex < 0) {
      nextIndex = options.length - 1
    }

    if (isSelected(options[nextIndex])) {
      return
    }

    onSelect(options[nextIndex])
  }, [onSelect, options, getCurrentIndex, isSelected])

  const handleArrowDown = useCallback(() => {
    let nextIndex = getCurrentIndex() + 1

    if (nextIndex === options.length) {
      nextIndex = 0
    }

    if (!isSelected(options[nextIndex])) {
      onSelect(options[nextIndex])
    }
  }, [onSelect, options, getCurrentIndex, isSelected])

  const handleChange = useCallback(
    searchValue => {
      setSearchValue(searchValue)
      onFilterChange(searchValue)
    },
    [onFilterChange]
  )

  const handleSelect = useCallback(
    item => {
      if (isSelected(item) && isMultiSelect) {
        onDeselect(item)
      } else {
        onSelect(item)
      }

      if (!isMultiSelect && closeOnSelect) {
        close()
      }
    },
    [onDeselect, isMultiSelect, closeOnSelect, onSelect, isSelected, close]
  )

  const handleEnter = useCallback(() => {
    const isSelected = getCurrentIndex() !== -1

    if (isSelected) {
      if (!isMultiSelect && closeOnSelect) {
        close()
      }
    }
  }, [isMultiSelect, close, closeOnSelect, getCurrentIndex])

  const handleDeselect = useCallback(
    item => {
      onDeselect(item)
    },
    [onDeselect]
  )

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'ArrowUp') {
        handleArrowUp()
      }

      if (e.key === 'ArrowDown') {
        handleArrowDown()
      }

      if (e.key === 'Enter') {
        handleEnter()
      }

      if (e.key === 'Escape') {
        close()
      }
    },
    [close, handleArrowUp, handleArrowDown, handleEnter]
  )

  // @ts-expect-error ts-migrate(7030) FIXME: Not all code paths return a value.
  useEffect(() => {
    if (hasFilter) {
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'undefined... Remove this comment to see the full error message
      requestId.current = requestAnimationFrame(() => {
        if (searchRef) {
          // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
          searchRef.focus()
        }
      })

      window.addEventListener('keydown', handleKeyDown)
      return () => {
        // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'undefined' is not assignable to ... Remove this comment to see the full error message
        cancelAnimationFrame(requestId.current)
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [hasFilter, searchRef, handleKeyDown])

  const listHeight = height - (hasFilter ? 32 : 0)
  const currentIndex = getCurrentIndex()
  const scrollToIndex = currentIndex === -1 ? 0 : currentIndex

  return (
    // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
    <Pane height={height} width={width} display="flex" flexDirection="column" {...rest}>
      {hasFilter && (
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: Element; height: number; backgro... Remove this comment to see the full error message
        <TableHead height={32} backgroundColor={tokens.colors.gray50}>
          <SearchTableHeaderCell
            // @ts-expect-error ts-migrate(2322) FIXME: Type '(searchValue: any) => void' is not assignabl... Remove this comment to see the full error message
            onChange={handleChange}
            ref={setSearchRef}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type 'never'.
            borderRight={null}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
            placeholder={filterPlaceholder}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
            icon={filterIcon}
          />
        </TableHead>
      )}
      // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
      // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
      // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
      <Pane flex={1}>
        {options.length > 0 && (
          <VirtualList
            height={listHeight}
            width="100%"
            itemSize={optionSize}
            itemCount={options.length}
            overscanCount={20}
            // @ts-expect-error ts-migrate(2769) FIXME: No overload matches this call.
            scrollToAlignment="auto"
            scrollToIndex={scrollToIndex || undefined}
            renderItem={({ index, style }) => {
              const item = options[index]
              const isItemSelected = isSelected(item)

              const itemProps = {
                key: item.value,
                label: item.label,
                icon: item.icon,
                item,
                style,
                height: optionSize,
                onSelect: () => handleSelect(item),
                onDeselect: () => handleDeselect(item),
                isSelectable: !isItemSelected || isMultiSelect,
                isSelected: isItemSelected,
                disabled: item.disabled,
                tabIndex: 0
              }

              return renderItem(itemProps)
            }}
          />
        )}
      </Pane>
    </Pane>
  )
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
OptionsList.propTypes = {
  options: PropTypes.arrayOf(OptionShapePropType),
  close: PropTypes.func,
  height: PropTypes.number,
  width: PropTypes.number,

  /**
   * When true, multi select is accounted for.
   */
  isMultiSelect: PropTypes.bool,

  /**
   * When true, menu closes on option selection.
   */
  closeOnSelect: PropTypes.bool,

  /**
   * This holds the values of the options
   */
  selected: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  onSelect: PropTypes.func,
  onDeselect: PropTypes.func,
  onFilterChange: PropTypes.func,
  hasFilter: PropTypes.bool,
  optionSize: PropTypes.number,
  renderItem: PropTypes.func,
  filterPlaceholder: PropTypes.string,
  filterIcon: PropTypes.oneOfType([PropTypes.elementType, PropTypes.element]),
  optionsFilter: PropTypes.func,
  defaultSearchValue: PropTypes.string
}

export default OptionsList
