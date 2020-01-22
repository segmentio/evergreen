import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Heading, Paragraph } from '../../typography'
import { Avatar } from '..'

const names = [
  'Cheryl Carter',
  'Heather Morales',
  'Sean Jackson',
  'Catherine Anderson',
  'Jack Phillips',
  'Julia Williamson',
  'Jonathan Martin',
  'Kevin Niparko'
]

const anonymousIds = [1591, 13184, 1055, 4199, 4824, 11394, 1965, 13023]
const colors = [
  'neutral',
  'blue',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'purple'
]

const StoryHeader = props => <Box marginBottom={16} {...props} />

const StoryHeading = props => <Heading size={600} marginBottom={0} {...props} />
const StoryDescription = props => (
  <Paragraph size={400} color="muted" {...props} />
)

storiesOf('avatar', module).add('Avatar', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Box marginBottom={40}>
      <StoryHeader>
        <StoryHeading>Automatic default usage</StoryHeading>
        <StoryDescription>Colors are based on the name.</StoryDescription>
      </StoryHeader>
      {names.map(name => (
        <Avatar key={name} name={name} marginRight={12} size={40} />
      ))}
      <Avatar
        key="Chris Child"
        src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAQXAAAAJDQyNDFiNDI0LTVjZWQtNGQ2NS05MmI0LTZhMmE4NDNmNDkzMw.jpg"
        name="Chris Child"
        marginRight={12}
        size={40}
      />
      <Avatar
        key="Cat"
        src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg"
        name="Cat"
        marginRight={12}
        size={40}
      />
      <Avatar
        key="Alan Turing"
        src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"
        name="Alan Turing"
        marginRight={12}
        size={40}
      />
      <Avatar
        key="Matt Shwery"
        src="https://avatars1.githubusercontent.com/u/710752?s=460&v=4"
        name="Matt Shwery"
        marginRight={12}
        size={40}
      />
      <Avatar
        key="transparent"
        forceShowInitials
        src="http://www.cityrider.com/fixed/43aspect.png"
        name="transparent"
        marginRight={12}
        size={40}
      />
    </Box>
    <Box marginBottom={40}>
      <StoryHeader>
        <StoryHeading>Automatic solid usage</StoryHeading>
        <StoryDescription>Colors are based on the name.</StoryDescription>
      </StoryHeader>
      {names.map(name => (
        <Avatar key={name} isSolid name={name} marginRight={12} size={40} />
      ))}
    </Box>
    <Box marginBottom={40}>
      <StoryHeader>
        <StoryHeading>Custom hash value for anonymous users</StoryHeading>
        <StoryDescription>
          Pass the id in the hashValue prop for AUs.
        </StoryDescription>
      </StoryHeader>
      {anonymousIds.map(id => (
        <Avatar
          key={id}
          hashValue={id}
          name="Anonymous User"
          marginRight={12}
          size={40}
        />
      ))}
    </Box>
    <Box marginBottom={40}>
      <StoryHeader>
        <StoryHeading>Avatar sizes</StoryHeading>
        <StoryDescription>
          Use 8px grid: 16, 24, 32, 40, 96, 128.
          <br />
          Use solid colors for avatars under 24px.
        </StoryDescription>
      </StoryHeader>
      <Avatar isSolid marginRight={16} name={names[0]} size={16} />
      <Avatar marginRight={16} name={names[1]} size={24} />
      <Avatar marginRight={16} name={names[2]} size={32} />
      <Avatar marginRight={16} name={names[3]} size={40} />
      <Avatar marginRight={16} name={names[4]} size={96} />
      <Avatar marginRight={16} name={names[5]} size={128} />
    </Box>
    <Box marginBottom={40}>
      <StoryHeader>
        <StoryHeading>Manual default colors</StoryHeading>
        <StoryDescription>{colors.join(', ')}</StoryDescription>
      </StoryHeader>
      {colors.map((color, index) => (
        <Avatar
          key={color}
          color={color}
          name={names[index]}
          marginRight={12}
          size={40}
        />
      ))}
    </Box>
    <Box marginBottom={40}>
      <StoryHeader>
        <StoryHeading>Manual Solid Colors</StoryHeading>
        <StoryDescription>
          Pass the isSolid prop.
          <br />
          {colors.join(', ')}
        </StoryDescription>
      </StoryHeader>
      {colors.map((color, index) => (
        <Avatar
          key={color}
          isSolid
          color={color}
          name={names[index]}
          marginRight={12}
          size={40}
        />
      ))}
    </Box>
  </Box>
))
