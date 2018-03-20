import React, { PureComponent } from 'react'
import Box, { splitBoxProps } from 'ui-box'
import { SearchIcon } from '../../icons'
import { getIconSizeForControlHeight } from '../../shared-styles'
import { TextInput } from '../../text-input'

export default class SearchInput extends PureComponent {
  static propTypes = {
    /**
     * Composes the TextInput component as the base.
     */
    ...TextInput.propTypes
  }

  static defaultProps = {
    height: 32,
    appearance: 'default'
  }

  render() {
    const { appearance, iconProps, disabled, height, ...props } = this.props
    const { matchedProps, remainingProps } = splitBoxProps(props)
    const { width = TextInput.defaultProps.width } = matchedProps
    const iconSize = getIconSizeForControlHeight({ height })
    return (
      <Box
        position="relative"
        display="inline-flex"
        height={height}
        {...matchedProps}
      >
        <SearchIcon
          pointerEvents="none"
          position="absolute"
          top="50%"
          zIndex={3}
          marginTop={-0.5 * height}
          iconSize={iconSize}
          size={height}
          disabled={disabled ? 'disabled' : 'default'}
          {...iconProps}
        />
        <TextInput
          height={height}
          paddingLeft={height}
          appearance={appearance}
          disable={disabled}
          width={width}
          {...remainingProps}
        />
      </Box>
    )
  }
}
