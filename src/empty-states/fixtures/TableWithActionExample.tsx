import React from 'react'
import { SearchIcon } from '../../icons'
import { Pane } from '../../layers'
import { majorScale } from '../../scales'
import { Table } from '../../table'
import { useTheme } from '../../theme'
import EmptyState from '../src/EmptyState'

const TableWithActionExample = () => {
  const { colors } = useTheme()

  return (
    <Pane marginBottom={majorScale(8)}>
      <Table maxWidth={1152} width="100%">
        <Table.Head>
          <Table.TextHeaderCell>Name</Table.TextHeaderCell>
          <Table.TextHeaderCell>Status</Table.TextHeaderCell>
          <Table.TextHeaderCell>Created At </Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height="auto">
          <EmptyState
            background="light"
            title="No audiences found"
            orientation="horizontal"
            icon={<SearchIcon color={colors.gray500} />}
            iconBgColor={colors.gray200}
            description="Click the button below to create a new Audience. Once done, you will see it come up in this list."
            primaryCta={<EmptyState.PrimaryButton>Create Audience</EmptyState.PrimaryButton>}
          />
        </Table.Body>
      </Table>
    </Pane>
  )
}

export default TableWithActionExample
