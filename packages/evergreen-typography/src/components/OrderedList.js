import React, { PureComponent } from 'react'
import Box from 'ui-box'

const styles = {
  listStylePosition: 'inside',
  listStyle: 'number'
}

export default class OrderedList extends PureComponent {
  static propTypes = {
    ...Box.propTypes
  }

  static defaultProps = {
    is: 'ol',
    margin: 0,
    marginLeft: '1.1em',
    padding: 0
  }

  render() {
    return <Box css={styles} {...this.props} />
  }
}
