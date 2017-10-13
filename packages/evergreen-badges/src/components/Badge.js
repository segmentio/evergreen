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
    display: 'inline-block',
    boxSizing: 'border-box',
    height: 24,
    paddingTop: 0,
    paddingRight: 4,
    paddingBottom: 0,
    paddingLeft: 4,
    borderRadius: 2,
    fontWeight: 200,
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    appearance: 'neutral',
    isSolid: false,
  }

  render() {
    const { appearance, isSolid, ...props } = this.props
    const opacity = isSolid ? 'solid' : 'default'
    const appearanceStyle = BadgeAppearances[opacity][appearance]
    return <Strong {...appearanceStyle} {...props} />
  }
}
