import React from 'react'
import Box from 'ui-box'
import AutoComplete from '../src/Autocomplete'

/**
 * Code examples
 */
import exampleDefaultBasic from './examples/default-basic.example'
import exampleonFocusBasic from './examples/onFocus-basic.example'
import examplefilterDisabledBasic from './examples/filterDisabled-basic.example'
import examplewithTitleBasic from './examples/withTitle-basic.example'

const title = 'autocomplete'
const subTitle = 'A component.'

const introduction = (
  <div>
    <p>
      The <code>Pane</code> and <code>Card</code> components are one of the most
      important components in Evergreen. They are essentially a replacement of
      the <code>div</code> element. They are used as primitives to construct
      layouts and compose components.
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

const appearanceOptions = null

const scope = {
  Box,
  AutoComplete
}

const components = [
  {
    name: 'AutoComplete',
    source: AutoComplete,
    description: (
      <p>
        The <code>AutoComplete</code> component.
      </p>
    ),
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
