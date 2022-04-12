import React, { memo, forwardRef } from 'react'
import Box, { PolymorphicBoxProps } from 'ui-box'
import FormFieldDescription from './FormFieldDescription'
import FormFieldHint from './FormFieldHint'
import FormFieldLabel from './FormFieldLabel'
import FormFieldValidationMessage from './FormFieldValidationMessage'

export interface FormFieldOwnProps {
    /**
     * The label used above the input element.
     */
    label?: React.ReactNode;
    /**
     * Passed on the label as a htmlFor prop.
     */
    labelFor?: string;
    /**
     * Wether or not show a asterix after the label.
     */
    isRequired?: boolean;
    /**
     * A optional description of the field under the label, above the input element.
     */
    description?: React.ReactNode;
    /**
     * A optional hint under the input element.
     */
    hint?: React.ReactNode;
    /**
     * If a validation message is passed it is shown under the input element
     * and above the hint.
     */
    validationMessage?: React.ReactNode;
    /**
     * The height of the input element.
     */
    inputHeight?: number;
    /**
     * The width of the input width.
     */
    inputWidth?: number | string;
}

export type FormFieldProps = PolymorphicBoxProps<'div', FormFieldOwnProps>;

const FormField: React.FC<FormFieldProps> = memo(
  forwardRef(function FormField(props, ref) {
    const {
      hint,
      label,
      labelFor,
      children,
      isRequired,
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'labelProps' does not exist on type 'Prop... Remove this comment to see the full error message
      labelProps = { size: 400 },
      description,
      validationMessage,
      ...rest
    } = props

    return (
      <Box {...rest} ref={ref}>
        <Box display="flex" flexDirection="column" marginBottom={8}>
          <FormFieldLabel htmlFor={labelFor} isAstrixShown={isRequired} {...labelProps}>
            {label}
          </FormFieldLabel>
          {typeof description === 'string' ? <FormFieldDescription>{description}</FormFieldDescription> : description}
        </Box>
        {children}
        {typeof validationMessage === 'string' ? (
          <FormFieldValidationMessage marginTop={8}>{validationMessage}</FormFieldValidationMessage>
        ) : (
          validationMessage
        )}
        {typeof hint === 'string' ? <FormFieldHint marginTop={6}>{hint}</FormFieldHint> : hint}
      </Box>
    )
  })
)

export default FormField
