import React, { memo, forwardRef } from 'react'
import cx from 'classnames'
import { PolymorphicBoxProps } from 'ui-box'
import { IconButton } from '../../buttons'
import { useStyleConfig } from '../../hooks'
import { CrossIcon } from '../../icons'
import { Pane } from '../../layers'
import { PaneOwnProps } from '../../layers/src/Pane'
import { DefaultAppearance } from '../../types'
import { IntentTypes } from '../../types/theme/intent-types'
import { Heading, Paragraph } from '../../typography'
import { getIconForIntent } from './getIconForIntent'

export interface AlertOwnProps extends PaneOwnProps {
  intent?: IntentTypes
  title?: React.ReactNode
  /**
   * When true, show a icon on the left matching the type,
   */
  hasIcon?: boolean
  /**
   * When true, show a remove icon button.
   */
  isRemoveable?: boolean
  /**
   * Function called when the remove button is clicked.
   */
  onRemove?: (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void
  /**
   * The appearance of the alert.
   */
  appearance?: DefaultAppearance | 'card'
}

export type AlertProps = PolymorphicBoxProps<'div', AlertOwnProps>

const pseudoSelectors = {}

const internalStyles = {
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  // 15 instead of 16 in order to maintain height with 1px border
  padding: '15px',
}

const Alert: React.FC<AlertProps> = memo(
  forwardRef(function Alert(props, ref) {
    const {
      appearance = 'default',
      children,
      className,
      hasIcon = true,
      intent = 'info',
      isRemoveable = false,
      onRemove,
      title,
      ...restProps
    } = props

    const intentToken = intent === 'none' ? 'info' : intent
    const { className: themedClassName, ...styleProps } = useStyleConfig(
      'Alert',
      { appearance, intent: intentToken },
      pseudoSelectors,
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ position: string; overflow: st... Remove this comment to see the full error message
      internalStyles
    )

    return (
      <Pane ref={ref} className={cx(className, themedClassName)} role="alert" {...styleProps} {...restProps}>
        {hasIcon && (
          <Pane marginRight={16} marginLeft={2} marginTop={-1} display="flex" alignItems="flex-start">
            {getIconForIntent(intentToken, { size: 16 })}
          </Pane>
        )}
        <Pane flex={1}>
          {title && (
            <Heading
              is="h4"
              size={400}
              marginTop={0}
              marginBottom={0}
              fontWeight={500}
              lineHeight={1}
              // Get this from the theme / props on the Alert
              color="inherit"
            >
              {title}
            </Heading>
          )}
          {typeof children === 'string' ? (
            <Paragraph size={400} color="muted" marginTop={title ? 8 : 0} lineHeight={1}>
              {children}
            </Paragraph>
          ) : (
            <Pane>{children}</Pane>
          )}
        </Pane>
        {isRemoveable && (
          <Pane marginLeft={24} flexShrink={0} marginBottom={-2} marginTop={-4} marginRight={-4}>
            <IconButton icon={CrossIcon} appearance="minimal" height={24} onClick={onRemove} intent={intentToken} />
          </Pane>
        )}
      </Pane>
    )
  })
)

export default Alert
