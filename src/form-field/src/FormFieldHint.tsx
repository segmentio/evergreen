import React, { PureComponent } from 'react'
import { Paragraph } from '../../typography'

export default class FormFieldHint extends PureComponent<
  React.ComponentProps<typeof Paragraph>
> {
  render() {
    return <Paragraph marginTop={0} size={300} color="muted" {...this.props} />
  }
}
