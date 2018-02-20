import React, { PureComponent } from 'react'
import mapValues from 'lodash.mapvalues'
import TextStyles from './styles/TextStyles'
import Text from './Text'

const textStyleTransformation = ({ fontSize, ...textStyle }) => ({
  ...textStyle,
  fontSize: `${Math.round(parseInt(fontSize, 10) * 0.8)}px`
})

const textStyles = mapValues(TextStyles, textStyleTransformation)

export default class Small extends PureComponent {
  static propTypes = {
    ...Text.propTypes
  }

  render() {
    return <Text is="small" textStyles={textStyles} {...this.props} />
  }
}
