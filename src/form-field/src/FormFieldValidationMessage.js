import React, { memo, forwardRef } from 'react'
import { ErrorIcon } from '../../icons'
import { Pane } from '../../layers'
import { majorScale } from '../../scales'
import { Paragraph } from '../../typography'

const FormFieldValidationMessage = memo(
  forwardRef(function FormFieldValidationMessage({ children, ...props }, ref) {
    return (
      <Pane ref={ref} display="flex" {...props}>
        <Pane display="flex" marginRight={majorScale(1)}>
          <ErrorIcon color="danger" marginTop={1} size={14} />
        </Pane>
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
