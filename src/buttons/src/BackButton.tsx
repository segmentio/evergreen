import * as React from 'react'

import Button, { IButtonProps } from './Button'

export default class BackButton extends React.PureComponent<IButtonProps> {
  static propTypes = {
    ...Button.propTypes
  }

  static defaultProps = {
    // Composes the Button component as the base.
    ...Button.defaultProps,

    children: 'Back'
  }

  render() {
    return <Button iconBefore="arrow-left" {...this.props} />
  }
}
