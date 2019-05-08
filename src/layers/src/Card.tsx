import React, { PureComponent } from 'react'
import Pane from './Pane'

export default class Card extends PureComponent<
  React.ComponentProps<typeof Pane>
> {
  render() {
    return <Pane borderRadius={5} {...this.props} />
  }
}
