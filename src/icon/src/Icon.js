import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from '../../theme'
import { DefaultIcon } from './DefaultIcon'

// The icon wrapper selects an icon based on our getIcon resolver
// this makes it easy to use custom icons within evergreen-ui
const Icon = ({ icon, theme, ...props }) => {
  const ResolvedIcon = theme.getIcon(icon, theme) || DefaultIcon
  return <ResolvedIcon icon={icon} theme={theme} {...props} />
}

Icon.propTypes = {
  /**
   * Name of icon. By default, it could be a string or React component.
   */
  icon: PropTypes.node.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}

export default withTheme(Icon)
