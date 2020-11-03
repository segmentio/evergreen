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

storiesOf('아바타', module).add('프로필', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <Box marginBottom={40}>
      <StoryHeader>
        <StoryHeading>제작에 참여한 사람들</StoryHeading>
        <StoryDescription>오픈소스에 참여했던사람들</StoryDescription>
      </StoryHeader>
      {names.map(name => (
        <Avatar key={name} name={name} marginRight={12} size={40} />
      ))}
      <Avatar
        key="Cheryl Carter"
        src="data:image/jpeg;base64,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"
        name="Cheryl Carter"
        marginRight={12}
        size={40}
      />
      <Avatar
        key="Chris Child"
        src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAQXAAAAJDQyNDFiNDI0LTVjZWQtNGQ2NS05MmI0LTZhMmE4NDNmNDkzMw.jpg"
        name="Chris Child"
        marginRight={12}
        size={40}
      />
      <Avatar
        key="spike"
        src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-Cowboy-Bebop-Spike-Siegel.jpg"
        name="spike"
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
      <Avatar
        key="transparent"
        src="https://lh3.googleusercontent.com/proxy/r6FDA3C-piBLWoiBEOxymUbo_0DgMtxYPhaPxms3UBsPcdRD6pe3r7FV1uiT94klnze6uOWOyY52yVPKVmXr8fBt2WSHOkmqO60ddNm_0Y7dI7129EVEAlhKsOVauEjxUksEy_COAZ-g2rsyCxen6QgCdz1Hox1EDhGP8hGjsI4J57fiwJK-IPOw8slsSLcN_lsZYPbJXElIElzBHzij8Z_yPm3l1Wr8CEv0LYKDpl2GyWAnaOnYSpCXmFS4YvkEnXzEbnRhw7OfO7Rnv2wgE7MHst7QV078bmXT"
        name="seran"
        marginRight={12}
        size={40}
      />
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
