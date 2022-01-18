import React, { memo, forwardRef } from 'react'
import { ErrorIcon } from '../../icons'
import { Pane } from '../../layers'
import { Paragraph } from '../../typography'

const FormFieldValidationMessage = memo(
  // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
  forwardRef(function FormFieldValidationMessage({ children, ...props }, ref) {
    return (
      <Pane ref={ref} display="flex" {...props}>
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        <ErrorIcon color="danger" marginTop={1} size={14} marginRight={8} />
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
        <Paragraph marginTop={0} size={300} color="danger" role="alert">
          {children}
        </Paragraph>
      </Pane>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
FormFieldValidationMessage.propTypes = {
  /**
   * Composes the Pane component as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
  ...Pane.propTypes
}

export default FormFieldValidationMessage
