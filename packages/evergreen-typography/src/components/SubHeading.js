import React, { PureComponent } from 'react'
import Text from './Text'

export default class SubHeading extends PureComponent {
  static defaultProps = {
    is: 'h3',
    color: 'dark',
    fontFamily: 'display',
    marginTop: 0,
    marginBottom: '1em',
    textStyleTransformation: ({ fontWeight, ...textStyle }) => ({
      ...textStyle,
      fontWeight: fontWeight - 100,
    }),
  }

  render() {
    return <Text {...this.props} />
  }
}
