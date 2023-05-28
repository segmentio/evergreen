import React from 'react'
import { Heading, Pane, majorScale, useTheme, Link as EvergreenLink } from 'evergreen-ui'

interface Props {
  title: string
  logo: JSX.Element
  url: string
}

const ResourceCard = ({ title, logo, url }: Props) => {
  const { colors } = useTheme()

  return (
    <Pane width="100%">
      <EvergreenLink href={url} target="_blank">
        <Pane
          borderRadius={majorScale(1)}
          border={`1px solid ${colors.gray400}`}
          padding={majorScale(3)}
          margin={majorScale(2)}
          background="white"
          hoverElevation={1}
          display="flex"
          alignItems="center"
        >
          {logo}
          <Heading size={400} marginLeft={majorScale(2)}>
            {title}
          </Heading>
        </Pane>
      </EvergreenLink>
    </Pane>
  )
}

export default ResourceCard
