import React, { PureComponent } from 'react'
import mapValues from 'lodash.mapvalues'
import TextStyles from './styles/TextStyles'
import Text from './Text'

const textStyleTransformation = ({ fontWeight, ...textStyle }) => ({
  ...textStyle,
  fontWeight: fontWeight - 100
})

const textStyles = mapValues(TextStyles, textStyleTransformation)

export default class SubHeading extends PureComponent {
  static propTypes = {
    ...Text.propTypes
  }

  render() {
    return (
      <Text
        is="h3"
        color="dark"
        fontFamily="display"
        marginTop={0}
        marginBottom={0}
        textStyles={textStyles}
        {...this.props}
      />
    )
  }
}
