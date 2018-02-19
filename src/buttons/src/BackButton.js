import React, { PureComponent } from 'react'
import Button from './Button'

export default class BackButton extends PureComponent {
  static propTypes = {
    /**
     * Composes the Button component as the base.
     */
    ...Button.propTypes
  }

  static defaultProps = {
    /**
     * Sets the arrow icon before the text.
     */
    iconBefore: 'arrow',

    /**
     * Aims the arrow to the left.
     */
    iconBeforeAim: 'left',

    /**
     * Default text is `Back`. Overwrite to something more specific if possible.
     */
    children: 'Back'
  }

  render() {
    return <Button {...this.props} />
  }
}
