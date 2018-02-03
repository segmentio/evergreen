import React, { PureComponent } from 'react'
import Text from './Text'

export default class Label extends PureComponent {
  static propTypes = {
    ...Text.propTypes
  }

  static defaultProps = {
    ...Text.defaultProps,
    is: 'label'
  }

  render() {
    return <Text {...this.props} />
  }
}
