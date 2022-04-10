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
    // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
    <Pane marginBottom={majorScale(8)}>
      {/* @ts-expect-error ts-migrate(2322) FIXME: Type '{ children: Element[]; maxWidth: number; wid... Remove this comment to see the full error message */}
      <Table maxWidth={1152} width="100%">
        {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'Head' does not exist on type 'NamedExoti... Remove this comment to see the full error message */}
        <Table.Head>
          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'TextHeaderCell' does not exist on type '... Remove this comment to see the full error message */}
          <Table.TextHeaderCell>Name</Table.TextHeaderCell>
          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'TextHeaderCell' does not exist on type '... Remove this comment to see the full error message */}
          <Table.TextHeaderCell>Status</Table.TextHeaderCell>
          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'TextHeaderCell' does not exist on type '... Remove this comment to see the full error message */}
          <Table.TextHeaderCell>Created At </Table.TextHeaderCell>
          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'Head' does not exist on type 'NamedExoti... Remove this comment to see the full error message */}
        </Table.Head>
        {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'Body' does not exist on type 'NamedExoti... Remove this comment to see the full error message */}
        <Table.Body height="auto">
          <EmptyState
            background="light"
            title="No audiences found"
            orientation="horizontal"
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
            icon={<SearchIcon color={colors.gray500} />}
            iconBgColor={colors.gray200}
            description="Click the button below to create a new Audience. Once done, you will see it come up in this list."
            primaryCta={<EmptyState.PrimaryButton>Create Audience</EmptyState.PrimaryButton>}
          />
          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'Body' does not exist on type 'NamedExoti... Remove this comment to see the full error message */}
        </Table.Body>
      </Table>
    </Pane>
  )
}

export default TableWithActionExample
