import React from 'react'
import Box from 'ui-box'
import Dialog from '../src/Dialog'
import { Button } from '../../buttons'
import { Paragraph } from '../../typography'
import DialogManager from './DialogManager'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceDialog from '!raw-loader!../src/Dialog'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import examplePrimaryButton from './examples/primary-button.example'
import examplePrimaryButtonRed from './examples/primary-button-red.example'
import examplePrimaryButtonOnly from './examples/primary-button-only.example'
import examplePrimaryButtonConfirmation from './examples/primary-button-confirmation.example'
import exampleWithoutButtons from './examples/without-buttons.example'
import exampleSelfManagedClose from './examples/self-managed-close.example'
import exampleHideHeader from './examples/hide-header.example'
import exampleInternalScrolling from './examples/internal-scrolling.example'

const title = 'Dialog'
const subTitle = 'A component that displays content on top of an overlay.'

const designGuidelines = (
  <div>
    <p>
      The <code>Dialog</code> component is used to show content on top of an
      overlay. It blocks any interaction with the page &mdash; until the overlay
      is clicked, or a close action is triggered.
    </p>
    <h3>When To Use</h3>
    <p>
      When you require your user to interact with you app, but don&rsquo;t want
      your users to jump to a different page and break their workflow.
    </p>
    <p>
      You should also use a dialog in cases where you need to ask for
      confirmation from the user before doing a lengthy or dangerous action.
      This could be a deletion of some sorts or initiating a lengthy download.
    </p>
    <h3>Terminology</h3>
    <p>
      <a href="http://blueprintjs.com/docs/v2/#core/components/dialog">
        BlueprintJS
      </a>{' '}
      pointed out in their documentation that &ldquo;modal&rdquo; is a misnomer
      for &ldquo;dialog&rdquo;.
    </p>
    <blockquote cite="http://blueprintjs.com/docs/v2/#core/components/dialog">
      The term &ldquo;modal&rdquo; is sometimes used to mean
      &ldquo;dialog&rdquo;, but this is a misnomer. Modal is an adjective that
      describes parts of a UI. An element is considered modal if it{' '}
      <a href="https://en.wikipedia.org/wiki/Modal_window">
        blocks interaction with the rest of the application
      </a>. We use the term &ldquo;dialog&rdquo; to avoid confusion with the
      adjective.
    </blockquote>
  </div>
)

const appearanceOptions = null

const scope = {
  Box,
  Dialog,
  DialogManager,
  Paragraph,
  Button
}

const components = [
  {
    name: 'Dialog',
    source: sourceDialog,
    description: (
      <p>
        This is the component responsible for all interactions and properties.
      </p>
    ),
    examples: [
      {
        title: 'Primary button and cancel button',
        description: (
          <p>
            By passing in the primary button, the cancel button also shows.
            Primary button is an object which is passed through to the{' '}
            <code>Button</code> component.
          </p>
        ),
        codeText: examplePrimaryButton,
        scope
      },
      {
        title: 'Primary button with a custom appearance',
        description: (
          <p>
            You can pass all properties through to the primary button. In this
            example the red appearance is passed.
          </p>
        ),
        codeText: examplePrimaryButtonRed,
        scope
      },
      {
        title: 'Primary button with loading confirmation',
        description: (
          <p>
            You can pass all properties through to the primary button. Including
            the <code>isLoading</code> prop.
          </p>
        ),
        codeText: examplePrimaryButtonConfirmation,
        scope
      },
      {
        title: 'Primary button only',
        description: (
          <p>Hide the cancel button, useful in onboarding dialogs.</p>
        ),
        codeText: examplePrimaryButtonOnly,
        scope
      },
      {
        title: 'Internal scrolling',
        description: (
          <p>
            When you pass in content that is greater than the available space,
            the content area will become scrollable. It will add a symmetric
            offset on the top and bottom — based on the <code>topOffset</code>{' '}
            prop.
          </p>
        ),
        codeText: exampleInternalScrolling,
        scope
      },
      {
        title: 'Without buttons',
        description: (
          <p>
            If you don&rsquo;t pass the <code>primaryButton</code> prop — you
            wont&rsquo;t see any footer at all. Clicks on the overlay will still
            close your dialog.
          </p>
        ),
        codeText: exampleWithoutButtons,
        scope
      },
      {
        title: 'Self managed close',
        description: (
          <p>
            Pass in a function as children to accept a <code>close</code>{' '}
            function you can use to manually close your dialog.
          </p>
        ),
        codeText: exampleSelfManagedClose,
        scope
      },
      {
        title: 'Hidden header',
        description: (
          <p>
            Hide the header by passing the <code>hideHeader</code> prop. This
            will hide both the close icon button as the title.
          </p>
        ),
        codeText: exampleHideHeader,
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
