import * as PropTypes from 'prop-types'
import * as React from 'react'

import { Card } from '../../layers'
import { IPaneProps } from '../../layers/src/Pane'

export interface IPopoverStatelessProps extends IPaneProps {
  // The content of the Popover.
  children?: React.ReactNode
}

export default class PopoverStateless extends React.PureComponent<
  IPopoverStatelessProps
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
