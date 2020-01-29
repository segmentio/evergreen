import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'

import { Text } from '../../typography'
import { Button } from '../../buttons'
import { Pane } from '../../layers'
import { ThemeProvider } from '../src/ThemeContext'
import defaultTheme from '../src/default-theme'

// This theme sets the default text color to pink, and button hovers to purple
const customTheme = defaultTheme.extend()
customTheme.colors.text.default = 'pink'
customTheme.buttonColors.minimal.hoverBackground = 'purple'

// This theme is going to be nested, but changes the minimal text to purple
const nestedTheme = defaultTheme.extend()
nestedTheme.buttonColors.minimal.default = 'purple'

// This theme changes icons to output their text value, though you could get any kind of icon
const getIconVariant = defaultTheme.extend()
getIconVariant.getIcon = icon => ({ size, ...rest }) => {
  return (
    <Pane width={size} height={size} lineHeight="1" {...rest}>
      {icon}
    </Pane>
  )
}

storiesOf('theme', module).add('custom themes', () => (
  <>
    <ThemeProvider value={customTheme}>
      <Box padding={48}>
        <Text>Custom default text using defaultTheme.extend()</Text>
      </Box>

      <Box padding={48}>
        <Button appearance="minimal">Purple background on hover</Button>
      </Box>

      <Box padding={48}>
        <ThemeProvider value={nestedTheme}>
          <Button appearance="minimal">Purple text, nested theme</Button>
        </ThemeProvider>
      </Box>
    </ThemeProvider>
    <ThemeProvider value={getIconVariant}>
      <Button iconBefore="!!!">Custom icon</Button>
    </ThemeProvider>
  </>
))
