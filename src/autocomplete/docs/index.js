import React from 'react'
import Box from 'ui-box'
import starWarsNames from 'starwars-names'
import Autocomplete from '../src/Autocomplete'
import { TextInput } from '../../text-input'
import { Button } from '../../buttons'
/**
 * Code examples
 */
import exampleDefaultBasic from './examples/default-basic.example'
import exampleonFocusBasic from './examples/onFocus-basic.example'
import examplefilterDisabledBasic from './examples/filterDisabled-basic.example'
import examplewithTitleBasic from './examples/withTitle-basic.example'
import exampleWithButtonBasic from './examples/withButton-basic.example'
import exampleWithManyOptions from './examples/allOptions.example'

// Generate a big list of items
const items = [
  ...starWarsNames.all,
  ...starWarsNames.all.map(x => `${x} 2`),
  ...starWarsNames.all.map(x => `${x} 3`)
].sort((a, b) => {
  const nameA = a.toUpperCase()
  const nameB = b.toUpperCase()
  if (nameA < nameB) {
    return -1
  }
  if (nameA > nameB) {
    return 1
  }
  return 0
})

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
  Button,
  Autocomplete,
  items,
  TextInput
}

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
            Autocomplete without an <code>onFilter</code> (And with an{' '}
            <code>onFocus</code> behavior)
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
      },
      {
        title: 'Basic results with an external trigger',
        description: (
          <p>
            Autocomplete with button that will trigger the opening of the
            selectable options
          </p>
        ),
        codeText: exampleWithButtonBasic,
        scope
      },
      {
        title:
          'Full Width (w/ Flex) with options title, onFocus, filtering, and button trigger',
        description: <p>An example of automplete with many options</p>,
        codeText: exampleWithManyOptions,
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
