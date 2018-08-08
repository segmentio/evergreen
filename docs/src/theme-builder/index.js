import React from 'react'
import { createTheme, ThemeProvider } from '../../../src/theme'
import { Pane } from '../../../src/layers'
import Sidebar from './Sidebar'
import CodeSnippet from './sections/CodeSnippet'
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
      primary: '#1070ca'
    }

    const url = new URL(window.location.href)
    if (url.searchParams.get('theme')) {
      this.state = JSON.parse(url.searchParams.get('theme'))
    }
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100%'
  }

  componentWillUnmount() {
    document.body.style.overflow = ''
    document.body.style.height = ''
  }

  onHandleSidebarState = object => {
    addThemeSeachQuery(object)

    this.setState(object)
  }

  render() {
    const { state } = this
    const theme = createTheme(state)
    return (
      <ThemeProvider value={theme}>
        <Pane display="flex" flex={1}>
          <Sidebar
            state={{
              ...this.state
            }}
            setState={this.onHandleSidebarState}
          />
          <Pane padding={40} overflowY="auto" flex={1}>
            <CodeSnippet value={this.state} />
            <ButtonSection />
            <AlertSection />
            <FormSection />
          </Pane>
        </Pane>
      </ThemeProvider>
    )
  }
}
