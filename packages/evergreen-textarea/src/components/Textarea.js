import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { TextStyles } from 'evergreen-typography'
import {
  InputAppearances,
  getBorderRadiusForTextSize
} from 'evergreen-shared-styles'

export default class Textarea extends PureComponent {
  static propTypes = {
    ...Box.propTypes,
    disabled: PropTypes.bool.isRequired,
    isInvalid: PropTypes.bool.isRequired,
    spellcheck: PropTypes.bool.isRequired,
    textSize: PropTypes.oneOf(Object.keys(TextStyles))
  }

  static defaultProps = {
    is: 'textarea',
    boxSizing: 'border-box',
    minHeight: 80,
    minWidth: 280,
    disabled: false,
    isInvalid: false,
    spellcheck: true,
    textSize: 300,
    borderRadius: 5,
    paddingX: 10,
    paddingY: 8
  }

  render() {
    const {
      css,
      height,
      disabled,
      textSize,
      isInvalid,
      appearance,
      spellcheck,
      ...props
    } = this.props

    const textStyle = TextStyles[textSize]
    const appearanceStyle = InputAppearances.default
    const borderRadius = getBorderRadiusForTextSize({ textSize })

    return (
      <Box
        height={height}
        disabled={disabled}
        borderRadius={borderRadius}
        spellcheck={spellcheck}
        {...(isInvalid ? { 'aria-invalid': true } : {})}
        {...(disabled ? { color: 'extraMuted' } : {})}
        {...textStyle}
        css={{ ...css, ...appearanceStyle }}
        {...props}
      />
    )
  }
}
