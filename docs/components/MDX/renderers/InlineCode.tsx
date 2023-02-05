import React from 'react'
import { Code, useTheme } from 'evergreen-ui'

const InlineCode: React.FC = ({ children }) => {
  const { colors } = useTheme()

  return (
    <Code
      paddingX={4}
      paddingY={2}
      fontSize="12px"
      fontWeight={300}
      fontFamily="ui-monospace, Consolas, Menlo, 'SF Mono', monospace"
      borderRadius="4px"
      color={colors.blue800}
      backgroundColor={colors.blue50}
      borderColor={colors.blue200}
      // eslint-disable-next-line
      // @ts-ignore Types in ui-box need to be updated
      style={{ WebkitFontSmoothing: 'antialiased' }}
    >
      {children}
    </Code>
  )
}

export default InlineCode
