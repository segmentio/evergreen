import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Table } from '../../table'
import AdvancedTable from './AdvancedTable'
import VirtualTable from './VirtualTable'
import EditableTable from './EditableTable'

const range = N => Array.from({ length: N }, (v, k) => k + 1)

const dynamicHeights = range(500).map(() => {
  return Math.max(Math.ceil(Math.random() * 100), 32)
})

storiesOf('table', module)
  .add('advanced example', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <AdvancedTable />
    </Box>
  ))
  .add('virtual table', () => (
    <Box padding={24} height="100vh">
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <VirtualTable />
    </Box>
  ))
  .add('Table.Cell', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.Cell>Table.Cell</Table.Cell>
    </Box>
  ))
  .add('Table.TextCell', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.TextCell>Table.TextCell</Table.TextCell>
    </Box>
  ))
  .add('Table.Head', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.Head>
        <Table.SearchHeaderCell />
        <Table.TextHeaderCell isSortable sortOrder="descending">
          Last Activity
        </Table.TextHeaderCell>
        <Table.TextHeaderCell textAlign="right">ltv</Table.TextHeaderCell>
      </Table.Head>
    </Box>
  ))
  .add('Table.Row', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      {['none', 'danger', 'warning', 'success'].map(intent => {
        return (
          <Table.Row key={intent} isSelectable intent={intent}>
            <Table.TextCell>{intent}</Table.TextCell>
          </Table.Row>
        )
      })}
      <Table.Row height={32}>
        <Table.TextCell>Height 32</Table.TextCell>
      </Table.Row>
      <Table.Row height={40}>
        <Table.TextCell>Height 40</Table.TextCell>
      </Table.Row>
      <Table.Row height="auto" paddingY={12}>
        <Table.TextCell>
          Auto height <br />based on <br />the content
        </Table.TextCell>
      </Table.Row>
    </Box>
  ))
  .add('Table.HeaderCell', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.HeaderCell>Table.HeaderCell</Table.HeaderCell>
    </Box>
  ))
  .add('Table.TextHeaderCell', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.TextHeaderCell>Table.TextHeaderCell</Table.TextHeaderCell>
    </Box>
  ))
  .add('Table.SearchHeaderCell', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.SearchHeaderCell />
      <Table.SearchHeaderCell autoFocus placeholder="autoFocus" />
    </Box>
  ))
  .add('Table.Body', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.Body>Table.Body</Table.Body>
    </Box>
  ))
  .add('Table.VirtualBody tests', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.VirtualBody height={120}>
        <Table.Row />
      </Table.VirtualBody>
      <Table.VirtualBody height={120}>String</Table.VirtualBody>
      <Table.VirtualBody height={120} />
    </Box>
  ))
  .add('Table.VirtualBody dynamic but known heights', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.VirtualBody height={600}>
        {dynamicHeights.map((height, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <Table.Row key={`${height}-${index}`} height={height}>
              <Table.TextCell>{height}</Table.TextCell>
            </Table.Row>
          )
        })}
      </Table.VirtualBody>
    </Box>
  ))
  .add('Editable Table ', () => <EditableTable />)
