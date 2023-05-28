import { majorScale, Pane } from 'evergreen-ui'
import React from 'react'

const RuleLayout: React.FC = ({ children }) => {
  return (
    <Pane display="flex" marginBottom={majorScale(4)}>
      {children}
    </Pane>
  )
}

export default RuleLayout
