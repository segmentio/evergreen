import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { withTheme } from '../../theme'

class Heading extends PureComponent {
  static propTypes = {
    /**
     * Heading composes Box as the base.
     */
    ...Box.propTypes,

    /**
     * The size of the heading.
     */
    size: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900])
      .isRequired,

    /**
     * Pass `default` to use the default margin top for that size.
     */
    marginTop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number,
      PropTypes.string
    ]),

    /**
     * Theme provided by ThemeProvider.
     */
    theme: PropTypes.object.isRequired
  }

  static defaultProps = {
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
