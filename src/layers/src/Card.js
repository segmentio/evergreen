import React, { PureComponent } from 'react'
import Pane from './Pane'

export default class Card extends PureComponent {
  static propTypes = {
    ...Pane.propTypes
  }

  render() {
    return <Pane borderRadius={5} {...this.props} />
  }
}
