import React, { PureComponent } from 'react'
import Button from './Button'

export default class BackButton extends PureComponent {
  static propTypes = {
    ...Button.propTypes,
  }

  static defaultProps = {
    ...Button.defaultProps,
    iconBefore: 'arrow',
    iconBeforeAim: 'left',
    children: 'Back',
  }

  render() {
    return <Button {...this.props} />
  }
}
