import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import VirtualList from '@segment/react-tiny-virtual-list'
import fuzzaldrin from 'fuzzaldrin-plus'
import { SearchIcon } from '../../icons'
import { Image } from '../../image'
import { Pane } from '../../layers'
import { PaneOwnProps } from '../../layers/src/Pane'
import safeInvoke from '../../lib/safe-invoke'
import SearchTableHeaderCell from '../../table/src/SearchTableHeaderCell'
import TableHead from '../../table/src/TableHead'
import { useTheme } from '../../theme'
import Option, { OptionProps } from './Option'
import { SelectMenuOption } from './SelectMenu'

export interface OptionsListProps extends PaneOwnProps {
  options?: SelectMenuOption[]
  close?: () => void
  closeOnSelect?: boolean
  height?: number
  width?: number
  isMultiSelect?: boolean
  selected?: string | string[]
  onSelect?: (value: SelectMenuOption) => void
  onDeselect?: (value: SelectMenuOption) => void
  onFilterChange?: (value: string) => void
  hasFilter?: boolean
  optionSize?: number
  renderItem?: (props: {
    key: SelectMenuOption['value']
    label: SelectMenuOption['label']
    icon?: SelectMenuOption['icon']
    item: SelectMenuOption
    style: object
    height: NonNullable<OptionsListProps['optionSize']>
    onSelect: () => void
    onDeselect: () => void
    isSelectable: boolean
    isSelected: boolean
    disabled: SelectMenuOption['disabled']
    tabIndex: number
  }) => JSX.Element
  filterPlaceholder?: string
  filterIcon?: React.ElementType | JSX.Element
  optionsFilter?: (
    value: SelectMenuOption['label'][],
    filter: NonNullable<OptionsListProps['defaultSearchValue']>
  ) => void
  defaultSearchValue?: string
}

/**
 * Fuzzaldrin-plus is the default filter, but you can use your own
 * as long as they follow the following signature:
 * @param options <Array[String]> - ['label', 'label2', ...]
 * @param input <String>
 */
const fuzzyFilter = (options: any, input: any, { key }: any) => {
  return fuzzaldrin.filter(options, input, { key })
}

const noop = () => {}

const defaultRenderItem = (props: OptionProps) => {
  return (
    <Option {...props}>
      {props.icon && <Image src={props.icon} width={24} marginRight={8} />}
      {props.label}
    </Option>
  )
}

const OptionsList: React.FC<OptionsListProps> = memo(function OptionsList(props) {
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
    renderItem = defaultRenderItem,
    filterPlaceholder = 'Filter...',
    filterIcon = SearchIcon,
    defaultSearchValue = '',
    ...rest
  } = props

  const [searchValue, setSearchValue] = useState(defaultSearchValue)
  const [searchRef, setSearchRef] = useState(null)
  const requestId = useRef()
  const { colors } = useTheme()

  const isSelected = useCallback(
    (item) => {
      return Boolean(
        Array.isArray(selected)
          ? selected.find((selectedItem: any) => selectedItem === item.value)
          : selected === item.value
      )
    },
    [selected]
  )

  const optionLabels = useMemo(() => {
    return originalOptions.map((item: any) => item.label)
  }, [originalOptions])

  // Gets filtered options any time the filter fn, value, or options change
  const options = useMemo(() => {
    if (searchValue.trim() === '') {
      return originalOptions
    }

    // Preserve backwards compatibility with allowing custom filters, which accept array of strings
    if (typeof optionsFilter === 'function') {
      // @ts-expect-error
      return optionsFilter(optionLabels, searchValue).map((name: any) => {
        return originalOptions.find((item: any) => item.label === name)
      })
    }

    return fuzzyFilter(originalOptions, searchValue, { key: 'label' })
  }, [originalOptions, optionLabels, optionsFilter, searchValue])

  const getCurrentIndex = useCallback(() => {
    return options.findIndex((option: any) => option.value === selected[selected.length - 1])
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
    (searchValue) => {
      setSearchValue(searchValue)
      onFilterChange(searchValue)
    },
    [onFilterChange]
  )

  const handleSelect = useCallback(
    (item) => {
      if (isSelected(item) && isMultiSelect) {
        onDeselect(item)
      } else {
        onSelect(item)
      }

      if (!isMultiSelect && closeOnSelect) {
        safeInvoke(close)
      }
    },
    [onDeselect, isMultiSelect, closeOnSelect, onSelect, isSelected, close]
  )

  const handleEnter = useCallback(() => {
    const isSelected = getCurrentIndex() !== -1

    if (isSelected) {
      if (!isMultiSelect && closeOnSelect) {
        safeInvoke(close)
      }
    }
  }, [isMultiSelect, close, closeOnSelect, getCurrentIndex])

  const handleDeselect = useCallback(
    (item) => {
      onDeselect(item)
    },
    [onDeselect]
  )

  const handleKeyDown = useCallback(
    (e) => {
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
        safeInvoke(close)
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

  const listHeight = height! - (hasFilter ? 32 : 0)
  const currentIndex = getCurrentIndex()
  const scrollToIndex = currentIndex === -1 ? 0 : currentIndex

  return (
    <Pane height={height} width={width} display="flex" flexDirection="column" {...rest}>
      {hasFilter && (
        <TableHead height={32} backgroundColor={colors.gray50}>
          <SearchTableHeaderCell
            onChange={handleChange}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'Dispatch<SetStateAction<null>>' is not assig... Remove this comment to see the full error message
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
                tabIndex: 0,
              }

              // @ts-expect-error
              return renderItem(itemProps)
            }}
          />
        )}
      </Pane>
    </Pane>
  )
})

export default OptionsList
