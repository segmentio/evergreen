import * as PropTypes from 'prop-types'
import * as React from 'react'

import { Label } from '../../typography'
import { TextProps } from '../../typography/src/Text'

interface FormFieldLabelProps extends TextProps {
  // Wether or not to show an asterix after the label.
  isAstrixShown?: boolean
}

export default class FormFieldLabel extends React.PureComponent<
  FormFieldLabelProps
> {
  static propTypes = {
    ...Label.propTypes,
    isAstrixShown: PropTypes.bool
  }

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
