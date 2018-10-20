import React, { PureComponent } from 'react'
import Box, { splitBoxProps } from 'ui-box'
import { Icon } from '../../icon'
import { TextInput } from '../../text-input'
import { withTheme } from '../../theme'
import { StackingOrder } from '../../constants'

class SearchInput extends PureComponent {
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
    const { theme, appearance, disabled, height, ...props } = this.props
    const { matchedProps, remainingProps } = splitBoxProps(props)
    const { width } = matchedProps
    const iconSize = theme.getIconSizeForInput(height)

    return (
      <Box
        position="relative"
        display="inline-flex"
        height={height}
        {...matchedProps}
      >
        <Box
          height={height}
          width={height}
          pointerEvents="none"
          position="absolute"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Icon
            icon="search"
            color="default"
            zIndex={StackingOrder.FOCUSED + 1}
            size={iconSize}
          />
        </Box>
        <TextInput
          height={height}
          paddingLeft={height}
          appearance={appearance}
          disabled={disabled}
          width={width}
          {...remainingProps}
        />
      </Box>
    )
  }
}

export default withTheme(SearchInput)
