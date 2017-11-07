import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import FontFamilies from '../styles/FontFamilies'
import TextStyles from '../styles/TextStyles'
import TextColors from '../styles/TextColors'

export default class Text extends PureComponent {
  static propTypes = {
    ...Box.propTypes,
    size: PropTypes.oneOf(Object.keys(TextStyles).map(Number)),
    color: PropTypes.string,
    fontFamily: PropTypes.oneOf(Object.keys(FontFamilies)),
    textStyles: PropTypes.object,
  }

  static defaultProps = {
    is: 'span',
    size: 500,
    color: 'default',
    fontFamily: 'ui',
    textStyles: TextStyles,
  }

  render() {
    const { size, color, textStyles, fontFamily, ...props } = this.props

    return (
      <Box
        {...(color !== null ? { color: TextColors[color] || color } : {})}
        fontFamily={FontFamilies[fontFamily] || fontFamily}
        {...textStyles[size]}
        {...props}
      />
    )
  }
}
