import * as PropTypes from 'prop-types'
import * as React from 'react'
import Box, { BoxProps } from 'ui-box'

import { ITextProps } from '../../typography/src/Text'
import FormFieldDescription from './FormFieldDescription'
import FormFieldHint from './FormFieldHint'
import FormFieldLabel from './FormFieldLabel'
import FormFieldValidationMessage from './FormFieldValidationMessage'

export interface IFormFieldProps extends Partial<BoxProps> {
  // The label used above the input element.
  label: React.ReactNode

  // Passed on the label as a htmlFor prop.
  labelFor?: string

  labelProps?: ITextProps

  // Wether or not show a asterix after the label.
  isRequired?: boolean

  // A optional description of the field under the label, above the input element.
  description?: React.ReactNode

  // A optional hint under the input element.
  hint?: React.ReactNode

  // If a validation message is passed it is shown under the input element and above the hint. This is unaffected by `isInvalid`.
  validationMessage?: React.ReactNode
}

export default class FormField extends React.PureComponent<IFormFieldProps> {
  static propTypes = {
    label: PropTypes.node.isRequired,
    labelFor: PropTypes.string,
    isRequired: PropTypes.bool,
    description: PropTypes.node,
    hint: PropTypes.node,
    validationMessage: PropTypes.node,
    ...Box.propTypes
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
