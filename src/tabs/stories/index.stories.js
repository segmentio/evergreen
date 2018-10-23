import { storiesOf } from '@storybook/react'
import React from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Tab, SidebarTab, Tablist, TabNavigation } from '..'
import { Heading, Paragraph } from '../../typography'

const StorySection = props => <Box marginBottom={40} {...props} />

const StoryHeader = props => <Box marginBottom={16} {...props} />

const StoryHeading = props => <Heading size={600} marginBottom={0} {...props} />
const StoryDescription = props => (
  <Paragraph size={400} color="muted" {...props} />
)

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

const tabs = ['Traits', 'Event History', 'Identities']

storiesOf('tabs', module)
  .add('Tab', () => (
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
            If you are not using a link (`a` tag) for your Tab, make sure to
            wrap in a `Tablist` and comply with{' '}
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
          {({ selectedIndex, onSelect }) => (
            <Box>
              <Tablist marginX={-4} marginBottom={16}>
                {tabs.map((tab, index) => (
                  <Tab
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
      </StorySection>
      <StorySection>
        <StoryHeader>
          <StoryHeading>Link usage</StoryHeading>
          <StoryDescription>
            If you are using a link (`a` tag), make sure to wrap in a
            `TabNavigation`
          </StoryDescription>
        </StoryHeader>

        <Box>
          <TabNavigation marginX={-4} marginBottom={16}>
            {tabs.map((tab, index) => (
              <Tab key={tab} is="a" href="#" id={tab} isSelected={index === 0}>
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
            If you want a tab to be disabled, pass `disabled` prop with value
            `true`. The `Identities` tab is disabled below.
          </StoryDescription>
        </StoryHeader>

        <Box>
          <TabManager>
            {({ selectedIndex, onSelect }) => (
              <Box>
                <Tablist marginX={-4} marginBottom={16}>
                  {tabs.map((tab, index) => (
                    <Tab
                      disabled={index === 2}
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
  .add('SidebarTab', () => (
    <Box padding={40}>
      {(() => {
        document.body.style.margin = '0'
        document.body.style.height = '100vh'
      })()}
      <StorySection>
        <Heading size={700}>SidebarTab</Heading>
        <StoryHeader>
          <StoryHeading>Tab usage</StoryHeading>
          <StoryDescription>
            If you are not using a link (`a` tag) for your Tab, make sure to
            wrap in a `Tablist` and comply with{' '}
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
          {({ selectedIndex, onSelect }) => (
            <Box display="flex">
              <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
                {tabs.map((tab, index) => (
                  <SidebarTab
                    key={tab}
                    id={tab}
                    onSelect={() => onSelect(index)}
                    isSelected={index === selectedIndex}
                    aria-controls={`panel-${tab}`}
                  >
                    {tab}
                  </SidebarTab>
                ))}
              </Tablist>
              <Box padding={16} backgroundColor="#eee" flex="1">
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
          <StoryDescription>
            If you are using a link (`a` tag), make sure to wrap in a
            `TabNavigation`
          </StoryDescription>
        </StoryHeader>

        <Box>
          <TabNavigation marginX={-4} marginBottom={16} width={240}>
            {tabs.map((tab, index) => (
              <SidebarTab
                key={tab}
                is="a"
                href="#"
                id={tab}
                isSelected={index === 0}
              >
                {tab}
              </SidebarTab>
            ))}
          </TabNavigation>
        </Box>
      </StorySection>
    </Box>
  ))
