import React, { PureComponent } from 'react'
import { Paragraph } from '../../typography'

export default class FormFieldDescription extends PureComponent<
  React.ComponentProps<typeof Paragraph>
> {
  render() {
    return <Paragraph marginTop={0} size={400} color="muted" {...this.props} />
  }
}
