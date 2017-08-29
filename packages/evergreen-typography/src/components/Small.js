import React, { PureComponent } from 'react'
import Text from './Text'

export default class Small extends PureComponent {
  static defaultProps = {
    is: 'small',
    textStyleTransformation: ({ fontSize, ...textStyle }) => ({
      ...textStyle,
      fontSize: `${Math.round(parseInt(fontSize, 10) * 0.8)}px`,
    }),
  }

  render() {
    return <Text {...this.props} />
  }
}
