import React, { memo, forwardRef } from 'react'
import { PolymorphicBoxProps, splitBoxProps } from 'ui-box'
import { FormField } from '../../form-field'
import { useId } from '../../hooks'
import Textarea, { TextareaOwnProps } from './Textarea'

export interface TextareaFieldOwnProps extends TextareaOwnProps {
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
    required?: boolean;
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

export type TextareaFieldProps = PolymorphicBoxProps<'textarea', TextareaFieldOwnProps>;

const TextareaField: React.FC<TextareaFieldProps> = memo(
  forwardRef(function TextareaField(props, ref) {
    const id = useId('TextareaField', props.id)

    const {
      // We are using the id from the state
      appearance,

      // FormField props
      description,
      disabled,
      hint,
      id: unusedId,

      // Textarea props
      inputHeight = 80,
      /** The input width should be as wide as the form field. */
      inputWidth = '100%',
      isInvalid,
      label,
      placeholder,
      required,
      resize,
      spellCheck,
      validationMessage,

      // Rest props are spread on the FormField
      ...rest
    } = props

    /**
     * Split the wrapper props from the input props.
     */
    const { matchedProps, remainingProps } = splitBoxProps(rest)

    return (
      // @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: Element; alignContent?: number |... Remove this comment to see the full error message
      <FormField
        marginBottom={24}
        label={label}
        isRequired={required}
        hint={hint}
        description={description}
        validationMessage={validationMessage}
        labelFor={id}
        {...matchedProps}
      >
        <Textarea
          id={id}
          ref={ref}
          width={inputWidth}
          height={inputHeight}
          disabled={disabled}
          required={required}
          isInvalid={isInvalid}
          appearance={appearance}
          placeholder={placeholder}
          spellCheck={spellCheck}
          resize={resize}
          {...remainingProps}
        />
      </FormField>
    )
  })
)

export default TextareaField
