import React, { memo, forwardRef } from 'react'
import { PolymorphicBoxProps } from "ui-box";
import { ErrorIcon } from '../../icons'
import { Pane } from '../../layers'
import { PaneOwnProps } from "../../layers/src/Pane";
import { Paragraph } from '../../typography'

export interface FormFieldValidationMessageOwnProps extends PaneOwnProps {
}

export type FormFieldValidationMessageProps = PolymorphicBoxProps<'div', FormFieldValidationMessageOwnProps>;

const FormFieldValidationMessage: React.FC<FormFieldValidationMessageProps> = memo(
  forwardRef(function FormFieldValidationMessage({ children, ...props }, ref) {
    return (
      <Pane ref={ref} display="flex" {...props}>
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        <ErrorIcon color="danger" marginTop={1} size={14} marginRight={8} />
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
        <Paragraph marginTop={0} size={300} color="danger" role="alert">
          {children}
        </Paragraph>
      </Pane>
    )
  })
)

export default FormFieldValidationMessage
