import React, { PureComponent } from 'react'
import Badge from './Badge'

export default class Pill extends PureComponent<
  React.ComponentProps<typeof Badge>
> {
  render() {
    return <Badge borderRadius={999} {...this.props} />
  }
}
