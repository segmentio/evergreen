# Autocomplete

This package implements a `Autocomplete` component. This component only deals with rendering the list, not the actual input element.

## Example

![autocomplete](https://user-images.githubusercontent.com/564463/32072424-5cbbc1d6-ba47-11e7-8e8a-c131afed0902.gif)

## Key points

* Uses [Downshift](https://github.com/paypal/downshift) for autocomplete
* Uses [react-tiny-virtual-list](https://github.com/clauderic/react-tiny-virtual-list) for performant list rendering
* Uses [fuzzaldrin-plus](https://www.npmjs.com/package/fuzzaldrin-plus) for fuzzy filtering
* Uses `evergreen-popover` for the popover

## Usage

```jsx
<Autocomplete onChange={handleChange} items={items}>
  {({ key, getInputProps, getRef }) => (
    <TextInput key={key} innerRef={ref => getRef(ref)} {...getInputProps()} />
  )}
</Autocomplete>
```

## Prop types and default props

```js
static propTypes = {
  items: PropTypes.array.isRequired,
  selectedItem: PropTypes.any,
  defaultSelectedItem: PropTypes.any,
  children: PropTypes.func.isRequired,
  itemSize: PropTypes.number,
  renderItem: PropTypes.func,
  itemsFilter: PropTypes.func,
  isFilterDisabled: PropTypes.bool,
  popoverMinWidth: PropTypes.number,
  popoverMaxHeight: PropTypes.number,
  useSmartPositioning: PropTypes.bool,
  ...Downshift.propTypes,
}

static defaultProps = {
  itemToString: i => (i == null ? '' : String(i)),
  itemSize: 32,
  itemsFilter: fuzzyFilter,
  isFilterDisabled: false,
  popoverMinWidth: 200,
  popoverMaxHeight: 240,
  useSmartPositioning: false,
  renderItem: autocompleteItemRenderer,
}
```

## Complete Story

```jsx
import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import starWarsNames from 'starwars-names'
import { TextInput } from 'evergreen-text-input'
import { Autocomplete } from '../src/'

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

storiesOf('autocomplete', module).add('Autocomplete', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Autocomplete onChange={handleChange} items={items}>
      {({ key, getInputProps, getRef }) => (
        <TextInput
          key={key}
          innerRef={ref => getRef(ref)}
          {...getInputProps()}
        />
      )}
    </Autocomplete>
  </Box>
))
```
