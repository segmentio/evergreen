import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text, TextStyles } from 'evergreen-typography'
import ButtonAppearances from '../styles/button-appearances'

const getTextStyleForButton = ({ height }) => {
  // HACK: add padding top to visually align in center
  if (height <= 24) return { ...TextStyles['200'], paddingTop: 1 }
  if (height <= 28) return TextStyles['300']
  if (height <= 32) return TextStyles['300']
  if (height <= 36) return TextStyles['400']
  if (height <= 40) return TextStyles['400']
  if (height <= 48) return TextStyles['500']
  if (height <= 56) return TextStyles['700']
  return TextStyles['800']
}

export default class Button extends PureComponent {
  static propTypes = {
    ...Text.propTypes,
    appearance: PropTypes.oneOf(Object.keys(ButtonAppearances)).isRequired,
    isActive: PropTypes.bool,
  }

  static defaultProps = {
    is: 'button',
    appearance: 'default',
    paddingTop: 0,
    paddingBottom: 0,
    display: 'inline-block',
    height: 32,
    fontFamily: 'ui',
    fontWeight: 500,
    isActive: false,
  }

  render() {
    const {
      appearance,
      css,
      height,
      paddingRight,
      paddingLeft,
      paddingTop,
      paddingBottom,
      isActive,
      ...props
    } = this.props
    const appearanceStyle = ButtonAppearances[appearance]
    const textStyle = getTextStyleForButton({ height })

    return (
      <Text
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        paddingRight={
          paddingRight !== undefined ? paddingRight : Math.round(height / 2)
        }
        paddingLeft={
          paddingLeft !== undefined ? paddingLeft : Math.round(height / 2)
        }
        {...textStyle}
        css={{
          ...css,
          ...appearanceStyle,
        }}
        height={height}
        lineHeight={`${height}px`}
        {...(isActive ? { 'data-active': true } : {})}
        {...props}
      />
    )
  }
}
