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

export default class InlineAlert extends PureComponent {
  static propTypes = {
    /**
     * Composes some Box APIs.
     */
    ...spacing.propTypes,
    ...position.propTypes,
    ...layout.propTypes,
    ...dimensions.propTypes,

    /**
     * The content of the alert.
     */
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

    /**
     * The type of the alert. This should always be set explicitly.
     */
    type: PropTypes.oneOf([
      'default',
      'success',
      'warning',
      'danger',
      'question'
    ]),

    /**
     * When true, show a icon on the left matching the type.
     * There is no point not showing this.
     */
    hasIcon: PropTypes.bool,

    /**
     * The size of the Text.
     */
    size: PropTypes.number
  }

  static defaultProps = {
    type: 'default',
    hasIcon: true,
    size: 400
  }

  render() {
    const { children, type, hasIcon, size, ...props } = this.props

    return (
      <Pane alignItems="center" display="flex" {...props}>
        {hasIcon &&
          type !== 'default' && (
            <Pane display="inline" marginRight={8}>
              {getIconForType(type)}
            </Pane>
          )}
        <Text size={size} fontWeight={500}>
          {children}
        </Text>
      </Pane>
    )
  }
}
