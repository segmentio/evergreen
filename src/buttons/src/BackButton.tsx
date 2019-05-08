import React, { PureComponent } from 'react'
import Button from './Button'

export default class BackButton extends PureComponent<
  React.ComponentProps<typeof Button>
> {
  static defaultProps = {
    children: 'Back'
  }

  render() {
    return <Button iconBefore="arrow-left" {...this.props} />
  }
}
