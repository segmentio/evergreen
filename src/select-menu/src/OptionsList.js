import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import fuzzaldrin from 'fuzzaldrin-plus'
import PropTypes from 'prop-types'
import VirtualList from 'react-tiny-virtual-list'
import { SearchIcon } from '../../icons'
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
const fuzzyFilter = (options, input, { key }) => {
  return fuzzaldrin.filter(options, input, { key })
}

/**
 * This is the default item renderer of options
 * you can pass custom renderers as long as they work the same as the Option
 */
const itemRenderer = props => <Option {...props} />

const noop = () => {}

const OptionsList = memo(function OptionsList(props) {
  const {
    options: originalOptions = [],
    optionSize = 33,
    close,
    closeOnSelect,
    onSelect = noop,
    onDeselect = noop,
    onFilterChange = noop,
    hasFilter,
    selected = [],
    optionsFilter,
    isMultiSelect,
    height,
    width,
    renderItem = itemRenderer,
    filterPlaceholder = 'Filter...',
    filterIcon = SearchIcon,
    defaultSearchValue = '',
    ...rest
  } = props

  const [searchValue, setSearchValue] = useState(defaultSearchValue)
  const [selectedOptions, setSelectedOptions] = useState(selected)
  const [searchRef, setSearchRef] = useState(null)
  const requestId = useRef()
  const theme = useTheme()
  const { tokens } = theme

  const isSelected = useCallback(
    item => {
      return Boolean(
        selectedOptions.find(selectedItem => selectedItem === item.value)
      )
    },
    [selectedOptions]
  )

  const search = useCallback(
    options => {
      if (searchValue.trim() === '') {
        return options
      }

      // Preserve backwards compatibility with allowing custom filters, which accept array of strings
      if (typeof optionsFilter === 'function') {
        return optionsFilter(
          options.map(item => item.label),
          searchValue
        ).map(name => options.find(item => item.label === name))
      }

      return fuzzyFilter(options, searchValue, { key: 'label' })
    },
    [optionsFilter, searchValue]
  )

  const options = search(originalOptions)

  const getFilteredOptions = useCallback(() => {
    return search(options)
  }, [options])

  const getCurrentIndex = useCallback(() => {
    const options = getFilteredOptions()

    return options.findIndex(
      option => option.value === selected[selected.length - 1]
    )
  }, [selected])

  const handleArrowUp = useCallback(() => {
    const options = getFilteredOptions()

    let nextIndex = getCurrentIndex() - 1

    if (nextIndex < 0) {
      nextIndex = options.length - 1
    }

    if (isSelected(options[nextIndex])) {
      return
    }

    onSelect(options[nextIndex])
  }, [onSelect])

  const handleArrowDown = useCallback(() => {
    const options = getFilteredOptions()

    let nextIndex = getCurrentIndex() + 1

    if (nextIndex === options.length) {
      nextIndex = 0
    }

    if (!isSelected(options[nextIndex])) {
      onSelect(options[nextIndex])
    }
  }, [onSelect])

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
    [onDeselect, isMultiSelect, closeOnSelect]
  )

  const handleEnter = useCallback(() => {
    const isSelected = getCurrentIndex() !== -1

    if (isSelected) {
      if (!isMultiSelect && closeOnSelect) {
        close()
      }
    }
  }, [isMultiSelect, close, closeOnSelect])

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
    [close]
  )

  useEffect(() => {
    if (hasFilter) {
      requestId.current = requestAnimationFrame(() => {
        if (searchRef) {
          searchRef.focus()
        }
      })

      window.addEventListener('keydown', handleKeyDown)
      return () => {
        cancelAnimationFrame(requestId.current)
        window.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [hasFilter, searchRef, handleKeyDown])

  useEffect(() => {
    if (selected !== selectedOptions) {
      setSelectedOptions(selected)
    }
  }, [selected])

  const listHeight = height - (hasFilter ? 32 : 0)
  const currentIndex = getCurrentIndex()
  const scrollToIndex = currentIndex === -1 ? 0 : currentIndex

  return (
    <Pane
      height={height}
      width={width}
      display="flex"
      flexDirection="column"
      {...rest}
    >
      {hasFilter && (
        <TableHead height={32} backgroundColor={tokens.colors.gray50}>
          <SearchTableHeaderCell
            onChange={handleChange}
            ref={setSearchRef}
            borderRight={null}
            placeholder={filterPlaceholder}
            icon={filterIcon}
          />
        </TableHead>
      )}
      <Pane flex={1}>
        {options.length > 0 && (
          <VirtualList
            height={listHeight}
            width="100%"
            itemSize={optionSize}
            itemCount={options.length}
            overscanCount={20}
            scrollToAlignment="auto"
            scrollToIndex={scrollToIndex || undefined}
            renderItem={({ index, style }) => {
              const item = options[index]
              const isItemSelected = isSelected(item)
              return renderItem({
                key: item.value,
                label: item.label,
                icon: item.icon,
                style,
                height: optionSize,
                onSelect: () => handleSelect(item),
                onDeselect: () => handleDeselect(item),
                isSelectable: !isItemSelected || isMultiSelect,
                isSelected: isItemSelected,
                disabled: item.disabled,
                tabIndex: 0
              })
            }}
          />
        )}
      </Pane>
    </Pane>
  )
})

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
  selected: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
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
