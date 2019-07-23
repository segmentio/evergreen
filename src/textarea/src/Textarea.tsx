import React, { PureComponent, ReactText, Validator } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Text } from '../../typography'
import { withTheme, Theme } from '../../theme'

interface TextareaProps extends React.ComponentProps<typeof Text> {
  /**
   * Makes the textarea element required.
   */
  required: boolean

  /**
   * Makes the textarea element disabled.
   */
  disabled: boolean

  /**
   * Sets visual styling of _only_ the text area to be "invalid".
   * Note that this does not effect any `validationMessage`.
   */
  isInvalid: boolean

  /**
   * Use the native spell check functionality of the browser.
   */
  spellCheck: boolean

  /**
   * Allow the Grammarly browser extension to attach to the backing textarea.
   */
  grammarly: boolean

  /**
   * The placeholder text when there is no value present.
   */
  placeholder: string

  /**
   * The appearance of the TextInput.
   */
  appearance: 'default'

  /**
   * The width of the TextInput.
   */
  width: string | number

  /**
   * Theme provided by ThemeProvider.
   */
  theme: Theme

  /**
   * Class name passed to the textarea.
   * Only use if you know what you are doing.
   */
  className: string
}

class Textarea extends PureComponent<TextareaProps> {
  static propTypes = {
    required: PropTypes.bool as Validator<boolean>,
    disabled: PropTypes.bool as Validator<boolean>,
    isInvalid: PropTypes.bool as Validator<boolean>,
    spellCheck: PropTypes.bool as Validator<boolean>,
    grammarly: PropTypes.bool as Validator<boolean>,
    placeholder: PropTypes.string as Validator<string>,
    appearance: PropTypes.string as Validator<'default'>,
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]) as PropTypes.Validator<ReactText>,
    theme: PropTypes.object.isRequired as Validator<Theme>,
    className: PropTypes.string as PropTypes.Validator<string>
  }

  static defaultProps = {
    appearance: 'default' as const,
    width: '100%',
    disabled: false,
    isInvalid: false,
    spellCheck: true,
    grammarly: false
  }

  static styles = {
    minHeight: 80,
    paddingX: 10,
    paddingY: 8
  }

  render() {
    const {
      theme,
      className,
      width,
      height,
      disabled,
      required,
      isInvalid,
      appearance,
      placeholder,
      spellCheck,
      grammarly,
      ...props
    } = this.props
    const themedClassName = theme.getTextareaClassName(appearance)

    return (
      <Text
        is="textarea"
        className={cx(themedClassName, className)}
        size={400}
        width={width}
        height={height}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        paddingLeft={Math.round(height / 3.2)}
        paddingRight={Math.round(height / 3.2)}
        borderRadius={3}
        spellCheck={spellCheck}
        aria-invalid={isInvalid}
        data-gramm_editor={grammarly}
        {...(disabled ? { color: 'muted' } : {})}
        {...Textarea.styles}
        {...props}
      />
    )
  }
}

export default withTheme(Textarea)
