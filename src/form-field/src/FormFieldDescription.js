import React, { memo, forwardRef } from 'react'
import { Paragraph } from '../../typography'

const FormFieldDescription = memo(
  forwardRef(function FormFieldDescription(props, ref) {
    return (
      <Paragraph marginTop={4} marginBottom={0} lineHeight={1} size={300} color="muted" {...props} ref={ref} />
    )
  })
)

FormFieldDescription.propTypes = {
  /**
   * Composes the Paragraph component as the base.
   */
  ...Paragraph.propTypes
}

export default FormFieldDescription
