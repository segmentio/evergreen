import React, { PureComponent } from 'react'
import mapValues from 'lodash.mapvalues'
import TextStyles from './styles/TextStyles'
import Text from './Text'

const textStyleTransformation = ({ lineHeight, ...textStyle }) => ({
  ...textStyle,
  // Multiply line height by 1.1
  lineHeight: `${Math.round(parseFloat(lineHeight, 10) * 1.08)}px`
})

const textStyles = mapValues(TextStyles, textStyleTransformation)

export default class Paragraph extends PureComponent {
  static propTypes = {
    ...Text.propTypes
  }

  render() {
    return (
      <Text
        is="p"
        marginTop={0}
        marginBottom={0}
        textStyles={textStyles}
        {...this.props}
      />
    )
  }
}
