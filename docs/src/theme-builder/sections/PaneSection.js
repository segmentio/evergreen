import React from 'react'
import { Pane } from '../../../../src/layers'
import { Text } from '../../../../src/typography'
import { ThemeConsumer } from '../../../../src/theme'
import Section from './Section'

export default class PaneSection extends React.Component {
  render() {
    return (
      <Section title="Panes" fileName="PaneSection.js">
        <ThemeConsumer>
          {theme => (
            <Pane clearfix>
              {Object.keys(theme.colors.background).map(background => (
                <Pane
                  key={background}
                  background={background}
                  float="left"
                  width={120}
                  height={120}
                  margin={24}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Text color="default">{background}</Text>
                </Pane>
              ))}
            </Pane>
          )}
        </ThemeConsumer>
      </Section>
    )
  }
}
