import React, { forwardRef, memo } from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useStyleConfig } from '../../hooks'

const pseudoSelectors = {}
const internalStyles = {}

const Heading = memo(
  forwardRef(function Heading(props, ref) {
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
    const { className, size = 500, ...restProps } = props
    const { className: themedClassName, ...styleProps } = useStyleConfig(
      'Heading',
      { size },
      pseudoSelectors,
      internalStyles
    )

    return (
      <Box
        is="h2"
        ref={ref}
        className={cx(themedClassName, className)}
        // @ts-expect-error ts-migrate(2783) FIXME: 'marginTop' is specified more than once, so this u... Remove this comment to see the full error message
        marginTop={0}
        // @ts-expect-error ts-migrate(2783) FIXME: 'marginBottom' is specified more than once, so thi... Remove this comment to see the full error message
        marginBottom={0}
        {...styleProps}
        {...restProps}
      />
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
Heading.propTypes = {
  /**
   * Heading composes Box as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type '<E ex... Remove this comment to see the full error message
  ...Box.propTypes,

  /**
   * The size of the heading.
   */
  size: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900])
}

export default Heading
