import React, { memo, forwardRef } from 'react'
import { Paragraph } from '../../typography'

const FormFieldHint = memo(
  forwardRef(function FormFieldHint(props, ref) {
    return <Paragraph marginTop={0} size={300} color="muted" {...props} ref={ref} />
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
FormFieldHint.propTypes = {
  /**
   * Composes the Paragraph component as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
  ...Paragraph.propTypes
}

export default FormFieldHint
