import { Heading, Icon, majorScale, Pane, Paragraph, useTheme } from 'evergreen-ui'

interface Props {
  icon: typeof Icon
  title: string
  description: string
}

const ValueCard = ({ icon, title, description }: Props) => {
  const { colors } = useTheme()

  return (
    <Pane marginX={majorScale(2)}>
      <Icon
        icon={icon}
        size={majorScale(3)}
        borderRadius="50%"
        padding={majorScale(2)}
        color={colors.blue500}
        backgroundColor={colors.blue50}
        marginBottom={majorScale(4)}
      />
      <Heading size={600} marginBottom={majorScale(1)}>
        {title}
      </Heading>
      <Paragraph size={500}>{description}</Paragraph>
    </Pane>
  )
}

export default ValueCard
