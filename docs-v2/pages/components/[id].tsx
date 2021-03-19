import React from 'react'
import Layout from '../../components/Layout'
import { useRouter } from 'next/router'
import IA, { Item } from '../../utils/IA'
import PageHeader from '../../components/PageHeader'
import { Pane, majorScale } from 'evergreen-ui'

interface Props {}

const ComponentPage: React.FC<Props> = () => {
  const { query } = useRouter()
  const { id } = query

  const component = IA.components.items
    .reduce((acc, subtree) => {
      return [...(subtree.items || []), ...acc]
    }, [] as Item[])
    .find(component => component.id === id)

  if (!component) {
    return null
  }

  const { name } = component
  return (
    <Layout title={`Evergreen | ${name} Documentation`}>
      <Pane
        width="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        marginX="auto"
        padding={majorScale(5)}
        maxWidth={1200}
      >
        <PageHeader
          title={name!}
          description="Buttons are used as call-to-actions for users, indicating that they can take an action on a particular part of the page"
          tabs={[
            {
              label: 'Details',
              to: '/details'
            },
            {
              label: 'Properties',
              to: '/properties'
            }
          ]}
        />
      </Pane>
    </Layout>
  )
}

export default ComponentPage
