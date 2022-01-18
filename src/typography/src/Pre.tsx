import React, { memo, forwardRef } from 'react'
import Text from './Text'

const Pre = memo(
  forwardRef(function Pre(props, ref) {
    return <Text is="pre" marginTop={0} marginBottom={0} {...props} ref={ref} />
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
Pre.propTypes = {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
  ...Text.propTypes
}

export default Pre
