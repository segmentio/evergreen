import * as React from 'react'

import Badge, { BadgeProps } from './Badge'

export default class Pill extends React.PureComponent<BadgeProps> {
  static propTypes = {
    ...Badge.propTypes
  }

  render() {
    return <Badge borderRadius={999} {...this.props} />
  }
}
