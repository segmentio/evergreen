import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Box from 'ui-box'
import { Text } from '../../typography'
import { withTheme } from '../../theme'
import { Icon } from '../../icon'

class TextInput extends PureComponent {
  static propTypes = {
    /**
     * Composes the Text component as the base.
     */
    ...Text.propTypes,

    /**
     * Makes the input element required.
     */
    required: PropTypes.bool,

    /**
     * Makes the input element disabled.
     */
    disabled: PropTypes.bool,

    /**
     * Sets visual styling to be invalid.
     */
    isInvalid: PropTypes.bool,

    /**
     * Makes the input element clearable
     */
    isClearable: PropTypes.bool,

    /**
     * Clears the input value when TextInput is controlled
     */
    onClear: PropTypes.func,

    /**
     * Use the native spell check functionality of the browser.
     */
    spellCheck: PropTypes.bool,

    /**
     * The placeholder text when there is no value present.
     */
    placeholder: PropTypes.string,

    /**
     * The appearance of the TextInput.
     */
    appearance: PropTypes.string,

    /**
     * The width of the TextInput.
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Theme provided by ThemeProvider.
     */
    theme: PropTypes.object.isRequired,

    /**
     * Class name passed to the button.
     * Only use if you know what you are doing.
     */
    className: PropTypes.string
  }
  constructor(props) {
    super(props)
    // Create a state for 'uncontrolled' inputs, locally controlled
    this.state = {
      value: ''
    }
  }

  static defaultProps = {
    appearance: 'default',
    height: 32,
    width: 280,
    disabled: false,
    isInvalid: false,
    spellCheck: true
  }
  handleValueCase() {
    if ('value' in this.props) {
      console.log('Input has controlled value prop')
      return this.props.value
    }
    return this.state.value
  }
  render() {
    const {
      theme,
      className,

      css,
      onClear,
      width,
      height,
      isClearable,
      disabled,
      required,
      onChange,
      isInvalid,
      appearance,
      placeholder,
      spellCheck,
      ...props
    } = this.props
    const themedClassName = theme.getTextInputClassName(appearance)
    const textSize = theme.getTextSizeForControlHeight(height)
    const borderRadius = theme.getBorderRadiusForControlHeight(height)

    return (
      <Box
        display="inline-flex"
        flex={1}
        position="relative"
        width="auto"
        height={height}
      >
        <Text
          is="input"
          className={cx(themedClassName, className)}
          type="text"
          size={textSize}
          width={width}
          height={height}
          required={required}
          disabled={disabled}
          placeholder={placeholder}
          paddingLeft={Math.round(height / 3.2)}
          paddingRight={Math.round(height / 3.2)}
          borderRadius={borderRadius}
          spellCheck={spellCheck}
          aria-invalid={isInvalid}
          {...(disabled ? { color: 'muted' } : {})}
          css={css}
          {...props}
          value={this.handleValueCase()}
          {...(onChange
            ? { onChange }
            : { onChange: e => this.setState({ value: e.target.value }) })}
        />

        {isClearable &&
          (this.props.value && this.props.onChange) && (
            <Icon
              color="muted"
              icon="cross"
              appearance="default"
              onClick={onClear}
              marginLeft={-20}
              marginTop={6}
            />
          )}
        {isClearable &&
          (!this.props.value && this.state.value.length > 0) && (
            <Icon
              color="muted"
              icon="cross"
              appearance="default"
              onClick={() => {
                this.setState({ value: '' })
              }}
              marginLeft={-20}
              marginTop={6}
            />
          )}
      </Box>
    )
  }
}

export default withTheme(TextInput)
