import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { useTheme, majorScale, Pane, DefaultThemeColors } from 'evergreen-ui'
import ColorSample from './ColorSample'

const ColorSwatch: React.FC = () => {
  const [query, setQuery] = useState<string>('')
  const { colors } = useTheme()
  const colorKeys = (Object.keys(colors) as Array<keyof typeof colors>)
    .filter((colorKey) => colorKey.toLowerCase().startsWith(query.toLowerCase()))
    .filter((colorKey) => typeof colors[colorKey] === 'string') as Array<DefaultThemeColors>

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
        {colorKeys.map((colorKey) => (
          <ColorSample hex={colors[colorKey]} key={colorKey} name={colorKey} />
        ))}
      </Pane>
    </Pane>
  )
}

export default ColorSwatch
