import * as React from 'react'

import Pane, { IPaneProps } from './Pane'

export default class Card extends React.PureComponent<IPaneProps> {
  static propTypes = {
    ...Pane.propTypes
  }

  render() {
    return <Pane borderRadius={5} {...this.props} />
  }
}
