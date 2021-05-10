import React from 'react'
import SyntaxHighlighter from '../../SyntaxHighlighter'
import Playground from '../../Playground'

interface Props {
  className: string
  metastring: string
  children: any
}

const Code: React.FC<Props> = ({ className, metastring, children }) => {
  if (metastring !== 'readonly') {
    return <Playground source={children} />
  } else {
    const [, language] = className.split('language-')
    return <SyntaxHighlighter language={language} source={children} />
  }
}

export default Code
