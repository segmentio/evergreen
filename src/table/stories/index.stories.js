import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Table } from '../../table'
import AdvancedTable from './AdvancedTable'

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
