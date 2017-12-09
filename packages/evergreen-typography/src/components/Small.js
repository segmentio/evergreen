import React, { PureComponent } from 'react'
import mapValues from 'lodash.mapvalues'
import TextStyles from '../styles/TextStyles'
import Text from './Text'

const textStyleTransformation = ({ fontSize, ...textStyle }) => ({
  ...textStyle,
  fontSize: `${Math.round(parseInt(fontSize, 10) * 0.8)}px`
})

export default class Small extends PureComponent {
  static propTypes = {
    ...Text.propTypes
  }

  static defaultProps = {
    ...Text.defaultProps,
    is: 'small',
    textStyles: mapValues(TextStyles, textStyleTransformation)
  }

  render() {
    return <Text {...this.props} />
  }
}
