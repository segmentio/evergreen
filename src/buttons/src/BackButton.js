import React, { PureComponent } from 'react'
import { ArrowLeftIcon } from '../../icons'
import Button from './Button'

export default class BackButton extends PureComponent {
  static propTypes = {
    /**
     * Composes the Button component as the base.
     */
    ...Button.propTypes
  }

  static defaultProps = {
    ...Button.defaultProps,
    children: 'Back'
  }

  render() {
    return <Button iconBefore={<ArrowLeftIcon />} {...this.props} />
  }
}
