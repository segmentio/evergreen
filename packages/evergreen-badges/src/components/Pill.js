import React, { PureComponent } from 'react'
import Badge from './Badge'

export default class Pill extends PureComponent {
  static propTypes = {
    ...Badge.propTypes
  }

  static defaultProps = {
    borderRadius: 999
  }

  render() {
    const { ...props } = this.props
    return <Badge {...props} />
  }
}
