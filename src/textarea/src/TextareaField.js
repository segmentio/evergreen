import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { splitBoxProps } from 'ui-box'
import { FormField } from '../../form-field'
import Textarea from './Textarea'

let idCounter = 0

const TextareaField = memo(props => {
  const [id] = useState(props.id || idCounter++)

  const {
    // We are using the id from the state
    id: unusedId,

    // FormField props
    hint,
    label,
    description,
    validationMessage,

    // Textarea props
    inputHeight = 80,
    /** The input width should be as wide as the form field. */
    inputWidth = '100%',
    disabled,
    required,
    isInvalid,
    appearance,
    placeholder,
    spellCheck,

    // Rest props are spread on the FormField
    ...rest
  } = props

  const inputId = `TextareaField-${id}`

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
      <Textarea
        id={inputId}
        width={inputWidth}
        height={inputHeight}
        disabled={disabled}
        required={required}
        isInvalid={isInvalid}
        appearance={appearance}
        placeholder={placeholder}
        spellCheck={spellCheck}
        {...remainingProps}
      />
    </FormField>
  )
})

TextareaField.propTypes = {
  /**
   * Composes the Textarea component as the base.
   */
  ...Textarea.propTypes,
  ...FormField.propTypes,

  /**
   * The label used above the input element.
   */
  label: PropTypes.node.isRequired,

  /**
   * Whether or not to show an asterix after the label.
   */
  required: PropTypes.bool,

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

export default TextareaField
