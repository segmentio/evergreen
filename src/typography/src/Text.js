import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { withTheme } from '../../theme'
import TextStyles from './styles/TextStyles'
import TextUppercaseStyles from './styles/TextUppercaseStyles'

const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

export default withTheme(
  class Text extends PureComponent {
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
       * Can be: `ui`, `display` or `mono` or a custom font family.
       */
      fontFamily: PropTypes.string,

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
      textUppercaseStyles: PropTypes.object,

      /**
       * Theme provided by ThemeProvider.
       */
      theme: PropTypes.object.isRequired
    }

    static defaultProps = {
      size: 500,
      color: 'default',
      fontFamily: 'ui',
      textStyles: TextStyles,
      textUppercaseStyles: TextUppercaseStyles
    }

    getFontFamily = fontFamily => {
      const { theme } = this.props
      /**
       * Allow for passing in a custom fontFamily not in the theme.
       */
      return theme.fontFamilies[fontFamily] || fontFamily
    }

    getTextColor = color => {
      const { theme } = this.props
      /**
       * Allow for passing in a custom fontFamily not in the theme.
       */
      return theme.colors.text[color] || color
    }

    render() {
      const {
        theme,

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
          color={this.getTextColor(color)}
          fontFamily={this.getFontFamily(fontFamily)}
          {...textStyle}
          {...props}
        />
      )
    }
  }
)
