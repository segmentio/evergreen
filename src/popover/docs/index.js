import React from 'react'
import Box from 'ui-box'
import Popover from '../src/Popover'
import { Position } from '../../positioner'
import { Button } from '../../buttons'
import { Text } from '../../typography'
import { Pane } from '../../layers'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourcePopover from '!raw-loader!../src/Popover'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import examplePopoverBasic from './examples/Popover-basic.example'
import examplePopoverPositions from './examples/Popover-positions.example'
import examplePopoverCloseInside from './examples/Popover-close-inside.example'

const title = 'Popover'
const subTitle = 'Display floating content in relation to a target.'

const introduction = (
  <div>
    <p>
      The Popover component displays floating content in relation to a target.
      Popovers appear either at the top or bottom of their target. The preferred
      and default side is the bottom. Popovers use smart positioning if there is
      not enough space on the bottom.
    </p>
  </div>
)

const implementationDetails = (
  <div>
    <p>
      The Popover uses the <code>Positioner</code> from Evergreen to handle the
      positioning logic. Internally the Popover will make sure the Popover is
      positioned within the viewport. This means that sometimes the Popover
      flips — or the Popover might move slightly to the left or right.
    </p>

    <h3>When Creating a Popover, You Must Specify Both:</h3>
    <ul>
      <li>Its content, by setting the content prop, and</li>
      <li>Its target, as a single child element or a function</li>
    </ul>

    <p>
      When you pass a function to the content prop you will be able to close the
      popover inside of the content.
    </p>

    <h3>Popovers Close On</h3>
    <ul>
      <li>Outside click</li>
      <li>Escape key</li>
      <li>The close function being called</li>
    </ul>

    <h3>Focus Management</h3>
    <p>
      When opening the Popover, focus will be brought inside the Popover by
      looking for elements with <code>[autofocus]</code> first and{' '}
      <code>[tabindex]</code> second.
    </p>
    <p>
      When passing a node as the Popover children, the Popover will handle focus
      management automatically when closing the Popover. When closing, it will
      return back focus on the target if nothing else has focus.
    </p>
  </div>
)

const PopoverContent = () => (
  <Pane
    width={240}
    height={240}
    display="flex"
    alignItems="center"
    justifyContent="center"
    flexDirection="column"
  >
    <Text>Popover Content</Text>
  </Pane>
)

const appearanceOptions = null

const scope = {
  Box,
  Popover,
  PopoverContent,
  Button,
  Pane,
  Position,
  Text
}

const components = [
  {
    name: 'Popover',
    source: sourcePopover,
    examples: [
      {
        title: 'Basic Popover Example',
        codeText: examplePopoverBasic,
        description: (
          <div>
            <p>
              For the Popover to work it needs at least a target (children) and
              the content property set.
            </p>
          </div>
        ),
        scope
      },
      {
        title: 'Popover Positions',
        codeText: examplePopoverPositions,
        description: (
          <div>
            <p>
              The Popover uses the <code>Position</code> object to help
              determine it’s position. Internally the Popover will make sure the
              Popover is positioned within the viewport. This means that
              sometimes the Popover flips — or the Popover might move slightly
              to the left or right.
            </p>
            <p>
              The <code>PopoverContent</code> in the following example is the
              same component passed in the basic example. For clarity the{' '}
              <code>PopoverContent</code>
              definition is omitted.
            </p>
          </div>
        ),
        scope
      },
      {
        title: 'Close From Within Content',
        codeText: examplePopoverCloseInside,
        description: (
          <div>
            <p>
              When passing a function as the content property, the Popover will
              give you a close function:
              <code
              >{`<Popover content={({ close }) => {})>{...}</Popover>`}</code>
            </p>
            <p>
              This allows a trigger within the content to close the Popover.
            </p>
          </div>
        ),
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
