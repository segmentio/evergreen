import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Strong } from '../../typography'
import { FillAppearances } from '../../shared-styles'

export default class Badge extends PureComponent {
  static propTypes = {
    ...Strong.propTypes,
    appearance: PropTypes.oneOf(Object.keys(FillAppearances.default)).isRequired
  }

  static defaultProps = {
    appearance: 'neutral',
    isSolid: false
  }

  static styles = {
    display: 'inline-block',
    boxSizing: 'border-box',
    height: 16,
    paddingTop: 0,
    paddingRight: 6,
    paddingBottom: 0,
    paddingLeft: 6,
    borderRadius: 2,
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase'
  }

  render() {
    const { appearance, isSolid, ...props } = this.props
    const opacity = isSolid ? 'solid' : 'default'
    const appearanceStyle = FillAppearances[opacity][appearance]
    return (
      <Strong size={300} {...Badge.styles} {...appearanceStyle} {...props} />
    )
  }
}
