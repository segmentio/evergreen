import * as React from 'react'

import { Paragraph } from '../../typography'
import { IParagraphProps } from '../../typography/src/Paragraph'

export default class FormFieldDescription extends React.PureComponent<
  IParagraphProps
> {
  render() {
    return <Paragraph marginTop={0} size={400} color="muted" {...this.props} />
  }
}
