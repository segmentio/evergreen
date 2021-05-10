import React from 'react'
import { Alert, majorScale } from 'evergreen-ui'

interface Props {
  children: {
    props: {
      children: string
    }
  }
}

const Blockquote: React.FC<Props> = ({ children }) => {
  const { children: title } = children.props

  return <Alert title={title} marginBottom={majorScale(4)} />
}

export default Blockquote
