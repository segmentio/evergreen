import React from 'react'
import SyntaxHighlighter from '../../SyntaxHighlighter'
import Playground from '../../Playground'

export interface SourceCodeProps {
  className: string
  metastring: string
  children: string
}

const SourceCode: React.FC<SourceCodeProps> = ({ className, metastring, children }) => {
  if (metastring !== 'readonly') {
    return <Playground source={children} />
  } else {
    const [, language] = className.split('language-')
    return <SyntaxHighlighter language={language} source={children} />
  }
}

export default SourceCode
