import React from 'react'
import {
  Table,
  TableCell,
  TextTableCell,
  TableRow,
  TableHeaderCell,
  TextTableHeaderCell,
  SearchTableHeaderCell,
  TableBody,
  TableHead
} from '..'
import profiles from '../stories/profiles.json' // eslint-disable-line import/extensions
/* eslint-disable import/no-unresolved, import/no-webpack-loader-syntax */
import sourceTable from '!raw-loader!../src/Table'
import sourceTableCell from '!raw-loader!../src/TableCell'
import sourceTextTableCell from '!raw-loader!../src/TextTableCell'
import sourceTableRow from '!raw-loader!../src/TableRow'
import sourceTableHeaderCell from '!raw-loader!../src/TableHeaderCell'
import sourceTextTableHeaderCell from '!raw-loader!../src/TextTableHeaderCell'
import sourceSearchTableHeaderCell from '!raw-loader!../src/SearchTableHeaderCell'
import sourceTableBody from '!raw-loader!../src/TableBody'
import sourceTableHead from '!raw-loader!../src/TableHead'
/* eslint-enable import/no-unresolved, import/no-webpack-loader-syntax */

/**
 * Code examples
 */
import exampleTable from './examples/Table.example'
import exampleTableCell from './examples/TableCell.example'
import exampleTextTableCell from './examples/TextTableCell.example'
import exampleTableRow from './examples/TableRow.example'
import exampleTableHeaderCell from './examples/TableHeaderCell.example'
import exampleTextTableHeaderCell from './examples/TextTableHeaderCell.example'
import exampleSearchTableHeaderCell from './examples/SearchTableHeaderCell.example'
import exampleTableBody from './examples/TableBody.example'
import exampleTableHead from './examples/TableHead.example'

const title = 'Table'
const subTitle = 'A set of components for building a table.'

const designGuidelines = (
  <div>
    <p>
      Evergreen exports a set of building blocks for building tables. This
      package is also used in places such as the options list in the{' '}
      <code>SelectMenu</code> component. Currently this package does not use
      real tables under the hood.
    </p>
    <h3>Implementation details</h3>
    <ul>
      <li>
        None of these components implement HTML table elements such as:
        {` `}
        <code>table</code>, <code>th</code> or <code>tr</code>.
      </li>
      <li>
        Most components are basic <code>Pane</code> components combined with
        {` `}
        <code>Text</code>.
      </li>
      <li>All components are presentational, no sorting build in.</li>
    </ul>
  </div>
)

const appearanceOptions = null

const components = [
  {
    name: 'Table',
    source: sourceTable,
    description: (
      <p>
        This component is the container of all your table components. It is
        simply a Pane with a border and is not an actual <code>table</code>{' '}
        element.
      </p>
    ),
    examples: [
      {
        title: 'Complete Table example',
        description: (
          <p>
            This is a complete example of using a table in Evergreen. You want
            to make sure to use <code>borderRight={`{null}`}</code> on the last
            table cell of each table row.
          </p>
        ),
        codeText: exampleTable,
        scope: {
          Table,
          TableBody,
          TableHead,
          TableRow,
          TextTableHeaderCell,
          TextTableCell,
          SearchTableHeaderCell,
          profiles
        }
      }
    ]
  },
  {
    name: 'TableHead',
    source: sourceTableHead,
    description: (
      <div>
        <p>
          This component is used to put your table header cells in. You
          don&apos;t need to add a table row inside.
        </p>
        <p>
          This component includes a utility that makes sure the scrollbar is
          accounted for when enabled in the operating system. This is the case
          for all Windows and Linux systems, as well as Mac&nbsp;OS systems that
          have scrollbars enabled.
        </p>
      </div>
    ),
    examples: [
      {
        title: 'Basic TableHead example',
        codeText: exampleTableHead,
        scope: {
          TableHead,
          TextTableHeaderCell,
          SearchTableHeaderCell,
          profiles
        }
      }
    ]
  },
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
  title,
  subTitle,
  designGuidelines,
  appearanceOptions,
  components
}
