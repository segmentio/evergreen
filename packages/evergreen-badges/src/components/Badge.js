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
    appearance: PropTypes.oneOf(Object.keys(colors)).isRequired,
  }

  static defaultProps = {
    appearance: 'neutral',
    paddingTop: 0,
    paddingRight: 4,
    paddingBottom: 0,
    paddingLeft: 4,
    display: 'inline-block',
    height: 24,
    fontWeight: 200,
    textAlign: 'center',
    borderRadius: 2,
    isSolid: false,
  }

  render() {
    const { appearance, isSolid, ...props } = this.props
    const appearanceStyle = BadgeAppearances[appearance]
    const badgeStyle = getBadgeStyle({ appearance, isSolid })
    return <Strong {...badgeStyle} css={{ ...appearanceStyle }} {...props} />
  }
}
