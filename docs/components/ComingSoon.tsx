import React from 'react'
import { Heading, majorScale, Pane, Paragraph } from 'evergreen-ui'
import ComingSoonImage from './icons/ComingSoonImage'

const ComingSoon: React.FC = ({ children }) => {
  return (
    <Pane width="100%" display="flex" flexFlow="column" alignItems="center" padding={majorScale(5)} maxWidth={1200}>
      <ComingSoonImage />
      <Heading size={800} marginTop={majorScale(4)} marginBottom={majorScale(2)}>
        Coming Soon!
      </Heading>
      <Paragraph maxWidth={majorScale(56)} textAlign="center">
        {children}
      </Paragraph>
    </Pane>
  )
}

export default ComingSoon
