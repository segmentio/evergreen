import { storiesOf } from '@storybook/react'
import React, { useEffect, useRef } from 'react'
import Box from 'ui-box'
import { Checkbox } from '..'

const refCallback = el => {
  if (el) {
    el.disabled = true
  }
}

function IndeterminateWithRefExample() {
  useEffect(() => {
    if (ref && ref.current) {
      refCallback(ref.current)
    }
  }, [ref])

  const ref = useRef()

  return (
    <Checkbox
      checked
      indeterminate
      ref={ref}
      label="Checkbox checked indeterminate disabled with ref"
    />
  )
}

storiesOf('checkbox', module).add('Checkbox', () => (
  <Box padding={40}>
    <Checkbox label="Checkbox default" />
    <Checkbox checked label="Checkbox checked" />
    <Checkbox disabled label="Checkbox disabled" />
    <Checkbox disabled checked label="Checkbox checked disabled" />
    <Checkbox indeterminate label="Checkbox indeterminate" />
    <Checkbox checked indeterminate label="Checkbox checked indeterminate" />
    <IndeterminateWithRefExample />
  </Box>
))
