import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { spacing, dimensions, position, layout } from 'ui-box'
import { colors } from '../../colors'
import { Pane } from '../../layers'
import { Text } from '../../typography'
import {
  CheckCircleIcon,
  DangerIcon,
  QuestionIcon,
  WarningIcon
} from '../../icons'

const getColorForType = type => {
  switch (type) {
    case 'success':
      return colors.green['500']
    case 'question':
    default:
      return colors.blue['500']
    case 'danger':
      return colors.red['500']
    case 'warning':
      return colors.yellow['500']
  }
}

const getIconForType = type => {
  const iconProps = {
    size: 22,
    iconSize: 14,
    color: getColorForType(type)
  }

  switch (type) {
    case 'success':
      return <CheckCircleIcon {...iconProps} />
    case 'question':
    default:
      return <QuestionIcon {...iconProps} />
    case 'danger':
      return <DangerIcon {...iconProps} />
    case 'warning':
      return <WarningIcon {...iconProps} />
  }
}

const getStyle = ({ type }) => ({
  '&:before': {
    content: '""',
    width: 3,
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: getColorForType(type)
  }
})

const AlertAppearances = {
  default: {
    boxShadow: `inset 0 0 0 1px ${colors.neutral['20A']}`
  },
  card: {
    elevation: 1,
    borderRadius: 3
  }
}

export default class Alert extends PureComponent {
  static propTypes = {
    /**
     * Composes some Box APIs.
     */
    ...spacing.propTypes,
    ...position.propTypes,
    ...layout.propTypes,
    ...dimensions.propTypes,

    /**
     * The content of the alert. When a string is passed it is wrapped in a `<Text size={400} />` component.
     */
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /**
     * The type of the alert.
     */
    type: PropTypes.oneOf([
      'default',
      'success',
      'warning',
      'danger',
      'question'
    ]),

    /**
     * The title of the alert.
     */
    title: PropTypes.node,

    /**
     * When true, show a border on the left matching the type.
     */
    hasTrim: PropTypes.bool,

    /**
     * When true, show a icon on the left matching the type,
     */
    hasIcon: PropTypes.bool,

    /**
     * The appearance of the alert.
     */
    appearance: PropTypes.oneOf(['default', 'card'])
  }

  static defaultProps = {
    type: 'default',
    hasTrim: true,
    hasIcon: true,
    appearance: 'default'
  }

  render() {
    const {
      title,
      type,
      hasTrim,
      hasIcon,
      children,
      appearance,
      ...props
    } = this.props

    const style = hasTrim && type === 'default' ? {} : getStyle({ type })

    const appearanceProps = AlertAppearances[appearance]

    return (
      <Pane
        role="alert"
        backgroundColor="white"
        overflow="hidden"
        position="relative"
        display="flex"
        paddingY={12}
        paddingX={16}
        css={style}
        {...appearanceProps}
        {...props}
      >
        {hasIcon &&
          type !== 'default' && (
            <Pane marginRight={8}>{getIconForType(type)}</Pane>
          )}
        <Pane>
          <Text
            is="h4"
            fontWeight={600}
            size={400}
            marginTop={0}
            marginBottom={0}
          >
            {title}
          </Text>
          {typeof children === 'string' ? (
            <Text size={400} color="muted">
              {children}
            </Text>
          ) : (
            children
          )}
        </Pane>
      </Pane>
    )
  }
}
