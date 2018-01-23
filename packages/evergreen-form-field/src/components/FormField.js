import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box, { dimensions, spacing, position, layout } from 'ui-box'
import FormFieldLabel from './FormFieldLabel'
import FormFieldDescription from './FormFieldDescription'
import FormFieldValidationMessage from './FormFieldValidationMessage'

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
     * Composes the dimensions spec from the Box primitivie.
     */
    ...dimensions.propTypes,

    /**
     * Composes the spacing spec from the Box primitivie.
     */
    ...spacing.propTypes,

    /**
     * Composes the position spec from the Box primitivie.
     */
    ...position.propTypes,

    /**
     * Composes the layout spec from the Box primitivie.
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
          marginBottom={4}
          {...labelProps}
        >
          {label}
        </FormFieldLabel>
        {children}
        {validationMessage && (
          <FormFieldValidationMessage>
            {validationMessage}
          </FormFieldValidationMessage>
        )}
        {description && (
          <FormFieldDescription marginTop={6}>
            {description}
          </FormFieldDescription>
        )}
      </Box>
    )
  }
}
