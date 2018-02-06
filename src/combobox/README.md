# Combobox

This package implements a `Combobox` component. This component combines a `Autocomplete` component with a `TextInput` and a `Button`.

## Example

![combobox](https://user-images.githubusercontent.com/564463/32206959-e7722c36-bdb5-11e7-8ac6-7d0b695e7bcb.gif)

## Key points

* Uses a `Autocomplete` component
* Clicking the button will show all items
* Typing text will filter the list

## Usage

```jsx
<Combobox items={items} onChange={handleChange} />
```

## Prop types and default props

```js
static propTypes = {
  ...Box.propTypes,
  items: PropTypes.array.isRequired,
  selectedItem: PropTypes.any,
  defaultSelectedItem: PropTypes.any,
  itemToString: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number,
  onChange: PropTypes.func,
  inputProps: PropTypes.object,
  buttonProps: PropTypes.object,
  openOnFocus: PropTypes.bool,
  autocompleteProps: PropTypes.object,
}

static defaultProps = {
  openOnFocus: false,
  width: 224
}
```

## Complete Story

```jsx
import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import starWarsNames from 'starwars-names'
import { Combobox } from '../src/'

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

storiesOf('combobox', module).add('Combobox', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Combobox items={items} onChange={handleChange} />
  </Box>
))
```
