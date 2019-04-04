import * as React from 'react'
import Box, { BoxProps } from 'ui-box'
import { PropsWithTheme, withTheme } from '../../theme'

type Size = 300 | 400 | 500

interface IProps extends BoxProps {
  size?: Size

  /**
   * Font family.
   * Can be: `ui`, `display` or `mono` or a custom font family.
   */
  fontFamily?: string
}

class Paragraph extends React.PureComponent<PropsWithTheme<IProps>> {
  static defaultProps = {
    size: 400 as Size,
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
