import React from 'react'
import { Pane } from '../../../../src/layers'
import { Heading } from '../../../../src/typography'
import { Avatar } from '../../../../src/avatar'
import { ThemeConsumer } from '../../../../src/theme'
import { SegmentedControl } from '../../../../src/segmented-control'
import Section from './Section'

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

export default class AvatarSection extends React.Component {
  state = {
    options: [
      { label: 'Size 32', value: 32 },
      { label: 'Size 40', value: 40 },
      { label: 'Size 56', value: 56 }
    ],
    value: 40
  }
  render() {
    const { state } = this
    return (
      <Section
        title="Avatars"
        fileName="AvatarSection.js"
        contentPadding={24}
        controls={
          <SegmentedControl
            width={280}
            options={state.options}
            value={state.value}
            onChange={value => this.setState({ value: Number(value) })}
          />
        }
      >
        <ThemeConsumer>
          {theme => {
            return (
              <React.Fragment>
                <Pane marginBottom={16}>
                  <Heading size={200} marginBottom={8}>
                    Subtle Colors
                  </Heading>
                  {theme.fills.options.map((color, index) => (
                    <Avatar
                      key={color}
                      color={color}
                      name={names[index]}
                      marginRight={12}
                      size={state.value}
                    />
                  ))}
                </Pane>
                <Pane marginBottom={16}>
                  <Heading size={200} marginBottom={8}>
                    Solid Colors
                  </Heading>
                  <Pane>
                    {theme.fills.options.map((color, index) => (
                      <Avatar
                        key={color}
                        isSolid
                        color={color}
                        name={names[index]}
                        marginRight={12}
                        size={state.value}
                      />
                    ))}
                  </Pane>
                </Pane>
              </React.Fragment>
            )
          }}
        </ThemeConsumer>
      </Section>
    )
  }
}
