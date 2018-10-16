import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { dimensions, spacing, position, layout } from 'ui-box'
import { Text } from '../../typography'
import { Icon } from '../../icon'
import { Spinner } from '../../spinner'
import { withTheme } from '../../theme'

class TextDropdownButton extends PureComponent {
  static propTypes = {
    /**
     * Composes the dimensions spec from the Box primitivie.
     */
    ...dimensions.propTypes,

    /**
     * Composes the spacing spec from the Box primitivie.
     */
    ...spacing.propTypes,

    /**
     * Composes the position spec from the Box primitivie.
     */
    ...position.propTypes,

    /**
     * Composes the layout spec from the Box primitivie.
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
     * - If given a `JSX.Element`, that element will be rendered and _all other props on this component are ignored._
     *   This type is supported to simplify usage of this component in other Blueprint components.
     *   As a consumer, you should never use `<Icon icon={<element />}` directly; simply render `<element />` instead.
     */
    icon: PropTypes.string.isRequired,

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
        <Icon color="default" icon={icon} size={12} marginLeft={2} />
      </Text>
    )
  }
}

export default withTheme(TextDropdownButton)
