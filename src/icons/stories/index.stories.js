import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import * as icons from '../../icons'
import { Heading, Paragraph, Link, Text } from '../../typography'

storiesOf('icons', module).add('icons', () => (
  <div>
    <Box paddingLeft={40}>
      <Heading size={800}>icons</Heading>
      <Paragraph marginTop="default">
        Evergreen uses the amazing{' '}
        <Link href="https://blueprintjs.com/docs/#icons">
          @blueprintjs/icons
        </Link>{' '}
        package for all of its icons.
      </Paragraph>
    </Box>

    {Object.entries(icons).map(([name, Icon]) => (
      <Box
        key={name}
        float="left"
        width={160}
        height={80}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        textAlign="center"
      >
        <Icon color="default" />
        <Text is="p" size={300}>
          {name}
        </Text>
      </Box>
    ))}
  </div>
))
