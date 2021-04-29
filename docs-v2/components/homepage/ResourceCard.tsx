import { Heading, Pane, majorScale, useTheme, Link as EvergreenLink } from "evergreen-ui"

interface Props {
  title: string
  logo: string
  url: string
}


const ResourceCard = ({title, logo, url}: Props) => {
  const { colors } = useTheme()

  return (
      <Pane width="100%">
        <EvergreenLink href={url} target="_blank">
          <Pane 
            borderRadius={8}
            border={`1px solid ${colors.gray400}`}
            padding={majorScale(3)}
            margin={majorScale(2)}
            background="white"
            hoverElevation={1}
            display="flex" 
            alignItems="center"
          >
            <Pane is="img" src={logo} width={24} height={24} marginRight={majorScale(2)}></Pane>
            <Heading size={400}>{title}</Heading>
          </Pane>
        </EvergreenLink>
      </Pane>
  )
}

export default ResourceCard