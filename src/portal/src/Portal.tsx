import * as PropTypes from 'prop-types'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

import canUseDom from '../../util/canUseDom'

interface IProps {
  children: React.ReactNode
}

let portalContainer: any

export default class Portal extends React.Component<IProps> {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  el: any

  constructor(props: IProps) {
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
