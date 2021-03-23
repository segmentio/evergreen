import React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import * as evergreen from 'evergreen-ui'

interface Props {
  source: string
}

const Playground: React.FC<Props> = ({ source }) => {
  return (
    <LiveProvider code={source} scope={{ ...evergreen }}>
      <LivePreview />
      <LiveError />
      <LiveEditor />
    </LiveProvider>
  )
}

export default Playground
