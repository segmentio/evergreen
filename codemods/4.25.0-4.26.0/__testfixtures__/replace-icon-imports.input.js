import React from 'react';
import { Pane, Icon } from 'evergreen-ui';

function MyComponent(_props) {
  return (
    <Pane>
      <Icon cursor="pointer" icon="cog" />
      <Icon icon="add" />
      <Icon icon="airplane" />
      <Icon marginTop={2} icon="arrow-bottom-left" />
      <Icon color="currentColor" icon="annotation" />
    </Pane>
  );
}

export default MyComponent;
