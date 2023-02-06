import React, { useState } from 'react'
import SearchBar from './SearchBar'
import * as evergreen from 'evergreen-ui'
import { Pane, majorScale, Text } from 'evergreen-ui'
import CopyableIcon from './CopyableIcon'
import { EvergreenExport } from '../types/evergreen-export'

const IconSearch: React.FC = () => {
  const [query, setQuery] = useState<string>('')

  const iconComponentNames = Object.keys(evergreen)
    .filter((componentName) => componentName.endsWith('Icon') && componentName !== 'Icon')
    .filter(
      (componentName) => componentName.toLowerCase().indexOf(query.toLowerCase()) !== -1
    ) as Array<EvergreenExport>

  return (
    <Pane width="100%" minHeight={250}>
      <SearchBar query={query} onQueryChange={setQuery} placeholder="Search through icons below" />
      {iconComponentNames.length > 0 ? (
        <Pane
          marginTop={majorScale(5)}
          display="grid"
          rowGap={majorScale(5)}
          columnGap={majorScale(8)}
          gridTemplateColumns="repeat(auto-fill, 168px)"
        >
          {iconComponentNames.map((componentName) => (
            <CopyableIcon key={componentName} name={componentName} />
          ))}
        </Pane>
      ) : (
        <Pane display="flex" alignItems="center" justifyContent="center" width="100%" marginTop={majorScale(5)}>
          <Text color="muted">{`No results found for term ${query}`} </Text>
        </Pane>
      )}
    </Pane>
  )
}

export default IconSearch
