import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { useTheme, majorScale, minorScale, Text, Pane } from 'evergreen-ui'

const Sample: React.FC<{ hex: string; name: string; description?: string }> = ({ hex, name, description }) => {
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

interface Props {}

const ColorSwatch: React.FC<Props> = () => {
  const [query, setQuery] = useState<string>('')
  const { colors } = useTheme()
  return (
    <Pane>
      <Pane marginBottom={majorScale(5)}>
        <SearchBar
          query={query}
          onQueryChange={setQuery}
          placeholder="Filter through the color palette by typing here."
        />
      </Pane>
      <Pane display="grid" gridTemplateColumns="repeat(2, 1fr)" gridRowGap={majorScale(4)}>
        {Object.keys(colors)
          .filter((colorKey) => colorKey.toLowerCase().startsWith(query.toLowerCase()))
          .filter((colorKey) => typeof colors[colorKey] === 'string')
          .map((colorKey) => {
            return <Sample hex={colors[colorKey]} key={colorKey} name={colorKey} />
          })}
      </Pane>
    </Pane>
  )
}

export default ColorSwatch
