import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import starWarsNames from 'starwars-names'
import { TextInput } from '../../text-input'
import { Button } from '../../buttons'
import { Autocomplete } from '..'

// Generate a big list of items
const items = [
  ...starWarsNames.all,
  ...starWarsNames.all.map(x => `${x} 2`),
  ...starWarsNames.all.map(x => `${x} 3`)
].sort((a, b) => {
  const nameA = a.toUpperCase()
  const nameB = b.toUpperCase()
  if (nameA < nameB) {
    return -1
  }

  if (nameA > nameB) {
    return 1
  }

  return 0
})

const handleChange = selectedItem => {
  console.log(selectedItem)
}

storiesOf('자동완성', module).add('자동완성', () => (
  <Box>
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <Autocomplete
        title="Starwars names"
        onChange={handleChange}
        items={items}
      >
        {({ getInputProps, getRef, inputValue }) => (
          <TextInput
            placeholder="감각"
            value={inputValue}
            ref={ref => getRef(ref)}
            {...getInputProps()}
          />
        )}
      </Autocomplete>
    </Box>
    <Box padding={40}>
      <Autocomplete
        title="Starwars names"
        onChange={handleChange}
        items={items}
      >
        {({ getInputProps, getRef, inputValue, openMenu }) => (
          <TextInput
            width={160}
            placeholder="효과가 적용되는 최소 너비"
            value={inputValue}
            ref={ref => getRef(ref)}
            {...getInputProps({
              onFocus: () => {
                openMenu()
              }
            })}
          />
        )}
      </Autocomplete>
    </Box>
    <Box padding={40}>
      <Autocomplete onChange={handleChange} items={items}>
        {({ getInputProps, getRef, openMenu, inputValue }) => (
          <TextInput
            placeholder="초점 적용하기"
            value={inputValue}
            ref={ref => getRef(ref)}
            {...getInputProps({
              onFocus: () => {
                openMenu()
              }
            })}
          />
        )}
      </Autocomplete>
    </Box>
    <Box padding={40}>
      <Autocomplete
        isFilterDisabled
        title="필터 해제"
        onChange={handleChange}
        items={items}
      >
        {({ getInputProps, openMenu, getRef, inputValue }) => (
          <TextInput
            placeholder="Disable filter and open on focus"
            value={inputValue}
            ref={ref => getRef(ref)}
            {...getInputProps({
              onFocus: () => {
                openMenu()
              }
            })}
          />
        )}
      </Autocomplete>
    </Box>
    <Box padding={40}>
      <Autocomplete title="Suggestions" onChange={handleChange} items={items}>
        {({ getInputProps, getRef, openMenu, inputValue }) => (
          <TextInput
            placeholder="Open on focus with title"
            value={inputValue}
            ref={ref => getRef(ref)}
            {...getInputProps({
              onFocus: () => {
                openMenu()
              }
            })}
          />
        )}
      </Autocomplete>
    </Box>
    <Box padding={40}>
      <Autocomplete onChange={handleChange} items={items}>
        {({
          getInputProps,
          getToggleButtonProps,
          getRef,
          inputValue,
          toggleMenu
        }) => (
          <Box ref={ref => getRef(ref)} display="inline-block">
            <TextInput
              placeholder="버튼을 사용한 트릭 "
              value={inputValue}
              {...getInputProps()}
            />
            <Button onClick={toggleMenu} {...getToggleButtonProps()}>
              Trigger
            </Button>
          </Box>
        )}
      </Autocomplete>
    </Box>
  </Box>
))
