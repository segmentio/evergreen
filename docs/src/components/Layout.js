import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router' // eslint-disable-line import/no-extraneous-dependencies
import { createTheme, ThemeProvider, defaultTheme } from '../../../src/theme'
import '../css/index.css' // eslint-disable-line import/no-unassigned-import
import { saveTheme, loadTheme } from '../theme-builder/themeLoader'

const defaultThemeStyles = {
  controlStyle: 'gradients',
  palette: {
    primary: '#1070ca',
    neutral: '#425A70',
    red: '#ec4c47',
    orange: '#d9822b',
    yellow: '#f7d154',
    green: '#47b881',
    teal: '#14b5d0',
    purple: '#735dd0'
  }
}

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    location: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)

    // This is different from the default theme.
    const themeStyles = loadTheme(props.location)

    if (themeStyles) {
      this.state = {
        isCustomTheme: true,
        themeStyles
      }
    } else {
      this.state = {
        isCustomTheme: false,
        themeStyles: defaultThemeStyles
      }
    }
  }

  componentDidMount() {
    // Give up.
    setTimeout(() => {
      this.forceUpdate()
    }, 100)
  }

  updateTheme = themeStyles => {
    const theme = createTheme(themeStyles)
    saveTheme(themeStyles)
    theme.isCustomTheme = true

    this.setState({
      isCustomTheme: true,
      themeStyles
    })
  }

  render() {
    const { children } = this.props
    const { themeStyles, isCustomTheme } = this.state

    let theme
    if (isCustomTheme) {
      theme = createTheme(themeStyles)
      theme.isCustomTheme = true
    } else {
      theme = defaultTheme
    }

    return (
      <ThemeProvider value={theme}>
        {typeof children === 'function'
          ? children({
              updateTheme: this.updateTheme,
              themeStyles,
              isCustomTheme
            })
          : children}
      </ThemeProvider>
    )
  }
}

export default withRouter(Layout)
