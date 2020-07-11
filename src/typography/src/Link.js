import cx from 'classnames'
import PropTypes from 'prop-types'
import React, { forwardRef, memo } from 'react'
import { useTheme } from '../../theme'
import Text from './Text'

const Link = memo(
  forwardRef((props, ref) => {
    const theme = useTheme()
    const { className, color = 'default', ...restProps } = props
    const themedClassName = theme.getLinkClassName(color)

    return (
      <Text
        is="a"
        ref={ref}
        className={cx(className, themedClassName)}
        textDecoration="underline"
        color={null}
        {...restProps}
      />
    )
  })
)

Link.propTypes = {
  ...Text.propTypes,

  /**
   * This attribute names a relationship of the linked document to the current document.
   * Common use case is: rel="noopener noreferrer".
   */
  rel: PropTypes.string,

  /**
   * Specifies the URL of the linked resource. A URL might be absolute or relative.
   */
  href: PropTypes.string,

  /**
   * Target atrribute, common use case is target="_blank."
   */
  target: PropTypes.string,

  /**
   * The color (and styling) of the Link. Can be default, blue, green or neutral.
   */
  color: PropTypes.string,

  /**
   * Class name passed to the link.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}

export default Link
