import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Table } from '..'
import { Portal } from '../../portal'
import { Pane } from '../../layers'
import AdvancedTable from './AdvancedTable'
import VirtualTable from './VirtualTable'
import EditableTable from './EditableTable'

const range = N => Array.from({ length: N }, (v, k) => k + 1)

const dynamicHeights = range(500).map(() => {
  return Math.max(Math.ceil(Math.random() * 100), 32)
})

storiesOf('table', module)
  .add('Advanced Sortable Table', () => (
    <Box padding={24}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <AdvancedTable />
    </Box>
  ))
  .add('Virtual Table + Automatic Heights', () => (
    <Box padding={24} height="100vh">
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <VirtualTable />
    </Box>
  ))
  .add('Editable Table ', () => (
    <Box padding={24} height="100vh">
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <EditableTable />
    </Box>
  ))
  .add('Editable Table offset test ', () => (
    <Box padding={24} paddingTop={800} height="100vh">
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <EditableTable />
    </Box>
  ))
  .add('Virtual Table within Portal test', () => (
    <Box padding={24} height="100vh">
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Portal>
        <Box position="fixed" top={0} left={0} right={0} bottom={0}>
          <VirtualTable />
        </Box>
      </Portal>
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
          Auto height <br />
          based on <br />
          the content
        </Table.TextCell>
      </Table.Row>
    </Box>
  ))
  .add('Table.Row isSelectable', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.Body>
        {range(10).map(item => {
          return (
            <Table.Row key={item} isSelectable>
              <Table.TextCell>{item}</Table.TextCell>
            </Table.Row>
          )
        })}
      </Table.Body>
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
  .add('Table.VirtualBody grouped panes selectable cells', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Table.VirtualBody height={600}>
        <Pane height={48}>
          <Table.Row>
            <Table.EditableCell
              isSelectable
              data-cell-1
              arrowKeysOverrides={{
                down: '[data-cell-2]'
              }}
            >
              Cell 1
            </Table.EditableCell>
          </Table.Row>
        </Pane>
        <Pane height={48}>
          <Table.Row>
            <Table.EditableCell
              isSelectable
              data-cell-2
              arrowKeysOverrides={{
                up: '[data-cell-1]'
              }}
            >
              Cell 2
            </Table.EditableCell>
          </Table.Row>
        </Pane>
      </Table.VirtualBody>
    </Box>
  ))
