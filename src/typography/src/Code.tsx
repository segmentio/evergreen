import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import { useStyleConfig } from '../../hooks'
import Text from './Text'

const pseudoSelectors = {}
const internalStyles = {}

const Code = memo(
  forwardRef(function Code(props, ref) {
    // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
    const { appearance = 'default', className, ...restProps } = props

    const styleProps = useStyleConfig('Code', { appearance }, pseudoSelectors, internalStyles)

    return <Text is="code" ref={ref} {...styleProps} fontFamily="mono" className={className} {...restProps} />
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
Code.propTypes = {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
  ...Text.propTypes,

  /**
   * The appearance of the code.
   */
  appearance: PropTypes.oneOf(['default', 'minimal']),

  /**
   * Class name passed to the Code component.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string
}

export default Code
