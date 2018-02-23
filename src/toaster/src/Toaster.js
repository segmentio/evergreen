import React from 'react'
import ReactDOM from 'react-dom'
import ToastManager from './ToastManager'

const ID = 'evergreen-toaster'
const isBrowser =
  typeof window !== 'undefined' && typeof window.document !== 'undefined'

/**
 * The Toaster manages the interactionsb between
 * the ToasterManger and the toast API.
 */
export default class Toaster {
  constructor() {
    if (!isBrowser) return
    let container

    const element = document.getElementById(ID)
    if (element) {
      container = element
    } else {
      // Create container if not exists yet.
      container = document.createElement('div')
      container.id = ID
      document.body.appendChild(container)
    }

    ReactDOM.render(
      <ToastManager
        bindNotify={this._bindNotify}
        bindGetToasts={this._bindGetToasts}
        bindCloseAll={this._bindCloseAll}
      />,
      container
    )
  }

  _bindNotify = handler => {
    this.notifyHandler = handler
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
    return this.notifyHandler(title, { ...settings, type: 'default' })
  }

  success = (title, settings = {}) => {
    return this.notifyHandler(title, { ...settings, type: 'success' })
  }

  warning = (title, settings = {}) => {
    return this.notifyHandler(title, { ...settings, type: 'warning' })
  }

  danger = (title, settings = {}) => {
    return this.notifyHandler(title, { ...settings, type: 'danger' })
  }

  info = (title, settings = {}) => {
    return this.notifyHandler(title, { ...settings, type: 'info' })
  }
}
