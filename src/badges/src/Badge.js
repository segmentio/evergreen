import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { useStyleConfig } from '../../hooks'
import { Strong } from '../../typography'

const pseudoSelectors = {}

const internalStyles = {
  display: 'inline-block',
  boxSizing: 'border-box',
  verticalAlign: 'middle'
}

const interactiveStyles = {
  selectors: {
    '&:hover': {
      opacity: 0.8
    }
  },
  cursor: 'pointer'
}

const Badge = memo(
  forwardRef(function Badge(props, ref) {
    const { appearance = 'subtle', className, color = 'neutral', isInteractive = false, ...restProps } = props

    const { className: themedClassName, ...styleProps } = useStyleConfig(
      'Badge',
      { appearance, color },
      pseudoSelectors,
      internalStyles
    )

    return (
      <Strong
        ref={ref}
        size={300}
        className={cx(className, themedClassName)}
        {...(isInteractive ? interactiveStyles : {})}
        {...styleProps}
        {...restProps}
      />
    )
  })
)

Badge.propTypes = {
  ...Strong.propTypes,

  /**
   * The color used for the badge.
   */
  color: PropTypes.string,

  /**
   * Whether or not to apply hover/focus/active styles
   */
  isInteractive: PropTypes.bool
}

export default Badge
