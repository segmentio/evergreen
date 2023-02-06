import React from 'react'
import { Heading, Link, majorScale, Pane, Paragraph, useTheme } from 'evergreen-ui'

interface Props {
  title: string
  description: string
  linkText?: string
  link?: string
  img?: JSX.Element
}

const GetStartedCard = ({ title, description, linkText, link, img }: Props) => {
  const { colors } = useTheme()

  return (
    <Pane
      padding={majorScale(5)}
      paddingRight={majorScale(3)}
      backgroundColor={colors.gray50}
      borderRadius={majorScale(1)}
      width="100%"
      marginX={majorScale(2)}
      display="flex"
      justifyContent="space-between"
    >
      <Pane>
        <Heading marginBottom={majorScale(1)}>{title}</Heading>
        <Paragraph marginBottom={majorScale(3)}>{description}</Paragraph>
        <Link href={link}>{linkText}</Link>
      </Pane>
      {img}
    </Pane>
  )
}

export default GetStartedCard
