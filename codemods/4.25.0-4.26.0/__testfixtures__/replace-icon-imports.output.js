import React from 'react';
import {
  Pane,
  Menu,
  Button,
  SelectMenu,
  CogIcon,
  AddIcon,
  AirplaneIcon,
  ArrowBottomLeftIcon,
  AnnotationIcon,
  NotificationsIcon,
  SearchIcon,
} from 'evergreen-ui';

function MyComponent(_props) {
  return (
    <Pane>
      <CogIcon cursor="pointer" />
      <AddIcon />
      <AirplaneIcon />
      <ArrowBottomLeftIcon marginTop={2} />
      <AnnotationIcon color="currentColor" />
      <Menu.Item icon={NotificationsIcon} />
      <Button iconAfter={NotificationsIcon} />
      <SelectMenu filterIcon={SearchIcon} />
    </Pane>
  );
}

export default MyComponent;
