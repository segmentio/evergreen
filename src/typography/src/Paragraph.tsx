import React, { PureComponent } from 'react'
<<<<<<< HEAD
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { withTheme } from '../../theme'

class Paragraph extends PureComponent<any & React.ComponentProps<typeof Box>> {
  static propTypes = {
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
=======
import Box, { BoxProps } from 'ui-box'
import { withTheme, Theme } from '../../theme'

interface ParagraphProps extends BoxProps {
  /**
   * The color (alias or valid color) applied to the text
   */
  color?: string

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily?: 'ui' | 'display' | 'mono'

  /**
   * Size of the text style.
   * Can be: 300, 400, 500.
   */
  size?: 300 | 400 | 500

  /**
   * Theme provided by ThemeProvider.
   */
  theme: Theme
}
>>>>>>> migrate typography components to TS

class Paragraph extends PureComponent<ParagraphProps> {
  static defaultProps: Partial<ParagraphProps> = {
    size: 400,
    color: 'default',
    fontFamily: 'ui'
  }

  render() {
    const { theme, size, color, fontFamily, marginTop, ...props } = this.props

    const {
      marginTop: defaultMarginTop,
      ...textStyle
    } = theme.getParagraphStyle(size)

    const finalMarginTop =
      marginTop === 'default' ? defaultMarginTop : marginTop

    return (
      <Box
        is="p"
        color={theme.getTextColor(color)}
        fontFamily={theme.getFontFamily(fontFamily)}
        marginTop={finalMarginTop || 0}
        marginBottom={0}
        {...textStyle}
        {...props}
      />
    )
  }
}

export default withTheme(Paragraph)
