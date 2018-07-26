import React, { PureComponent } from 'react'
import VirtualList from 'react-tiny-virtual-list'
import { Pane } from '../../layers'

export default class TableVirtualBody extends PureComponent {
  static propTypes = {
    /**
     * Composes the Pane component as the base.
     */
    ...Pane.propTypes
  }

  render() {
    const { children, height, ...props } = this.props
    return (
      <Pane flex="1" overflowY="scroll" height={height} {...props}>
        <VirtualList
          height={height}
          width="100%"
          itemSize={48}
          overscanCount={3}
          itemCount={children.length}
          renderItem={({ index, style }) => {
            console.log(children[index])
            return React.cloneElement(children[index], {
              style
            })
          }}
        />
        {children}
      </Pane>
    )
  }
}
