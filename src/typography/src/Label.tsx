import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useStyleConfig } from '../../hooks'

const pseudoSelectors = {}
const internalStyles = {}

const Label = memo(
  forwardRef(function Label(props, ref) {
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
    const { className, size = 400, ...restProps } = props

    const { className: themedClassName, ...boxProps } = useStyleConfig(
      'Label',
      { size },
      pseudoSelectors,
      internalStyles
    )

    return <Box is="label" ref={ref} className={cx(themedClassName, className)} {...boxProps} {...restProps} />
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
Label.propTypes = {
  /**
   * Label composes Box as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type '<E ex... Remove this comment to see the full error message
  ...Box.propTypes,

  /**
   * The size of the label.
   */
  size: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900])
}

export default Label
