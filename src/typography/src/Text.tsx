import React, { PureComponent } from 'react'
import Box from 'ui-box'
import { withTheme } from '../../theme'

interface Theme {
  getTextStyle: (size?: number) => any
  getTextColor: (colorAlias?: string) => string
  getFontFamily: (fontFamily?: string) => string
}

interface TextProps {
  /** The color (alias or valid color) applied to the text */
  color?: string
  /** The font family alias applied to the text */
  fontFamily?: 'ui' | 'display' | 'mono'
  /** The size of the text style */
  size?: 300 | 400 | 500 | 600
  /** Theme provided by ThemeProvider. */
  theme: Theme
}

class Text extends PureComponent<TextProps & React.ComponentProps<typeof Box>> {
  static defaultProps: Partial<TextProps> = {
    size: 400,
    color: 'default',
    fontFamily: 'ui'
  }

  render() {
    const { theme, size, color, fontFamily, marginTop, ...props } = this.props

    const { marginTop: defaultMarginTop, ...textStyle } = theme.getTextStyle(
      size
    )

    const finalMarginTop =
      marginTop === 'default' ? defaultMarginTop : marginTop

    return (
      <Box
        is="span"
        color={theme.getTextColor(color)}
        fontFamily={theme.getFontFamily(fontFamily)}
        marginTop={finalMarginTop}
        {...textStyle}
        {...props}
      />
    )
  }
}

export default withTheme(Text)
