import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Strong } from 'evergreen-typography'
import colors from 'evergreen-colors'

const getBadgeStyle = ({ color, isSolid }) => {
  const colorGroup = colors[color]
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
    color: PropTypes.oneOf(Object.keys(colors)).isRequired,
  }

  static defaultProps = {
    color: 'neutral',
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
    boxSizing: 'border-box',
    textTransform: 'uppercase',
  }

  render() {
    const { color, isSolid, ...props } = this.props
    const badgeStyle = getBadgeStyle({ color, isSolid })

    return <Strong {...badgeStyle} {...props} />
  }
}
