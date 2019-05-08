import { Component } from 'react'
import canUseDom from 'dom-helpers/util/inDOM'
import ReactDOM from 'react-dom'

let portalContainer

export default class Portal extends Component<{ children: React.ReactNode }> {
  el: HTMLDivElement

  constructor(props) {
    super(props)

    // This fixes SSR
    if (!canUseDom) return

    if (!portalContainer) {
      portalContainer = document.createElement('div')
      portalContainer.setAttribute('evergreen-portal-container', '')
      document.body.append(portalContainer)
    }

    this.el = document.createElement('div')
    portalContainer.append(this.el)
  }

  componentWillUnmount() {
    portalContainer.removeChild(this.el)
  }

  render() {
    // This fixes SSR
    if (!canUseDom) return null
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}
