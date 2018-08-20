import React from 'react'
import Box from 'ui-box'
import toaster from '../src/'
import { Button } from '../../buttons'

/**
 * Code examples
 */
import exampleTitleOnly from './examples/title-only.example'
import exampleTitleAndDescription from './examples/title-and-description.example'
import exampleCustomDuration from './examples/custom-duration.example'

const title = 'Toaster'
const subTitle = 'A set of functions to show toasts.'

const designGuidelines = (
  <div>
    <p>
      The <code>toaster</code> is used to show toasts (alerts) on top of an
      overlay. The toasts will close themselves when the close button is
      clicked, or after a timeout &mdash; the default is 5 seconds.
    </p>
    <h3>When To Use</h3>
    <p>
      When you want to give feedback to your users about a action they take.
      Often this is in the form of creation or deletion.
    </p>
  </div>
)
const implementationDetails = (
  <div>
    <p>
      A toast is simply a wrapper around the <code>Alert</code> component and
      has the same kind of types as an alert. The following types are available:
    </p>
    <h3>Types of Toasts</h3>
    <ul>
      <li>
        <code>toaster.notify()</code> &mdash; uses the default type
      </li>
      <li>
        <code>toaster.success()</code>
      </li>
      <li>
        <code>toaster.info()</code>
      </li>
      <li>
        <code>toaster.warning()</code>
      </li>
      <li>
        <code>toaster.danger()</code>
      </li>
    </ul>
    <h3>Closing All Toasts</h3>
    <p>
      In some situations toasts might become outdated before they expire. For
      example when showing a toast in a setup flow, canceling out of that setup
      flow might make the toast unrelevant.
    </p>
    <p>
      In those situations you can use <code>toaster.closeAll()</code> to close
      all open toasts.
    </p>
    <h3>Implementation Details</h3>
    <p>
      The toaster manages state itself &mdash; and uses <code>ReactDOM</code> to
      show toasts. The toaster is an instance of the <code>Toaster</code> class.
    </p>
  </div>
)

const appearanceOptions = null

const scope = {
  Box,
  toaster,
  Button,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.`
}

const examples = [
  {
    title: 'Toasts with Title Only',
    description: (
      <p>The simplest way to create a toast is with a title only.</p>
    ),
    codeText: exampleTitleOnly,
    scope
  },
  {
    title: 'Toasts with Title and Description',
    description: (
      <p>
        A description is used as the children for the <code>Alert</code>{' '}
        component. This means the description can be a React node.
      </p>
    ),
    codeText: exampleTitleAndDescription,
    scope
  },
  {
    title: 'Toasts with Custom Duration',
    description: (
      <p>
        It is possible to add a custom duration when showing a toast. The
        default duration is 5 seconds. Be aware that the duration property is in
        seconds &mdash; not milliseconds.
      </p>
    ),
    codeText: exampleCustomDuration,
    scope
  }
]

export default {
  title,
  subTitle,
  designGuidelines,
  implementationDetails,
  appearanceOptions,
  examples
}
