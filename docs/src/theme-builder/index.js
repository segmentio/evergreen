import React from 'react'
import { createTheme, ThemeProvider } from '../../../src/theme'
import { Pane } from '../../../src/layers'
import Sidebar from './Sidebar'
import CodeSnippet from './sections/CodeSnippet'
import ButtonSection from './sections/ButtonSection'
import AlertSection from './sections/AlertSection'

export default class ThemeBuilder extends React.Component {
  state = {
    primary: '#1070ca'
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden'
    document.body.style.height = '100%'
  }

  componentWillUnmount() {
    document.body.style.overflow = ''
    document.body.style.height = ''
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
            setState={object => this.setState(object)}
          />
          <Pane padding={40} overflowY="auto" flex={1}>
            <CodeSnippet value={this.state} />
            <ButtonSection />
            <AlertSection />
          </Pane>
        </Pane>
      </ThemeProvider>
    )
  }
}
