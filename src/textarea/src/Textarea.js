import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { TextStyles } from '../../typography'
import {
  InputAppearances,
  getBorderRadiusForTextSize
} from '../../shared-styles'

export default class Textarea extends PureComponent {
  static propTypes = {
    ...Box.propTypes,
    disabled: PropTypes.bool.isRequired,
    isInvalid: PropTypes.bool.isRequired,
    spellCheck: PropTypes.bool.isRequired,
    textSize: PropTypes.oneOf(Object.keys(TextStyles))
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

    const textStyle = TextStyles[textSize]
    const appearanceStyle = InputAppearances.default
    const borderRadius = getBorderRadiusForTextSize({ textSize })

    return (
      <Box
        is="textarea"
        disabled={disabled}
        borderRadius={borderRadius}
        spellCheck={spellCheck}
        {...(isInvalid ? { 'aria-invalid': true } : {})}
        {...(disabled ? { color: 'extraMuted' } : {})}
        {...textStyle}
        css={{ ...css, ...appearanceStyle }}
        {...Textarea.styles}
        {...props}
      />
    )
  }
}
