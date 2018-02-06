import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import fuzzaldrin from 'fuzzaldrin-plus'
import VirtualList from 'react-tiny-virtual-list'
import { Pane } from '../../layers'
import { TableHead, SearchTableHeaderCell } from '../../table'
import OptionShapePropType from './OptionShapePropType'
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

export default class OptionsList extends PureComponent {
  static propTypes = {
    options: PropTypes.arrayOf(OptionShapePropType),
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

    this.state = {
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
  }

  isSelected = item => {
    const { selected } = this.state

    return Boolean(selected.find(selectedItem => selectedItem === item.value))
  }

  search = options => {
    const { optionsFilter } = this.props
    const { searchValue } = this.state

    return searchValue.trim() === ''
      ? options // Return if no search query
      : optionsFilter(
          options.map(item => item.labelInList || item.label),
          searchValue
        ).map(name =>
          options.find(item => item.labelInList === name || item.label === name)
        )
  }

  handleChange = searchValue => {
    this.setState({
      searchValue
    })
  }

  handleSelect = item => {
    this.props.onSelect(item)
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
    const options = this.search(originalOptions)
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
        <Pane flex={1}>
          <VirtualList
            height={listHeight}
            width="100%"
            itemSize={optionSize}
            itemCount={options.length}
            overscanCount={3}
            scrollToAlignment="auto"
            renderItem={({ index, style }) => {
              const item = options[index]
              return renderItem({
                key: item.value,
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
