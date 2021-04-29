import { Heading, Link, majorScale, Pane, Paragraph, useTheme } from "evergreen-ui"

interface Props {
  title: string,
  description: string,
  linkText?: string,
  link?: string,
  img?: string
}

const GetStartedCard = ({title, description, linkText, link, img}: Props) => {
  const { colors } = useTheme()

  return (
    <Pane
      padding={majorScale(5)}
      paddingRight={majorScale(3)}
      backgroundColor={colors.gray50}
      borderRadius={8}
      width="100%"
      marginX={16}
      display="flex"
      justifyContent="space-between"
    >
      <Pane>
        <Heading marginBottom={majorScale(1)}>{title}</Heading>
        <Paragraph marginBottom={majorScale(3)}>{description}</Paragraph>
        <Link href={link}>{linkText}</Link>
      </Pane>
      <Pane is="img" src={img}></Pane>
    </Pane>
  )
}

export default GetStartedCard