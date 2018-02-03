import { storiesOf } from '@storybook/react' // eslint-disable-line import/no-extraneous-dependencies
import React from 'react'
import Box from 'ui-box'
import { Image } from '../src/'

storiesOf('image', module).add('Image', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Image src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
  </Box>
))
