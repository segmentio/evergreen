import * as React from 'react'

import Badge, { IBadgeProps } from './Badge'

export default class Pill extends React.PureComponent<IBadgeProps> {
  static propTypes = {
    ...Badge.propTypes
  }

  render() {
    return <Badge borderRadius={999} {...this.props} />
  }
}
