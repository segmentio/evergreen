import React from 'react'
import { SidebarTab } from 'evergreen-ui'

const props = {
  onSelect: () => {}
}

const Component = () => {
  return (
    (<React.Fragment>
      <SidebarTab disabled={false} isSelected={true} />
      <SidebarTab onSelect={() => {}} />
      <SidebarTab direction="vertical" />
      <SidebarTab direction="horizontal" />
      <SidebarTab {...props} disabled={false} isSelected={true} />
      <SidebarTab>Tab</SidebarTab>
    </React.Fragment>)
  )
}

export default Component
