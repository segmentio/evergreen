import React, { memo } from 'react'
import { Button } from '../../buttons'
import { ButtonProps } from '../../buttons/src/Button'
import { Pane } from '../../layers'
import { majorScale, minorScale } from '../../scales'
import { useTheme } from '../../theme'
import { Link, Heading, Paragraph } from '../../typography'
import { LinkProps } from '../../typography/src/Link'

export interface EmptyStateProps {
  /** the title of the empty state */
  title: string
  /** the icon used in the empty state */
  icon: React.ReactElement
  /** the background used for the icon circle */
  iconBgColor: string
  /** specify the orientation of how the content flows */
  orientation?: 'horizontal' | 'vertical'
  /** the description of the empty state */
  description?: React.ReactNode
  /** the background used for the entire empty state container */
  background?: 'light' | 'dark'
  /** the primary cta of the empty state */
  primaryCta?: React.ReactElement
  /** the link cta of the empty state */
  anchorCta?: React.ReactElement
}

type EmptyStateOrientationProps = Omit<EmptyStateProps, 'orientation'>
type EmptyStateComponent = React.FC<EmptyStateProps> & {
  PrimaryButton: typeof PrimaryButton
  LinkButton: typeof LinkButton
}

const HorizontalOrientation: React.FC<EmptyStateOrientationProps> = memo<EmptyStateOrientationProps>(
  function HorizontalOrientation({ anchorCta, background, description, icon, iconBgColor, primaryCta, title }) {
    const hasFooter = primaryCta || anchorCta
    const { colors } = useTheme()

    const backgroundColor = background === 'light' ? 'white' : colors.gray75

    return (
      <Pane
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        padding={majorScale(6)}
        backgroundColor={backgroundColor}
        justifyContent="center"
      >
        <Pane display="flex" alignItems="flex-start" flex={1} height="100%">
          <Pane paddingRight={majorScale(6)}>
            <Pane
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="50%"
              backgroundColor={iconBgColor}
              width={majorScale(9)}
              height={majorScale(9)}
            >
              {React.cloneElement(icon, { size: majorScale(4) })}
            </Pane>
          </Pane>
          <Pane display="flex" flexDirection="column" paddingRight={majorScale(6)}>
            <Heading size={500} color={colors.gray700}>
              {title}
            </Heading>
            {description && (
              <Paragraph color="muted" marginTop={majorScale(2)}>
                {description}
              </Paragraph>
            )}
            {hasFooter && (
              <Pane marginTop={majorScale(5)} display="flex">
                {primaryCta}
                {primaryCta && anchorCta && React.cloneElement(anchorCta, { marginLeft: majorScale(4) })}
                {!primaryCta && anchorCta}
              </Pane>
            )}
          </Pane>
        </Pane>
      </Pane>
    )
  }
)

const VerticalOrientation: React.FC<EmptyStateOrientationProps> = memo<EmptyStateOrientationProps>(
  function VerticalOrientation({ background, description, icon, iconBgColor, primaryCta, title }) {
    const { colors } = useTheme()
    const backgroundColor = background === 'light' ? 'white' : colors.gray75

    return (
      <Pane
        display="flex"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
        flex={1}
        backgroundColor={backgroundColor}
        paddingX={majorScale(5)}
        paddingY={majorScale(5)}
        height="100%"
        width="100%"
      >
        <Pane
          display="flex"
          justifyContent="center"
          alignItems="center"
          borderRadius="50%"
          backgroundColor={iconBgColor}
          width={majorScale(7)}
          height={majorScale(7)}
        >
          {React.cloneElement(icon, { size: majorScale(3) })}
        </Pane>
        <Heading marginTop={majorScale(2)} textAlign="center" color={colors.gray700}>
          {title}
        </Heading>
        <Paragraph marginTop={majorScale(2)} textAlign="center" color={colors.gray700}>
          {description}
        </Paragraph>
        {primaryCta && React.cloneElement(primaryCta, { marginTop: minorScale(5) })}
      </Pane>
    )
  }
)

const PrimaryButton: React.FC<ButtonProps> = (props) => {
  return <Button appearance="primary" {...props} />
}

const LinkButton: React.FC<LinkProps> = (props) => {
  return <Link {...props} size={300} lineHeight="34px" />
}

const EmptyState: EmptyStateComponent = memo<EmptyStateProps>(function EmptyState({
  anchorCta,
  background = 'light',
  description,
  icon,
  iconBgColor,
  orientation = 'horizontal',
  primaryCta,
  title,
}) {
  if (orientation === 'vertical') {
    return (
      <VerticalOrientation
        title={title}
        icon={icon}
        iconBgColor={iconBgColor}
        background={background}
        description={description}
        primaryCta={primaryCta}
      />
    )
  }

  return (
    <HorizontalOrientation
      title={title}
      icon={icon}
      iconBgColor={iconBgColor}
      background={background}
      description={description}
      primaryCta={primaryCta}
      anchorCta={anchorCta}
    />
  )
}) as any as EmptyStateComponent

EmptyState.PrimaryButton = PrimaryButton
EmptyState.LinkButton = LinkButton

export default EmptyState
