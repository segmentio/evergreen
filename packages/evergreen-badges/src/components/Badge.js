import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Strong } from 'evergreen-typography'
import colors from 'evergreen-colors'
import BadgeAppearances from '../styles/badge-appearances'

const getBadgeStyle = ({ appearance, isSolid }) => {
  const colorGroup = colors[appearance]
  if (isSolid) {
    return {
      backgroundColor: colorGroup['500'],
      color: 'white',
    }
  }
  return {
    backgroundColor: colorGroup['15A'],
    color: colorGroup['1000'],
  }
}

export default class Badge extends PureComponent {
  static propTypes = {
    ...Text.propTypes,
    appearance: PropTypes.oneOf(Object.keys(BadgeAppearances)).isRequired,
  }

  static defaultProps = {
    appearance: 'neutral',
    paddingTop: 0,
    paddingBottom: 0,
    display: 'inline-block',
    width: 80,
    height: 24,
    fontFamily: 'ui',
    fontWeight: 500,
    fontSize: 16,
    textAlign: 'center',
    borderRadius: 2,
    isSolid: false,
  }

  render() {
    const { appearance, css, isSolid, ...props } = this.props
    const appearanceStyle = BadgeAppearances[appearance]
    const badgeStyle = getBadgeStyle({ appearance, isSolid })

    return (
      <Strong
        {...badgeStyle}
        css={{
          ...css,
          ...appearanceStyle,
        }}
        {...props}
      />
    )
  }
}
