import { css } from 'glamor'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import { Image } from '../../image'
import { Text } from '../../typography'
import { withTheme, Theme } from '../../theme'
import globalGetInitials from './utils/getInitials'
import globalHash from './utils/hash'

const initialsStyleClass = css({
  top: 0,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1
})

export interface AvatarProps extends React.ComponentProps<typeof Box> {
  /**
   * The color used for the avatar.
   * When the value is `automatic`, use the hash function to determine the color.
   */
  color: 'automatic' | string

  /**
   * When true, force show the initials.
   * This is useful in some cases when using Gravatar and transparent pngs.
   */
  forceShowInitials?: boolean

  /**
   * Function to get the initials based on the name.
   */
  getInitials: (name?: string | any, fallback?: string) => string

  /**
   * The value used for the hash function.
   * The name is used as the hashValue by default.
   * When dealing with anonymous users you should use the id instead.
   */
  hashValue?: string | number

  /**
   * When true, render a solid avatar.
   */
  isSolid?: boolean

  /**
   * The name used for the initials and title attribute.
   */
  name?: string

  /**
   * The size of the avatar.
   */
  size: number

  /**
   * When the size is smaller than this number, use a single initial for the avatar.
   */
  sizeLimitOneCharacter: number

  /**
   * The src attribute of the image.
   * When it's not available, render initials instead.
   */
  src?: string

  /**
   * Theme provided by ThemeProvider.
   */
  theme: Theme
}

interface AvatarState {
  imageHasFailedLoading: boolean
}

class Avatar extends PureComponent<AvatarProps, AvatarState> {
  static propTypes = {
    color: PropTypes.string.isRequired,
    forceShowInitials: PropTypes.bool,
    getInitials: PropTypes.func as PropTypes.Validator<
      (name?: string | any, fallback?: string) => string
    >,
    hashValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    isSolid: PropTypes.bool,
    name: PropTypes.string,
    size: PropTypes.number.isRequired,
    sizeLimitOneCharacter: PropTypes.number.isRequired,
    src: PropTypes.string,
    theme: PropTypes.object.isRequired as PropTypes.Validator<Theme>
  }

  static defaultProps: Partial<AvatarProps> = {
    color: 'automatic',
    size: 24,
    isSolid: false,
    getInitials: globalGetInitials,
    forceShowInitials: false,
    sizeLimitOneCharacter: 20
  }

  state = {
    imageHasFailedLoading: false
  }

  handleError = () => {
    this.setState({ imageHasFailedLoading: true })
  }

  getColorProps = () => {
    const {
      isSolid,
      theme,
      color,
      hashValue: propsHashValue,
      name
    } = this.props

    if (color === 'automatic') {
      const hashValue = globalHash(propsHashValue || name)
      return theme.getAvatarProps({ isSolid, color, hashValue })
    }

    return theme.getAvatarProps({ isSolid, color })
  }

  render() {
    const {
      theme,

      src,
      size,
      name,
      isSolid,
      hashValue: propsHashValue,
      getInitials,
      color: propsColor,
      forceShowInitials,
      sizeLimitOneCharacter,
      ...props
    } = this.props

    const { imageHasFailedLoading } = this.state
    const imageUnavailable = !src || imageHasFailedLoading
    const initialsFontSize = `${theme.getAvatarInitialsFontSize(
      size,
      sizeLimitOneCharacter
    )}px`

    let initials = getInitials(name)
    if (size <= sizeLimitOneCharacter) {
      initials = initials.substring(0, 1)
    }

    const colorProps = this.getColorProps()

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
        {...props}
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
            width="auto"
            height="100%"
            src={src}
            onError={this.handleError}
          />
        )}
      </Box>
    )
  }
}

export default withTheme(Avatar)
