import * as React from 'react'

import { Label } from '../../typography'
import { ITextProps } from '../../typography/src/Text'

interface IProps extends ITextProps {
  // Wether or not to show an asterix after the label.
  isAstrixShown?: boolean
}

export default class FormFieldLabel extends React.PureComponent<IProps> {
  render() {
    const { children, isAstrixShown, ...props } = this.props
    return (
      <Label display="block" {...props}>
        {children}{' '}
        {isAstrixShown && <span title="This field is required.">*</span>}
      </Label>
    )
  }
}
