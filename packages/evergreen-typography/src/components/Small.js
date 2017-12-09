import React, { PureComponent } from 'react'
import mapValues from 'lodash.mapvalues'
import Text from './Text'
import TextStyles from '../styles/TextStyles'

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
