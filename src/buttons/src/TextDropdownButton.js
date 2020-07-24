import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { dimensions, spacing, position, layout } from 'ui-box'
import iconHelper from '../../icons/src/iconHelper'
import { Text } from '../../typography'
import { Spinner } from '../../spinner'
import { withTheme } from '../../theme'

class TextDropdownButton extends PureComponent {
  static propTypes = {
    /**
     * Composes the dimensions spec from the Box primitive.
     */
    ...dimensions.propTypes,

    /**
     * Composes the spacing spec from the Box primitive.
     */
    ...spacing.propTypes,

    /**
     * Composes the position spec from the Box primitive.
     */
    ...position.propTypes,

    /**
     * Composes the layout spec from the Box primitive.
     */
    ...layout.propTypes,

    /**
     * Forcefully set the active state of a button.
     * Useful in conjuction with a Popover.
     */
    isActive: PropTypes.bool,

    /**
     * When true, the button is disabled.
     * isLoading also sets the button to disabled.
     */
    disabled: PropTypes.bool,

    /**
     * Name of a Blueprint UI icon, or an icon element, to render.
     * This prop is required because it determines the content of the component, but it can
     * be explicitly set to falsy values to render nothing.
     *
     * - If `null` or `undefined` or `false`, this component will render nothing.
     * - If given an `IconName` (a string literal union of all icon names),
     *   that icon will be rendered as an `<svg>` with `<path>` tags.
     * - If given a `JSX.Element`, that element will be rendered with the expected props passed through._
     */
    icon: PropTypes.oneOf([PropTypes.string, PropTypes.node]),

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
    isActive: false,
    icon: 'caret-down'
  }

  static styles = {
    position: 'relative',
    fontFamily: 'ui',
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    flexWrap: 'nowrap'
  }

  render() {
    const {
      theme,
      className,

      intent,
      height,
      isActive,
      children,
      disabled,
      appearance,
      isLoading,

      // Paddings
      paddingRight,
      paddingLeft,
      paddingTop,
      paddingBottom,

      // Icons
      icon,

      ...props
    } = this.props

    const themedClassName = theme.getTextDropdownButtonClassName()

    const IconToRender = iconHelper(icon, {
      size: 12,
      marginLeft: 2,
      color: 'default'
    })

    return (
      <Text
        is="button"
        className={themedClassName}
        paddingX={4}
        marginX={-4}
        paddingY={2}
        marginY={-2}
        size={300}
        data-active={isActive}
        {...TextDropdownButton.styles}
        {...props}
        disabled={disabled}
      >
        {isLoading && (
          <Spinner
            marginLeft={-Math.round(height / 8)}
            marginRight={Math.round(height / 4)}
            size={Math.round(height / 2)}
          />
        )}
        {children}
        {IconToRender}
      </Text>
    )
  }
}

export default withTheme(TextDropdownButton)
