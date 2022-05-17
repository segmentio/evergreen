import React, { useState, memo, forwardRef, useCallback } from 'react'
import cx from 'classnames'
import { css } from 'glamor'
import Box, { PolymorphicBoxProps } from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { Image } from '../../image'
import { Text } from '../../typography'
import globalGetInitials from './utils/getInitials'
import globalHash from './utils/hash'

export interface AvatarOwnProps {
  src?: string
  size?: number
  /**
   * When provided, the first and last initial of the name will be used.
   * For example: Foo Bar -> FB
   */
  name?: string | null
  hashValue?: string
  color?: string
  shape?: 'round' | 'square'
  getInitials?: (name: string) => string
  forceShowInitials?: boolean
  sizeLimitOneCharacter?: number
}

export type AvatarProps = PolymorphicBoxProps<'div', AvatarOwnProps>

const imageStyles: React.CSSProperties = { objectFit: 'cover' }

const pseudoSelectors = {}
const internalStyles = {
  overflow: 'hidden',
  position: 'relative',
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
}

const isObjectFitSupported = typeof document !== 'undefined' && 'objectFit' in document.documentElement.style

const initialsStyleClass = css({
  top: 0,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
}).toString()

const getAvatarInitialsFontSize = (size: number, sizeLimitOneCharacter: number): number => {
  if (size <= sizeLimitOneCharacter) {
    return Math.floor(size / 2.2)
  }

  return Math.floor(size / 2.6)
}

const Avatar: React.FC<AvatarProps> = memo(
  forwardRef(function Avatar(props, ref) {
    const {
      className,
      color = 'automatic',
      forceShowInitials = false,
      getInitials = globalGetInitials,
      hashValue: propsHashValue,
      name,
      shape = 'round',
      size = 24,
      sizeLimitOneCharacter = 20,
      src,
      ...restProps
    } = props

    const hashValue = globalHash(propsHashValue || name)
    const { className: themedClassName, ...styleProps } = useStyleConfig(
      'Avatar',
      // @ts-expect-error ts-migrate(2345) FIXME: Argument of type '{ color: string; hashValue: numb... Remove this comment to see the full error message
      { color, hashValue, shape },
      pseudoSelectors,
      internalStyles
    )

    const [imageHasFailedLoading, setImageHasFailedLoading] = useState(false)
    const onError = useCallback(() => setImageHasFailedLoading(true), [])
    const imageUnavailable = !src || imageHasFailedLoading

    const initialsFontSize = `${getAvatarInitialsFontSize(size, sizeLimitOneCharacter)}px`

    let initials = getInitials(name!)
    if (size <= sizeLimitOneCharacter) {
      initials = initials.slice(0, 1)
    }

    return (
      <Box
        width={size}
        height={size}
        title={name ?? undefined}
        ref={ref}
        className={cx(className, themedClassName)}
        {...styleProps}
        {...restProps}
      >
        {(imageUnavailable || forceShowInitials) && (
          <Text
            className={initialsStyleClass}
            fontSize={initialsFontSize}
            lineHeight={initialsFontSize}
            width={size}
            height={size}
            color="inherit"
          >
            {initials}
          </Text>
        )}
        {!imageUnavailable && (
          <Image
            style={imageStyles} // Unsupported by ui-box directly
            width={isObjectFitSupported ? '100%' : 'auto'} // Fallback to old behaviour on IE
            height="100%"
            src={src}
            onError={onError}
          />
        )}
      </Box>
    )
  })
)

export default Avatar
