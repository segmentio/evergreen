import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Heading, Paragraph, Text, Link } from '../../typography'
import { IconNames } from '../../icons'
import { Icon } from '..'

storiesOf('icon', module).add('Icon', () => (
  <div>
    <Box paddingLeft={40}>
      <Heading size={800}>Icons</Heading>
      <Paragraph marginTop="default">
        Evergreen uses the amazing{' '}
        <Link href="http://blueprintjs.com/docs/v2/#icons">
          @blueprintjs/icons
        </Link>{' '}
        package for all of its icons.
      </Paragraph>
    </Box>
    {Object.keys(IconNames).map(iconKey => {
      return (
        <Box
          key={iconKey}
          float="left"
          width={140}
          height={140}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          textAlign="center"
        >
          <Icon icon={IconNames[iconKey]} color="default" />
          <Text is="p" size={300}>
            {IconNames[iconKey]}
          </Text>
        </Box>
      )
    })}
  </div>
))
