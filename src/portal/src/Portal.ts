import { Component } from 'react'
import ReactDOM from 'react-dom'
import canUseDom from '../../lib/canUseDom'

let portalContainer: any

export default class Portal extends Component {
  el: any;
  constructor() {
    // @ts-expect-error ts-migrate(2554) FIXME: Expected 1-2 arguments, but got 0.
    super()

    // This fixes SSR
    if (!canUseDom) return

    if (!portalContainer) {
      portalContainer = document.createElement('div')
      portalContainer.setAttribute('evergreen-portal-container', '')
      document.body.appendChild(portalContainer)
    }

    this.el = document.createElement('div')
    portalContainer.appendChild(this.el)
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

