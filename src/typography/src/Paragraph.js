import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { withTheme } from '../../theme'

export default withTheme(
  class Paragraph extends PureComponent {
    static propTypes = {
      /**
       * Composes the Box component as the base.
       */
      ...Box.propTypes,

      /**
       * Size of the text style.
       * Can be: 300, 400, 500.
       */
      size: PropTypes.oneOf([300, 400, 500]).isRequired,

      /**
       * Font family.
       * Can be: `ui`, `display` or `mono` or a custom font family.
       */
      fontFamily: PropTypes.string.isRequired,

      /**
       * Theme provided by ThemeProvider.
       */
      theme: PropTypes.object.isRequired
    }

    static defaultProps = {
      size: 400,
      color: 'default',
      fontFamily: 'ui'
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

    getTextStyle = size => {
      const { theme } = this.props

      return theme.typography.text[String(size)]
    }

    render() {
      const { theme, size, color, fontFamily, marginTop, ...props } = this.props

      const { marginTop: defaultMarginTop, ...textStyle } = this.getTextStyle(
        size
      )

      const finalMarginTop =
        marginTop === 'default' ? defaultMarginTop : marginTop

      return (
        <Box
          is="p"
          color={this.getTextColor(color)}
          fontFamily={this.getFontFamily(fontFamily)}
          marginTop={finalMarginTop || 0}
          marginBottom={0}
          {...textStyle}
          {...props}
        />
      )
    }
  }
)
