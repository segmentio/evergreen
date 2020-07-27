import React, { memo, forwardRef } from 'react'
import Box from 'ui-box'
import Tab from './Tab'

const styles = {
  width: '100%',
  paddingX: 0,
  paddingLeft: 8,
  marginX: 0,
  marginBottom: 4,
  justifyContent: 'auto'
}

const SidebarTab = memo(
  forwardRef(function SidebarTab(props, ref) {
    const { children, height = 32, isSelected, ...rest } = props

    return (
      <Tab
        isSelected={isSelected}
        height={height}
        {...styles}
        {...rest}
        ref={ref}
        display="flex"
      >
        <Box is="span" flex="1">
          {children}
        </Box>
      </Tab>
    )
  })
)

SidebarTab.propTypes = Tab.propTypes

export default SidebarTab
