import React, { PureComponent } from 'react'
import { Paragraph } from '../../typography'

export default class FormFieldDescription extends PureComponent {
  static propTypes = {
    /**
     * Composes the Paragraph component as the base.
     */
    ...Paragraph.propTypes
  }

  static defaultProps = {
    marginTop: 0,
    size: 300,
    color: 'extraMuted'
  }

  render() {
    const { ...props } = this.props
    return <Paragraph {...props} />
  }
}
