import React from 'react'
import PropTypes from 'prop-types'
import { Pane } from '../../../src/layers'
import Sidebar from './Sidebar'
import CodeSnippet from './sections/CodeSnippet'
import ScalesSection from './sections/ScalesSection'
import ButtonSection from './sections/ButtonSection'
import AlertSection from './sections/AlertSection'
import FormSection from './sections/FormSection'
import PaneSection from './sections/PaneSection'
import AvatarSection from './sections/AvatarSection'

export default class ThemeBuilder extends React.Component {
  static propTypes = {
    onUpdate: PropTypes.func.isRequired,
    themeStyles: PropTypes.object
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
    this.props.onUpdate({
      ...this.props.themeStyles,
      ...object
    })
  }

  render() {
    return (
      <Pane display="flex" flex={1}>
        <Sidebar
          state={this.props.themeStyles}
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
            <CodeSnippet value={this.props.themeStyles} />
            <ButtonSection />
            <AvatarSection />
            <AlertSection />
            <FormSection />
            <ScalesSection />
            <PaneSection />
          </Pane>
        </Pane>
      </Pane>
    )
  }
}
