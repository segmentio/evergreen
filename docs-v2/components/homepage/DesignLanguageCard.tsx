import { Heading, Link, majorScale, Pane, Paragraph } from "evergreen-ui"
import React from "react"
import Thumbnail from "../Thumbnail"
import { Item } from "../../utils/IA"

interface Props {
  img: string,
  title: string,
  description: string,
  linkText?: string,
  link?: string,
  items: Item[]
}

const DesignLanguageCard = ({img, title, description, linkText, link, items}: Props) => {
  return (
    <Pane 
      marginX={majorScale(2)}
      marginBottom={majorScale(4)}
      paddingY={majorScale(2)}
      display="flex"
      
    >
      <Pane display="flex" alignItems="flex-start">
        <Pane is="img" src={img} marginRight={majorScale(4)}></Pane>
        <Pane marginRight={majorScale(4)}>
          <Heading marginBottom={majorScale(1)}>{title}</Heading>
          <Paragraph marginBottom={majorScale(2)}>{description}</Paragraph>
          <Link href={`/${link}`}>{linkText}</Link>
        </Pane>
      </Pane>
      <Pane display="flex" alignItems="flex-start">
      {items.map(item => {
        return (
          <Pane 
            width={majorScale(24)} 
            paddingX={majorScale(2)}
          >
            <Thumbnail 
              id={item.id}
              name={item.name}
              type={link}
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