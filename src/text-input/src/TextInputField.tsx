import React, { forwardRef, memo } from 'react'
import { PolymorphicBoxProps, splitBoxProps } from 'ui-box'
import { FormField } from '../../form-field'
import { FormFieldOwnProps } from '../../form-field/src/FormField'
import { useId } from '../../hooks'
import { majorScale } from '../../scales'
import TextInput from './TextInput'

export interface TextInputFieldOwnProps extends FormFieldOwnProps {
  /**
   * The label used above the input element.
   */
  label?: React.ReactNode
  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor?: string
  /**
   * Whether or not show a asterix after the label.
   */
  required?: boolean
  /**
   * Whether or not the field is invalid
   */
  isInvalid?: boolean
  /**
   * A optional description of the field under the label, above the input element.
   */
  description?: React.ReactNode
  /**
   * A optional hint under the input element.
   */
  hint?: React.ReactNode
  /**
   * If a validation message is passed it is shown under the input element
   * and above the hint.
   */
  validationMessage?: React.ReactNode
  /**
   * The height of the input element.
   */
  inputHeight?: number
  /**
   * The width of the input width.
   */
  inputWidth?: number | string
}

export type TextInputFieldProps = PolymorphicBoxProps<'input', TextInputFieldOwnProps>

const TextInputField: React.FC<TextInputFieldProps> = memo(
  forwardRef(function TextInputField(props, ref) {
    const id = useId('TextInputField', props.id)

    const {
      // We are using the id from the state
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'appearance' does not exist on type 'Prop... Remove this comment to see the full error message
      appearance,

      // FormField props
      description,
      disabled,
      hint,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      id: unusedId,

      // TextInput props
      inputHeight = majorScale(4),
      inputWidth = '100%',
      isInvalid,
      label,
      placeholder,
      required,
      spellCheck,
      validationMessage,

      // Rest props are spread on the FormField
      ...restProps
    } = props

    /**
     * Split the wrapper props from the input props.
     */
    const { matchedProps, remainingProps } = splitBoxProps(restProps)

    return (
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
        <TextInput
          id={id}
          width={inputWidth}
          height={inputHeight}
          disabled={disabled}
          required={required}
          isInvalid={isInvalid}
          appearance={appearance}
          placeholder={placeholder}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'Booleanish | undefined' is not assignable to... Remove this comment to see the full error message
          spellCheck={spellCheck}
          ref={ref}
          {...remainingProps}
        />
      </FormField>
    )
  })
)

export default TextInputField
