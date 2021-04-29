import { Heading, Icon, Pane, Paragraph, useTheme } from "evergreen-ui"

interface Props {
  icon: typeof Icon,
  title: string,
  description: string
}

const ValueCard = ({icon, title, description}: Props) => {
  const { colors } = useTheme()

  return (
    <Pane marginRight={32}>
      <Icon
        icon={icon}
        size={24}
        borderRadius="50%"
        padding={16}
        color={colors.blue500}
        backgroundColor={colors.blue50}
        marginBottom={32}
      />
      <Heading size={600} marginBottom={8}>{title}</Heading>
      <Paragraph size={500}>{description}</Paragraph>
    </Pane>
  )
}

export default ValueCard