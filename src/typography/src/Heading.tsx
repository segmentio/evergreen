import React, { PureComponent, Validator } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { withTheme, Theme } from '../../theme'

type HeadingSize = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export interface HeadingProps extends React.ComponentProps<typeof Box> {
  /**
   * Pass `default` to use the default margin top for that size.
   */
  marginTop?: boolean | number | string | 'default'

  /**
   * The size of the heading.
   */
  size: HeadingSize

  /**
   * Theme provided by ThemeProvider.
   */
  theme: Theme
}

class Heading extends PureComponent<HeadingProps> {
  static propTypes = {
    marginTop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string
    ]),
    size: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900])
      .isRequired as Validator<HeadingSize>,
    theme: PropTypes.object.isRequired as Validator<Theme>
  }

  static defaultProps: Partial<HeadingProps> = {
    size: 500
  }

  render() {
    const { theme, marginTop, size, ...props } = this.props
    const {
      marginTop: defaultMarginTop,
      ...headingStyle
    } = theme.getHeadingStyle(size)

    let finalMarginTop = marginTop
    if (marginTop === 'default') {
      finalMarginTop = defaultMarginTop
    }

    return (
      <Box
        is="h2"
        marginTop={finalMarginTop || 0}
        marginBottom={0}
        {...headingStyle}
        {...props}
      />
    )
  }
}

export default withTheme(Heading)
