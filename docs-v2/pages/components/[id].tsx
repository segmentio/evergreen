import React from 'react'
import Layout from '../../components/Layout'
import { Text } from 'evergreen-ui'

interface Props {
  id: string
}

const ComponentPage: React.FC<Props> = ({ id }) => {
  return (
    <Layout>
      <Text> Hello {id} </Text>
    </Layout>
  )
}

export default ComponentPage
