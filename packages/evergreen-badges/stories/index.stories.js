import { storiesOf } from '@storybook/react'
import React from 'react'
import { Badge, BadgeAppearances } from '../src/'

const baseStyles = {
  margin: 16,
}

storiesOf('badges', module).add('Badge', () =>
  <div>
    {Object.keys(BadgeAppearances).map(appearance =>
      <div>
        <Badge appearance={appearance} {...baseStyles}>
          {appearance}
        </Badge>
      </div>,
    )}
  </div>,
)
