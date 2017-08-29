import React, { PureComponent } from 'react'
import Text from './Text'

export default class Paragraph extends PureComponent {
  static defaultProps = {
    is: 'p',
    marginTop: 0,
    marginBottom: '1em',
    textStyleTransformation: ({ lineHeight, ...textStyle }) => ({
      ...textStyle,
      // Multiply line height by 1.1
      lineHeight: `${Math.round(parseFloat(lineHeight, 10) * 1.1)}px`,
    }),
  }

  render() {
    return <Text {...this.props} />
  }
}
