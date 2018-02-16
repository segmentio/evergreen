import React from 'react'
import Box from 'ui-box'
import Alert from '../src/Alert'
import InlineAlert from '../src/InlineAlert'
import { Button } from '../../buttons'
import { Paragraph } from '../../typography'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceAlert from '!raw-loader!../src/Alert'
import sourceInlineAlert from '!raw-loader!../src/InlineAlert'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import exampleAlertDefault from './examples/alert-default.example'
import exampleAlertCard from './examples/alert-card.example'
import exampleInlineAlert from './examples/inline-alert.example'

const title = 'Alert'
const subTitle = 'A component to give feedback about an action or state.'

const designGuidelines = (
  <div>
    <p>
      The <code>Alert</code> component is used to give feedback to the user
      about an action or state. There a couple of different types of alerts.
    </p>
    <h4>Types of Alerts</h4>
    <ul>
      <li>default</li>
      <li>success</li>
      <li>info</li>
      <li>danger</li>
      <li>warning</li>
    </ul>
  </div>
)

const appearanceOptions = null

const scope = {
  Box,
  Alert,
  InlineAlert,
  Paragraph,
  Button
}

const components = [
  {
    name: 'Alert',
    source: sourceAlert,
    description: (
      <p>
        The <code>Alert</code> component can have a title and children. There
        are props to configure the icon and the border on the left.
      </p>
    ),
    examples: [
      {
        title: 'Default Alert',
        description: (
          <p>
            The default behavior of the alert present itself in a box with a
            border. It is useful inside of a card or pane.
          </p>
        ),
        codeText: exampleAlertDefault,
        scope
      },
      {
        title: 'Alert Card Appearance',
        description: (
          <p>
            The card appearance is useful if the alert is presented outside of a
            card or pane. This appearance is quite heavy and should be avoided.
          </p>
        ),
        codeText: exampleAlertCard,
        scope
      }
    ]
  },
  {
    name: 'InlineAlert',
    source: sourceInlineAlert,
    description: (
      <p>
        The <code>InlineAlert</code> is useful when not showing a title and
        space is limited. In most cases you should use this component instead of
        the more bulky <code>Alert</code>.
      </p>
    ),
    examples: [
      {
        title: 'Inline Alert',
        description: (
          <p>
            Always pass a <code>type</code> property.
          </p>
        ),
        codeText: exampleInlineAlert,
        scope
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
