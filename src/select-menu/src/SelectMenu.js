import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import arrify from 'arrify'
import { Popover } from '../../popover'
import { Position } from '../../constants'
import { Pane } from '../../layers'
import { Heading } from '../../typography'
import { IconButton } from '../../buttons'
import SelectMenuContent from './SelectMenuContent'
import OptionShapePropType from './OptionShapePropType'
import SelectedPropType from './SelectedPropType'

export default class SelectMenu extends PureComponent {
  static propTypes = {
    /**
     * The title of the Select Menu.
     */
    title: PropTypes.string,

    /**
     * The width of the Select Menu.
     */
    width: PropTypes.number,

    /**
     * The height of the Select Menu.
     */
    height: PropTypes.number,

    /**
     * The options to show in the menu.
     * [{ label: String, value: String | Number, labelInList?: String }]
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
    emptyView: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
  }

  static defaultProps = {
    onSelect: () => {},
    onDeselect: () => {},
    width: 240,
    height: 248,
    position: Position.BOTTOM_LEFT,
    isMultiSelect: false
  }

  getDetailView = (close, detailView) => {
    if (typeof detailView === 'function') {
      return {
        detailView: detailView({ close })
      }
    }

    if (detailView) {
      return { detailView }
    }

    return {}
  }

  getEmptyView = (close, emptyView) => {
    if (typeof emptyView === 'function') {
      return {
        emptyView: emptyView({ close })
      }
    }

    if (emptyView) {
      return { emptyView }
    }

    return {}
  }

  getTitleView = (close, title, headerHeight, titleView) => {
    if (typeof titleView === 'function') {
      return {
        titleView: titleView({ close, title })
      }
    }
    if (titleView) {
      return { titleView }
    }

    return {
      titleView: (
        <Pane
          display="flex"
          alignItems="center"
          borderBottom="default"
          padding={8}
          height={headerHeight}
          boxSizing="border-box"
        >
          <Pane flex="1" display="flex" alignItems="center">
            <Heading size={400}>{title}</Heading>
          </Pane>
          <IconButton
            icon="cross"
            appearance="minimal"
            height={24}
            onClick={close}
          />
        </Pane>
      )
    }
  }

  render() {
    const {
      title,
      width,
      height,
      options,
      selected,
      position,
      hasTitle,
      hasFilter,
      detailView,
      emptyView,
      titleView,
      isMultiSelect,
      ...props
    } = this.props

    const headerHeight = 40

    return (
      <Popover
        minWidth={width}
        position={position}
        minHeight={height}
        content={({ close }) => (
          <SelectMenuContent
            width={width}
            height={height}
            options={options}
            title={title}
            hasFilter={hasFilter}
            hasTitle={hasTitle}
            isMultiSelect={isMultiSelect}
            headerHeight={headerHeight}
            listProps={{
              onSelect: item => {
                this.props.onSelect(item)
              },
              onDeselect: item => {
                this.props.onDeselect(item)
              },
              onFilterChange: this.props.onFilterChange,
              selected: arrify(selected)
            }}
            close={close}
            {...this.getDetailView(close, detailView)}
            {...this.getEmptyView(close, emptyView)}
            {...this.getTitleView(close, title, headerHeight, titleView)}
          />
        )}
        {...props}
      />
    )
  }
}
