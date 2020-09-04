import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import faker from 'faker'
import { ThemeConsumer } from '../../theme'
import { Badge, Pill } from '..'

const wrapperStyles = {
  display: 'flex'
}

const baseStyles = {
  margin: 8,
  display: 'block'
}

const range = N => Array.from({ length: N }, (v, k) => k + 1)

faker.seed(7816)
const randomNumbers = range(8).map(() => {
  return faker.random.number({
    min: 1,
    max: 100
  })
})

storiesOf('badges', module)
  .add('Badge', () => (
    <ThemeConsumer>
      {theme => (
        <Box style={{ ...wrapperStyles }}>
          {Object.keys(theme.tokens.fills).map(color => (
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
          {Object.keys(theme.tokens.fills).map((color, index) => {
            return (
              <Box
                key={color}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Pill color={color} {...baseStyles}>
                  {randomNumbers[index]}
                </Pill>
              </Box>
            )
          })}
        </Box>
      )}
    </ThemeConsumer>
  ))
