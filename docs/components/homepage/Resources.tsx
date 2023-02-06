import React from 'react'
import { Pane, majorScale, Heading, Paragraph, Link, useTheme } from 'evergreen-ui'
import ResourceCard from './ResourceCard'
import FigmaIcon from '../icons/FigmaIcon'
import SegmentIcon from '../icons/SegmentIcon'

const Resources = () => {
  const { colors } = useTheme()

  return (
    <Pane background={colors.gray50} paddingX={majorScale(5)}>
      <Pane paddingY={majorScale(5)} marginX="auto" maxWidth={majorScale(143)}>
        <Pane marginY={majorScale(5)} marginLeft={majorScale(2)}>
          <Heading size={800} marginBottom={majorScale(2)}>
            Resources
          </Heading>
          <Paragraph size={400}>
            A collection of tools, kits, plugins and guides to help simplify the creation process for our users.{' '}
            <Link href="">See all resources</Link>
          </Paragraph>
        </Pane>
        <Pane display="flex">
          <ResourceCard title="Evergreen Figma Library" logo={<FigmaIcon />} url="https://www.figma.com/@twilio" />
          <ResourceCard title="Segment Brand Hub" logo={<SegmentIcon />} url="https://brand.segment.com/" />
        </Pane>
      </Pane>
    </Pane>
  )
}

export default Resources
