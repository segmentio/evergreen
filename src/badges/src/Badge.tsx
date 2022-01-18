import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import { useStyleConfig } from '../../hooks'
import { Strong } from '../../typography'

const pseudoSelectors = {}

const internalStyles = {
  display: 'inline-block',
  boxSizing: 'border-box',
  verticalAlign: 'middle'
}

const hoverClassName = css({
  '&:hover': {
    opacity: 0.8
  },
  cursor: 'pointer'
})

const Badge = memo(
  forwardRef(function Badge(props, ref) {
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
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
        className={cx(className, themedClassName, isInteractive && hoverClassName)}
        {...styleProps}
        {...restProps}
      />
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
Badge.propTypes = {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
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
