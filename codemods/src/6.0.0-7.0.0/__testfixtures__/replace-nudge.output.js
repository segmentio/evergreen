import React from 'react';
import { Pane, Pulsar, Tooltip } from 'evergreen-ui';

const props = {
    isShown: true,
    onClick: () => {}
}

const Component = () => {
  return (
    (<React.Fragment>
      <Pane position="relative"><Pulsar></Pulsar></Pane>
      <Pane position="relative"><Pulsar /></Pane>
      <Pane position="relative"><Pulsar position='top-left' /></Pane>
      <Pane position="relative"><Pulsar onClick={() => {}} /></Pane>
      <Pane position="relative"><Pulsar {...props} /></Pane>
      <Pane position="relative"><Pulsar /></Pane>
      <Pane position="relative"><Tooltip content={<Pane>Hello world</Pane>}><Pulsar /></Tooltip></Pane>
      <Pane position="relative"><Tooltip content="Hello world"><Pulsar /></Tooltip></Pane>
    </React.Fragment>)
  );
}

export default Component
