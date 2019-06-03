import React, { PureComponent, Validator } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { withTheme, Theme } from '../../theme'

type FontFamily = 'ui' | 'display' | 'mono'
type TextSize = 300 | 400 | 500 | 600

export interface TextProps extends React.ComponentProps<typeof Box> {
  /**
   * The color (alias or valid color) applied to the text
   */
  color?: string

  /**
   * The font family alias applied to the text
   */
  fontFamily?: FontFamily

  /**
   * The size of the text style
   */
  size?: TextSize

  /**
   * Theme provided by ThemeProvider.
   */
  theme: Theme
}

class Text extends PureComponent<TextProps> {
  static propTypes = {
    color: PropTypes.string,
    fontFamily: PropTypes.oneOf(['ui', 'display', 'mono']) as Validator<
      FontFamily
    >,
    size: PropTypes.oneOf([300, 400, 500, 600]) as Validator<TextSize>,
    theme: PropTypes.object.isRequired as Validator<Theme>
  }

  static defaultProps = {
    size: 400 as const,
    color: 'default' as const,
    fontFamily: 'ui' as const
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
