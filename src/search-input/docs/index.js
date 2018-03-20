import React from 'react'
import Box from 'ui-box'
import SearchInput from '../src/SearchInput'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceSearchInput from '!raw-loader!../src/SearchInput'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import exampleSearchInputBasic from './examples/SearchInput-basic.example'

const title = 'Search Input'
const subTitle = 'A text input with a search icon.'

const introduction = (
  <div>
    <p>
      The <code>SearchInput</code> component is a component that combines a{' '}
      <code>TextInput</code> with a search icon. It works exactly the same as a{' '}
      <code>TextInput</code>.
    </p>
  </div>
)

const scope = {
  Box,
  SearchInput
}

const components = [
  {
    name: 'SearchInput',
    source: sourceSearchInput,
    description: (
      <p>
        The <code>SearchInput</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic SearchInput Example',
        codeText: exampleSearchInputBasic,
        scope
      }
    ]
  }
]

export default {
  title,
  subTitle,
  introduction,
  components
}
