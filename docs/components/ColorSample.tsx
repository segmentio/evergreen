import { majorScale, minorScale, Pane, useTheme, Text } from 'evergreen-ui'

interface ColorSampleProps {
  hex: string
  name: string
  description?: string
}

const ColorSample: React.FC<ColorSampleProps> = ({ hex, name, description }) => {
  const { colors } = useTheme()
  return (
    <Pane display="flex" alignItems="center">
      <Pane width={majorScale(10)} height={majorScale(10)} backgroundColor={hex} borderRadius={5} />
      <Pane marginLeft={majorScale(2)} display="flex" alignItems="flex-start" flexDirection="column">
        <Text fontWeight="bold" size={500} marginBottom={majorScale(1)}>
          {name}
        </Text>
        {description && (
          <Text color="muted" marginBottom={majorScale(1)}>
            {description}
          </Text>
        )}
        <Text padding={minorScale(1)} backgroundColor={colors.gray100}>
          {hex}
        </Text>
      </Pane>
    </Pane>
  )
}

export default ColorSample
