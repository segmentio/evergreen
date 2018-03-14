import React from 'react'
import Box from 'ui-box'
import items from 'starwars-names'
import Autocomplete from '../src/Autocomplete'
import TextInput from '../../text-input'

/**
 * Code examples
 */
import exampleDefaultBasic from './examples/default-basic.example'
import exampleonFocusBasic from './examples/onFocus-basic.example'
import examplefilterDisabledBasic from './examples/filterDisabled-basic.example'
import examplewithTitleBasic from './examples/withTitle-basic.example'

const title = 'Autocomplete'
const subTitle = 'A component to filter trhough a dataset'

const introduction = (
  <div>
    <p>
      The <code>Autocomplete</code> components implements a{' '}
      <code>VirtualList</code> inside a React Portal, list and to be enable
      filtering and handling big sets of data.
    </p>
  </div>
)

const designGuidelines = (
  <div>
    <p>
      The <code>autocomplete</code> component.
    </p>
  </div>
)

const description = (
  <p>
    The <code>AutoComplete</code> component.
  </p>
)
const appearanceOptions = null

const scope = {
  Box,
  Autocomplete,
  items,
  TextInput
}

/* eslint-disable capitalized-comments */
// introduction
// designGuidelines
// implementationDetails
// appearanceOptions
// examples
// components

const components = [
  {
    name: 'AutoComplete',
    source: Autocomplete,
    description,
    examples: [
      {
        title: 'Default Example',
        description: <p>The default behavior of the Autocomplete.</p>,
        codeText: exampleDefaultBasic,
        scope
      },
      {
        title: 'Basic onFocus Example',
        description: (
          <p>
            Autocomplete with an <code>onFocus</code> behaviour
          </p>
        ),
        codeText: exampleonFocusBasic,
        scope
      },
      {
        title: 'Basic onFilter Disabled',
        description: (
          <p>
            Autocomplete without an <code>onFilter</code>
          </p>
        ),
        codeText: examplefilterDisabledBasic,
        scope
      },
      {
        title: 'Basic results with title',
        description: <p>Autocomplete with a fixed title on the results</p>,
        codeText: examplewithTitleBasic,
        scope
      }
    ]
  }
]

export default {
  introduction,
  title,
  subTitle,
  designGuidelines,
  appearanceOptions,
  components
}
