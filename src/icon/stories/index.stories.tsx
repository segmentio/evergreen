import { IconName } from '@blueprintjs/icons'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Box from 'ui-box'
import { Icon, IconNames } from '..'
import { Heading, Paragraph, Text, Link } from '../../typography'

storiesOf('icon', module).add('Icon', () => {
  return (
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
      {Object.values(IconNames).map(icon => (
        <Box
          key={icon}
          float="left"
          width={140}
          height={140}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          textAlign="center"
        >
          <Icon icon={icon} color="default" />
          <Text is="p" size={300}>
            {icon}
          </Text>
        </Box>
      ))}
    </div>
  )
})
