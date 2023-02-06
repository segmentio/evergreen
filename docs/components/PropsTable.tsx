import React from 'react'
import { Table, Pane, majorScale, Paragraph, Badge, Text, Heading } from 'evergreen-ui'
import InlineCode from './MDX/renderers/InlineCode'

interface Props {
  data: {
    displayName: string
    props: Record<string, PropDefinition>
  }
}

interface PropDefinition {
  description: string
  required: boolean
  type?: PropType
  tsType?: PropType
}

type PropType =
  | {
      name: 'enum'
      value: Array<{ value: string }>
    }
  | {
      name: 'union'
      value: PropType[]
    }
  | {
      name: 'custom' | 'signature'
      raw: string
    }

const COLUMNS = ['Property', 'Type', 'Description']

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
              const { type, tsType, required, description } = props[prop]
              return (
                <Table.Row key={prop} minHeight={64} height="unset" paddingY={majorScale(2)}>
                  <Table.Cell>
                    <Pane display="flex" alignItems="center">
                      <InlineCode>{prop}</InlineCode>
                      {required && <Badge marginLeft={majorScale(2)}>Required</Badge>}
                    </Pane>
                  </Table.Cell>
                  <Table.Cell>
                    <InlineCode>{resolveReadableType(tsType ?? type)}</InlineCode>
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

const resolveReadableType = (type: PropType | undefined): string => {
  if (type == null) {
    return 'unknown'
  }

  switch (type.name) {
    case 'enum':
      return type.value.map(({ value }) => value).join(' | ')
    case 'union':
      return type.value.map((subType: PropType) => resolveReadableType(subType)).join(' | ')
    case 'custom':
    case 'signature':
      return type.raw
    default:
      return (type as { name: string }).name
  }
}

export default PropsTable
