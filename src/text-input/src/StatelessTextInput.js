import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { css } from 'glamor'
import { Text } from '../../typography'
import { withTheme } from '../../theme'
import { Icon } from '../../icon'

// Create a style to override default IE, Edge native input=["text"] clear button
const hideMsClearPseudoElement = css({
  'input[type=text]::-ms-clear': {
    display: 'none'
  }
})

class StatelessTextInput extends PureComponent {
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
     * Used to trigger the function that should clear the input value in Parent component.
     * Note that this is required to leverage the click of the [X] icon.
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

  static defaultProps = {
    appearance: 'default',
    height: 32,
    width: 280,
    disabled: false,
    isInvalid: false,
    spellCheck: true
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
      value,
      ...props
    } = this.props
    const themedClassName = theme.getTextInputClassName(appearance)
    const textSize = theme.getTextSizeForControlHeight(height)
    const borderRadius = theme.getBorderRadiusForControlHeight(height)

    return (
      <React.Fragment>
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
          value={value}
          onChange={onChange}
          paddingLeft={Math.round(height / 3.2)}
          paddingRight={Math.round(height / 3.2)}
          borderRadius={borderRadius}
          spellCheck={spellCheck}
          aria-invalid={isInvalid}
          {...(disabled ? { color: 'muted' } : {})}
          css={css}
          {...hideMsClearPseudoElement}
          {...props}
        />
        {isClearable &&
          value && (
            <Icon
              color="muted"
              icon="cross"
              appearance="default"
              onClick={onClear}
              marginLeft={-20}
            />
          )}
      </React.Fragment>
    )
  }
}

export default withTheme(StatelessTextInput)
