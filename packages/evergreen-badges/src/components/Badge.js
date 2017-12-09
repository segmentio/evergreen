import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Strong } from 'evergreen-typography'
import { FillAppearances } from 'evergreen-shared-styles'

export default class Badge extends PureComponent {
  static propTypes = {
    ...Text.propTypes,
    appearance: PropTypes.oneOf(Object.keys(FillAppearances.default)).isRequired
  }

  static defaultProps = {
    display: 'inline-block',
    boxSizing: 'border-box',
    height: 16,
    size: 300,
    paddingTop: 0,
    paddingRight: 6,
    paddingBottom: 0,
    paddingLeft: 6,
    borderRadius: 2,
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',
    appearance: 'neutral',
    isSolid: false
  }

  render() {
    const { appearance, isSolid, ...props } = this.props
    const opacity = isSolid ? 'solid' : 'default'
    const appearanceStyle = FillAppearances[opacity][appearance]
    return <Strong {...appearanceStyle} {...props} />
  }
}
