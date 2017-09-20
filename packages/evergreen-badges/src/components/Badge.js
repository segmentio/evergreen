import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Strong } from 'evergreen-typography'
import BadgeAppearances from '../styles/badge-appearances'

export default class Badge extends PureComponent {
  static propTypes = {
    ...Text.propTypes,
    appearance: PropTypes.oneOf(Object.keys(BadgeAppearances.default)).isRequired,
  }

  static defaultProps = {
    boxSizing: 'border-box',
    textDecoration: 'none',
    textTransform: 'uppercase',
    borderRadius: 2,
    appearance: 'neutral',
    paddingTop: 0,
    paddingRight: 4,
    paddingBottom: 0,
    paddingLeft: 4,
    display: 'inline-block',
    height: 24,
    fontWeight: 200,
    textAlign: 'center',
    isSolid: false,
  }

  render() {
    const { appearance, isSolid, ...props } = this.props
    const opacity = isSolid ? 'solid' : 'default'
    const appearanceStyle = BadgeAppearances[opacity][appearance]
    return <Strong {...appearanceStyle} {...props} />
  }
}
