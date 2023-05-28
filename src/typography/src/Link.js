import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import { useStyleConfig } from '../../hooks'
import Text from './Text'

const internalStyles = {
  textDecoration: 'underline'
}

const pseudoSelectors = {
  _hover: '&:hover',
  _active: '&:active',
  _focus: '&:focus'
}

const Link = memo(
  forwardRef(function Link(props, ref) {
    const { className, color = 'default', ...restProps } = props
    const themedProps = useStyleConfig('Link', { color }, pseudoSelectors, internalStyles)

    return <Text is="a" ref={ref} className={className} {...themedProps} {...restProps} />
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
   * Target attribute, common use case is target="_blank."
   */
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),

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
