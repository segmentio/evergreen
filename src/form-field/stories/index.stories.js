import React from 'react'
import { storiesOf } from '@storybook/react'
import Box from 'ui-box'
import { FormField, FormFieldDescription, FormFieldLabel, FormFieldValidationMessage } from '..'

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
      <FormFieldValidationMessage>FormFieldValidationMessage</FormFieldValidationMessage>
      <Box width={240}>
        <FormFieldValidationMessage>
          greatly nearby muscle evening picture took afraid fallen reason flight shout crew research act beneath flow
          away cloth will pair world trip reach explain
        </FormFieldValidationMessage>
      </Box>
    </Box>
  ))
