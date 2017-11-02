import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import Image from 'evergreen-image'
import { Text } from 'evergreen-typography'
import colors from 'evergreen-colors'
import globalGetInitials from '../utils/getInitials'
import globalHash from '../utils/hash'
import { FillAppearances } from 'evergreen-color-utils'

const keysFillAppearances = Object.keys(FillAppearances.default)

const initialsProps = {
  top: 0,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
}

const getInitialsFontSize = size => {
  if (size <= 24) {
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
  }

  static defaultProps = {
    size: 24,
    hash: globalHash,
    isSolid: false,
    getInitials: globalGetInitials,
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
      ...props
    } = this.props
    const { imageHasFailedLoading } = this.state
    const imageUnavailable = src == null || imageHasFailedLoading
    const initialsFontSize = `${getInitialsFontSize(size)}px`

    let initials = getInitials(name)
    if (size <= 24) {
      initials = initials.substring(0, 1)
    }

    const hashValue = hash(propsHashValue || name)
    let appearanceKey = propsAppearance
    if (appearanceKey === undefined) {
      appearanceKey =
        keysFillAppearances[hashValue % keysFillAppearances.length]
    }

    console.log('appearanceKey', appearanceKey)

    const appearance =
      FillAppearances[isSolid ? 'solid' : 'default'][appearanceKey]

    console.log('appearance', appearance)

    return (
      <Box
        width={size}
        height={size}
        overflow="hidden"
        borderRadius={9999}
        position="relative"
        display="inline-block"
        backgroundColor={colors.neutral['300']}
        {...appearance}
        {...props}
      >
        {imageUnavailable ? (
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
        ) : (
          <Image title={name} src={src} onError={this.handleError} />
        )}
      </Box>
    )
  }
}
