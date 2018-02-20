import React, { PureComponent } from 'react'
import Box from 'ui-box'

export default class OrderedList extends PureComponent {
  static propTypes = {
    ...Box.propTypes
  }

  static styles = {
    is: 'ol',
    margin: 0,
    marginLeft: '1.1em',
    padding: 0,
    listStylePosition: 'inside',
    listStyle: 'number'
  }

  render() {
    return <Box {...OrderedList.styles} {...this.props} />
  }
}
