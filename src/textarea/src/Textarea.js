import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import {
  InputAppearances,
  getBorderRadiusForTextSize
} from '../../shared-styles'
import { Text } from '../../typography'

export default class Textarea extends PureComponent {
  static propTypes = {
    ...Box.propTypes,
    disabled: PropTypes.bool.isRequired,
    isInvalid: PropTypes.bool.isRequired,
    spellCheck: PropTypes.bool.isRequired,
    textSize: PropTypes.oneOf([300, 400, 500])
  }

  static defaultProps = {
    disabled: false,
    isInvalid: false,
    spellCheck: true,
    textSize: 300
  }

  static styles = {
    boxSizing: 'border-box',
    minHeight: 80,
    minWidth: 280,
    paddingX: 10,
    paddingY: 8
  }

  render() {
    const {
      css,
      disabled,
      textSize,
      isInvalid,
      spellCheck,
      ...props
    } = this.props

    const appearanceStyle = InputAppearances.default
    const borderRadius = getBorderRadiusForTextSize({ textSize })

    return (
      <Text
        is="textarea"
        disabled={disabled}
        borderRadius={borderRadius}
        spellCheck={spellCheck}
        size={textSize}
        {...(isInvalid ? { 'aria-invalid': true } : {})}
        {...(disabled ? { color: 'muted' } : {})}
        css={{ ...css, ...appearanceStyle }}
        {...Textarea.styles}
        {...props}
      />
    )
  }
}
