import React, { useState } from 'react'
import { Pane, Text, Link as EvergreenLink, majorScale } from 'evergreen-ui'
import Link from 'next/link'

interface Props {
  id?: string
  name?: string
  type?: string
  imageSrc?: string
  imageHighlightSrc?: string
}

const Thumbnail: React.FC<Props> = ({ id, name, type, imageSrc, imageHighlightSrc }) => {
  const [highlight, setHighlight] = useState(0)

  return (
    <Link key={id} href={`/${type}/${id}`} passHref>
      <Pane
        width="100%"
        display="flex"
        flexDirection="column"
        overflow="hidden"
        cursor="pointer"
        is={EvergreenLink}
        borderRadius={8}
        hoverElevation={1}
        onMouseOver={() => setHighlight(1)}
        onMouseOut={() => setHighlight(0)}
      >
        <Pane
          width="100%"
          height="auto"
          borderTopLeftRadius={8}
          borderTopRightRadius={8}
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          position="relative"
        >
          <Pane 
            is="img"
            src={imageSrc}
            width="100%"
            height="auto" />
          <Pane 
            is="img"
            width="100%"
            height="auto"
            src={imageHighlightSrc}
            opacity={highlight}
            position="absolute"
            top={0}
            left={0} 
            style={{"transition":"opacity ease 0.4s"}}/>  
        </Pane>
        <Pane paddingX={majorScale(2)} paddingY={majorScale(2)}>
          <Text size={400}>{name}</Text>
        </Pane>
      </Pane>
    </Link>
  )
}

export default Thumbnail
