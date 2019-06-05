import React, { PureComponent, ReactElement } from 'react'
import PropTypes from 'prop-types'
import { Icon, IconName } from '../../icon'
import { withTheme, Theme } from '../../theme'
import Button from './Button'

type Intent = 'none' | 'success' | 'warning' | 'danger'
type Appearance = 'default' | 'minimal' | 'primary'

interface IconButtonProps extends React.ComponentProps<typeof Button> {
  /**
   * Name of a Blueprint UI icon, or an icon element, to render.
   * This prop is required because it determines the content of the component, but it can
   * be explicitly set to falsy values to render nothing.
   *
   * - If given an `IconName` (a string literal union of all icon names),
   *   that icon will be rendered as an `<svg>` with `<path>` tags.
   * - If given a `JSX.Element`, that element will be rendered and _all other props on this component are ignored._
   *   This type is supported to simplify usage of this component in other Blueprint components.
   *   As a consumer, you should never use `<Icon icon={<element />}` directly; simply render `<element />` instead.
   */
  icon: IconName | ReactElement

  /**
   * The intent of the button.
   */
  intent: Intent

  /**
   * The appearance of the button.
   */
  appearance: Appearance

  /**
   * Sets the height, font-size and icon size (if none is given) of the button.
   */
  height: number

  /**
   * Specifies an explicit icon size instead of the default value
   */
  iconSize?: number

  /**
   * Forcefully set the active state of a button.
   * Useful in conjuction with a Popover.
   */
  isActive?: boolean

  /**
   * When true, the button is disabled.
   * isLoading also sets the button to disabled.
   */
  disabled?: boolean

  /**
   * Theme provided by ThemeProvider.
   */
  theme: Theme
}

class IconButton extends PureComponent<IconButtonProps> {
  static propTypes = {
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired as PropTypes.Validator<IconName | ReactElement>,
    intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger'])
      .isRequired as PropTypes.Validator<Intent>,
    appearance: PropTypes.oneOf(['default', 'minimal', 'primary'])
      .isRequired as PropTypes.Validator<Appearance>,
    height: PropTypes.number.isRequired,
    iconSize: PropTypes.number,
    isActive: PropTypes.bool,
    disabled: PropTypes.bool,
    theme: PropTypes.object.isRequired as PropTypes.Validator<Theme>
  }

  static defaultProps = {
    intent: 'none' as const,
    appearance: 'default' as const,
    height: 32
  }

  render() {
    const {
      theme,
      iconAim,
      icon,
      iconSize,
      height,
      intent,
      ...props
    } = this.props
    const size = iconSize || theme.getIconSizeForIconButton(height)

    return (
      <Button
        intent={intent}
        height={height}
        width={height}
        paddingLeft={0}
        paddingRight={0}
        display="flex"
        justifyContent="center"
        {...props}
      >
        <Icon
          icon={icon}
          size={size}
          color={intent === 'none' ? 'default' : 'currentColor'}
        />
      </Button>
    )
  }
}

export default withTheme(IconButton)
