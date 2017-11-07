import React, { PureComponent } from 'react'
import mapValues from 'lodash.mapvalues'
import Text from './Text'
import TextStyles from '../styles/TextStyles'

const textStyleTransformation = ({ fontWeight, ...textStyle }) => ({
  ...textStyle,
  fontWeight: fontWeight - 100,
})

export default class SubHeading extends PureComponent {
  static propTypes = {
    ...Text.propTypes,
  }

  static defaultProps = {
    ...Text.defaultProps,
    is: 'h3',
    color: 'dark',
    fontFamily: 'display',
    marginTop: 0,
    marginBottom: 0,
    textStyles: mapValues(TextStyles, textStyleTransformation),
  }

  render() {
    return <Text {...this.props} />
  }
}
