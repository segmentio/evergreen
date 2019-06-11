import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box, { dimensions, spacing, position, layout } from 'ui-box'
import FormFieldLabel from './FormFieldLabel'
import FormFieldDescription from './FormFieldDescription'
import FormFieldValidationMessage from './FormFieldValidationMessage'
import FormFieldHint from './FormFieldHint'

export default class FormField extends PureComponent {
  static propTypes = {
    /**
     * The label used above the input element.
     */
    label: PropTypes.node.isRequired,

    /**
     * Passed on the label as a htmlFor prop.
     */
    labelFor: PropTypes.string,

    /**
     * Whether or not show an asterix after the label.
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
     * Composes the dimensions spec from the Box primitive.
     */
    ...dimensions.propTypes,

    /**
     * Composes the spacing spec from the Box primitive.
     */
    ...spacing.propTypes,

    /**
     * Composes the position spec from the Box primitive.
     */
    ...position.propTypes,

    /**
     * Composes the layout spec from the Box primitive.
     */
    ...layout.propTypes
  }

  static defaultProps = {
    labelProps: {
      size: 400
    }
  }

  render() {
    const {
      hint,
      label,
      labelFor,
      children,
      isRequired,
      labelProps,
      description,
      validationMessage,
      ...props
    } = this.props

    return (
      <Box {...props}>
        <FormFieldLabel
          htmlFor={labelFor}
          isAstrixShown={isRequired}
          marginBottom={description ? 0 : 4}
          {...labelProps}
        >
          {label}
        </FormFieldLabel>
        {typeof description === 'string' ? (
          <FormFieldDescription marginBottom={4}>
            {description}
          </FormFieldDescription>
        ) : (
          description
        )}
        {children}
        {typeof validationMessage === 'string' ? (
          <FormFieldValidationMessage marginTop={8}>
            {validationMessage}
          </FormFieldValidationMessage>
        ) : (
          validationMessage
        )}
        {typeof hint === 'string' ? (
          <FormFieldHint marginTop={6}>{hint}</FormFieldHint>
        ) : (
          hint
        )}
      </Box>
    )
  }
}
