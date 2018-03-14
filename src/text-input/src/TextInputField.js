import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { splitBoxProps } from 'ui-box'
import { FormField } from '../../form-field'
import TextInput from './TextInput'

let idCounter = 0

export default class TextInputField extends PureComponent {
  static propTypes = {
    /**
     * Composes the TextInput component as the base.
     */
    ...TextInput.propTypes,
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
     * Wether or not show a asterix after the label.
     */
    isRequired: PropTypes.bool,

    /**
     * A optional description of the field under the input element.
     */
    description: PropTypes.node,

    /**
     * If a validation message is passed it is shown under the input element
     * and above the description.
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

  static defaultProps = {
    /**
     * The input width should be as wide as the form field.
     */
    inputWidth: '100%',

    /**
     * Increase the height somewhat from 32 because we are dealing mainly
     * with traditional long style forms.
     */
    inputHeight: 36
  }

  constructor(props) {
    super(props)
    this.state = {
      id: (props.id || idCounter++).toString()
    }
  }

  render() {
    const {
      // We are using the id from the state
      id: unusedId,

      // FormField props
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

    const { id } = this.state

    /**
     * Split the wrapper props from the input props.
     */
    const { matchedProps, remainingProps } = splitBoxProps(props)

    return (
      <FormField
        marginBottom={24}
        label={label}
        isRequired={required}
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
