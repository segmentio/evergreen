import React, { memo } from 'react'
import { Button } from '../../buttons'
// @ts-expect-error ts-migrate(2614) FIXME: Module '"../../buttons/src/Button"' has no exporte... Remove this comment to see the full error message
import { ButtonProps } from '../../buttons/src/Button'
import { Pane } from '../../layers'
import { majorScale, minorScale } from '../../scales'
import { useTheme } from '../../theme'
import { Link, Heading, Paragraph } from '../../typography'
// @ts-expect-error ts-migrate(2614) FIXME: Module '"../../typography/src/Link"' has no export... Remove this comment to see the full error message
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
  description?: string
  /** the background used for the entire empty state container */
  background?: 'light' | 'dark'
  /** the primary cta of the empty state */
  primaryCta?: React.ReactElement
  /** the link cta of the empty state */
  anchorCta?: React.ReactElement
}

type EmptyStateOrientationProps = Omit<EmptyStateProps, 'orientation'>

const HorizontalOrientation: React.FC<EmptyStateOrientationProps> = memo<EmptyStateOrientationProps>(
  function HorizontalOrientation({ anchorCta, background, description, icon, iconBgColor, primaryCta, title }) {
    const hasFooter = primaryCta || anchorCta
    const { colors } = useTheme()

    const backgroundColor = background === 'light' ? 'white' : colors.gray75

    return (
      // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
      <Pane
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        width="100%"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        height="100%"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        display="flex"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        flexDirection="column"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
        padding={majorScale(6)}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        backgroundColor={backgroundColor}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        justifyContent="center"
      >
        // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
        // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
        <Pane display="flex" alignItems="flex-start" flex={1} height="100%">
          // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
          // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
          <Pane paddingRight={majorScale(6)}>
            // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
            // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
            <Pane
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
              display="flex"
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
              justifyContent="center"
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
              alignItems="center"
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
              borderRadius="50%"
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
              backgroundColor={iconBgColor}
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
              width={majorScale(9)}
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
              height={majorScale(9)}
            >
              {React.cloneElement(icon, { size: majorScale(4) })}
            </Pane>
          </Pane>
          // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
          // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
          <Pane display="flex" flexDirection="column" paddingRight={majorScale(6)}>
            // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
            // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
            <Heading size={500} color={colors.gray700}>
              {title}
            </Heading>
            {description && (
              // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
              <Paragraph color="muted" marginTop={majorScale(2)}>
                {description}
              </Paragraph>
            )}
            {hasFooter && (
              // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
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
      // @ts-expect-error ts-migrate(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message
      <Pane
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        display="flex"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        alignItems="center"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        flexDirection="column"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        justifyContent="center"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
        flex={1}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        backgroundColor={backgroundColor}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
        paddingX={majorScale(5)}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
        paddingY={majorScale(5)}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        height="100%"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        width="100%"
      >
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        <Pane
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          display="flex"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          justifyContent="center"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          alignItems="center"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          borderRadius="50%"
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
          backgroundColor={iconBgColor}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          width={majorScale(7)}
          // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
          height={majorScale(7)}
        >
          {React.cloneElement(icon, { size: majorScale(3) })}
        </Pane>
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        <Heading marginTop={majorScale(2)} textAlign="center" color={colors.gray700}>
          {title}
        </Heading>
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        <Paragraph marginTop={majorScale(2)} textAlign="center" color={colors.gray700}>
          {description}
        </Paragraph>
        {primaryCta && React.cloneElement(primaryCta, { marginTop: minorScale(5) })}
      </Pane>
    )
  }
)

const PrimaryButton: React.FC<ButtonProps> = props => {
  return <Button appearance="primary" {...props} />
}

const LinkButton: React.FC<LinkProps> = props => {
  return <Link {...props} size={300} lineHeight="34px" />
}

const EmptyState: React.FC<EmptyStateProps> & {
  PrimaryButton: typeof PrimaryButton
  LinkButton: typeof LinkButton
} = memo<EmptyStateProps>(function EmptyState({
  anchorCta,
  background = 'light',
  description,
  icon,
  iconBgColor,
  orientation = 'horizontal',
  primaryCta,
  title
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
  // Casting as `any` here to satisfy ts warning for now. Attaching properties to a memoized
  // component seems to erroneously throw a type error
}) as any

EmptyState.PrimaryButton = PrimaryButton
EmptyState.LinkButton = LinkButton

export default EmptyState
