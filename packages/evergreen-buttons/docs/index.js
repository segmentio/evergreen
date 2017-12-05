import React from 'react'
import PropTypes form 'prop-types'
import { Pane } from 'evergreen-layers'
import { Text, Paragraph, Heading } from 'evergreen-typography'
import { Button } from '../src'

class Example extends React.PureComponent {
  static propTypes = {
    component: PropTyps.node,
    children: PropTypes.node,
    }

  render() {
    return (
      <Pane
        backgroundColor="white"
        display="flex"
        alignItems="center"
        border="muted"
        marginBottom={16}
      >
        <Pane
          width={180}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {this.props.component}
        </Pane>
        <Pane
          flex="1"
          borderLeft="muted"
          paddingLeft={24}
          marginY={24}
          marginRight={24}
        >
          <Paragraph size={300}>{this.props.children}</Paragraph>
        </Pane>
      </Pane>
    )
  }
}

export default class ButtonsDocs extends React.PureComponent {
  render() {
    return (
      <Pane marginTop={40}>
        <Example component={<Button>Default</Button>}>
          Default buttons provide a light weight button style, while still
          maintaining a high level of affordability. They are used to indicate
          secondary actions and are used to reduce visual noise when there are
          many actions on the page.
        </Example>
        <Example component={<Button appearance="green">Green</Button>}>
          Green buttons stand out on purpose. They are used to indicate primary
          actions that create a new entity or initiate a creation flow.
        </Example>
      </Pane>
    )
  }
}
