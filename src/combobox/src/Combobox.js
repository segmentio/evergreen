import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box, { dimensions, spacing, position, layout } from 'ui-box'
import { Autocomplete } from '../../autocomplete'
import { TextInput } from '../../text-input'
import { IconButton } from '../../buttons'

export default class Combobox extends PureComponent {
  static propTypes = {
    ...dimensions.propTypes,
    ...spacing.propTypes,
    ...position.propTypes,
    ...layout.propTypes,
    items: PropTypes.array.isRequired,
    selectedItem: PropTypes.any,
    defaultSelectedItem: PropTypes.any,
    itemToString: PropTypes.func,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.number,
    onChange: PropTypes.func,
    inputProps: PropTypes.object,
    buttonProps: PropTypes.object,
    openOnFocus: PropTypes.bool,
    autocompleteProps: PropTypes.object
  }

  static defaultProps = {
    openOnFocus: false,
    width: 224,
    appearance: 'default'
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      isOpenedByButton: false
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
      selectedItem,
      defaultSelectedItem,
      itemToString,
      width,
      appearance,
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
        selectedItem={selectedItem}
        defaultSelectedItem={defaultSelectedItem}
        itemToString={itemToString}
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
          clearSelection
        }) => (
          <Box
            key={key}
            innerRef={ref => getRef(ref)}
            display="inline-flex"
            width={width}
            {...props}
          >
            <TextInput
              width={0}
              flex={1}
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
                      isOpenedByButton: false
                    })
                  }
                  if (e.target.value.trim() === '') {
                    // Prevent the selected item from sticking around
                    clearSelection()
                  }
                }
              })}
            />
            <IconButton
              iconAim={isOpen ? 'up' : 'down'}
              color="muted"
              icon="triangle"
              appearance={appearance}
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
                }
              })}
            />
          </Box>
        )}
      </Autocomplete>
    )
  }
}
