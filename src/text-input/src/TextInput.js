import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Text } from '../../typography'
import { withTheme } from '../../theme'
import StatelessTextInput from './StatelessTextInput'

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
     * Sets visual styling of _only_ the text input to be "invalid".
     * Note that this does not effect any `validationMessage`.
     */
    isInvalid: PropTypes.bool,

    /**
     * Makes the input element clearable; enables clickable [X] icon
     */
    isClearable: PropTypes.bool,

    /**
     * Clears the input value when TextInput is Stateful
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

  state = {
    value: this.props.defaultValue || ''
  }

  static defaultProps = {
    appearance: 'default',
    height: 32,
    width: 280,
    disabled: false,
    isInvalid: false,
    spellCheck: true
  }

  handleClear = () => {
    this.setState({ value: '' })
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  render() {
    const {
      theme,
      className,
      onChange,
      css,
      width,
      height,
      isClearable,
      onClear,
      disabled,
      required,
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
      <StatelessTextInput
        value={this.state.value}
        isClearable={isClearable}
        onClear={this.handleClear}
        onChange={this.handleChange}
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
      />
    )
  }
}

export default withTheme(TextInput)
