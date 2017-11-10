import React, { PureComponent } from 'react'
import { Autocomplete } from 'evergreen-autocomplete'
import { TextInput } from 'evergreen-text-input'
import { Button } from 'evergreen-buttons'
import { TriangleIcon } from 'evergreen-icons'
import PropTypes from 'prop-types'
import Box, { dimensions, spacing, position, layout } from 'ui-box'

export default class Combobox extends PureComponent {
  static propTypes = {
    ...dimensions.propTypes,
    ...spacing.propTypes,
    ...position.propTypes,
    ...layout.propTypes,
    items: PropTypes.array,
    width: PropTypes.oneOf(PropTypes.string, PropTypes.number),
    height: PropTypes.number,
    onChange: PropTypes.func,
    inputProps: PropTypes.shape({ ...TextInput.propTypes }),
    buttonProps: PropTypes.shape({ ...Button.propTypes }),
    openOnFocus: PropTypes.bool,
    autocompleteProps: PropTypes.shape({ ...Autocomplete.propTypes }),
  }

  static defaultProps = {
    openOnFocus: false,
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      isOpenedByButton: false,
    }
  }

  handleStateChange = changes => {
    if (Object.prototype.hasOwnProperty.call(changes, 'isOpen')) {
      if (!changes.isOpen) {
        this.setState({ isOpenedByButton: false })
      }
    }
  }

  render() {
    const {
      items,
      width,
      height,
      onChange,
      inputProps,
      buttonProps,
      openOnFocus,
      autocompleteProps,
      ...props
    } = this.props

    return (
      <Autocomplete
        items={items}
        onChange={onChange}
        onStateChange={this.handleStateChange}
        isFilterDisabled={this.state.isOpenedByButton}
        {...autocompleteProps}
      >
        {({
          key,
          getRef,
          isOpen,
          openMenu,
          inputValue,
          getInputProps,
          getButtonProps,
          clearSelection,
        }) => (
          <Box
            innerRef={ref => getRef(ref)}
            display="inline-flex"
            key={key}
            width={width}
            {...props}
          >
            <TextInput
              height={height}
              value={inputValue}
              borderTopRightRadius={0}
              borderBottomRightRadius={0}
              {...getInputProps({
                ...inputProps,
                onFocus: () => {
                  if (openOnFocus) openMenu()
                },
                onChange: e => {
                  if (this.state.isOpenedByButton) {
                    this.setState({
                      isOpenedByButton: false,
                    })
                  }
                  if (e.target.value.trim() === '') {
                    // Prevent the selected item from sticking around
                    clearSelection()
                  }
                },
              })}
            />
            <Button
              height={height}
              marginLeft={-1}
              paddingLeft={0}
              paddingRight={0}
              borderTopLeftRadius={0}
              borderBottomLeftRadius={0}
              {...getButtonProps({
                ...buttonProps,
                onClick: () => {
                  if (!isOpen) {
                    this.setState({ isOpenedByButton: true })
                  }
                },
              })}
            >
              <TriangleIcon
                aim={isOpen ? 'up' : 'down'}
                marginTop={isOpen ? -1 : 0}
                iconSize={14}
              />
            </Button>
          </Box>
        )}
      </Autocomplete>
    )
  }
}
