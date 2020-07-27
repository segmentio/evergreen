import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Strong } from '../../typography'
import { useTheme } from '../../theme'

const styles = {
  display: 'inline-block',
  boxSizing: 'border-box',
  height: 16,
  paddingTop: 0,
  paddingRight: 6,
  paddingBottom: 0,
  paddingLeft: 6,
  borderRadius: 2,
  textAlign: 'center',
  textDecoration: 'none',
  textTransform: 'uppercase'
}

const Badge = memo(
  forwardRef(function Badge(props, ref) {
    const theme = useTheme()

    const {
      className,
      color = 'neutral',
      isInteractive = false,
      isSolid = false,
      ...restProps
    } = props

    const themeProps = theme.getBadgeProps({ color, isSolid })
    const appearance = isInteractive ? 'interactive' : 'default'
    const classNames = cx(className, theme.getBadgeClassName(appearance))

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
