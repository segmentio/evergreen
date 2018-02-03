import React, { PureComponent } from 'react'
import Box from 'ui-box'

const styles = {
  listStylePosition: 'inside',
  listStyle: 'disc'
}

export default class UnorderedList extends PureComponent {
  static propTypes = {
    ...Box.propTypes
  }

  static defaultProps = {
    is: 'ul',
    margin: 0,
    marginLeft: '1.1em',
    padding: 0
  }

  render() {
    return <Box css={styles} {...this.props} />
  }
}
