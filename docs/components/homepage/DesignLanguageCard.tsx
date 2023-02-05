import React from 'react'
import { Heading, majorScale, Pane, Paragraph } from 'evergreen-ui'
import Thumbnail from '../Thumbnail'
import { Item } from '../../constants/IA'

interface Props {
  img: JSX.Element
  title: string
  description: string
  type: string
  link?: JSX.Element
  items: Item[]
}

const DesignLanguageCard = ({ img, title, description, type, link, items }: Props) => {
  return (
    <Pane marginX={majorScale(2)} marginBottom={majorScale(4)} paddingY={majorScale(2)} display="flex">
      <Pane display="flex" alignItems="flex-start">
        <Pane>{img}</Pane>
        <Pane marginX={majorScale(4)} marginTop={4}>
          <Heading marginBottom={majorScale(1)}>{title}</Heading>
          <Paragraph marginBottom={majorScale(2)}>{description}</Paragraph>
          {link}
        </Pane>
      </Pane>
      <Pane display="flex" alignItems="flex-start">
        {items.map((item) => {
          return (
            <Pane key={item.id} width={majorScale(24)} paddingX={majorScale(2)}>
              <Thumbnail
                id={item.id}
                name={item.name}
                type={type}
                imageSrc={item.image}
                imageHighlightSrc={item.imageHighlight}
              />
            </Pane>
          )
        })}
      </Pane>
    </Pane>
  )
}

export default DesignLanguageCard
