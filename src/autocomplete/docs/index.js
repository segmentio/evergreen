import React from 'react'
import Box from 'ui-box'
import starWarsNames from 'starwars-names'
import Autocomplete from '../src/Autocomplete'
import { TextInput } from '../../text-input'
import { Button } from '../../buttons'

// Import main component as 'raw' text to be parsed with an AST to get get propTypes information
/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import autocompleteSource from '!raw-loader!../src/Autocomplete'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import exampleDefaultBasic from './examples/default-basic.example'
import exampleDefaultWithProp from './examples/default-with-children-prop.example'
import exampleonFocusBasic from './examples/onFocus-basic.example'
import examplefilterDisabledBasic from './examples/filterDisabled-basic.example'
import examplewithTitleBasic from './examples/withTitle-basic.example'
import exampleWithButtonBasic from './examples/withButton-basic.example'
import exampleWithManyOptions from './examples/allOptions.example'

// Generate a big list of items
const items = starWarsNames.all.sort((a, b) => {
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
const subTitle = 'A component to filter through a list of options'

const implementationDetails = (
  <div>
    <p>
      The <code>Autocomplete</code> components renders a filterable list of
      options in a Popover — it does not render the text input — If you need a
      combination with a text input and trigger button, take a look at the
      Combobox component. This component is mainly used to create type aheads
    </p>

    <h3>The Autocomplete Component Combines a Set of External Libraries</h3>
    <ul>
      <li>
        Uses <code>Downshift</code> for autocomplete
      </li>
      <li>
        Uses <code>react-tiny-virtual-list</code> for performant list rendering
      </li>
      <li>
        Uses <code>fuzzaldrin-plus</code> for fuzzy filtering
      </li>
    </ul>
  </div>
)

const description = (
  <p>
    The <code>Autocomplete</code> component.
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
    name: 'Autocomplete',
    source: autocompleteSource,
    description,
    examples: [
      {
        title: 'Default Example',
        description: <p>The default behavior of the Autocomplete.</p>,
        codeText: exampleDefaultBasic,
        scope
      },
      {
        title: 'Default Example (Using children prop)',
        description: (
          <p>
            The default behavior of the Autocomplete using a children as a prop.
          </p>
        ),
        codeText: exampleDefaultWithProp,
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
        title: 'Fully Featured Example',
        description: (
          <p>
            Full Width (w/ Flex) example with options title, onFocus, filtering,
            and button to trigger the autocomplete
          </p>
        ),
        codeText: exampleWithManyOptions,
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
