import * as React from 'react'

import { Paragraph } from '../../typography'
import { IParagraphProps } from '../../typography/src/Paragraph'

export default class FormFieldHint extends React.PureComponent<
  IParagraphProps
> {
  static propTypes = {
    ...Paragraph.propTypes
  }

  render() {
    return <Paragraph marginTop={0} size={300} color="muted" {...this.props} />
  }
}
