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
      When you require your user to interact with you app, but don’t want your
      users to jump to a different page and break their workflow.
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
      pointed out in their documentation that “modal” is a misnomer for
      “dialog”.
    </p>
    <blockquote cite="http://blueprintjs.com/docs/v2/#core/components/dialog">
      The term “modal” is sometimes used to mean “dialog”, but this is a
      misnomer. Modal is an adjective that describes parts of a UI. An element
      is considered modal if it{' '}
      <a href="https://en.wikipedia.org/wiki/Modal_window">
        blocks interaction with the rest of the application
      </a>. We use the term “dialog” to avoid confusion with the adjective.
    </blockquote>
  </div>
)

const implementationDetails = (
  <div>
    <h3>Focus Management</h3>
    <p>
      When opening theDialog, focus will be brought inside the Dialog. When
      using both the cancel and confirm button, the cancel button will get focus
      first.
    </p>
    <p>
      When closing the Dialog, focus will be brought back to the element that
      was focused before opening the Dialog. This is normally the button that
      triggered the Dialog.
    </p>
  </div>
)

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
        title: 'Default Behavior',
        description: (
          <p>
            The default behavior of the dialog is to show a header with a title
            and close button —  and a footer with a confirm and cancel button.
          </p>
        ),
        codeText: examplePrimaryButton,
        scope
      },
      {
        title: 'Dialog with a Danger Intent',
        description: (
          <p>
            The intent prop determines the appearance of the confirm button.
            <code>danger</code> is red. In the future, more intent types might
            be added.
          </p>
        ),
        codeText: examplePrimaryButtonRed,
        scope
      },
      {
        title: 'Confirm Button with Loading Confirmation',
        description: (
          <p>
            Pass the <code>isConfirmLoading</code> to set the loading state on
            the confirm button.
          </p>
        ),
        codeText: examplePrimaryButtonConfirmation,
        scope
      },
      {
        title: 'Confirm Button Only',
        description: (
          <p>
            Sometimes you only need a confirm button and not a cancel button.
            For example in onboarding use cases.
          </p>
        ),
        codeText: examplePrimaryButtonOnly,
        scope
      },
      {
        title: 'Internal Scrolling',
        description: (
          <p>
            When content makes the dialog height greater than the available
            space in the viewport, the content area will become scrollable. It
            will add a symmetric offset on the top and bottom — based on the{' '}
            <code>topOffset</code> prop.
          </p>
        ),
        codeText: exampleInternalScrolling,
        scope
      },
      {
        title: 'Self Managed Close',
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
        title: 'Without Footer',
        description: (
          <p>
            Use the <code>hasFooter</code> props to show or hide the footer.
            This will hide the confirm and cancel buttons.
          </p>
        ),
        codeText: exampleWithoutButtons,
        scope
      },
      {
        title: 'Without Header',
        description: (
          <p>
            Use the <code>hasHeader</code> props to show or hide the heaer. This
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
  implementationDetails,
  components
}
