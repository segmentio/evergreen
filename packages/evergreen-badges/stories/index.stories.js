import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Badge, Pill, BadgeAppearances } from '../src/'

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
      {Object.keys(BadgeAppearances.default).map(appearance =>
        <Box>
          <Badge appearance={appearance} {...baseStyles}>
            {appearance}
          </Badge>
          <Badge appearance={appearance} {...baseStyles} isSolid>
            {appearance}
          </Badge>
        </Box>,
      )}
    </Box>,
  )
  .add('Pill', () =>
    <Box style={{ ...wrapperStyles }}>
      {Object.keys(BadgeAppearances.default).map(appearance =>
        <Box>
          <Pill appearance={appearance} {...baseStyles}>
            {appearance}
          </Pill>
          <Pill appearance={appearance} {...baseStyles} isSolid>
            {appearance}
          </Pill>
        </Box>,
      )}
    </Box>,
  )
