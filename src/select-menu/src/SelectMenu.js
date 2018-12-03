import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import arrify from 'arrify'
import { Popover } from '../../popover'
import { Position } from '../../constants'
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
      isMultiSelect,
      ...props
    } = this.props

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
            listProps={{
              onSelect: item => {
                this.props.onSelect(item)
              },
              onDeselect: item => {
                this.props.onDeselect(item)
              },
              selected: arrify(selected)
            }}
            close={close}
            {...this.getDetailView(close, detailView)}
            {...this.getEmptyView(close, emptyView)}
          />
        )}
        {...props}
      />
    )
  }
}
