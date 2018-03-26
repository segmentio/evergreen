import React from 'react'
import Box from 'ui-box'
import starWarsNames from 'starwars-names'
import Combobox from '../src/Combobox'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceCombobox from '!raw-loader!../src/Combobox'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import exampleComboboxBasic from './examples/Combobox-basic.example'
import exampleComboboxOpenOnFocus from './examples/Combobox-open-on-focus.example'
import exampleComboboxCustomItems from './examples/Combobox-custom-items.example'

const title = 'Combobox'
const subTitle = 'A combination of a Text Input, Button and Autocomplete.'

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

const introduction = (
  <div>
    <p>
      The Combobox component is used for selecting an option from a predefined
      list of options. It is similar to a Select or Select Menu component.
      Clicking the button will show all items. Typing in the text input will
      filter the list.
    </p>
  </div>
)

const implementationDetails = (
  <div>
    <p>
      The Combobox component composes a Text Input, Icon Button and Autocomplete
      component.
    </p>
  </div>
)

const scope = {
  Box,
  Combobox,
  items
}

const components = [
  {
    name: 'Combobox',
    source: sourceCombobox,
    description: (
      <p>
        The <code>Combobox</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic Combobox Example',
        codeText: exampleComboboxBasic,
        scope
      },
      {
        title: 'Open On Focus',
        codeText: exampleComboboxOpenOnFocus,
        scope
      },
      {
        title: 'Custom Items',
        codeText: exampleComboboxCustomItems,
        scope
      }
    ]
  }
]

export default {
  title,
  subTitle,
  introduction,
  implementationDetails,
  components
}
