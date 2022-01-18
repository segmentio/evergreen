import React, { forwardRef, memo } from 'react'
import cx from 'classnames'
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
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
    const { className, color = 'default', ...restProps } = props
    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'Link',
      { color },
      pseudoSelectors,
      internalStyles
    )

    return <Text is="a" ref={ref} className={cx(className, themedClassName)} {...boxProps} {...restProps} />
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
Link.propTypes = {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
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
