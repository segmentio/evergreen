import React from 'react'
import { createTheme, ThemeProvider } from '../../../src/theme'
import { Pane } from '../../../src/layers'
import Sidebar from './Sidebar'
import CodeSnippet from './CodeSnippet'
import ButtonSection from './ButtonSection'
import AlertSection from './AlertSection'

export default class ThemeBuilder extends React.Component {
  state = {
    primary: '#1070ca'
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
