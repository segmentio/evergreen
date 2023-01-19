import React from 'react'
import { Tab } from 'evergreen-ui'

const props = {
  onSelect: () => {}
}

const Component = () => {
  return (
    (<React.Fragment>
      <Tab disabled={false} isSelected={true} direction="vertical" />
      <Tab onSelect={() => {}} direction="vertical" />
      <Tab direction="vertical" />
      <Tab direction="horizontal" />
      <Tab {...props} disabled={false} isSelected={true} direction="vertical" />
      <Tab direction="vertical">Tab</Tab>
    </React.Fragment>)
  );
}

export default Component
