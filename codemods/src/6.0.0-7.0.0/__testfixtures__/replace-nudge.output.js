import React from 'react';
import { Nudge, Pulsar } from 'evergreen-ui';

const props = {
    isShown: true,
    onClick: () => {}
}

const Component = () => {
  return (
    <React.Fragment>
      <Pulsar></Pulsar>
      <Pulsar />
      <Pulsar position='top-left' />
      <Pulsar onClick={() => {}} />
      <Nudge {...props} />
      <Nudge isShown={true} />
      <Nudge tooltipContent={<Pane>Hello world</Pane>} />
    </React.Fragment>
  );
}

export default Component
