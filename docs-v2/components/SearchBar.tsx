import React, { useCallback } from 'react'
import { SearchInput } from 'evergreen-ui'

interface Props {
  query: string
  placeholder?: string
  onQueryChange: (query: string) => void
}

const SearchBar: React.FC<Props> = ({ query, onQueryChange, placeholder }) => {
  const handleQueryChange = useCallback(
    e => {
      onQueryChange(e.target.value)
    },
    [onQueryChange]
  )
  return (
    <SearchInput
      query={query}
      onChange={handleQueryChange}
      placeholder={placeholder}
      // @ts-ignore
      appearance="none"
      width="100%"
      borderBottom="1px solid #efefef !important"
    />
  )
}

export default SearchBar
