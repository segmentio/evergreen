import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../buttons'
import { Pane } from '../../layers'
import { majorScale, minorScale } from '../../scales'
import { useTheme } from '../../theme'
import { Link, Heading, Paragraph } from '../../typography'

/* eslint-disable react/prop-types */

const HorizontalOrientation = memo(function HorizontalOrientation({
  anchorCta,
  background,
  description,
  icon,
  iconBgColor,
  primaryCta,
  secondaryCta,
  title
}) {
  const hasFooter = primaryCta || secondaryCta || anchorCta
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
          <Heading size={500}>{title}</Heading>
          {description && (
            <Paragraph color="muted" marginTop={majorScale(2)}>
              {description}
            </Paragraph>
          )}
          {hasFooter && (
            <Pane marginTop={majorScale(5)} display="flex">
              {primaryCta && React.cloneElement(primaryCta, { marginRight: majorScale(2) })}
              {secondaryCta}
              {(primaryCta || secondaryCta) &&
                anchorCta &&
                React.cloneElement(anchorCta, { marginLeft: majorScale(2) })}
              {!primaryCta && !secondaryCta && anchorCta}
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
  background,
  description,
  icon,
  iconBgColor,
  primaryCta,
  title
}) {
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
      <Heading marginTop={majorScale(2)} textAlign="center">
        {title}
      </Heading>
      <Paragraph marginTop={majorScale(2)} textAlign="center">
        {description}
      </Paragraph>
      {primaryCta && React.cloneElement(primaryCta, { marginTop: minorScale(5) })}
    </Pane>
  )
})
/* eslint-enable react/prop-types */

const PrimaryButton = props => {
  return <Button appearance="primary" {...props} />
}

const SecondaryButton = props => {
  return <Button appearance="minimal" {...props} />
}

const LinkButton = props => {
  return <Link {...props} size={300} lineHeight="34px" />
}

const EmptyState = memo(function EmptyState({
  anchorCta,
  background = 'light',
  description,
  icon,
  iconBgColor,
  orientation = 'horizontal',
  primaryCta,
  secondaryCta,
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
  } else {
    return (
      <HorizontalOrientation
        title={title}
        icon={icon}
        iconBgColor={iconBgColor}
        background={background}
        description={description}
        primaryCta={primaryCta}
        secondaryCta={secondaryCta}
        anchorCta={anchorCta}
      />
    )
  }
})

EmptyState.PrimaryButton = PrimaryButton
EmptyState.SecondaryButton = SecondaryButton
EmptyState.LinkButton = LinkButton

EmptyState.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  iconBgColor: PropTypes.string.isRequired,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  description: PropTypes.string,
  background: PropTypes.oneOf(['light', 'dark']),
  primaryCta: PropTypes.element,
  anchorCta: PropTypes.element,
  secondaryCta: PropTypes.element
}

export default EmptyState
