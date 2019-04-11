import * as PropTypes from 'prop-types'
import * as React from 'react'
import Box, { BoxProps } from 'ui-box'

import { withTheme, PropsWithTheme } from '../../theme'

export type TextSize = 300 | 400 | 500 | 600

export interface TextProps extends Partial<BoxProps> {
  size?: TextSize

  // Can be: `ui`, `display`, or `mono` or a custom font family
  fontFamily?: string
}

class Text extends React.PureComponent<PropsWithTheme<TextProps>> {
  static propTypes = {
    ...Box.propTypes,
    size: PropTypes.oneOf([300, 400, 500, 600])
      .isRequired as PropTypes.Validator<TextSize>,
    fontFamily: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired
  }

  static defaultProps = {
    size: 400 as TextSize,
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

const out = withTheme(Text)

export default out
