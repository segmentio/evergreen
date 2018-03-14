import React from 'react'
import Box from 'ui-box'
import TextInput from '../src/TextInput'
import TextInputField from '../src/TextInputField'
import { Label } from '../../typography'
import Manager from './Manager'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceTextInput from '!raw-loader!../src/TextInput'
import sourceTextInputField from '!raw-loader!../src/TextInputField'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import exampleTextInputBasic from './examples/TextInput-basic.example'
import exampleTextInputFieldBasic from './examples/TextInputField-basic.example'

const title = 'Text Input'
const subTitle = 'A text input component.'

const implementationDetails = (
  <div>
    <p>
      The <code>TextInput</code> component implementes a native input element
      with <code>type={`"text"`}</code>. Any attribute that is valid on a{' '}
      <code>input</code> can be passed to the <code>TextInput</code> component.
    </p>
    <p>
      The <code>TextInputField</code> component is used to build complete form
      fields with a label and description instead of just a standalone
      <code>TextInput</code>. Use this component when building out forms.
    </p>
    <p>
      The <code>TextInputField</code> component composes both the{' '}
      <code>TextInput</code> and <code>FormField</code> component. That means
      that you can pass anything you can pass to a <code>TextInput</code> —
      which is any attributes you can pass to a native input.
    </p>
  </div>
)

const appearanceOptions = null

const scope = {
  Box,
  TextInput,
  TextInputField,
  Manager,
  Label
}

const components = [
  {
    name: 'TextInput',
    source: sourceTextInput,
    description: (
      <p>
        The <code>TextInput</code> component implementes a native input element
        with <code>type={`"text"`}</code>. Any attribute that is valid on a{' '}
        <code>input</code> can be passed to the <code>TextInput</code>{' '}
        component.
      </p>
    ),
    examples: [
      {
        title: 'Basic TextInput Example',
        codeText: exampleTextInputBasic,
        scope
      }
    ]
  },
  {
    name: 'TextInputField',
    source: sourceTextInputField,
    description: (
      <div>
        <p>
          The <code>TextInputField</code> component is used to build complete
          form fields with a label and description instead of just a standalone
          <code>TextInput</code>. Use this component when building out forms.
        </p>
        <p>
          The <code>TextInputField</code> component composes both the{' '}
          <code>TextInput</code> and <code>FormField</code> component. That
          means that you can pass anything you can pass to a{' '}
          <code>TextInput</code> — which is any attributes you can pass to a
          native input.
        </p>
      </div>
    ),
    examples: [
      {
        title: 'Basic TextInputField Example',
        codeText: exampleTextInputFieldBasic,
        scope
      }
    ]
  }
]

export default {
  title,
  subTitle,
  implementationDetails,
  appearanceOptions,
  components
}
