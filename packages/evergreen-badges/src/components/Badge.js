import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text, TextStyles } from 'evergreen-typography'
import BadgeAppearances from '../styles/badge-appearances'

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
  }

  render() {
    const {
      appearance,
      css,
      // height,
      // paddingRight,
      // paddingLeft,
      // paddingTop,
      // paddingBottom,
      ...props
    } = this.props
    const appearanceStyle = BadgeAppearances[appearance]
    return (
      <Text
        css={{
          ...css,
          ...appearanceStyle,
        }}
        {...props}
      />
    )
  }
}
