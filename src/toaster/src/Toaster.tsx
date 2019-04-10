import * as React from 'react'
import * as ReactDOM from 'react-dom'
import ToastManager from './ToastManager'

const isBrowser =
  typeof window !== 'undefined' && typeof window.document !== 'undefined'

// The Toaster manages the interactionsb between the ToasterManger and the toast API.
export default class Toaster {
  notifyHandler: (...args: any[]) => any

  getToastsHandler: (...args: any[]) => any

  closeAllHandler: (...args: any[]) => any

  constructor() {
    if (!isBrowser) return

    const container = document.createElement('div')
    container.setAttribute('data-evergreen-toaster-container', '')
    document.body.append(container)

    ReactDOM.render(
      <ToastManager
        bindNotify={this._bindNotify}
        bindGetToasts={this._bindGetToasts}
        bindCloseAll={this._bindCloseAll}
      />,
      container
    )
  }

  _bindNotify = (handler: (...args: any[]) => any) => {
    this.notifyHandler = handler
  }

  _bindGetToasts = (handler: (...args: any[]) => any) => {
    this.getToastsHandler = handler
  }

  _bindCloseAll = (handler: (...args: any[]) => any) => {
    this.closeAllHandler = handler
  }

  getToasts = () => {
    return this.getToastsHandler()
  }

  closeAll = () => {
    return this.closeAllHandler()
  }

  notify = (title: string, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: 'none' })
  }

  success = (title: string, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: 'success' })
  }

  warning = (title: string, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: 'warning' })
  }

  danger = (title: string, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: 'danger' })
  }
}
