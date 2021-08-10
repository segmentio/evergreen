import { Pane, Card, Heading, Paragraph, TickCircleIcon, CrossIcon, majorScale, minorScale } from 'evergreen-ui'
import React from 'react'

interface Props {
  type: string
  description: string
  image?: string
  imageAlt?: string
}

const RuleCard: React.FC<Props> = ({ type, description, image, imageAlt }) => {
  const color = type === 'Do' ? '#52BD94' : '#D14343'
  const icon = type === 'Do' ? <TickCircleIcon color={color} /> : <CrossIcon color={color} />
  return (
    <Card width="500px" border="default" marginRight={majorScale(5)} padding={majorScale(3)}>
      {image && (
        <Pane marginBottom={majorScale(2)}>
          <img src={image} alt={imageAlt} width="100%" />
        </Pane>
      )}
      <Pane>
        <Pane height={minorScale(1)} background={color} marginBottom={majorScale(2)} borderRadius={majorScale(50)} />
        <Pane display="flex" alignItems="center" marginBottom={majorScale(1)}>
          {icon}
          <Heading size={500} color={color} marginLeft={majorScale(1)}>
            {type}
          </Heading>
        </Pane>
        <Paragraph>{description}</Paragraph>
      </Pane>
    </Card>
  )
}

export default RuleCard
