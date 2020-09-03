import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Heading, Paragraph, Link, Text } from '../../typography'
import * as Icons from '..'

storiesOf('icons', module)
  .add('Icons', () => (
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

      {Object.entries(Icons).map(([name, Icon]) => (
        <Box
          key={name}
          float="left"
          width={140}
          height={100}
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
  .add('Icon Colors', () => (
    <div>
      <Box paddingLeft={40}>
        <Heading size={800}>Icon Colors</Heading>
      </Box>
      <Box display="flex" flexWrap="wrap">
        <Box
          borderRadius={8}
          margin={16}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          border="1px solid #f5f5f5"
          width={140}
          height={100}
        >
          <Icons.TintIcon color="default" />
          <Text size={300} marginTop={16}>
            default
          </Text>
        </Box>
        <Box
          borderRadius={8}
          margin={16}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          border="1px solid #f5f5f5"
          width={140}
          height={100}
        >
          <Icons.TintIcon color="muted" />
          <Text size={300} marginTop={16}>
            muted
          </Text>
        </Box>
        <Box
          borderRadius={8}
          margin={16}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          border="1px solid #f5f5f5"
          width={140}
          height={100}
        >
          <Icons.TintIcon color="dark" />
          <Text size={300} marginTop={16}>
            dark
          </Text>
        </Box>
        <Box
          borderRadius={8}
          margin={16}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          border="1px solid #f5f5f5"
          width={140}
          height={100}
        >
          <Icons.TintIcon color="disabled" />
          <Text size={300} marginTop={16}>
            disabled
          </Text>
        </Box>
        <Box
          borderRadius={8}
          margin={16}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          border="1px solid #f5f5f5"
          width={140}
          height={100}
        >
          <Icons.TintIcon color="selected" />
          <Text size={300} marginTop={16}>
            selected
          </Text>
        </Box>
        <Box
          borderRadius={8}
          margin={16}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          border="1px solid #f5f5f5"
          width={140}
          height={100}
        >
          <Icons.TintIcon color="info" />
          <Text size={300} marginTop={16}>
            info
          </Text>
        </Box>
        <Box
          borderRadius={8}
          margin={16}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          border="1px solid #f5f5f5"
          width={140}
          height={100}
        >
          <Icons.TintIcon color="success" />
          <Text size={300} marginTop={16}>
            success
          </Text>
        </Box>
        <Box
          borderRadius={8}
          margin={16}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          border="1px solid #f5f5f5"
          width={140}
          height={100}
        >
          <Icons.TintIcon color="warning" />
          <Text size={300} marginTop={16}>
            warning
          </Text>
        </Box>
        <Box
          borderRadius={8}
          margin={16}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          border="1px solid #f5f5f5"
          width={140}
          height={100}
        >
          <Icons.TintIcon color="danger" />
          <Text size={300} marginTop={16}>
            danger
          </Text>
        </Box>
      </Box>
    </div>
  ))
