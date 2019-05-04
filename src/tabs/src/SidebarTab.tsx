import React, { PureComponent } from 'react'
import Box from 'ui-box'
import Tab from './Tab'

export default class SidebarTab extends PureComponent {
  static propTypes = {
    ...Tab.propTypes
  }

  static defaultProps = {
    height: 32
  }

  static styles = {
    width: '100%',
    paddingX: 0,
    paddingLeft: 8,
    marginX: 0,
    marginBottom: 4,
    justifyContent: 'auto'
  }

  render() {
    const { children, height, isSelected, ...props } = this.props
    return (
      <Tab
        isSelected={isSelected}
        height={height}
        {...SidebarTab.styles}
        {...props}
        display="flex"
      >
        <Box is="span" flex="1">
          {children}
        </Box>
      </Tab>
    )
  }
}
