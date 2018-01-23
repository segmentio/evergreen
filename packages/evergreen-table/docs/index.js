import React from 'react'
import { Pane } from 'evergreen-layers'

/* eslint-disable import/no-duplicates, import/no-webpack-loader-syntax */
import TableCell from '../src/components/TableCell'
import TextTableCell from '../src/components/TextTableCell'
import TableRow from '../src/components/TableRow'
import TableHeaderCell from '../src/components/TableHeaderCell'
import TextTableHeaderCell from '../src/components/TextTableHeaderCell'
import SearchTableHeaderCell from '../src/components/SearchTableHeaderCell'
import TableBody from '../src/components/TableBody'

/* eslint-disable import/no-unresolved */
import sourceTableCell from '!raw-loader!../src/components/TableCell'
import sourceTextTableCell from '!raw-loader!../src/components/TextTableCell'
import sourceTableRow from '!raw-loader!../src/components/TableRow'
import sourceTableHeaderCell from '!raw-loader!../src/components/TableHeaderCell'
import sourceTextTableHeaderCell from '!raw-loader!../src/components/TextTableHeaderCell'
import sourceSearchTableHeaderCell from '!raw-loader!../src/components/SearchTableHeaderCell'
import sourceTableBody from '!raw-loader!../src/components/TableBody'
/* eslint-enable import/no-duplicates, import/no-webpack-loader-syntax import/no-unresolved */

import packageJSON from '../package.json' // eslint-disable-line import/extensions

import profiles from '../stories/profiles'

/**
 * Code examples
 */
import profilesTable from './examples/profiles-table.example'
import exampleTableCell from './examples/TableCell.example'
import exampleTextTableCell from './examples/TextTableCell.example'
import exampleTableRow from './examples/TableRow.example'
import exampleTableHeaderCell from './examples/TableHeaderCell.example'
import exampleTextTableHeaderCell from './examples/TextTableHeaderCell.example'
import exampleSearchTableHeaderCell from './examples/SearchTableHeaderCell.example'
import exampleTableBody from './examples/TableBody.example'

const title = 'Table'
const subTitle = 'A package exporting the building blocks of a table.'

const designGuidelines = (
  <div>
    <p>
      This package exports the building blocks for tables. This package is also
      used in places such as the options list in the <code>SelectMenu</code>{' '}
      component. Currently this package does not use real tables under the hood.
      There is a{' '}
      <a href="https://github.com/segmentio/evergreen/issues/105">
        discussion on GitHub
      </a>{' '}
      going on to potentially change this in the future.
    </p>
    <h3>Implementation details</h3>
    <ul>
      <li>
        None of these components implement HTML table elements such as:
        {` `}
        <code>table</code>, <code>th</code> or <code>tr</code>
      </li>
      <li>
        Most components are basic <code>Pane</code> components combined with
        {` `}
        <code>Text</code>
      </li>
      <li>All components are presentational, no sorting build in</li>
    </ul>
  </div>
)

const appearanceOptions = null

const examples = [
  {
    title: 'Complete table example',
    description: (
      <p>
        This is a complete example of using a table in Evergreen. You want to
        make sure to use <code>borderRight={`{null}`}</code> on the last table
        cell of each table row.
      </p>
    ),
    codeText: profilesTable,
    scope: {
      Pane,
      TableBody,
      TableRow,
      TextTableHeaderCell,
      TextTableCell,
      SearchTableHeaderCell,
      profiles
    }
  }
]

const components = [
  {
    name: 'TableBody',
    source: sourceTableBody,
    description: (
      <p>
        This component is used for to put all your table rows in, except for you
        table header cells.
      </p>
    ),
    examples: [
      {
        title: 'Basic TableBody example',
        codeText: exampleTableBody,
        scope: {
          TableBody,
          TableRow,
          TextTableCell,
          profiles
        }
      }
    ]
  },
  {
    name: 'TableRow',
    source: sourceTableRow,
    description: (
      <p>
        This component is used for table rows in your table and can be
        selecteable and selected. This is currently also used to wrap{' '}
        <code>TableHeaderCell</code> components in.
      </p>
    ),
    examples: [
      {
        title: 'Basic selecteable TableRow example',
        codeText: exampleTableRow,
        scope: {
          TableRow,
          TextTableCell
        }
      }
    ]
  },
  {
    name: 'TableCell',
    source: sourceTableCell,
    description: (
      <p>
        This component is for table cells in your table. Consider using{' '}
        <code>TextTableCell</code> when you want to display text in your table
        cell. This can be used as a base to build more complex table cells.
      </p>
    ),
    examples: [
      {
        title: 'Basic TableCell example',
        codeText: exampleTableCell,
        scope: {
          TableRow,
          TableCell
        }
      }
    ]
  },
  {
    name: 'TextTableCell',
    source: sourceTextTableCell,
    description: (
      <p>This component is for table cells in your table that contain text.</p>
    ),
    examples: [
      {
        title: 'Basic TextTableCell example',
        codeText: exampleTextTableCell,
        scope: {
          TextTableCell,
          TableRow
        }
      }
    ]
  },
  {
    name: 'TableHeaderCell',
    source: sourceTableHeaderCell,
    description: (
      <p>
        This component is for table headers cells in your table. Consider using{' '}
        <code>TextTableHeaderCell</code> when you want to display text in your
        table header cell. This looks different than
      </p>
    ),
    examples: [
      {
        title: 'Basic TableHeaderCell example',
        codeText: exampleTableHeaderCell,
        scope: {
          TableHeaderCell,
          TableRow
        }
      }
    ]
  },
  {
    name: 'TextTableHeaderCell',
    source: sourceTextTableHeaderCell,
    description: (
      <p>
        This component is for table headers cells in your table that contain
        text. This component can also be sortable. This functionality is not
        completely locked down yet.
      </p>
    ),
    examples: [
      {
        title: 'Basic TextTableHeaderCell example',
        codeText: exampleTextTableHeaderCell,
        scope: {
          TextTableHeaderCell,
          TableRow
        }
      }
    ]
  },
  {
    name: 'SearchTableHeaderCell',
    source: sourceSearchTableHeaderCell,
    description: (
      <p>
        This component is for searchable table headers cells in your table. It
        is useful if you want a compact searchable table.
      </p>
    ),
    examples: [
      {
        title: 'Basic SearchTableHeaderCell example',
        codeText: exampleSearchTableHeaderCell,
        scope: {
          SearchTableHeaderCell,
          TableRow
        }
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
  components,
  examples
}
