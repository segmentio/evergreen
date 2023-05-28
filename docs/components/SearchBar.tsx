import React, { ChangeEvent, useCallback } from 'react'
import { SearchInput } from 'evergreen-ui'

interface Props {
  query: string
  placeholder?: string
  onQueryChange: (query: string) => void
}

const SearchBar: React.FC<Props> = ({ query, onQueryChange, placeholder }) => {
  const handleQueryChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onQueryChange(event.target.value)
    },
    [onQueryChange]
  )
  return (
    <SearchInput
      query={query}
      onChange={handleQueryChange}
      placeholder={placeholder}
      // eslint-disable-next-line
      // @ts-ignore this does exist in evergreen. types need to be updated
      appearance="none"
      width="100%"
      borderBottom="1px solid #efefef !important"
    />
  )
}

export default SearchBar
