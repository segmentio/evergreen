import * as PropTypes from 'prop-types'
import * as React from 'react'
import { splitBoxProps } from 'ui-box'

import { FormField } from '../../form-field'
import TextInput, { ITextInputProps } from './TextInput'
import { IFormFieldProps } from '../../form-field/src/FormField'

type TExtendedProps = ITextInputProps & IFormFieldProps

interface IProps extends Partial<TExtendedProps> {
  // The label used above the input element.
  label: any

  // Passed on the label as a htmlFor prop.
  labelFor?: string

  // Wether or not show a asterix after the label.
  isRequired?: boolean

  // A optional description of the field under the label, above the input element.
  description?: any

  // A optional hint under the input element.
  hint?: any

  /**
   * If a validation message is passed it is shown under the input element
   * and above the hint. This is unaffected by `isInvalid`.
   */
  validationMessage?: any

  // The height of the input element.
  inputHeight?: number

  // The width of the input width.
  inputWidth?: number | string
}

let idCounter = 0

export default class TextInputField extends React.PureComponent<IProps> {
  static propTypes = {
    ...TextInput.propTypes,
    ...FormField.propTypes,
    label: PropTypes.node.isRequired,
    labelFor: PropTypes.string,
    isRequired: PropTypes.bool,
    description: PropTypes.node,
    hint: PropTypes.node,
    validationMessage: PropTypes.node,
    inputHeight: PropTypes.number,
    inputWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }

  static defaultProps = {
    // The input width should be as wide as the form field.
    inputWidth: '100%',
    inputHeight: 32
  }

  state = {
    id: (this.props.id || idCounter++).toString()
  }

  render() {
    const {
      // We are using the id from the state
      id: unusedId,

      // FormField props
      hint,
      label,
      description,
      validationMessage,

      // TextInput props
      inputHeight,
      inputWidth,
      disabled,
      required,
      isInvalid,
      appearance,
      placeholder,
      spellCheck,

      // Rest props are spread on the FormField
      ...props
    } = this.props

    const id = `TextInputField-${this.state.id}`

    // Split the wrapper props from the input props.
    const { matchedProps, remainingProps } = splitBoxProps(props)

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
          spellCheck={spellCheck}
          {...remainingProps}
        />
      </FormField>
    )
  }
}
