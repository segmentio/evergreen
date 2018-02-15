import React from 'react'
import LoadingManager from './LoadingManager'
import { BackButton, IconButton, Button } from '..'
/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceBackButton from '!raw-loader!../src/BackButton'
import sourceIconButton from '!raw-loader!../src/IconButton'
import sourceButton from '!raw-loader!../src/Button'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import basicExample from './examples/basic.example'
import loadingExample from './examples/loading.example'
import basicWithIconsExample from './examples/basic-with-icons.example'
import backButtonExample from './examples/back-button.example'
import triangleExample from './examples/triangle.example'
import arrowExample from './examples/arrow.example'
import iconButtonBasicExample from './examples/icon-button-basic.example'

const title = 'Buttons'
const subTitle = 'A set of buttons with multiple appearances.'

const designGuidelines = (
  <div>
    <p>
      By default buttons and controls have a height of <code>32px</code>. It is
      possible to change this to any height and the text style and spacing will
      adjust. You should however keep things on the <code>8px</code> or in some
      cases the <code>4px</code> grid. You should only need the following
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

const appearanceOptions = [
  {
    title: 'Default',
    component: <Button>Default</Button>,
    description: (
      <p>
        Default buttons provide a light weight button style, while still
        maintaining a high level of affordability. They are used to indicate
        secondary actions and are used to reduce visual noise when there are
        many actions on the page.
      </p>
    )
  },
  {
    title: 'Green',
    component: <Button appearance="green">Green</Button>,
    description: (
      <p>
        Green buttons stand out on purpose. They are used to indicate primary
        actions that create a new entity or initiate a creation flow.
      </p>
    )
  },
  {
    title: 'Blue',
    component: <Button appearance="blue">Blue</Button>,
    description: (
      <p>
        Blue buttons stand out on purpose. They are used to indicate primary
        actions used within a setup flow or preview window.
      </p>
    )
  },
  {
    title: 'Red',
    component: <Button appearance="red">Red</Button>,
    description: (
      <p>
        Red buttons stand out on purpose. They are used to indicate primary
        deletion actions in dialogs or settings.
      </p>
    )
  },
  {
    title: 'Ghost Blue',
    component: <Button appearance="ghostBlue">Ghost Blue</Button>,
    description: (
      <p>
        Ghost blue text buttons are light weight. They are used to signify
        secondary actions and work well next to solid buttons.
      </p>
    )
  },
  {
    title: 'Ghost',
    component: <Button appearance="ghost">Ghost</Button>,
    description: (
      <p>
        Ghost buttons are light weight. They are used to signify secondary
        actions and work well for icons such as in a dialog close button.
      </p>
    )
  }
]

const components = [
  {
    name: 'Button',
    source: sourceButton,
    description: (
      <p>
        The base <code>Button</code> component can have multiple appearances.
        See the design guidelines above to understand when to use each
        appearance. Buttons can also hold a icon before or after the text. Avoid
        using an icon after the text except for a triangle down.
      </p>
    ),
    examples: [
      {
        title: 'All button appearances',
        codeText: basicExample,
        scope: { Button }
      },
      {
        title: 'Loading button',
        codeText: loadingExample,
        scope: { Button, LoadingManager }
      },
      {
        title: 'Buttons with an icon',
        codeText: basicWithIconsExample,
        scope: { Button }
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
        in <code>evergreen-ui</code>. You can use the <code>iconAim</code> prop
        to determine where to aim the icon. This is only useful for the{' '}
        <code>triangle</code> and <code>arrow</code> icon.
      </p>
    ),
    examples: [
      {
        title: 'Functional icons',
        description: (
          <p>
            Although <code>IconButton</code> supports all icons, you should only
            ever use the following.
          </p>
        ),
        codeText: iconButtonBasicExample,
        scope: { IconButton }
      },
      {
        title: 'Triangle icon buttons',
        description: <p>Currently there is not a clear use case for this.</p>,
        codeText: triangleExample,
        scope: { IconButton }
      },
      {
        title: 'Arrow icon buttons',
        description: <p>Currently there is not a clear use case for this.</p>,
        codeText: arrowExample,
        scope: { IconButton }
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
