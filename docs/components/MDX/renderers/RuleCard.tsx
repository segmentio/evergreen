import { Pane, Card, Heading, Paragraph, TickCircleIcon, CrossIcon } from 'evergreen-ui'
import React from 'react'

interface Props {
  type: string
  description: string
  image: string
}

const RuleCard: React.FC<Props> = ({ type, description, image }) => {
  const color = type === 'Do' ? '#52BD94' : '#D14343'
  const icon = type === 'Do' ? <TickCircleIcon color={color} /> : <CrossIcon color={color} />
  return (
    /*
    <Card width="500px" marginRight="40px">
      <Pane height="4px" background={color} marginBottom="8px" />
      <Heading size={500} color={color}>
        {type}
      </Heading>
      <Paragraph marginBottom="16px">{description}</Paragraph>
      {image && <img src={image} width="100%" />}
    </Card>
    */
    <Card width="500px" border="default" marginRight="40px" padding="24px">
      {image && (
        <Pane marginBottom="16px">
          <img src={image} alt={image} width="100%" />
        </Pane>
      )}
      <Pane height="4px" background={color} marginBottom="16px" />
      <Pane display="flex" alignItems="center" marginBottom="8px">
        {icon}
        <Heading size={500} color={color} marginLeft="8px">
          {type}
        </Heading>
      </Pane>
      <Paragraph>{description}</Paragraph>
    </Card>
  )
}

export default RuleCard
