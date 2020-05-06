import React from 'react';
import { Pane, CogIcon, AddIcon, AirplaneIcon, ArrowBottomLeftIcon, AnnotationIcon } from 'evergreen-ui';

function MyComponent(_props) {
  return (
    <Pane>
      <CogIcon cursor="pointer" />
      <AddIcon />
      <AirplaneIcon />
      <ArrowBottomLeftIcon marginTop={2} />
      <AnnotationIcon color="currentColor" />
    </Pane>
  );
}

export default MyComponent;
