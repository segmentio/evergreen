import React from 'react'
import Box from 'ui-box'
import SideSheet from '../src/SideSheet'
import { Heading, Paragraph } from '../../typography'
import { Card, Pane } from '../../layers'
import { Button } from '../../buttons'
import { Tab } from '../../tabs'
import { Manager } from '../../manager'

/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceSideSheet from '!raw-loader!../src/SideSheet'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import exampleSideSheetBasic from './examples/SideSheet-basic.example'
import exampleSideSheetFullFeatured from './examples/SideSheet-full-featured.example'
import exampleSideSheetTitleSubtitle from './examples/SideSheet-title-subtitle.example'
import exampleSideSheetTitle from './examples/SideSheet-title.example'

const title = 'Side Sheet'
const subTitle = 'A side panel overlaying the screen.'

const introduction = (
  <div>
    <p>
      The Side Sheet component is a panel overlaying the screen on the right
      side. It is used to show more details about a certain object or person. A
      Side Sheet is often triggered by clicking a row in a table.
    </p>
    <h3>Use Cases</h3>
    <ul>
      <li>Showing a profile view of a user</li>
      <li>
        Showing detailed information about a transaction (such as a sync or run)
      </li>
      <li>
        Showing configuration settings that don‘t need to be accessible by a URL
      </li>
    </ul>
    <h3>When Not to Use a Side Sheet</h3>
    <p>
      Side Sheets are a great way to cheat creating a new page. As a general
      rule of thumb, a Side Sheet should not be used as a replacement of a new
      page when the page needs to be accessible by a URL. Avoid showing a Side
      Sheet based on a URL.
    </p>
  </div>
)

const implementationDetails = (
  <div>
    <p>
      The Side Sheet component does not have any opinion about the contents of
      the Side Sheet. In the examples below are some recipes to make sure usage
      of the Side Sheet is consistent. It is recommended to compose more
      opinionated Side Sheets in the consuming application.
    </p>

    <h3>Side Sheets Close On</h3>
    <ul>
      <li>Backdrop click</li>
      <li>Close icon button click</li>
      <li>Escape key</li>
      <li>The close function being called</li>
    </ul>

    <h3>Focus Management</h3>
    <p>
      When opening the Side Sheet, focus will be brought inside the Side Sheet
      by looking for elements with <code>[autofocus]</code> first and{' '}
      <code>[tabindex]</code> second.
    </p>
    <p>
      When closing the Side Sheet, focus will be brought back to the element
      that was focused before opening the Side Sheet. This is normally the
      button that triggered the Side Sheet.
    </p>
  </div>
)

const scope = {
  Heading,
  Paragraph,
  Card,
  Pane,
  Button,
  Tab,
  Manager,
  Box,
  SideSheet
}

const components = [
  {
    name: 'SideSheet',
    source: sourceSideSheet,
    description: (
      <p>
        The <code>SideSheet</code> component is .
      </p>
    ),
    examples: [
      {
        title: 'Basic Example',
        codeText: exampleSideSheetBasic,
        scope
      },
      {
        title: 'Full Featured Example',
        description: (
          <p>
            Full featured example with a header with a title, subtitle and a tab
            bar. Content is a simple card.
          </p>
        ),
        codeText: exampleSideSheetFullFeatured,
        scope
      },
      {
        title: 'Title',
        codeText: exampleSideSheetTitle,
        description: (
          <p>Example with a header with a title. Content is a simple card.</p>
        ),
        scope
      },
      {
        title: 'Title and Subtitle',
        codeText: exampleSideSheetTitleSubtitle,
        description: (
          <p>
            Example with a header with a title and subtitle. Content is a simple
            card.
          </p>
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
  components
}
