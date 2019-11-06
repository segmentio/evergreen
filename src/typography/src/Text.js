import cx from 'classnames'
import { css as glamorCss } from 'glamor'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { withTheme } from '../../theme'

class Text extends PureComponent {
  static propTypes = {
    /**
     * Composes the Box component as the base.
     */
    ...Box.propTypes,

    /**
     * Size of the text style.
     * Can be: 300, 400, 500, 600.
     */
    size: PropTypes.oneOf([300, 400, 500, 600]).isRequired,

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

  render() {
    const {
      className,
      css,
      theme,
      size,
      color,
      fontFamily,
      marginTop,
      ...props
    } = this.props

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
        className={cx(className, css ? glamorCss(css).toString() : undefined)}
        {...props}
      />
    )
  }
}

export default withTheme(Text)
