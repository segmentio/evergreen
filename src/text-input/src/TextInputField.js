import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box, { splitBoxProps } from 'ui-box'
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
    inputWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Optional icon in input
     */
    icon: PropTypes.shapce({
      iconPosition: PropTypes.object,
      content: PropTypes.element
    })
  }

  static defaultProps = {
    /**
     * The input width should be as wide as the form field.
     */
    inputWidth: '100%',
    inputHeight: 32
  }

  state = {
    id: (this.props.id || idCounter++).toString()
  }

  checkPadding = icon => {
    const padding = {}

    if (icon) {
      for (const key in icon.iconPosition) {
        if ({}.hasOwnProperty.call(icon.iconPosition, key)) {
          const firstLetter = key[0]
          const newKey = `padding${firstLetter.toUpperCase()}${key.substring(
            1,
            key.length
          )}`
          padding[newKey] = icon.iconPosition[key] + 20
        }
      }
    }

    return padding
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
      icon,

      // Rest props are spread on the FormField
      ...props
    } = this.props

    const id = `TextInputField-${this.state.id}`

    /**
     * Split the wrapper props from the input props.
     */
    const { matchedProps, remainingProps } = splitBoxProps(props)
    const padding = this.checkPadding(icon)

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
        <Box position="relative">
          {icon && (
            <Box
              position="absolute"
              display="flex"
              justifyContent="center"
              alignItems="center"
              height={inputHeight}
              {...icon.iconPosition}
            >
              {icon.content}
            </Box>
          )}
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
            {...padding}
            {...remainingProps}
          />
        </Box>
      </FormField>
    )
  }
}
