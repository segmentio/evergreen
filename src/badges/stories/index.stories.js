import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { ThemeConsumer } from '../../theme'
import { Badge, Pill } from '..'

const wrapperStyles = {
  display: 'flex'
}

const baseStyles = {
  margin: 8,
  display: 'block'
}

storiesOf('badges', module)
  .add('Badge', () => (
    <ThemeConsumer>
      {theme => (
        <Box style={{ ...wrapperStyles }}>
          {theme.badgeColors.map(color => (
            <Box key={color}>
              <Badge color={color} {...baseStyles}>
                {color}
              </Badge>
              <Badge color={color} {...baseStyles} isSolid>
                {color}
              </Badge>
            </Box>
          ))}
        </Box>
      )}
    </ThemeConsumer>
  ))
  .add('Pill', () => (
    <ThemeConsumer>
      {theme => (
        <Box style={{ ...wrapperStyles }}>
          {theme.badgeColors.map(color => (
            <Box key={color}>
              <Pill color={color} {...baseStyles}>
                {color}
              </Pill>
              <Pill color={color} {...baseStyles} isSolid>
                {color}
              </Pill>
            </Box>
          ))}
        </Box>
      )}
    </ThemeConsumer>
  ))
