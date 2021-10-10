import React from 'react'
import { render } from '@testing-library/react'
import starWarsNames from 'starwars-names'
import Box from 'ui-box'
import { Autocomplete } from '..'
import { Button } from '../../buttons'
import { Image } from '../../image'
import { Pane } from '../../layers'
import Option from '../../select-menu/src/Option'
import { TextInput } from '../../text-input'
import { Small, Text } from '../../typography'

// Generate a big list of items
const itemsWithdetails = starWarsNames.all.map(x => ({
  name: x,
  unique_id: `${x}-${Math.floor(Math.random() * 100)}`,
  image_src: 'http://lorempixel.com/400/200/',
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
                <Image src={item.image_src} width={50} />
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

  it('does not crash when rendering', () => {
    expect(() =>
      render(
        <Autocomplete
          onChange={() => {}}
          items={itemsWithdetails}
          renderItem={({ item }) => (
            <Option key={item.unique_id}>
              <Pane display="flex" alignItems="center" justifyContent="center" gap={10}>
                <Image src={item.image_src} width={50} />
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
})
