import { storiesOf } from '@storybook/react'
import React from 'react'
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
    <div style={{ ...wrapperStyles }}>
      {Object.keys(BadgeAppearances).map(appearance =>
        <div>
          <Badge appearance={appearance} {...baseStyles}>
            {appearance}
          </Badge>
          <Badge appearance={appearance} {...baseStyles} isSolid>
            {appearance}
          </Badge>
        </div>,
      )}
    </div>,
  )
  .add('Pill', () =>
    <div style={{ ...wrapperStyles }}>
      {Object.keys(BadgeAppearances).map(appearance =>
        <div>
          <Pill appearance={appearance} {...baseStyles}>
            {appearance}
          </Pill>
          <Pill appearance={appearance} {...baseStyles} isSolid="true">
            {appearance}
          </Pill>
        </div>,
      )}
    </div>,
  )
