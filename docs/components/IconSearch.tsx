import React, { useState } from 'react'
import SearchBar from './SearchBar'
import { css } from 'otion'
import * as evergreen from 'evergreen-ui'

const { Pane, majorScale, Text } = evergreen

interface Props {}

const Item: React.FC<{ name: string }> = ({ name }) => {
  const readableName = name.slice(0, name.indexOf('Icon'))
  // @ts-ignore
  if (evergreen[name]) {
    return (
      <Pane
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        cursor="pointer"
        borderRadius={5}
        paddingY={majorScale(3)}
        className={css({
          ':hover': {
            opacity: 0.8,
            background: '#efefef60',
          },
        })}
      >
        {/*  @ts-ignore */}
        {React.createElement(evergreen[name] as any, {
          size: majorScale(3),
          color: 'default',
          marginBottom: majorScale(3),
        })}
        <Text color="muted" size={300} maxWidth="100%">
          {readableName}
        </Text>
      </Pane>
    )
  } else {
    return null
  }
}
const IconSearch: React.FC<Props> = () => {
  const [query, setQuery] = useState<string>('')

  const iconComponentNames = Object.keys(evergreen)
    .filter((componentName) => componentName.endsWith('Icon') && componentName !== 'Icon')
    .filter((componentName) => componentName.toLowerCase().indexOf(query.toLowerCase()) !== -1)

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
          {iconComponentNames.map((componentName) => {
            console.log(componentName.slice(0, componentName.indexOf('Icon')))
            return <Item key={componentName} name={componentName} />
          })}
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
