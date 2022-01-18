import React, { useState, memo, forwardRef, useCallback } from 'react'
import cx from 'classnames'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { useStyleConfig } from '../../hooks'
import { Image } from '../../image'
import { Text } from '../../typography'
import globalGetInitials from './utils/getInitials'
import globalHash from './utils/hash'

const imageStyles = { objectFit: 'cover' }

const pseudoSelectors = {}
const internalStyles = {
  overflow: 'hidden',
  position: 'relative',
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center'
}

const isObjectFitSupported = typeof document !== 'undefined' && 'objectFit' in document.documentElement.style

const initialsStyleClass = css({
  top: 0,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1
}).toString()

const getAvatarInitialsFontSize = (size, sizeLimitOneCharacter) => {
  if (size <= sizeLimitOneCharacter) {
    return Math.floor(size / 2.2)
  }

  return Math.floor(size / 2.6)
}

const Avatar = memo(
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
      { color, hashValue, shape },
      pseudoSelectors,
      internalStyles
    )

    const [imageHasFailedLoading, setImageHasFailedLoading] = useState(false)
    const onError = useCallback(() => setImageHasFailedLoading(true), [])
    const imageUnavailable = !src || imageHasFailedLoading

    const initialsFontSize = `${getAvatarInitialsFontSize(size, sizeLimitOneCharacter)}px`

    let initials = getInitials(name)
    if (size <= sizeLimitOneCharacter) {
      initials = initials.slice(0, 1)
    }

    return (
      <Box
        width={size}
        height={size}
        title={name}
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

Avatar.propTypes = {
  /**
   * Class name passed to the component.
   * Only use if you know what you are doing.
   */
  className: PropTypes.string,

  /**
   * The src attribute of the image.
   * When it's not available, render initials instead.
   */
  src: PropTypes.string,

  /**
   * The size of the avatar.
   */
  size: PropTypes.number,

  /**
   * The name used for the initials and title attribute.
   */
  name: PropTypes.string,

  /**
   * The value used for the hash function.
   * The name is used as the hashValue by default.
   * When dealing with anonymous users you should use the id instead.
   */
  hashValue: PropTypes.string,

  /**
   * The color used for the avatar.
   * When the value is `automatic`, use the hash function to determine the color.
   */
  color: PropTypes.string,

  /**
   * Function to get the initials based on the name.
   */
  getInitials: PropTypes.func,

  /**
   * When true, force show the initials.
   * This is useful in some cases when using Gravatar and transparent pngs.
   */
  forceShowInitials: PropTypes.bool,

  /**
   * When the size is smaller than this number, use a single initial for the avatar.
   */
  sizeLimitOneCharacter: PropTypes.number,

  /**
   * Allows for the shape of the avatar component to either be round or square
   */
  shape: PropTypes.oneOf(['round', 'square'])
}

export default Avatar
