import React from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Text } from '../../typography/'
import Pane from '../src/Pane'
import Card from '../src/Card'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourcePane from '!raw-loader!../src/Pane'
import sourceCard from '!raw-loader!../src/Card'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import examplePaneBasic from './examples/Pane-basic.example'
import examplePaneElevationStyles from './examples/Pane-elevation-styles.example'
import examplePaneAppearances from './examples/Pane-appearances.example'
import exampleCardBasic from './examples/Card-basic.example'
import exampleCardElevationStyles from './examples/Card-elevation-styles.example'

const title = 'Pane & Card'
const subTitle = 'Foundational atoms to build layout and components.'

const introduction = (
  <div>
    <p>
      The <code>Pane</code> and <code>Card</code> components are one of the most
      important components in Evergreen. They are essentially a replacement of
      the <code>div</code> element. They are used as primitives to construct
      layouts and compose components.
    </p>

    <h3>
      The Relationship to <code>ui-box</code>
    </h3>
    <p>
      The <code>Pane</code> component maps almost directly to the{' '}
      <code>Box</code> from{' '}
      <a href="https://github.com/segmentio/ui-box">ui-box</a>. This means you
      can pass everything to <code>Pane</code> that you can pass to{' '}
      <code>Box</code>. The <code>Card</code> component simply maps to the{' '}
      <code>Pane</code> component with a default border-radius.
    </p>

    <h4>Pass Styles Directly to Pane & Card</h4>
    <p>
      Because the <code>Pane</code> component directly maps to a{' '}
      <code>Box</code> you can pass almost any CSS property directly to the
      React component. Simply pass a property such as <code>marginTop</code> to
      the <code>Pane</code> component: <code>{`<Pane marginTop={12} />`}</code>.
    </p>

    <h4>
      Other Components Implement the <code>Pane</code> or <code>Box</code>{' '}
      Component
    </h4>
    <p>
      One of the biggest powers of Evergreen is that a lot of components
      implement either <code>Box</code> or <code>Pane</code>. Or at least some
      of the APIs of <code>Box</code> such as <code>dimensions</code> and{' '}
      <code>spacing</code>.
    </p>

    <p>
      In the real world that means you can pass properties such as{' '}
      <code>marginTop</code>, <code>height</code>, <code>width</code>,{' '}
      <code>position</code> to almost any smaller component such as{' '}
      <code>TextInput</code>, <code>Button</code>, <code>SegmentedControl</code>{' '}
      and many others.
    </p>

    <h3>Responsive Layouts</h3>
    <p>
      Currently there is no opinionated way to construct responsive layouts in
      Evergreen. In the case of responsive layouts you might want to simply use
      a <code>div</code> with a class name and use breakpoints in CSS — or
      potentially a CSS-in-JS solution.
    </p>
    <p>
      In the case when you need to pass properties to a Evergreen component
      based on the viewport, you can try something like{' '}
      <a href="https://github.com/ctrlplusb/react-component-queries/issues">
        react-component-queries
      </a>.{' '}
    </p>

    <h3>Never Pass a String of Text as Direct Children</h3>
    <p>
      Pane & Card don’t have text styles applied to them. Always pass a{' '}
      <code>Text</code>, <code>Heading</code> or other typograpghy component as
      children to Panes & Cards.
    </p>
  </div>
)

const PaneExample = ({ children, ...props }) => {
  return (
    <Pane
      width={120}
      height={120}
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <Text color="inherit">{children}</Text>
    </Pane>
  )
}

PaneExample.propTypes = {
  children: PropTypes.node
}

const appearanceOptions = [
  {
    title: 'Tint 1',
    component: <PaneExample appearance="tint1">tint1</PaneExample>,
    description: (
      <p>
        This is the lightest tint and should be used before moving up to{' '}
        <code>tint2</code>. Evergreen promotes a light user experience as much
        as possible. When background colors are lighter it increase the dynamic
        range of the whole experience.
      </p>
    )
  },
  {
    title: 'Tint 2',
    component: <PaneExample appearance="tint2">tint2</PaneExample>,
    description: <p>Often useful for backgrounds.</p>
  },
  {
    title: 'Tint 3',
    component: <PaneExample appearance="tint3">tint3</PaneExample>,
    description: (
      <p>
        Useful when you are have a Pane or Card layered on top that is using{' '}
        <code>tint2</code>. Use sparingly.
      </p>
    )
  },
  {
    title: 'Dark',
    component: (
      <PaneExample appearance="dark" color="white">
        dark
      </PaneExample>
    ),
    description: (
      <p>This is rarely used. Might become depracted in the future.</p>
    )
  },
  {
    title: 'Selected',
    component: <PaneExample appearance="selected">selected</PaneExample>,
    description: <p>This is to create a big selected Card. Rarely used.</p>
  }
]

const scope = {
  Box,
  Pane,
  Text,
  Card
}

const components = [
  {
    name: 'Pane',
    source: sourcePane,
    description: (
      <div>
        <p>
          The <code>Pane</code> component maps almost directly to the{' '}
          <code>Box</code> from{' '}
          <a href="https://github.com/segmentio/ui-box">ui-box</a>. This means
          you can pass everything to <code>Pane</code> that you can pass to{' '}
          <code>Box</code>.
        </p>
        <p>
          Because the <code>Pane</code> component directly maps to a{' '}
          <code>Box</code> you can pass almost any CSS property directly to the
          React component. Simply pass a property such as <code>marginTop</code>{' '}
          to the <code>Pane</code> component:{' '}
          <code>{`<Pane marginTop={12} />`}</code>.
        </p>
      </div>
    ),
    examples: [
      {
        title: 'Basic Pane Example',
        codeText: examplePaneBasic,
        scope
      },
      {
        title: 'Pane Elevation Styles',
        codeText: examplePaneElevationStyles,
        scope
      },
      {
        title: 'Pane Appearances',
        codeText: examplePaneAppearances,
        scope
      }
    ]
  },
  {
    name: 'Card',
    source: sourceCard,
    description: (
      <p>
        The <code>Card</code> component maps directly to a <code>Pane</code>{' '}
        component. The only difference is that it sets a border-radius of 5px by
        default.
      </p>
    ),
    examples: [
      {
        title: 'Basic Card Example',
        codeText: exampleCardBasic,
        scope
      },
      {
        title: 'Card Elevation Styles',
        codeText: exampleCardElevationStyles,
        scope
      }
    ]
  }
]

export default {
  title,
  subTitle,
  introduction,
  appearanceOptions,
  components
}
