import React from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../layers'
import { Heading } from '../../typography'

export default class MenuGroup extends React.PureComponent {
  static propTypes = {
    /**
     * Title of the menu group.
     */
    title: PropTypes.node,

    /**
     * The children of the menu group.
     */
    children: PropTypes.node
  }

  render() {
    const { title, children } = this.props
    return (
      <Pane paddingY={8}>
        {title && (
          <Heading size={100} marginX={16} marginY={8}>
            {title}
          </Heading>
        )}
        {children}
      </Pane>
    )
  }
}
