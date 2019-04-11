import * as PropTypes from 'prop-types'
import * as React from 'react'

import { Card } from '../../layers'
import { PaneProps } from '../../layers/src/Pane'

export interface PopoverStatelessProps extends PaneProps {
  // The content of the Popover.
  children?: React.ReactNode
}

export default class PopoverStateless extends React.PureComponent<
  PopoverStatelessProps
> {
  static propTypes = {
    ...Card.propTypes,
    children: PropTypes.node
  }

  render() {
    const { children, ...props } = this.props

    return (
      <Card
        role="dialog"
        elevation={3}
        overflow="hidden"
        minWidth={200}
        backgroundColor="white"
        {...props}
      >
        {children}
      </Card>
    )
  }
}
