import React from 'react';
import { Pane, Pulsar, Tooltip } from 'evergreen-ui';

const props = {
    isShown: true,
    onClick: () => {}
}

const Component = () => {
  return (
    (<React.Fragment>
      <Pane position="relative" display="inline-block"><Pulsar></Pulsar></Pane>
      <Pane position="relative" display="inline-block"><Pulsar /></Pane>
      <Pane position="relative" display="inline-block"><Pulsar position='top-left' /></Pane>
      <Pane position="relative" display="inline-block"><Pulsar onClick={() => {}} /></Pane>
      <Pane position="relative" display="inline-block"><Pulsar {...props} /></Pane>
      <Pane position="relative" display="inline-block"><Pulsar /></Pane>
      <Pane position="relative" display="inline-block"><Tooltip content={<Pane>Hello world</Pane>}><Pulsar /></Tooltip></Pane>
      <Pane position="relative" display="inline-block"><Tooltip content="Hello world"><Pulsar /></Tooltip></Pane>
    </React.Fragment>)
  );
}

export default Component
