import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../buttons'
import { Pane } from '../../layers'
import { majorScale, minorScale } from '../../scales'
import { useTheme } from '../../theme'
import { Link, Heading, Paragraph } from '../../typography'

/* eslint-disable react/prop-types */

const HorizontalOrientation = memo(function HorizontalOrientation({
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'anchorCta' does not exist on type '{ chi... Remove this comment to see the full error message
  anchorCta,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'background' does not exist on type '{ ch... Remove this comment to see the full error message
  background,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'description' does not exist on type '{ c... Remove this comment to see the full error message
  description,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'icon' does not exist on type '{ children... Remove this comment to see the full error message
  icon,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'iconBgColor' does not exist on type '{ c... Remove this comment to see the full error message
  iconBgColor,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'primaryCta' does not exist on type '{ ch... Remove this comment to see the full error message
  primaryCta,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'title' does not exist on type '{ childre... Remove this comment to see the full error message
  title
}) {
  const hasFooter = primaryCta || anchorCta
  const { colors } = useTheme()

  const backgroundColor = background === 'light' ? 'white' : colors.gray75

  return (
    // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
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
      <Pane display="flex" alignItems="flex-start" flex={1} height="100%">
        // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
        <Pane paddingRight={majorScale(6)}>
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
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
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
        <Pane display="flex" flexDirection="column" paddingRight={majorScale(6)}>
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
})

/* eslint-enable react/prop-types */

/* eslint-disable react/prop-types */

const VerticalOrientation = memo(function VerticalOrientation({
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'background' does not exist on type '{ ch... Remove this comment to see the full error message
  background,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'description' does not exist on type '{ c... Remove this comment to see the full error message
  description,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'icon' does not exist on type '{ children... Remove this comment to see the full error message
  icon,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'iconBgColor' does not exist on type '{ c... Remove this comment to see the full error message
  iconBgColor,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'primaryCta' does not exist on type '{ ch... Remove this comment to see the full error message
  primaryCta,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'title' does not exist on type '{ childre... Remove this comment to see the full error message
  title
}) {
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
      <Pane
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        display="flex"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        justifyContent="center"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        alignItems="center"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
        borderRadius="50%"
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
        backgroundColor={iconBgColor}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
        width={majorScale(7)}
        // @ts-expect-error ts-migrate(2322) FIXME: Type 'number' is not assignable to type 'never'.
        height={majorScale(7)}
      >
        {React.cloneElement(icon, { size: majorScale(3) })}
      </Pane>
      // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
      <Heading marginTop={majorScale(2)} textAlign="center" color={colors.gray700}>
        {title}
      </Heading>
      // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
      <Paragraph marginTop={majorScale(2)} textAlign="center" color={colors.gray700}>
        {description}
      </Paragraph>
      {primaryCta && React.cloneElement(primaryCta, { marginTop: minorScale(5) })}
    </Pane>
  )
})
/* eslint-enable react/prop-types */

const PrimaryButton = (props: any) => {
  return <Button appearance="primary" {...props} />
}

const LinkButton = (props: any) => {
  return <Link {...props} size={300} lineHeight="34px" />
}

const EmptyState = memo(function EmptyState({
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'anchorCta' does not exist on type '{ chi... Remove this comment to see the full error message
  anchorCta,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'background' does not exist on type '{ ch... Remove this comment to see the full error message
  background = 'light',
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'description' does not exist on type '{ c... Remove this comment to see the full error message
  description,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'icon' does not exist on type '{ children... Remove this comment to see the full error message
  icon,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'iconBgColor' does not exist on type '{ c... Remove this comment to see the full error message
  iconBgColor,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'orientation' does not exist on type '{ c... Remove this comment to see the full error message
  orientation = 'horizontal',
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'primaryCta' does not exist on type '{ ch... Remove this comment to see the full error message
  primaryCta,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'title' does not exist on type '{ childre... Remove this comment to see the full error message
  title
}) {
  if (orientation === 'vertical') {
    return (
      <VerticalOrientation
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ title: any; icon: any; iconBgColor: any; b... Remove this comment to see the full error message
        title={title}
        icon={icon}
        iconBgColor={iconBgColor}
        background={background}
        description={description}
        primaryCta={primaryCta}
      />
    )
  } else {
    return (
      <HorizontalOrientation
        // @ts-expect-error ts-migrate(2322) FIXME: Type '{ title: any; icon: any; iconBgColor: any; b... Remove this comment to see the full error message
        title={title}
        icon={icon}
        iconBgColor={iconBgColor}
        background={background}
        description={description}
        primaryCta={primaryCta}
        anchorCta={anchorCta}
      />
    )
  }
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'PrimaryButton' does not exist on type 'N... Remove this comment to see the full error message
EmptyState.PrimaryButton = PrimaryButton
// @ts-expect-error ts-migrate(2339) FIXME: Property 'LinkButton' does not exist on type 'Name... Remove this comment to see the full error message
EmptyState.LinkButton = LinkButton

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
EmptyState.propTypes = {
  /** The title of the empty state */
  title: PropTypes.string.isRequired,
  /** The icon used in the empty state */
  icon: PropTypes.element.isRequired,
  /** The background color used for the icon circle */
  iconBgColor: PropTypes.string.isRequired,
  /** The direction in which to align the empty state elements */
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  /** The description of the empty state */
  description: PropTypes.string,
  /** The background used for the entire empty state container */
  background: PropTypes.oneOf(['light', 'dark']),
  /** The primary CTA of the empty state */
  primaryCta: PropTypes.element,
  /** The link CTA of the empty state */
  anchorCta: PropTypes.element
}

export default EmptyState
