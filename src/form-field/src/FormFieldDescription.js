import React, { PureComponent } from 'react'
import { Paragraph } from '../../typography'

export default class FormFieldDescription extends PureComponent {
  static propTypes = {
    /**
     * Composes the Paragraph component as the base.
     */
    ...Paragraph.propTypes
  }

  render() {
    return <Paragraph marginTop={0} size={400} color="muted" {...this.props} />
  }
}
