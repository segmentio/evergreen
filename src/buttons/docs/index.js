import React from 'react'
import Box from 'ui-box'
import Component from '@reactions/component'
import { SegmentedControl } from '../../segmented-control'
import { Pane } from '../../layers'
import { Heading } from '../../typography'
import {
  BackButton,
  IconButton,
  Button,
  TextDropdownButton
} from '../../buttons'
import LoadingManager from './LoadingManager'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceBackButton from '!raw-loader!../src/BackButton'
import sourceIconButton from '!raw-loader!../src/IconButton'
import sourceButton from '!raw-loader!../src/Button'
import sourceTextDropdownButton from '!raw-loader!../src/TextDropdownButton'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import basicExample from './examples/basic.example'
import loadingExample from './examples/loading.example'
import basicWithIconsExample from './examples/basic-with-icons.example'
import backButtonExample from './examples/back-button.example'
import iconButtonBasicExample from './examples/icon-button-basic.example'
import textDropdownButtonExample from './examples/TextDropdownButton.example'

const title = 'Buttons'
const subTitle = 'A set of buttons with multiple appearances.'

const designGuidelines = (
  <div>
    <p>
      By default buttons and controls have a height of <code>32px</code>. It is
      possible to change this to any height and the text style and spacing will
      adjust. You should however keep the height on the <code>8px</code> or in
      some cases the <code>4px</code> grid. You should only need the following
      recommended heights.
    </p>
    <h3>Recommended heights</h3>
    <ul>
      <li>
        <code>24px</code>
      </li>
      <li>
        <code>32px</code> &mdash; default height
      </li>
      <li>
        <code>36px</code>
      </li>
      <li>
        <code>40px</code>
      </li>
    </ul>
  </div>
)

const appearanceOptions = null

const components = [
  {
    name: 'Button',
    source: sourceButton,
    description: (
      <p>
        The base <code>Button</code> component can have multiple appearances and
        intents. Buttons can also hold a icon before or after the text. Avoid
        using an icon after the text except for a triangle down.
      </p>
    ),
    examples: [
      {
        title: 'All Button Appearances',
        codeText: basicExample,
        scope: { Button, Component, SegmentedControl, Heading, Box }
      },
      {
        title: 'Buttons With an Icon',
        description: (
          <div>
            <p>
              Buttons support an icon on either before or after the label. Avoid
              using two icons in a button.
            </p>
          </div>
        ),
        codeText: basicWithIconsExample,
        scope: { Button }
      },
      {
        title: 'Loading Button',
        codeText: loadingExample,
        scope: { Button, LoadingManager }
      }
    ]
  },

  {
    name: 'BackButton',
    source: sourceBackButton,
    description: (
      <p>
        The <code>BackButton</code> is a specialized component used for the back
        button inside of the top bar navigation, or inside of a setup flow.
      </p>
    ),
    examples: [
      {
        title: 'Back button example',
        description: (
          <p>
            Back is the default text. You want to overwrite this if you can.
          </p>
        ),
        codeText: backButtonExample,
        scope: { BackButton }
      }
    ]
  },
  {
    name: 'IconButton',
    source: sourceIconButton,
    description: (
      <p>
        The <code>IconButton</code> component has access to all icons available
        in <code>evergreen-ui</code>.
      </p>
    ),
    examples: [
      {
        title: 'Common Examples',
        description: (
          <p>
            Below are some common examples for using an <code>IconButton</code>.
          </p>
        ),
        codeText: iconButtonBasicExample,
        scope: { IconButton, Box, Pane, Heading }
      }
    ]
  },
  {
    name: 'TextDropdownButton',
    source: sourceTextDropdownButton,
    description: (
      <p>
        The TextDropdownButton is different from the other types of buttons. It
        doesn’t work with a height, instead the dimensions are based on the text
        size. This component is used inside of table header cells.
      </p>
    ),
    examples: [
      {
        title: 'TextDropdownButton example',
        codeText: textDropdownButtonExample,
        scope: { TextDropdownButton }
      }
    ]
  }
]

export default {
  title,
  subTitle,
  designGuidelines,
  appearanceOptions,
  components
}
