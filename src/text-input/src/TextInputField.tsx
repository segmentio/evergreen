import React, { forwardRef, memo } from 'react'
import PropTypes from 'prop-types'
import { splitBoxProps } from 'ui-box'
import { FormField } from '../../form-field'
import { useId } from '../../hooks'
import { majorScale } from '../../scales'
import TextInput from './TextInput'

const TextInputField = memo(
  forwardRef(function TextInputField(props, ref) {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'id' does not exist on type 'never'.
    const id = useId('TextInputField', props.id)

    const {
      // We are using the id from the state
      appearance,

      // FormField props
      description,
      disabled,
      hint,
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
      // @ts-expect-error ts-migrate(2700) FIXME: Rest types may only be created from object types.
      ...restProps
    } = props

    /**
     * Split the wrapper props from the input props.
     */
    const { matchedProps, remainingProps } = splitBoxProps(restProps)

    return (
      // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
      <FormField
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
        marginBottom={24}
        label={label}
        isRequired={required}
        hint={hint}
        description={description}
        validationMessage={validationMessage}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
        labelFor={id}
        {...matchedProps}
      >
        <TextInput
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
          id={id}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          width={inputWidth}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          height={inputHeight}
          disabled={disabled}
          required={required}
          isInvalid={isInvalid}
          appearance={appearance}
          placeholder={placeholder}
          spellCheck={spellCheck}
          ref={ref}
          {...remainingProps}
        />
      </FormField>
    )
  })
)

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
TextInputField.propTypes = {
  /**
   * Composes the TextInput component as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
  ...TextInput.propTypes,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
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

export default TextInputField
