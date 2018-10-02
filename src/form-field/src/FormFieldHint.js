import React, { PureComponent } from 'react'
import { Paragraph } from '../../typography'

export default class FormFieldHint extends PureComponent {
  static propTypes = {
    /**
     * Composes the Paragraph component as the base.
     */
    ...Paragraph.propTypes
  }

  render() {
    return <Paragraph marginTop={0} size={300} color="muted" {...this.props} />
  }
}
