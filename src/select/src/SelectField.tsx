import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { splitBoxProps } from 'ui-box'
import { FormField } from '../../form-field'
import { useId } from '../../hooks'
import Select from './Select'

const SelectField = memo(function SelectField(props) {
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'id' does not exist on type 'PropsWithChi... Remove this comment to see the full error message
  const id = useId('SelectField', props.id)

  const {
    // We are using the id from the state
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'appearance' does not exist on type '{ ch... Remove this comment to see the full error message
    appearance,

    // FormField props
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'description' does not exist on type '{ c... Remove this comment to see the full error message
    description,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'disabled' does not exist on type '{ chil... Remove this comment to see the full error message
    disabled,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'hint' does not exist on type '{ children... Remove this comment to see the full error message
    hint,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'id' does not exist on type '{ children?:... Remove this comment to see the full error message
    id: unusedId,

    // TextInput props
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'inputHeight' does not exist on type '{ c... Remove this comment to see the full error message
    inputHeight = 32,
    /** The input width should be as wide as the form field. */
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'inputWidth' does not exist on type '{ ch... Remove this comment to see the full error message
    inputWidth = '100%',
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'isInvalid' does not exist on type '{ chi... Remove this comment to see the full error message
    isInvalid,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'label' does not exist on type '{ childre... Remove this comment to see the full error message
    label,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'required' does not exist on type '{ chil... Remove this comment to see the full error message
    required,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'validationMessage' does not exist on typ... Remove this comment to see the full error message
    validationMessage,

    // Rest props are spread on the FormField
    ...rest
  } = props

  /**
   * Split the wrapper props from the input props.
   */
  // @ts-expect-error ts-migrate(2559) FIXME: Type '{ children?: ReactNode; }' has no properties... Remove this comment to see the full error message
  const { matchedProps, remainingProps } = splitBoxProps(rest)

  return (
    // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
    <FormField
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
      marginBottom={24}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
      label={label}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
      isRequired={required}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
      hint={hint}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
      description={description}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
      validationMessage={validationMessage}
      // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
      labelFor={id}
      {...matchedProps}
    >
      <Select
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
        id={id}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
        width={inputWidth}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
        height={inputHeight}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
        disabled={disabled}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
        required={required}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
        isInvalid={isInvalid}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
        appearance={appearance}
        {...remainingProps}
      />
    </FormField>
  )
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
SelectField.propTypes = {
  /**
   * Composes the Select component as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
  ...Select.propTypes,
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

export default SelectField
