import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import colors from 'evergreen-colors'
import { Badge, Pill } from '../src/'

const wrapperStyles = {
  display: 'flex',
}

const baseStyles = {
  margin: 8,
  display: 'block',
}

storiesOf('badges', module)
  .add('Badge', () =>
    <Box style={{ ...wrapperStyles }}>
      {Object.keys(colors).map(color =>
        <Box>
          <Badge color={color} {...baseStyles}>
            {color}
          </Badge>
          <Badge color={color} {...baseStyles} isSolid>
            {color}
          </Badge>
        </Box>,
      )}
    </Box>,
  )
  .add('Pill', () =>
    <Box style={{ ...wrapperStyles }}>
      {Object.keys(colors).map(color =>
        <Box>
          <Pill color={color} {...baseStyles}>
            {color}
          </Pill>
          <Pill color={color} {...baseStyles} isSolid="true">
            {color}
          </Pill>
        </Box>,
      )}
    </Box>,
  )
