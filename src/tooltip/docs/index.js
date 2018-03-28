import React from 'react'
import Tooltip from '../src/Tooltip'
import { IconButton } from '../../buttons'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceTooltip from '!raw-loader!../src/Tooltip'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import exampleTooltipBasic from './examples/Tooltip-basic.example'

const title = 'Tooltip'
const subTitle = 'A component for displaying tooltips.'

const introduction = (
  <div>
    <p>
      The Tooltip component displays floating content in relation to a target
      when that target is being hovered. Tooltips appear either at the top or
      bottom of their target. The preferred and default side is the bottom.
    </p>

    <h3>Accessibility</h3>
    <p>
      Tooltips are hard to make properly accessible, we discourage the use of
      tooltips for anything else but labels for Icon Buttons.{` `}
      <a
        href="https://inclusive-components.design/tooltips-toggletips/"
        target="_blank"
        rel="noreferrer noopener"
      >
        Read more about inclusive&nbsp;tooltips.
      </a>
    </p>
  </div>
)

const implementationDetails = (
  <div>
    <p>
      The Tooltip component uses the <code>Positioner</code> from Evergreen to
      handle the positioning logic. Internally the Tooltip will make sure the
      Tooltip is positioned within the viewport. This means that sometimes the
      Tooltip flips — or the Tooltip might move slightly to the left or right.
    </p>

    <h3>When Creating a Tooltip, You Must Specify Both:</h3>
    <ul>
      <li>Its content, by setting the content prop, and</li>
      <li>Its target, as a single child element or a function</li>
    </ul>

    <h3>Hovering the Tooltip</h3>
    <p>
      There is a slight delay between leaving the target and the time the
      tooltip dissappears. When the mouse enters the tooltip itself, it will
      stay.
    </p>
  </div>
)

const scope = {
  Tooltip,
  IconButton
}

const components = [
  {
    name: 'Tooltip',
    source: sourceTooltip,
    description: (
      <p>
        The <code>Tooltip</code> component.
      </p>
    ),
    examples: [
      {
        title: 'Basic Tooltip Example',
        codeText: exampleTooltipBasic,
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
  components
}
