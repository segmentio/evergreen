import React from 'react'
import { createTheme, ThemeProvider } from '../../../src/theme'
import { Pane } from '../../../src/layers'
import Sidebar from './Sidebar'
import CodeSnippet from './sections/CodeSnippet'
import ScalesSection from './sections/ScalesSection'
import ButtonSection from './sections/ButtonSection'
import AlertSection from './sections/AlertSection'
import FormSection from './sections/FormSection'

export default class ThemeBuilder extends React.Component {
  state = {
    controlStyle: 'gradients',
    palette: {
      neutral: '#425A70',
      primary: '#1070ca',
      red: '#ec4c47',
      orange: '#d9822b',
      yellow: '#f7d154',
      green: '#47b881',
      teal: '#14b5d0',
      purple: '#735dd0'
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
              ...state
            }}
            setState={object => this.setState(object)}
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
