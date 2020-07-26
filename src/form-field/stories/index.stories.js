import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import {
  FormField,
  FormFieldDescription,
  FormFieldLabel,
  FormFieldValidationMessage
} from '..'

storiesOf('form-field', module)
  .add('FormField', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <FormField label="FormField Label">FormField Children</FormField>
    </Box>
  ))
  .add('FormFieldDescription', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <FormFieldDescription>FormFieldDescription</FormFieldDescription>
    </Box>
  ))
  .add('FormFieldLabel', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <FormFieldLabel>FormFieldLabel</FormFieldLabel>
    </Box>
  ))
  .add('FormFieldValidationMessage', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <FormFieldValidationMessage>
        FormFieldValidationMessage
      </FormFieldValidationMessage>
    </Box>
  ))
