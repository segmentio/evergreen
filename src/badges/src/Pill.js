import React, { PureComponent } from 'react'
import Badge from './Badge'

export default class Pill extends PureComponent {
  static propTypes = {
    ...Badge.propTypes
  }

  render() {
    return <Badge borderRadius={999} {...this.props} />
  }
}
