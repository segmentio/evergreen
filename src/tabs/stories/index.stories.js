import React from 'react'
import { storiesOf } from '@storybook/react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Tab, Tablist, TabNavigation } from '..'
import { majorScale } from '../../scales'
import { Heading, Paragraph } from '../../typography'

const StorySection = props => <Box marginBottom={40} {...props} />

const StoryHeader = props => <Box marginBottom={16} {...props} />

const StoryHeading = props => <Heading size={600} marginBottom={0} {...props} />
const StoryDescription = props => <Paragraph size={400} color="muted" {...props} />

class TabManager extends React.PureComponent {
  static propTypes = {
    children: PropTypes.func
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      selectedIndex: 0
    }
  }

  render() {
    return this.props.children({
      selectedIndex: this.state.selectedIndex,
      onSelect: index => this.setState({ selectedIndex: index })
    })
  }
}

const appearances = ['primary', 'secondary']
const tabs = ['Traits', 'Event History', 'Identities']

storiesOf('tabs', module).add('Tab', () => (
  <Box padding={40}>
    {(() => {
      document.body.style.margin = '0'
      document.body.style.height = '100vh'
    })()}
    <StorySection>
      <Heading size={700}>Tab</Heading>
      <StoryHeader>
        <StoryHeading>Tab usage</StoryHeading>
        <StoryDescription>
          If you are not using a link (`a` tag) for your Tab, make sure to wrap in a `Tablist` and comply with{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://accessibility.athena-ict.com/aria/examples/tabpanel2.shtml"
          >
            WAI-ARIA
          </a>
          .
        </StoryDescription>
      </StoryHeader>
      <TabManager>
        {({ onSelect, selectedIndex }) => (
          <Box>
            <Tablist marginX={-4} marginBottom={16}>
              {tabs.map((tab, index) => (
                <Tab
                  key={tab}
                  id={tab}
                  appearance="primary"
                  onSelect={() => onSelect(index)}
                  isSelected={index === selectedIndex}
                  aria-controls={`panel-${tab}`}
                >
                  {tab}
                </Tab>
              ))}
            </Tablist>
            <Box padding={16} backgroundColor="#eee">
              {tabs.map((tab, index) => (
                <Box
                  key={tab}
                  id={`panel-${tab}`}
                  role="tabpanel"
                  aria-labelledby={tab}
                  aria-hidden={index !== selectedIndex}
                  display={index === selectedIndex ? 'block' : 'none'}
                >
                  <Paragraph>Panel {tab}</Paragraph>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </TabManager>
    </StorySection>
    <StorySection>
      <StoryHeader>
        <StoryHeading>Link usage</StoryHeading>
        <StoryDescription>If you are using a link (`a` tag), make sure to wrap in a `TabNavigation`</StoryDescription>
      </StoryHeader>

      <Box>
        {appearances.map(appearance => (
          <TabNavigation key={appearance} marginX={-4} marginBottom={16}>
            {tabs.map((tab, index) => (
              <Tab key={tab} appearance={appearance} is="a" href="#" id={tab} isSelected={index === 0}>
                {tab}
              </Tab>
            ))}
          </TabNavigation>
        ))}
      </Box>
    </StorySection>
    <StorySection>
      <StoryHeader>
        <StoryHeading>Min-width Tabs</StoryHeading>
        <StoryDescription>Tabs with a min-width set on them</StoryDescription>
      </StoryHeader>

      <Box>
        <TabNavigation marginX={-4} marginBottom={16}>
          {tabs.map((tab, index) => (
            <Tab key={tab} is="a" href="#" id={tab} isSelected={index === 0} minWidth={majorScale(13)}>
              {tab}
            </Tab>
          ))}
        </TabNavigation>
      </Box>
    </StorySection>
    <StorySection>
      <StoryHeader>
        <StoryHeading>Disabled tab</StoryHeading>
        <StoryDescription>
          If you want a tab to be disabled, pass `disabled` prop with value `true`. The `Identities` tab is disabled
          below.
        </StoryDescription>
      </StoryHeader>

      <Box>
        <TabManager>
          {({ onSelect, selectedIndex }) => (
            <Box>
              <Tablist marginX={-4} marginBottom={16}>
                {tabs.map((tab, index) => (
                  <Tab
                    appearance="primary"
                    disabled={true}
                    key={tab}
                    id={tab}
                    onSelect={() => onSelect(index)}
                    isSelected={index === selectedIndex}
                    aria-controls={`panel-${tab}`}
                  >
                    {tab}
                  </Tab>
                ))}
              </Tablist>
              <Box padding={16} backgroundColor="#eee">
                {tabs.map((tab, index) => (
                  <Box
                    key={tab}
                    id={`panel-${tab}`}
                    role="tabpanel"
                    aria-labelledby={tab}
                    aria-hidden={index !== selectedIndex}
                    display={index === selectedIndex ? 'block' : 'none'}
                  >
                    <Paragraph>Panel {tab}</Paragraph>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </TabManager>

        <TabManager>
          {({ onSelect, selectedIndex }) => (
            <Box marginTop={32}>
              <Tablist marginX={-4} marginBottom={16}>
                {tabs.map((tab, index) => (
                  <Tab
                    disabled={true}
                    key={tab}
                    id={tab}
                    onSelect={() => onSelect(index)}
                    isSelected={index === selectedIndex}
                    aria-controls={`panel-${tab}`}
                  >
                    {tab}
                  </Tab>
                ))}
              </Tablist>
              <Box padding={16} backgroundColor="#eee">
                {tabs.map((tab, index) => (
                  <Box
                    key={tab}
                    id={`panel-${tab}`}
                    role="tabpanel"
                    aria-labelledby={tab}
                    aria-hidden={index !== selectedIndex}
                    display={index === selectedIndex ? 'block' : 'none'}
                  >
                    <Paragraph>Panel {tab}</Paragraph>
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </TabManager>
      </Box>
    </StorySection>
  </Box>
))
