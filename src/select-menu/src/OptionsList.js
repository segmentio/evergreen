import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import fuzzaldrin from 'fuzzaldrin-plus'
import VirtualList from 'react-tiny-virtual-list'
import { Pane } from '../../layers'
import { TableHead, SearchTableHeaderCell } from '../../table'
import OptionShapePropType from './OptionShapePropType'
import OptionGroupShapePropType from './OptionGroupShapePropType'
import OptionListGroupHeading from './OptionListGroupHeading'
import Option from './Option'

/**
 * Fuzzaldrin-plus is the default filter, but you can use your own
 * as long as they follow the following signature:
 * @param options <Array[String]> - ['label', 'label2', ...]
 * @param input <String>
 */
const fuzzyFilter = (options, input) => fuzzaldrin.filter(options, input)

/**
 * This is the default item renderer of options
 * you can pass custom renderers as long as they work the same as the Option
 */
const itemRenderer = props => <Option {...props} />

/**
 * Utility to check if the options are grouped.
 */
function isUsingGroupedOptions(options) {
  return (
    options &&
    options.length > 0 &&
    Object.prototype.hasOwnProperty.call(options[0], 'options')
  )
}

/**
 * Utility to get the default collapsed groups.
 */
function getCollapsedGroups(options) {
  if (!isUsingGroupedOptions(options)) return []

  return options.reduce((acc, option) => {
    if (typeof option.heading === 'string') {
      return acc
    }

    if (option.heading.label && option.heading.isCollapsedByDefault) {
      return [...acc, option.heading.label]
    }

    return acc
  }, [])
}

/**
 * Function to process items and return a consistent interface for options.
 */
function processOptions(options, collapsedGroups) {
  if (!isUsingGroupedOptions(options)) return options

  return options.reduce((total, group) => {
    /**
     * Heading can be a string or a object.
     * Create a consistent interface at this point.
     */
    let headingProps = {}
    if (typeof group.heading === 'string') {
      headingProps = {
        label: group.heading
      }
    } else {
      headingProps = {
        ...group.heading
      }
    }

    /**
     * Check to see if this heading is collapsed.
     */
    const isCollapsed = collapsedGroups.includes(headingProps.label)

    return [
      ...total,
      {
        isHeading: true,
        props: {
          ...headingProps,
          isCollapsed
        }
      },
      /**
       * Only add the options when the heading is not collapsed.
       */
      ...(isCollapsed ? [] : group.options)
    ]
  }, [])
}

export default class OptionsList extends PureComponent {
  static propTypes = {
    options: PropTypes.oneOfType([
      PropTypes.arrayOf(OptionShapePropType),
      PropTypes.arrayOf(OptionGroupShapePropType)
    ]),
    close: PropTypes.func,
    height: PropTypes.number,
    width: PropTypes.number,

    /**
     * This holds the values of the options
     */
    selected: PropTypes.arrayOf(PropTypes.string),
    onSelect: PropTypes.func,
    hasFilter: PropTypes.bool,
    optionSize: PropTypes.number,
    renderItem: PropTypes.func,
    placeholder: PropTypes.string,
    optionsFilter: PropTypes.func,
    defaultSearchValue: PropTypes.string
  }

  static defaultProps = {
    options: [],
    /**
     * Including border bottom
     * For some reason passing height to TableRow doesn't work
     * TODO: fix hacky solution
     */
    optionSize: 33,
    onSelect: () => {},
    selected: [],
    renderItem: itemRenderer,
    optionsFilter: fuzzyFilter,
    placeholder: 'Filter...',
    defaultSearchValue: ''
  }

  constructor(props, context) {
    super(props, context)

    const collapsedGroups = getCollapsedGroups(props.options)

    this.state = {
      collapsedGroups,
      items: processOptions(props.options, collapsedGroups),
      searchValue: props.defaultSearchValue,
      selected: props.selected
    }
  }

  componentDidMount() {
    const { hasFilter } = this.props
    if (!hasFilter) return

    /**
     * Hacky solution for broken autoFocus
     * https://github.com/segmentio/evergreen/issues/90
     */
    window.setTimeout(() => {
      this.searchRef.querySelector('input').focus()
    }, 1)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selected !== this.state.selected) {
      this.setState({
        selected: nextProps.selected
      })
    }

    if (nextProps.options !== this.state.options) {
      const newCollapsedGroups = getCollapsedGroups(nextProps.options)
      const collapsedGroups = [
        ...this.state.collapsedGroups,
        ...newCollapsedGroups
      ].reduce((acc, groupLabel) => {
        if (acc.includes(groupLabel)) return acc
        return [...acc, groupLabel]
      }, [])

      const items = processOptions(nextProps.options, collapsedGroups)

      this.setState({
        collapsedGroups,
        items
      })
    }
  }

  isSelected = item => {
    const { selected } = this.state

    return Boolean(selected.find(selectedItem => selectedItem === item.value))
  }

  search = items => {
    const { optionsFilter } = this.props
    const { searchValue } = this.state

    /**
     * Search value is empty string, no need to search.
     */
    if (searchValue.trim() === '') return items

    return items.reduce((acc, item) => {
      if (item.isHeading) return [...acc, item]

      const filteredOptions = optionsFilter(
        [item.labelInList || item.label],
        searchValue
      )
      const isInList = filteredOptions.length > 0

      if (!isInList) return acc

      return [...acc, item]
    }, [])
  }

  handleChange = searchValue => {
    this.setState({
      searchValue
    })
  }

  handleSelect = item => {
    this.props.onSelect(item)
  }

  handleCollapseStateChange = (isCollapsed, item) => {
    this.setState(state => {
      const collapsedGroups = [
        ...state.collapsedGroups,
        item.props.label
      ].filter(label => {
        if (label === item.props.label) return isCollapsed
        return true
      })

      return {
        collapsedGroups,
        items: processOptions(this.props.options, collapsedGroups)
      }
    })
  }

  assignSearchRef = ref => {
    this.searchRef = ref
  }

  render() {
    const {
      options: originalOptions,
      close,
      width,
      height,
      onSelect,
      selected,
      hasFilter,
      optionSize,
      renderItem,
      placeholder,
      optionsFilter,
      defaultSearchValue,
      ...props
    } = this.props
    const items = this.search(this.state.items)
    const listHeight = height - (hasFilter ? 32 : 0)

    return (
      <Pane
        height={height}
        width={width}
        display="flex"
        flexDirection="column"
        {...props}
      >
        {hasFilter && (
          <TableHead>
            <SearchTableHeaderCell
              onChange={this.handleChange}
              innerRef={this.assignSearchRef}
              borderRight={null}
              height={32}
            />
          </TableHead>
        )}
        <Pane flex={1} position="relative">
          <VirtualList
            height={listHeight}
            width="100%"
            itemSize={index => {
              const item = items[index]
              if (item.isHeading) return OptionListGroupHeading.height
              return optionSize
            }}
            itemCount={items.length}
            overscanCount={3}
            scrollToAlignment="auto"
            renderItem={({ index, style }) => {
              const item = items[index]

              if (item.isHeading) {
                return (
                  <OptionListGroupHeading
                    key={item.props.label}
                    {...item.props}
                    style={style}
                    onCollapseStateChange={isCollapsed => {
                      this.handleCollapseStateChange(isCollapsed, item)
                    }}
                  />
                )
              }

              return renderItem({
                key: item.key,
                label: item.label,
                style,
                height: optionSize,
                onSelect: () => this.handleSelect(item),
                isSelected: this.isSelected(item)
              })
            }}
          />
        </Pane>
      </Pane>
    )
  }
}
