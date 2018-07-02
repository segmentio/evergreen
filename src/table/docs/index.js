import React from 'react'
import { Table } from '..'
import AdvancedTable from '../stories/AdvancedTable'
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
import sourceAdvancedTable from './examples/AdvancedTable.example'
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
  </div>
)

const implementationDetails = (
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
        title: 'Advanced Table Example',
        description: (
          <div>
            <p>
              This is a advanced table example that composes multiple components
              and adds functionality to the table. By default all table
              components are presentational, this is just an example.{' '}
              <a href="https://github.com/segmentio/evergreen/blob/v4/src/table/stories/AdvancedTable.js">
                Take a look at the code here
              </a>.
            </p>
          </div>
        ),
        codeText: sourceAdvancedTable,
        scope: {
          AdvancedTable
        }
      },
      {
        title: 'Complete Table Example',
        description: (
          <p>
            This is a complete example of using a table in Evergreen without any
            functionality added.
          </p>
        ),
        codeText: exampleTable,
        scope: {
          Table,
          profiles
        }
      }
    ]
  },
  {
    name: 'Table.Head',
    source: sourceTableHead,
    description: (
      <div>
        <p>
          This component is used to put your table header cells in. You don’t
          need to add a table row inside.
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
        title: 'Basic Table.Head example',
        codeText: exampleTableHead,
        scope: {
          Table
        }
      }
    ]
  },
  {
    name: 'Table.Body',
    source: sourceTableBody,
    description: (
      <p>
        This component is used for to put all your table rows in, except for you
        table header cells.
      </p>
    ),
    examples: [
      {
        title: 'Basic Table.Body example',
        codeText: exampleTableBody,
        scope: {
          Table,
          profiles
        }
      }
    ]
  },
  {
    name: 'Table.Row',
    source: sourceTableRow,
    description: (
      <p>
        This component is used for table rows in your table and can be
        selectable and selected. Table rows can have a <code>intent</code> as
        well.
      </p>
    ),
    examples: [
      {
        title: 'Basic selectable Table.Row example',
        codeText: exampleTableRow,
        scope: {
          Table
        }
      }
    ]
  },
  {
    name: 'Table.Cell',
    source: sourceTableCell,
    description: (
      <p>
        This component is for table cells in your table. Consider using{' '}
        <code>Table.TextCell</code> when you want to display text in your table
        cell. This can be used as a base to build more complex table cells.
      </p>
    ),
    examples: [
      {
        title: 'Basic Table.Cell example',
        codeText: exampleTableCell,
        scope: {
          Table
        }
      }
    ]
  },
  {
    name: 'Table.TextCell',
    source: sourceTextTableCell,
    description: (
      <p>This component is for table cells in your table that contain text.</p>
    ),
    examples: [
      {
        title: 'Basic Table.TextCell example',
        codeText: exampleTextTableCell,
        scope: {
          Table
        }
      }
    ]
  },
  {
    name: 'Table.HeaderCell',
    source: sourceTableHeaderCell,
    description: (
      <p>
        This component is for table headers cells in your table. Consider using{' '}
        <code>Table.TextHeaderCell</code> when you want to display text in your
        table header cell.
      </p>
    ),
    examples: [
      {
        title: 'Basic Table.HeaderCell example',
        codeText: exampleTableHeaderCell,
        scope: {
          Table
        }
      }
    ]
  },
  {
    name: 'Table.TextHeaderCell',
    source: sourceTextTableHeaderCell,
    description: (
      <p>
        This component is for table headers cells in your table that contain
        text. This functionality is not completely locked down yet.
      </p>
    ),
    examples: [
      {
        title: 'Basic Table.TextHeaderCell example',
        codeText: exampleTextTableHeaderCell,
        scope: {
          Table
        }
      }
    ]
  },
  {
    name: 'Table.SearchHeaderCell',
    source: sourceSearchTableHeaderCell,
    description: (
      <p>
        This component is for searchable table headers cells in your table. It
        is useful if you want a compact searchable table.
      </p>
    ),
    examples: [
      {
        title: 'Basic Table.SearchHeaderCell example',
        codeText: exampleSearchTableHeaderCell,
        scope: {
          Table
        }
      }
    ]
  }
]

export default {
  title,
  subTitle,
  designGuidelines,
  implementationDetails,
  appearanceOptions,
  components
}
