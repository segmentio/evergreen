import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box from 'ui-box'
import colors from 'evergreen-colors'
import SwitchAppearances from '../styles/SwitchAppearances'

export default class Switch extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.node,
    value: PropTypes.string,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    isInvalid: PropTypes.bool,
    appearance: PropTypes.oneOf(Object.keys(SwitchAppearances)),
  }

  static defaultProps = {
    height: 16,
    appearance: 'default',
  }

  render() {
    const { height, checked, appearance, ...props } = this.props
    const appearanceStyle = SwitchAppearances[appearance]

    return (
      <Box>
        <Box
          is="input"
          type="checkbox"
          checked={checked}
          css={appearanceStyle}
        />
        <Box height={height} width={height * 2}>
          <Box
            marginTop={2}
            marginLeft={2}
            width={height - 4}
            height={height - 4}
            css={{
              backgroundColor: '#fff',
              borderRadius: 9999,
            }}
          />
        </Box>
      </Box>
    )
  }
}
