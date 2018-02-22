import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import toaster from '../src/'
import { Button } from '../../buttons/'
import { Heading, Paragraph, Ul, Li } from '../../typography/'

const buttonProps = {
  marginY: 12,
  marginRight: 8
}

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua.`

storiesOf('toaster', module).add('examples', () => (
  <Box padding={40}>
    <Box marginBottom={24}>
      <Heading size={600}>Toaster</Heading>
      <Paragraph>The toaster has the following methods:</Paragraph>
      <Ul>
        <Li>notify</Li>
        <Li>success</Li>
        <Li>warning</Li>
        <Li>danger</Li>
        <Li>info</Li>
        <Li>
          closeAll — useful for page transitions when you want to close all
          toasts.
        </Li>
        <Li>getToasts — useful to know if you already triggered a toast.</Li>
      </Ul>
    </Box>
    <Box>
      <Box marginBottom={12}>
        <Button onClick={() => toaster.closeAll()}>Close All</Button>
      </Box>
      <Box marginBottom={12}>
        <Button
          {...buttonProps}
          onClick={() => toaster.notify('A simple general message')}
        >
          Notify
        </Button>
        <Button
          {...buttonProps}
          onClick={() =>
            toaster.notify('A simple general message', {
              description: loremIpsum
            })
          }
        >
          Notify with Text
        </Button>
      </Box>
      <Box marginBottom={12}>
        <Button
          {...buttonProps}
          onClick={() =>
            toaster.success(
              'Hooray! You did it. Your Source is now sending data.'
            )
          }
        >
          Success
        </Button>
        <Button
          {...buttonProps}
          onClick={() =>
            toaster.success(
              'Hooray! You did it. Your Source is now sending data.',
              {
                description: loremIpsum
              }
            )
          }
        >
          Success with Text
        </Button>
      </Box>
      <Box marginBottom={12}>
        <Button
          {...buttonProps}
          onClick={() => toaster.warning('Changes will affect all Warehouses.')}
        >
          Warning
        </Button>

        <Button
          {...buttonProps}
          onClick={() =>
            toaster.warning('Changes will affect all Warehouses.', {
              description: loremIpsum
            })
          }
        >
          Warning with Text
        </Button>
      </Box>
      <Box marginBottom={12}>
        <Button
          {...buttonProps}
          onClick={() => toaster.danger('Changes will affect all Warehouses.')}
        >
          Danger
        </Button>

        <Button
          {...buttonProps}
          onClick={() =>
            toaster.danger('Changes will affect all Warehouses.', {
              description: loremIpsum
            })
          }
        >
          Danger with Text
        </Button>
      </Box>
      <Box marginBottom={12}>
        <Button
          {...buttonProps}
          onClick={() =>
            toaster.info('There are over 180 integrations available.')
          }
        >
          Info
        </Button>

        <Button
          {...buttonProps}
          onClick={() =>
            toaster.info('There are over 180 integrations available.', {
              description: loremIpsum
            })
          }
        >
          Info with Text
        </Button>
      </Box>
    </Box>
  </Box>
))
