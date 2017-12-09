import React, { PureComponent } from 'react'
import Pane from './Pane'

export default class Card extends PureComponent {
  static propTypes = {
    ...Pane.propTypes
  }

  static defaultProps = {
    borderRadius: 5
  }

  render() {
    const { ...props } = this.props
    return <Pane {...props} />
  }
}
