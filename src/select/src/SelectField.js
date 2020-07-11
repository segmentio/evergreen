import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { splitBoxProps } from 'ui-box'
import { FormField } from '../../form-field'
import Select from './Select'

let idCounter = 0

const TextInputField = memo(props => {
  const [id] = useState(props.id || idCounter++)

  const {
    // We are using the id from the state
    id: unusedId,

    // FormField props
    hint,
    label,
    description,
    validationMessage,

    // TextInput props
    inputHeight = 32,
    /** The input width should be as wide as the form field. */
    inputWidth = '100%',
    disabled,
    required,
    isInvalid,
    appearance,

    // Rest props are spread on the FormField
    ...rest
  } = props

  const inputId = `SelectField-${id}`

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
      labelFor={inputId}
      {...matchedProps}
    >
      <Select
        id={inputId}
        width={inputWidth}
        height={inputHeight}
        disabled={disabled}
        required={required}
        isInvalid={isInvalid}
        appearance={appearance}
        {...remainingProps}
      />
    </FormField>
  )
})

TextInputField.propTypes = {
  /**
   * Composes the Select component as the base.
   */
  ...Select.propTypes,
  ...FormField.propTypes,

  /**
   * The label used above the input element.
   */
  label: PropTypes.node.isRequired,

  /**
   * Passed on the label as a htmlFor prop.
   */
  labelFor: PropTypes.string,

  /**
   * Whether or not to show an asterix after the label.
   */
  isRequired: PropTypes.bool,

  /**
   * An optional description of the field under the label, above the input element.
   */
  description: PropTypes.node,

  /**
   * An optional hint under the input element.
   */
  hint: PropTypes.node,

  /**
   * If a validation message is passed it is shown under the input element
   * and above the hint. This is unaffected by `isInvalid`.
   */
  validationMessage: PropTypes.node,

  /**
   * The height of the input element.
   */
  inputHeight: PropTypes.number,

  /**
   * The width of the input width.
   */
  inputWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default TextInputField
