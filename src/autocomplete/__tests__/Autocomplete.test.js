import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import starWarsNames from 'starwars-names'
import Box from 'ui-box'
import { Autocomplete } from '..'
import { Button } from '../../buttons'
import { Pane } from '../../layers'
import Option from '../../select-menu/src/Option'
import { TextInput } from '../../text-input'
import { Small, Text } from '../../typography'

// Generate a big list of items
const itemsWithdetails = starWarsNames.all.map(x => ({
  name: x,
  unique_id: `${x}-${Math.floor(Math.random() * 100)}`,
  power_score: Math.floor(Math.random() * 100)
}))

describe('Autocomplete', () => {
  it('does not crash when rendering', () => {
    expect(() =>
      render(
        <Autocomplete
          onChange={() => {}}
          items={itemsWithdetails}
          renderItem={({ item }) => (
            <Option key={item.unique_id}>
              <Pane display="flex" alignItems="center" justifyContent="center" gap={10}>
                <Text color="grey">{item.name}</Text>
                <Small color="grey" size={300}>
                  (Power Score: {item.power_score})
                </Small>
              </Pane>
            </Option>
          )}
        >
          {({ getInputProps, getRef, getToggleButtonProps, inputValue, toggleMenu }) => (
            <Box ref={ref => getRef(ref)} display="inline-block">
              <TextInput placeholder="Custom item renderer" value={inputValue} {...getInputProps()} />
              <Button onClick={toggleMenu} {...getToggleButtonProps()}>
                Trigger
              </Button>
            </Box>
          )}
        </Autocomplete>
      )
    ).not.toThrowError()
  })

  it('can render custom autocomplete items', () => {
    expect(() => {
      const { getAllByTestId } = render(
        <Autocomplete
          onChange={() => {}}
          items={itemsWithdetails}
          renderItem={({ item }) => (
            <Option key={item.unique_id} data-testid="custom-autocomplete-item">
              <Pane display="flex" alignItems="center" justifyContent="center" gap={10}>
                <Text color="grey">{item.name}</Text>
                <Small color="grey" size={300}>
                  (Power Score: {item.power_score})
                </Small>
              </Pane>
            </Option>
          )}
        >
          {({ getInputProps, getRef, getToggleButtonProps, inputValue, toggleMenu }) => (
            <Box ref={ref => getRef(ref)} display="inline-block">
              <TextInput placeholder="Custom item renderer" value={inputValue} {...getInputProps()} />
              <Button onClick={toggleMenu} {...getToggleButtonProps()}>
                Trigger
              </Button>
            </Box>
          )}
        </Autocomplete>
      )

      expect(getAllByTestId('custom-autocomplete-item').length).toEqual(itemsWithdetails.length)
    })
  })

  it('can filter custom autocomplete items', () => {
    expect(() => {
      const { getAllByTestId, getByTestId } = render(
        <Autocomplete
          onChange={() => {}}
          items={itemsWithdetails}
          renderItem={({ item }) => (
            <Option key={item.unique_id} data-testid="custom-autocomplete-item">
              <Pane display="flex" alignItems="center" justifyContent="center" gap={10}>
                <Text color="grey">{item.name}</Text>
                <Small color="grey" size={300}>
                  (Power Score: {item.power_score})
                </Small>
              </Pane>
            </Option>
          )}
        >
          {({ getInputProps, getRef, getToggleButtonProps, inputValue, toggleMenu }) => (
            <Box ref={ref => getRef(ref)} display="inline-block">
              <TextInput
                placeholder="Custom item renderer"
                value={inputValue}
                {...getInputProps()}
                data-testid="autocomplete-search-input"
              />
              <Button onClick={toggleMenu} {...getToggleButtonProps()}>
                Trigger
              </Button>
            </Box>
          )}
        </Autocomplete>
      )

      const input = getByTestId('autocomplete-search-input')
      const inputSearchValue = itemsWithdetails[0].name
      fireEvent.change(input, { target: { value: inputSearchValue } })

      expect(input.value).toBe(inputSearchValue)
      expect(getAllByTestId('custom-autocomplete-item').length).toBeLessThan(itemsWithdetails.length)
      expect(getAllByTestId('custom-autocomplete-item').length).toBeGreaterThan(0)
    })
  })

  it('can handle search query with no results', () => {
    expect(() => {
      const { getAllByTestId, getByTestId } = render(
        <Autocomplete
          onChange={() => {}}
          items={itemsWithdetails}
          renderItem={({ item }) => (
            <Option key={item.unique_id} data-testid="custom-autocomplete-item">
              <Pane display="flex" alignItems="center" justifyContent="center" gap={10}>
                <Text color="grey">{item.name}</Text>
                <Small color="grey" size={300}>
                  (Power Score: {item.power_score})
                </Small>
              </Pane>
            </Option>
          )}
        >
          {({ getInputProps, getRef, getToggleButtonProps, inputValue, toggleMenu }) => (
            <Box ref={ref => getRef(ref)} display="inline-block">
              <TextInput
                placeholder="Custom item renderer"
                value={inputValue}
                {...getInputProps()}
                data-testid="autocomplete-search-input"
              />
              <Button onClick={toggleMenu} {...getToggleButtonProps()}>
                Trigger
              </Button>
            </Box>
          )}
        </Autocomplete>
      )

      const input = getByTestId('autocomplete-search-input')
      fireEvent.change(input, { target: { value: 'RandomTextWhichDoesNotExistInItems' } })

      expect(input.value).toBe('RandomTextWhichDoesNotExistInItems')
      expect(getAllByTestId('custom-autocomplete-item').length).toEqual(0)
    })
  })
})
