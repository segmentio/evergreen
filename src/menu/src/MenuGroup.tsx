import * as PropTypes from 'prop-types'
import * as React from 'react'

import { Pane } from '../../layers'
import { Heading } from '../../typography'

interface MenuGroupProps {
  // Title of the menu group.
  title?: React.ReactNode

  // The children of the menu group.
  children: React.ReactNode
}

export default class MenuGroup extends React.PureComponent<MenuGroupProps> {
  static propTypes = {
    title: PropTypes.node,
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
