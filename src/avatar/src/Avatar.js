import React, { useState, memo, forwardRef } from 'react'
import { css } from 'glamor'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Image } from '../../image'
import { Text } from '../../typography'
import { useTheme } from '../../theme'
import globalGetInitials from './utils/getInitials'
import globalHash from './utils/hash'

const isObjectFitSupported =
  typeof document !== 'undefined' &&
  'objectFit' in document.documentElement.style

const initialsStyleClass = css({
  top: 0,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1
}).toString()

function getColorProps({ isSolid, theme, color, name, propsHashValue }) {
  if (color === 'automatic') {
    const hashValue = globalHash(propsHashValue || name)
    return theme.getAvatarProps({ isSolid, color, hashValue })
  }

  return theme.getAvatarProps({ isSolid, color })
}

const Avatar = memo(
  forwardRef((props, ref) => {
    const {
      src,
      name,
      size = 24,
      isSolid = false,
      color = 'automatic',
      forceShowInitials = false,
      sizeLimitOneCharacter = 20,
      getInitials = globalGetInitials,
      hashValue: propsHashValue,
      ...restProps
    } = props

    const theme = useTheme()
    const [imageHasFailedLoading, setImageHasFailedLoading] = useState(false)
    const imageUnavailable = !src || imageHasFailedLoading
    const colorProps = getColorProps({
      isSolid,
      theme,
      color,
      name,
      propsHashValue
    })
    const initialsFontSize = `${theme.getAvatarInitialsFontSize(
      size,
      sizeLimitOneCharacter
    )}px`

    let initials = getInitials(name)
    if (size <= sizeLimitOneCharacter) {
      initials = initials.substring(0, 1)
    }

    return (
      <Box
        width={size}
        height={size}
        overflow="hidden"
        borderRadius={9999}
        position="relative"
        display="inline-flex"
        flexShrink={0}
        justifyContent="center"
        backgroundColor={colorProps.backgroundColor}
        title={name}
        innerRef={ref}
        {...restProps}
      >
        {(imageUnavailable || forceShowInitials) && (
          <Text
            className={initialsStyleClass}
            fontSize={initialsFontSize}
            lineHeight={initialsFontSize}
            width={size}
            height={size}
            color={colorProps.color}
          >
            {initials}
          </Text>
        )}
        {!imageUnavailable && (
          <Image
            style={{ objectFit: 'cover' }} // Unsupported by ui-box directly
            width={isObjectFitSupported ? '100%' : 'auto'} // Fallback to old behaviour on IE
            height="100%"
            src={src}
            onError={() => setImageHasFailedLoading(true)}
          />
        )}
      </Box>
    )
  })
)

Avatar.propTypes = {
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
   * When true, render a solid avatar.
   */
  isSolid: PropTypes.bool,

  /**
   * The color used for the avatar.
   * When the value is `automatic`, use the hash function to determine the color.
   */
  color: PropTypes.string.isRequired,

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
  sizeLimitOneCharacter: PropTypes.number
}

export default Avatar
