import React, { PureComponent } from 'react'
import Box from 'ui-box'

export default class UnorderedList extends PureComponent {
  static propTypes = {
    ...Box.propTypes
  }

  static styles = {
    is: 'ul',
    margin: 0,
    marginLeft: '1.1em',
    padding: 0,
    listStylePosition: 'inside',
    listStyle: 'disc'
  }

  render() {
    return <Box {...UnorderedList.styles} {...this.props} />
  }
}
