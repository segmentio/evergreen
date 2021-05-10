import React from 'react'
import { Prism as Highlighter, SyntaxHighlighterProps } from 'react-syntax-highlighter'
import theme from './theme'

interface Props {
  language: SyntaxHighlighterProps['language']
  source: string
}

const SyntaxHighlighter: React.FC<Props> = ({ language, source }) => {
  return (
    <Highlighter language={language} style={theme}>
      {source.trim()}
    </Highlighter>
  )
}

export default SyntaxHighlighter
