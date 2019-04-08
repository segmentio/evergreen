import { IconName } from '@blueprintjs/icons'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import Box, { BoxProps } from 'ui-box'

import { Icon } from '../../icon'
import { IntentType } from '../../constants'
import { withTheme, PropsWithTheme } from '../../theme'
import { Appearance } from '../../types/appearance'
import Button from './Button'

interface IProps extends Partial<BoxProps> {
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
  icon?: IconName | JSX.Element

  // Specifies an explicit icon size instead of the default value
  iconSize?: number

  // The intent of the button.
  intent?: IntentType

  // The appearance of the button.
  appearance?: Appearance

  // Forcefully set the active state of a button. Useful in conjuction with a Popover.
  isActive?: boolean

  // When true, the button is disabled. isLoading also sets the button to disabled.
  disabled?: boolean

  // Class name passed to the button. Only use if you know what you are doing.
  className?: string
}

class IconButton extends React.PureComponent<PropsWithTheme<IProps>> {
  static propTypes = {
    ...Box.propTypes,
    icon: PropTypes.string as PropTypes.Validator<IconName>,
    iconSize: PropTypes.number,
    intent: PropTypes.oneOf(['none', 'success', 'warning', 'danger'])
      .isRequired as PropTypes.Validator<IntentType>,
    appearance: PropTypes.oneOf(['default', 'minimal', 'primary'])
      .isRequired as PropTypes.Validator<Appearance>,
    isActive: PropTypes.bool,
    disabled: PropTypes.bool,
    theme: PropTypes.object.isRequired,
    className: PropTypes.string
  }

  static defaultProps = {
    intent: 'none' as IntentType,
    appearance: 'default' as Appearance,
    height: 32
  }

  render() {
    const { theme, icon, iconSize, height, intent, ...props } = this.props
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
