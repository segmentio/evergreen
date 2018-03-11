import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import FontFamilies from './styles/FontFamilies'
import TextStyles from './styles/TextStyles'
import TextUppercaseStyles from './styles/TextUppercaseStyles'
import TextColors from './styles/TextColors'

const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

export default class Text extends PureComponent {
  static propTypes = {
    /**
     * Composes the Box component as the base.
     */
    ...Box.propTypes,

    /**
     * Size of the text style.
     * Can be: 100, 200, 300, 400, 500, 600, 700, 800, 900.
     */
    size: PropTypes.oneOf(Object.keys(TextStyles).map(Number)),

    /**
     * Font family.
     * Can be: ui, display or mono
     */
    fontFamily: PropTypes.oneOf(Object.keys(FontFamilies)),

    /**
     * Sets the text to uppercase.
     * Only sizes 100 and 200 support uppercase styles at the moment.
     */
    isUppercase: PropTypes.bool,

    /**
     * The text styles available.
     * This is overridden by other text components that implement Text as the base.
     * You should avoid setting this manually.
     */
    textStyles: PropTypes.object,

    /**
     * The uppercase text styles.
     * You should avoid setting this manually.
     */
    textUppercaseStyles: PropTypes.object
  }

  static defaultProps = {
    size: 500,
    color: 'default',
    fontFamily: 'ui',
    textStyles: TextStyles,
    textUppercaseStyles: TextUppercaseStyles
  }

  render() {
    const {
      size,
      color,
      textStyles,
      textUppercaseStyles,
      fontFamily,
      isUppercase,
      ...props
    } = this.props

    let textStyle = textStyles[size]

    if (isUppercase) {
      // Only 100 and 200 support uppercase styles atm
      // Fallback on non uppercase atm
      if (Object.prototype.hasOwnProperty.call(textUppercaseStyles, size)) {
        textStyle = textUppercaseStyles[size]
      } else if (isDev) {
        console.error(
          `Uppercase ${size} not supported. <Text isUppercase> only supports the following sizes: ${JSON.stringify(
            Object.keys(textUppercaseStyles).map(Number)
          )}`
        )
      }
    }

    return (
      <Box
        is="span"
        {...(color ? { color: TextColors[color] || color } : {})}
        fontFamily={FontFamilies[fontFamily] || fontFamily}
        {...textStyle}
        {...props}
      />
    )
  }
}
