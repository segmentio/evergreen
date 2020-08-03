import React, { memo, forwardRef } from 'react'
import { Paragraph } from '../../typography'

const FormFieldHint = memo(
  forwardRef(function FormFieldHint(props, ref) {
    return (
      <Paragraph marginTop={0} size={300} color="muted" {...props} ref={ref} />
    )
  })
)

FormFieldHint.propTypes = {
  /**
   * Composes the Paragraph component as the base.
   */
  ...Paragraph.propTypes
}

export default FormFieldHint
