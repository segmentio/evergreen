import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import arrify from 'arrify'
import { Popover } from '../../popover'
import { Position } from '../../positioner'
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
     *
     */
    selected: SelectedPropType,

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
    position: PropTypes.oneOf(Object.keys(Position)),

    /**
     * Can be a function that returns a node, or a node itself, that is
     * rendered on the right side of the Select Menu to give additional
     * information when an option is selected.
     */
    detailView: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
  }

  static defaultProps = {
    onSelect: () => {},
    width: 240,
    height: 248,
    position: Position.BOTTOM_LEFT
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
            listProps={{
              onSelect: item => {
                this.props.onSelect(item)
              },
              selected: arrify(selected)
            }}
            close={close}
            {...this.getDetailView(close, detailView)}
          />
        )}
        {...props}
      />
    )
  }
}
