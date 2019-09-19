import React from 'react'
import ReactDOM from 'react-dom'
import ToastManager from './ToastManager'

const isBrowser =
  typeof window !== 'undefined' && typeof window.document !== 'undefined'

/**
 * The Toaster manages the interactionsb between
 * the ToasterManger and the toast API.
 */
export default class Toaster {
  constructor() {
    if (!isBrowser) return

    const container = document.createElement('div')
    container.setAttribute('data-evergreen-toaster-container', '')
    document.body.append(container)

    ReactDOM.render(
      <ToastManager
        bindNotify={this._bindNotify}
        bindRemove={this._bindRemove}
        bindGetToasts={this._bindGetToasts}
        bindCloseAll={this._bindCloseAll}
      />,
      container
    )
  }

  _bindNotify = handler => {
    this.notifyHandler = handler
  }

  _bindRemove = handler => {
    this.removeHandler = handler
  }

  _bindGetToasts = handler => {
    this.getToastsHandler = handler
  }

  _bindCloseAll = handler => {
    this.closeAllHandler = handler
  }

  getToasts = () => {
    return this.getToastsHandler()
  }

  closeAll = () => {
    return this.closeAllHandler()
  }

  notify = (title, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: 'none' })
  }

  success = (title, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: 'success' })
  }

  warning = (title, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: 'warning' })
  }

  danger = (title, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: 'danger' })
  }

  remove = id => {
    return this.removeHandler(id)
  }
}
