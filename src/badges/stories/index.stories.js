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
              <Badge color={color} {...baseStyles} isInteractive>
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
          {theme.badgeColors.map((color, index) => (
            <Box key={color} display="flex" flexDirection="column" alignItems="center">
              <Pill color={color} {...baseStyles}>
                {color}
              </Pill>
              <Pill color={color} {...baseStyles}>
                {index + 1}
              </Pill>
            </Box>
          ))}
        </Box>
      )}
    </ThemeConsumer>
  ))
