import { storiesOf } from '@storybook/react'
import React from 'react'
import { Button, ButtonAppearances } from '../src/'

const baseStyles = {
  margin: 16,
}

storiesOf('buttons', module).add('Button', () =>
  <div>
    {Object.keys(ButtonAppearances).map(appearance =>
      <div>
        <Button appearance={appearance} {...baseStyles}>
          {appearance}
        </Button>
        <Button disabled appearance={appearance} {...baseStyles}>
          {appearance}
        </Button>
        <Button appearance={appearance} {...baseStyles} height={48}>
          {appearance} 48
        </Button>
        <Button appearance={appearance} {...baseStyles} height={40}>
          {appearance} 40
        </Button>
        <Button appearance={appearance} {...baseStyles} height={36}>
          {appearance} 36
        </Button>
        <Button appearance={appearance} {...baseStyles} height={28}>
          {appearance} 28
        </Button>
        <Button appearance={appearance} {...baseStyles} height={24}>
          {appearance} 24
        </Button>
      </div>,
    )}

    {Object.keys(ButtonAppearances).map(appearance =>
      <div>
        <Button is="a" href="#" appearance={appearance} {...baseStyles}>
          {appearance}
        </Button>
        <Button
          is="a"
          href="#"
          disabled
          appearance={appearance}
          {...baseStyles}
        >
          {appearance}
        </Button>
        <Button
          is="a"
          href="#"
          appearance={appearance}
          {...baseStyles}
          height={48}
        >
          {appearance} 48
        </Button>
        <Button
          is="a"
          href="#"
          appearance={appearance}
          {...baseStyles}
          height={40}
        >
          {appearance} 40
        </Button>
        <Button
          is="a"
          href="#"
          appearance={appearance}
          {...baseStyles}
          height={36}
        >
          {appearance} 36
        </Button>
        <Button
          is="a"
          href="#"
          appearance={appearance}
          {...baseStyles}
          height={28}
        >
          {appearance} 28
        </Button>
        <Button
          is="a"
          href="#"
          appearance={appearance}
          {...baseStyles}
          height={24}
        >
          {appearance} 24
        </Button>
      </div>,
    )}
  </div>,
)
