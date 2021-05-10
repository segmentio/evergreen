import React from 'react'
import { Code } from 'evergreen-ui'

interface Props {}

const InlineCode: React.FC<Props> = ({ children }) => {
  return (
    <Code
      paddingX={2}
      paddingY={4}
      fontSize="12px"
      fontWeight={300}
      fontFamily="Menlo 'SF Mono' monospace"
      borderRadius="4px"
      backgroundColor="#F8F9FA"
      // eslint-disable-next-line
      // @ts-ignore Types in ui-box need to be updated
      WebkitFontSmoothing="antialiased"
    >
      {children}
    </Code>
  )
}

export default InlineCode
