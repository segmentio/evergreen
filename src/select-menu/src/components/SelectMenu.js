import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Popover from 'evergreen-popover'
import arrify from 'arrify'
import SelectMenuContent from './SelectMenuContent'
import OptionShapePropType from './OptionShapePropType'
import SelectedPropType from './SelectedPropType'

export default class SelectMenu extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    options: PropTypes.arrayOf(OptionShapePropType),
    children: PropTypes.node,
    onSelect: PropTypes.func,
    selected: SelectedPropType,
    hasTitle: PropTypes.bool,
    hasFilter: PropTypes.bool
  }

  static defaultProps = {
    onSelect: () => {},
    width: 240,
    height: 248
  }

  constructor(props, context) {
    super(props, context)

    this.state = {}
  }

  render() {
    const {
      title,
      width,
      height,
      options,
      selected,
      hasTitle,
      hasFilter,
      ...props
    } = this.props

    return (
      <Popover
        minWidth={width}
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
          />
        )}
        {...props}
      />
    )
  }
}
