import React from 'react'
import Box from 'ui-box'
import Component from '@reactions/component'
import SelectMenu from '../src/SelectMenu'
import { Button } from '../../buttons/'
import SyntaxHighlighter from '../../../docs/src/components/SyntaxHighlighter'
import options from './starwars-options'
import Manager from './Manager'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceSelectMenu from '!raw-loader!../src/SelectMenu'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import exampleSelectMenuBasic from './examples/SelectMenu-basic.example'
import exampleSelectMenuMulti from './examples/SelectMenu-multi.example'

const title = 'Select Menu'
const subTitle = 'Select one or multiple items from a dropdown list.'

const introduction = (
  <div>
    <p>
      The <code>SelectMenu</code> component is an advanced interaction pattern
      which allows selection of multiple items from a dropdown list. It can be
      used as a substitute for the native multiple select element.
    </p>
  </div>
)

const implementationDetails = (
  <div>
    <p>
      The <code>SelectMenu</code> builds on top of the <code>Popover</code>{' '}
      component and uses{' '}
      <a
        href="https://github.com/clauderic/react-tiny-virtual-list"
        rel="noopener noreferrer"
        target="_blank"
      >
        react-tiny-virtual-list
      </a>{' '}
      for the rendering of the virtualized list of options.
    </p>
    <h3>Multiselect</h3>
    <p>
      The <code>SelectMenu</code> is unopinonated in how many items are selected
      in the list. Pass an array to the <code>selected</code> prop to select
      more items.
    </p>
    <h3>Options Structure</h3>
    <SyntaxHighlighter>
      {`const options = [
  {
    label: 'String',
    labelInList: 'Optional label to appear in list',
    value: 'String or Number'
  }
]`}
    </SyntaxHighlighter>
  </div>
)

const appearanceOptions = null

const scope = {
  Box,
  SelectMenu,
  Component,
  Button,
  Manager,
  options
}

const components = [
  {
    name: 'SelectMenu',
    source: sourceSelectMenu,
    description: (
      <p>
        The <code>SelectMenu</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic SelectMenu Example',
        description: (
          <div>
            <p>This example shows basic usage with a single selected item.</p>
          </div>
        ),
        codeText: exampleSelectMenuBasic,
        scope
      },
      {
        title: 'SelectMenu Multiselect with Deselect Example',
        description: (
          <div>
            <p>This example shows usage with multiple selected items.</p>
            <p>
              This pattern is only an example. Selected values and the
              formatting of their names should be managed wherever you choose to
              manage state. The onDeselect method is provided to assist with
              this.
            </p>
            <p>
              As users click on selected values to remove them, you can update
              state.
            </p>
          </div>
        ),
        codeText: exampleSelectMenuMulti,
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
  appearanceOptions,
  components
}
