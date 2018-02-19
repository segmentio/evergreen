import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Text } from '../../typography'
import { TriangleIcon } from '../../icons'
import {
  getIconSizeForControlHeight,
  getBorderRadiusForControlHeight,
  getTextSizeForControlHeight
} from '../../shared-styles'
import SelectAppearances from './styles/SelectAppearances'

export default class Select extends PureComponent {
  static propTypes = {
    ...Box.propTypes,
    id: PropTypes.string,
    name: PropTypes.string,
    children: PropTypes.node,
    onChange: PropTypes.func,
    value: PropTypes.any,
    appearance: PropTypes.oneOf(Object.keys(SelectAppearances)),
    required: PropTypes.bool,
    autofocus: PropTypes.bool,
    isInvalid: PropTypes.bool
  }

  static defaultProps = {
    appearance: 'default',
    height: 32
  }

  render() {
    const {
      id,
      name,
      height,
      children,
      disabled,
      onChange,
      value,
      required,
      autofocus,
      isInvalid,
      appearance,
      ...props
    } = this.props
    const appearanceStyle = SelectAppearances[appearance]
    const textSize = getTextSizeForControlHeight({ height })
    const borderRadius = getBorderRadiusForControlHeight({ height })
    const iconSize = getIconSizeForControlHeight({ height })

    return (
      <Box
        display="inline-flex"
        flex={1}
        position="relative"
        width={200}
        height={height}
        {...props}
      >
        <Text
          is="select"
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          {...(required ? { required: true } : {})}
          {...(autofocus ? { autofocus: true } : {})}
          {...(disabled ? { disabled: true } : {})}
          {...(isInvalid ? { 'aria-invalid': true } : {})}
          css={appearanceStyle}
          size={textSize}
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
          color={disabled ? 'disabled' : 'default'}
          iconSize={iconSize}
          css={{
            pointerEvents: 'none'
          }}
        />
      </Box>
    )
  }
}
