import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Icon } from '../../icon'

export default class SortableIcon extends PureComponent {
  static propTypes = {
    /**
     * The sort order of the icon.
     */
    sortOrder: PropTypes.oneOf(['disabled', 'descending', 'ascending'])
  }

  static defaultProps = {
    sortOrder: 'disabled'
  }

  render() {
    const { sortOrder } = this.props
    return (
      <Pane
        is="span"
        display="inline-block"
        paddingLeft={6}
        {...(sortOrder === 'disabled' ? {} : { title: sortOrder })}
      >
        <Icon
          icon="caret-up"
          display="block"
          size={12}
          color={sortOrder === 'ascending' ? 'default' : 'disabled'}
        />
        <Icon
          icon="caret-down"
          marginTop={-6}
          display="block"
          size={12}
          color={sortOrder === 'descending' ? 'default' : 'disabled'}
        />
      </Pane>
    )
  }
}
