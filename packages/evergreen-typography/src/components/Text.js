import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import FontFamilies from '../styles/font-families'
import TextStyles from '../styles/text-styles'
import TextColors from '../styles/text-colors'

export default class Text extends PureComponent {
  static propTypes = {
    size: PropTypes.oneOf(Object.keys(TextStyles).map(Number)).isRequired,
    color: PropTypes.string,
    fontFamily: PropTypes.oneOf(Object.keys(FontFamilies)).isRequired,
    textStyleTransformation: PropTypes.func.isRequired,
  }

  static defaultProps = {
    is: 'span',
    size: 500,
    color: 'default',
    fontFamily: 'ui',
    textStyleTransformation: textStyle => textStyle,
  }

  render() {
    const {
      size,
      color,
      fontFamily,
      textStyleTransformation,
      ...props
    } = this.props
    return (
      <Box
        color={TextColors[color] || color}
        fontFamily={FontFamilies[fontFamily] || fontFamily}
        {...textStyleTransformation(TextStyles[size])}
        {...props}
      />
    )
  }
}
