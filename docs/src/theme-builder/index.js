import React from 'react'
import 'url-polyfill' // eslint-disable-line import/no-unassigned-import
import { createTheme, ThemeProvider } from '../../../src/theme'
import { Pane } from '../../../src/layers'
import Sidebar from './Sidebar'
import CodeSnippet from './sections/CodeSnippet'
import ScalesSection from './sections/ScalesSection'
import ButtonSection from './sections/ButtonSection'
import AlertSection from './sections/AlertSection'
import FormSection from './sections/FormSection'

function addThemeSeachQuery(object) {
  const url = new URL(window.location.href)
  url.searchParams.set('theme', JSON.stringify(object))

  // Avoid a refresh on a HTML5/modern browser
  if (history.pushState) {
    const newurl =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname +
      '?' +
      url.searchParams
    window.history.pushState({ path: newurl }, '', newurl)
  } else {
    // Otherwise force a refresh :(
    window.location.search = url.searchParams
  }
}

export default class ThemeBuilder extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
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

    const url = new URL(window.location.href)
    if (url.searchParams.get('theme')) {
      this.state = {
        ...this.state,
        ...(JSON.parse(url.searchParams.get('theme')) || {})
      }
    }
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100%'
    document.documentElement.style.height = '100%'
  }

  componentWillUnmount() {
    document.body.style.overflow = ''
    document.body.style.height = ''
    document.documentElement.style.height = ''
  }

  onHandleSidebarState = object => {
    addThemeSeachQuery(object)

    this.setState(object)
  }

  render() {
    const { state } = this
    const theme = createTheme({
      ...state
    })
    return (
      <ThemeProvider value={theme}>
        <Pane display="flex" flex={1}>
          <Sidebar
            state={{
              ...this.state
            }}
            setState={this.onHandleSidebarState}
          />
          <Pane
            padding={40}
            overflowY="auto"
            flex={1}
            display="flex"
            flexDirection="column"
          >
            <Pane>
              <CodeSnippet value={this.state} />
              <ScalesSection />
              <ButtonSection />
              <AlertSection />
              <FormSection />
            </Pane>
          </Pane>
        </Pane>
      </ThemeProvider>
    )
  }
}
