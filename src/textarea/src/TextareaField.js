import React, { memo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { splitBoxProps } from 'ui-box'
import { FormField } from '../../form-field'
import { useId } from '../../hooks'
import { generateAriaDescribedBy } from '../../lib/generate-aria-describedby'
import Textarea from './Textarea'

const TextareaField = memo(
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
          aria-describedby={generateAriaDescribedBy(id, { description, hint, validationMessage })}
          {...remainingProps}
        />
      </FormField>
    )
  })
)

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
