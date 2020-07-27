import React, { memo, forwardRef } from 'react'
import { Paragraph } from '../../typography'
import { ErrorIcon } from '../../icons'
import { Pane } from '../../layers'

const FormFieldValidationMessage = memo(
  forwardRef(function FormFieldValidationMessage({ children, ...props }, ref) {
    return (
      <Pane ref={ref} display="flex" {...props}>
        <ErrorIcon color="danger" marginTop={1} size={14} marginRight={8} />
        <Paragraph marginTop={0} size={300} color="danger" role="alert">
          {children}
        </Paragraph>
      </Pane>
    )
  })
)

FormFieldValidationMessage.propTypes = {
  /**
   * Composes the Pane component as the base.
   */
  ...Pane.propTypes
}

export default FormFieldValidationMessage
