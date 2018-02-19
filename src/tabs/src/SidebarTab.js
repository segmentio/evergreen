import React, { PureComponent } from 'react'
import Box from 'ui-box'
import { TriangleIcon } from '../../icons'
import Tab from './Tab'

export default class Tablist extends PureComponent {
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
        {...Tablist.styles}
        {...props}
      >
        <Box is="span" flex="1">
          {children}
        </Box>
        {isSelected && (
          <TriangleIcon
            height={height}
            width={height}
            iconSize={14}
            aim="right"
            color="inherit"
          />
        )}
      </Tab>
    )
  }
}
