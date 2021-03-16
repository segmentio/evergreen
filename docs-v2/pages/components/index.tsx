import React from 'react'
import Layout from '../../components/Layout'
import { Text } from 'evergreen-ui'

interface Props {}

const ComponentsPage: React.FC<Props> = () => {
  return (
    <Layout>
      <Text> Hello world!</Text>
    </Layout>
  )
}

export default ComponentsPage
