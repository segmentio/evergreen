import React from 'react'
import { HeadingOwnProps, Heading, Pane, majorScale, Link, LinkIcon } from 'evergreen-ui'

export interface SectionHeadingProps extends Pick<HeadingOwnProps, 'size'> {
  children: string
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ size, children }) => {
  const idIndex = children.indexOf('{#')
  const text = idIndex !== -1 ? children.substring(0, idIndex) : children

  const id =
    idIndex !== -1
      ? children.trim().substring(idIndex + 2, children.length - 1)
      : `${children
          .split(' ')
          .map((child) => child.toLowerCase())
          .join('_')}`

  return (
    <Pane display="flex" alignItems="center" id={id} marginY={majorScale(2)}>
      <Heading size={size} id={id}>
        {text}
      </Heading>
      <Link href={`#${id}`} marginLeft={majorScale(2)}>
        <LinkIcon size={12} />
      </Link>
    </Pane>
  )
}

export default SectionHeading
