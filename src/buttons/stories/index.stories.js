import { storiesOf } from '@storybook/react'
import React from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import {
  IconButton,
  Button,
  BackButton,
  ButtonAppearances
} from '../../buttons'
import { Heading } from '../../typography'
import { IconMap } from '../../icons'
import LoadingManager from '../docs/LoadingManager'

const baseStyles = {
  margin: 16
}
const buttonsStory = storiesOf('buttons', module)

buttonsStory.add('Button', () => (
  <Box padding={40}>
    <Heading>Button based</Heading>
    {Object.keys(ButtonAppearances).map(appearance => (
      <Box key={appearance}>
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
        </div>
      </Box>
    ))}

    <Heading>Link based</Heading>
    {Object.keys(ButtonAppearances).map(appearance => (
      <Box key={appearance}>
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
        </div>
      </Box>
    ))}
  </Box>
))

buttonsStory.add('Button presets', () => (
  <Box padding={40}>
    <BackButton marginRight={12} />
    <BackButton>Overview</BackButton>
  </Box>
))

buttonsStory.add('Button + icons', () => (
  <Box padding={40}>
    <Heading>Button with icons</Heading>

    {['default', 'ghost', 'ghostBlue'].map(appearance => (
      <Box key={appearance} marginBottom={12}>
        <Button
          appearance={appearance}
          iconBefore="arrow"
          iconBeforeAim="left"
          marginRight={12}
        >
          Back
        </Button>
        <Button appearance={appearance} iconBefore="cog" marginRight={12}>
          Settings
        </Button>
        <Button
          appearance={appearance}
          iconAfter="triangle"
          iconAfterAim="down"
          marginRight={12}
        >
          Filter
        </Button>
        <Button appearance={appearance} iconBefore="search" marginRight={12}>
          Search
        </Button>
      </Box>
    ))}
  </Box>
))

buttonsStory.add('Button isLoading', () => (
  <Box padding={80}>
    {Object.keys(ButtonAppearances).map(appearance => {
      return (
        <LoadingManager key={appearance}>
          {({ isLoading, setLoading }) => {
            return (
              <Button
                marginRight={16}
                appearance={appearance}
                isLoading={isLoading}
                onClick={setLoading}
              >
                {isLoading ? 'Loading...' : 'Click to Load'}
              </Button>
            )
          }}
        </LoadingManager>
      )
    })}
  </Box>
))

function IconButtonIcon({ appearance, height, iconKey }) {
  const iconProps = {
    appearance,
    height,
    icon: iconKey,
    marginRight: 8
  }

  if (['triangle', 'arrow'].indexOf(iconKey) > -1) {
    return ['top', 'right', 'bottom', 'left'].map(aim => (
      <IconButton key={iconKey + aim} iconAim={aim} {...iconProps} />
    ))
  }
  return <IconButton {...iconProps} />
}
IconButtonIcon.propTypes = {
  appearance: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  iconKey: PropTypes.string.isRequired
}

buttonsStory.add('IconButton', () => (
  <Box padding={40}>
    {Object.keys(ButtonAppearances).map(appearance => (
      <Box key={appearance}>
        {[32, 28, 24].map(height => (
          <Box
            key={appearance + height}
            marginBottom={16}
            display="flex"
            alignItems="center"
          >
            <Heading size={400} width={120} textAlign="right" marginRight={12}>
              {appearance} {height}
            </Heading>
            {Object.keys(IconMap).map(iconKey => (
              <IconButtonIcon
                key={appearance + height + iconKey}
                appearance={appearance}
                height={height}
                iconKey={iconKey}
              />
            ))}
          </Box>
        ))}
      </Box>
    ))}
  </Box>
))
