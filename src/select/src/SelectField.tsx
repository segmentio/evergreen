import React, { forwardRef, memo } from 'react'
import { PolymorphicBoxProps, splitBoxProps } from 'ui-box'
import { FormField } from '../../form-field'
import { FormFieldOwnProps } from '../../form-field/src/FormField'
import { useId } from '../../hooks'
import Select, { SelectOwnProps } from './Select'

export type SelectFieldProps = PolymorphicBoxProps<'select', SelectFieldOwnProps>
export type SelectFieldOwnProps = FormFieldOwnProps & SelectOwnProps

const SelectField: React.FC<SelectFieldProps> = memo(
  forwardRef(function SelectField(props, ref) {
    const id = useId('SelectField', props.id)

    const {
      // We are using the id from the state
      appearance,

      // FormField props
      description,
      disabled,
      hint,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      id: unusedId,

      // TextInput props
      inputHeight = 32,
      /** The input width should be as wide as the form field. */
      inputWidth = '100%',
      isInvalid,
      label,
      required,
      validationMessage,

      // Rest props are spread on the FormField
      ...rest
    } = props

    /**
     * Split the wrapper props from the input props.
     */
    const { matchedProps, remainingProps } = splitBoxProps(rest)

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
        <Select
          id={id}
          width={inputWidth}
          height={inputHeight}
          disabled={disabled}
          required={required}
          isInvalid={isInvalid}
          appearance={appearance}
          ref={ref}
          {...remainingProps}
        />
      </FormField>
    )
  })
)

export default SelectField
