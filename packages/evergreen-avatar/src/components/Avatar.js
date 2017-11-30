import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import Image from 'evergreen-image'
import { Text } from 'evergreen-typography'
import { FillAppearances } from 'evergreen-color-utils'
import colors from 'evergreen-colors' // eslint-disable-line
import globalGetInitials from '../utils/getInitials'
import globalHash from '../utils/hash'

const keysFillAppearances = Object.keys(FillAppearances.default)

const initialsProps = {
  top: 0,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
}

const getInitialsFontSize = (size, heightLimitOneCharacter) => {
  if (size <= heightLimitOneCharacter) {
    return Math.ceil(size / 2.2)
  }
  return Math.ceil(size / 2.6)
}

export default class Avatar extends PureComponent {
  static propTypes = {
    ...Image.propTypes,
    size: PropTypes.number,
    name: PropTypes.string,
    // hash value defaults to name
    hashValue: PropTypes.string,
    hash: PropTypes.func,
    isSolid: PropTypes.bool,
    appearance: PropTypes.oneOf(keysFillAppearances),
    getInitials: PropTypes.func,
    // In some cases Gravatar returns transparent pngs
    // we still want to see the initials
    forceShowInitials: PropTypes.bool,
    heightLimitOneCharacter: PropTypes.number,
  }

  static defaultProps = {
    size: 24,
    hash: globalHash,
    isSolid: false,
    getInitials: globalGetInitials,
    forceShowInitials: false,
    heightLimitOneCharacter: 20,
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      imageHasFailedLoading: false,
    }
  }

  handleError = () => {
    this.setState({
      imageHasFailedLoading: true,
    })
  }

  render() {
    const {
      src,
      size,
      name,
      hash,
      isSolid,
      hashValue: propsHashValue,
      getInitials,
      useAutoColor,
      appearance: propsAppearance,
      forceShowInitials,
      heightLimitOneCharacter,
      ...props
    } = this.props
    const { imageHasFailedLoading } = this.state
    const imageUnavailable = src == null || imageHasFailedLoading
    const initialsFontSize = `${getInitialsFontSize(
      size,
      heightLimitOneCharacter,
    )}px`

    let initials = getInitials(name)
    if (size <= heightLimitOneCharacter) {
      initials = initials.substring(0, 1)
    }

    const hashValue = hash(propsHashValue || name)
    let appearanceKey = propsAppearance
    if (appearanceKey === undefined) {
      appearanceKey =
        keysFillAppearances[hashValue % keysFillAppearances.length]
    }

    const appearance =
      FillAppearances[isSolid ? 'solid' : 'default'][appearanceKey]

    return (
      <Box
        width={size}
        height={size}
        overflow="hidden"
        borderRadius={9999}
        position="relative"
        display="inline-flex"
        justifyContent="center"
        backgroundColor={colors.neutral['300']}
        title={name}
        {...appearance}
        {...props}
      >
        {(imageUnavailable || forceShowInitials) && (
          <Text
            css={initialsProps}
            fontSize={initialsFontSize}
            lineHeight={initialsFontSize}
            width={size}
            height={size}
            color={appearance.color}
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
