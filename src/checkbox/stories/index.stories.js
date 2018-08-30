import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Checkbox } from '../../checkbox'

storiesOf('checkbox', module).add('Checkbox', () => (
  <Box padding={40}>
    {permutations({
      checked: [true, false],
      disabled: [true, false],
      indeterminate: [true, false]
    }).map(p => {
      const label =
        '' +
        'Checkbox' +
        ` ${(p.checked && 'checked') || ''}` +
        ` ${(p.disabled && 'disabled') || ''}` +
        ` ${(p.indeterminate && 'indeterminate') || ''}`
      return <Checkbox key={label} {...p} label={label} />
    })}
  </Box>
))

function permutations(props = {}) {
  const keys = Object.keys(props)
  if (keys.length === 0) {
    return []
  }

  const [firstKey] = keys
  const choices = props[firstKey]
  if (keys.length === 1) {
    return choices.map(c => ({ [firstKey]: c }))
  }

  const otherKeys = { ...props }
  delete otherKeys[firstKey]
  const otherPermutations = permutations(otherKeys)
  const result = []
  choices.forEach(c => {
    otherPermutations.forEach(p => {
      result.push({ [firstKey]: c, ...p })
    })
  })

  return result
}
