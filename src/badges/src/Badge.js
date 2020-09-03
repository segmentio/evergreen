import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import { Strong } from '../../typography'
import useBadgeAppearance from '../../theme/src/hooks/useBadgeAppearance'

const styles = {
  display: 'inline-block',
  boxSizing: 'border-box',
  height: 16,
  paddingTop: 0,
  paddingRight: 6,
  paddingBottom: 0,
  paddingLeft: 6,
  borderRadius: 4,
  fontSize: 11,
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase'
}

const hoverClassName = css({
  '&:hover': {
    opacity: 0.8
  },
  cursor: 'pointer'
})

const Badge = memo(
  forwardRef(function Badge(props, ref) {
    const {
      className,
      color = 'neutral',
      isInteractive = false,
      ...restProps
    } = props

    const themeProps = useBadgeAppearance({ color })
    const classNames = cx(
      className,
      isInteractive ? hoverClassName.toString() : undefined
    )

    return (
      <Strong
        ref={ref}
        size={300}
        {...styles}
        {...themeProps}
        {...restProps}
        className={classNames}
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
