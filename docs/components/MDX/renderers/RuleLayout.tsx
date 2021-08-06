import { Pane } from 'evergreen-ui'
import React from 'react'

interface Props {}

const RuleLayout: React.FC<Props> = ({ children }) => {
  return <Pane display="flex">{children}</Pane>
}

export default RuleLayout
