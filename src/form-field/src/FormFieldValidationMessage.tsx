import React, { memo, forwardRef } from 'react'
import { PolymorphicBoxProps } from 'ui-box'
import { ErrorIcon } from '../../icons'
import { Pane } from '../../layers'
import { PaneOwnProps } from '../../layers/src/Pane'
import { Paragraph } from '../../typography'

export interface FormFieldValidationMessageOwnProps extends PaneOwnProps {}

export type FormFieldValidationMessageProps = PolymorphicBoxProps<'div', FormFieldValidationMessageOwnProps>

const FormFieldValidationMessage: React.FC<FormFieldValidationMessageProps> = memo(
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

export default FormFieldValidationMessage
