import React, { memo, forwardRef } from 'react'
import Text from './Text'

const Strong = memo(
  forwardRef(function Strong(props, ref) {
    return <Text is="strong" fontWeight={600} {...props} ref={ref} />
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
Strong.propTypes = {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
  ...Text.propTypes
}

export default Strong
