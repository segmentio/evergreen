import { majorScale, Pane } from 'evergreen-ui'
import React from 'react'

interface Props {}

const RuleLayout: React.FC<Props> = ({ children }) => {
  return (
    <Pane display="flex" marginBottom={majorScale(4)}>
      {children}
    </Pane>
  )
}

export default RuleLayout
