import React from 'react'
import { MdxRemote } from 'next-mdx-remote/types'
import hydrate from 'next-mdx-remote/hydrate'
import components from './componentMapping'

interface Props {
  source: MdxRemote.Source
}

const MDX: React.FC<Props> = ({ source }) => {
  const content = hydrate(source, { components })

  return <>{content}</>
}

export default MDX
