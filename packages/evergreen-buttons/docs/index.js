import React from 'react'
import PropTypes from 'prop-types'
import { Pane } from 'evergreen-layers'
import { Paragraph } from 'evergreen-typography'
import { BackButton, Button, IconButton } from '../src'
import packageJSON from '../package.json' // eslint-disable-line import/extensions

/**
 * Code examples
 */
import basicExample from './examples/basic.example'
import basicWithIconsExample from './examples/basic-with-icons.example'
import backButtonExample from './examples/back-button.example'
import triangleExample from './examples/triangle.example'
import arrowExample from './examples/arrow.example'
import iconButtonBasicExample from './examples/icon-button-basic.example'

const title = 'Buttons'
const subTitle = 'A package exporting multiple types of buttons.'

/**
 * This is a appearance option, we might want to move this over at some point.
 */
class AppearanceOption extends React.PureComponent {
  static propTypes = {
    component: PropTypes.node,
    children: PropTypes.node
  }

  render() {
    return (
      <Pane
        backgroundColor="white"
        display="flex"
        alignItems="center"
        border="muted"
        marginBottom={16}
      >
        <Pane
          width={180}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {this.props.component}
        </Pane>
        <Pane
          flex="1"
          borderLeft="muted"
          paddingLeft={24}
          marginY={24}
          marginRight={24}
        >
          <Paragraph size={300}>{this.props.children}</Paragraph>
        </Pane>
      </Pane>
    )
  }
}

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

const appearanceOptions = (
  <Pane marginBottom={32}>
    <AppearanceOption component={<Button>Default</Button>}>
      Default buttons provide a light weight button style, while still
      maintaining a high level of affordability. They are used to indicate
      secondary actions and are used to reduce visual noise when there are many
      actions on the page.
    </AppearanceOption>
    <AppearanceOption component={<Button appearance="green">Green</Button>}>
      Green buttons stand out on purpose. They are used to indicate primary
      actions that create a new entity or initiate a creation flow.
    </AppearanceOption>
    <AppearanceOption component={<Button appearance="blue">Blue</Button>}>
      Blue buttons stand out on purpose. They are used to indicate primary
      actions used within a setup flow or preview window.
    </AppearanceOption>
    <AppearanceOption component={<Button appearance="red">Red</Button>}>
      Red buttons stand out on purpose. They are used to indicate primary
      deletion actions in dialogs or settings.
    </AppearanceOption>
    <AppearanceOption
      component={<Button appearance="ghostBlue">Ghost Blue</Button>}
    >
      Ghost blue text buttons are light weight. They are used to signify
      secondary actions and work well next to solid buttons.
    </AppearanceOption>
    <AppearanceOption component={<Button appearance="ghost">Ghost</Button>}>
      Ghost buttons are light weight. They are used to signify secondary actions
      and work well for icons such as in a dialog close button.
    </AppearanceOption>
  </Pane>
)

const components = [
  {
    name: 'Button',
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
        title: 'Buttons with an icon',
        codeText: basicWithIconsExample,
        scope: { Button }
      }
    ]
  },
  {
    name: 'BackButton',
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
    description: (
      <p>
        The <code>IconButton</code> component has access to all icons available
        in <code>evergreen-icons</code>. You can use the <code>iconAim</code>{' '}
        prop to determine where to aim the icon. This is only useful for the{' '}
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
  packageJSON,
  title,
  subTitle,
  designGuidelines,
  appearanceOptions,
  components
}
