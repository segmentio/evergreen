import React from 'react';
import { Nudge } from 'evergreen-ui';

const props = {
    isShown: true,
    onClick: () => {}
}

const Component = () => {
  return (
    (<React.Fragment>
      <Nudge></Nudge>
      <Nudge />
      <Nudge position='top-left' />
      <Nudge onClick={() => {}} />
      <Nudge {...props} />
      <Nudge isShown={true} />
      <Nudge tooltipContent={<Pane>Hello world</Pane>} />
      <Nudge tooltipContent="Hello world" />
    </React.Fragment>)
  );
}

export default Component
