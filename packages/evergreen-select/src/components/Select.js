import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Text, TextStyles } from 'evergreen-typography'
import { TriangleIcon } from 'evergreen-icons'
import colors from 'evergreen-colors'
import SelectAppearances from '../styles/select-appearances'

const getTextStyleForSelect = ({ height }) => {
  if (height <= 24) return TextStyles['200']
  if (height <= 28) return TextStyles['300']
  if (height <= 32) return TextStyles['300']
  if (height <= 36) return TextStyles['400']
  if (height <= 40) return TextStyles['400']
  if (height <= 48) return TextStyles['500']
  if (height <= 56) return TextStyles['700']
  return TextStyles['800']
}

const getBorderRadiusForSelect = ({ height }) => {
  if (height <= 28) return 3
  if (height <= 32) return 4
  return 5
}

export default class Select extends PureComponent {
  static propTypes = {
    ...Box.propTypes,
    id: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.node,
    onChange: PropTypes.func,
    appearance: PropTypes.oneOf(Object.keys(SelectAppearances)),
    required: PropTypes.bool,
    autofocus: PropTypes.bool,
    isInvalid: PropTypes.bool,
  }

  static defaultProps = {
    appearance: 'default',
    width: 200,
    height: 32,
    display: 'inline-flex',
    flex: 1,
    position: 'relative',
  }

  render() {
    const {
      id,
      name,
      height,
      children,
      disabled,
      onChange,
      required,
      autofocus,
      isInvalid,
      appearance,
      ...props
    } = this.props
    const appearanceStyle = SelectAppearances[appearance]
    const textStyle = getTextStyleForSelect({ height })
    const borderRadius = getBorderRadiusForSelect({ height })

    return (
      <Box height={height} {...props}>
        <Text
          is="select"
          id={id}
          name={name}
          onChange={onChange}
          {...(required ? { required: true } : {})}
          {...(autofocus ? { autofocus: true } : {})}
          {...(disabled ? { disabled: true } : {})}
          {...(isInvalid ? { 'aria-invalid': true } : {})}
          css={{ ...appearanceStyle }}
          {...textStyle}
          borderRadius={borderRadius}
          textTransform="default"
          paddingLeft={Math.round(height / 3.2)}
        >
          {children}
        </Text>
        <TriangleIcon
          height={height}
          aim="down"
          padding={10}
          boxSizing="border-box"
          position="absolute"
          right={height >= 36 ? 4 : 0}
          color={disabled ? colors.neutral['50A'] : colors.neutral['200A']}
          css={{
            pointerEvents: 'none',
          }}
        />
      </Box>
    )
  }
}
