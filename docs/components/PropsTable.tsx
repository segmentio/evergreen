import React from 'react'
import { Table, Pane, majorScale, Paragraph, Badge, Text, Heading } from 'evergreen-ui'
import InlineCode from './MDX/renderers/InlineCode'

interface Props {
  data: any
}

const resolveReadableType: (type: any) => string = (type) => {
  switch (type.name) {
    case 'enum':
      return type.value.map(({ value }: { value: string }) => value).join(' | ')
    case 'union':
      return type.value.map((subType: any) => resolveReadableType(subType)).join(' | ')
    case 'custom':
      return type.raw
    default:
      return type.name
  }
}

const COLUMNS = ['Property', 'Type', 'Description'] as const

const PropsTable: React.FC<Props> = ({ data }) => {
  const { displayName, props } = data

  return (
    <Pane width="100%" maxWidth={1152}>
      <Heading marginY={majorScale(2)} size={800}>
        {displayName}
      </Heading>
      {props ? (
        <Table width="100%">
          <Table.Head>
            {COLUMNS.map((column) => {
              return <Table.TextHeaderCell key={column}>{column}</Table.TextHeaderCell>
            })}
          </Table.Head>
          <Table.Body>
            {Object.keys(props).map((prop) => {
              const { type, required, description } = props[prop]
              return (
                <Table.Row key={prop} minHeight={64} height="unset" paddingY={majorScale(2)}>
                  <Table.Cell>
                    <Pane display="flex" alignItems="center">
                      <InlineCode>{prop}</InlineCode>
                      {/* <Heading size={400}>{prop}</Heading> */}
                      {required && <Badge marginLeft={majorScale(2)}>Required</Badge>}
                    </Pane>
                  </Table.Cell>
                  <Table.Cell>
                    <Text>{resolveReadableType(type)}</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Paragraph>{description}</Paragraph>
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      ) : (
        <Text color="muted">There are no props to show.</Text>
      )}
    </Pane>
  )
}

export default PropsTable
