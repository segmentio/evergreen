import * as React from 'react'
import Box, { BoxProps } from 'ui-box'
import { withTheme, PropsWithTheme } from '../../theme'

type Size = 300 | 400 | 500 | 600

export interface ITextProps extends BoxProps {
  size: Size

  /**
   * Can be: `ui`, `display`, or `mono` or a custom font family
   */
  fontFamily: string
}

class Text extends React.PureComponent<PropsWithTheme<ITextProps>> {
  static defaultProps = {
    size: 400 as Size,
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

const out = withTheme<ITextProps>(Text)

export default out
