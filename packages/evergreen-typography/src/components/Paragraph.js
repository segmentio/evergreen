import React, { PureComponent } from 'react'
import mapValues from 'lodash.mapvalues'
import Text from './Text'
import TextStyles from '../styles/TextStyles'

const textStyleTransformation = ({ lineHeight, ...textStyle }) => ({
  ...textStyle,
  // Multiply line height by 1.1
  lineHeight: `${Math.round(parseFloat(lineHeight, 10) * 1.08)}px`,
})

export default class Paragraph extends PureComponent {
  static propTypes = {
    ...Text.propTypes,
  }

  static defaultProps = {
    ...Text.defaultProps,
    is: 'p',
    marginTop: 0,
    marginBottom: 0,
    textStyles: mapValues(TextStyles, textStyleTransformation),
  }

  render() {
    return <Text {...this.props} />
  }
}
