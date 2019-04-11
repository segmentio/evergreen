import * as PropTypes from 'prop-types'
import * as React from 'react'
import Box, { BoxProps } from 'ui-box'

import { PropsWithTheme, withTheme } from '../../theme'

type Size = 300 | 400 | 500

export interface ParagraphProps extends Partial<BoxProps> {
  size?: Size

  // Font family. Can be: `ui`, `display` or `mono` or a custom font family.
  fontFamily?: string
}

class Paragraph extends React.PureComponent<PropsWithTheme<ParagraphProps>> {
  static propTypes = {
    ...Box.propTypes,
    size: PropTypes.oneOf([300, 400, 500]).isRequired as PropTypes.Validator<
      Size
    >,
    fontFamily: PropTypes.string.isRequired,
    theme: PropTypes.object.isRequired
  }

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
