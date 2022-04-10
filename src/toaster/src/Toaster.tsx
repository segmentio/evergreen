import React from 'react'
import ReactDOM from 'react-dom'
import canUseDom from '../../lib/canUseDom'
import ToastManager from './ToastManager'

export interface Toast {
  /**
   * The id of the Toast.
   */
  id: string
  /**
   * The title of the Toast.
   */
  title: React.ReactNode
  /**
   * The description of the Toast.
   */
  description?: React.ReactNode
  /**
   * Whether the Toast is showing a close button.
   */
  hasCloseButton: boolean
  /**
   * How long the Toast is visible for.
   */
  duration: number
  /**
   * Close will close this Toast.
   */
  close(): void
  /**
   * The intent of this Toast. One of none, success, warning, or danger.
   */
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'IntentTypes'.
  intent?: IntentTypes
}

/**
 * Optional settings that can be set when creating a new Toast.
 */
export interface ToasterSettings {
  /**
   * A description of the toast which is rendered as the children of the Toast's Alert component.
   */
  description?: React.ReactNode
  /**
   * How long the Toast will be visible (in seconds). Defaults to 5 seconds.
   */
  duration?: number
  /**
   * Assign a Toast an id if you want only one instance of that toast visible at any given time.
   * When a new toast with an id is opened, any visible toasts with the same id will be closed.
   */
  id?: string
  /**
   * Intent of the toast
   */
  intent?: 'none' | 'success' | 'warning' | 'danger'
  /**
   * Whether to show a close button on the Toast. Defaults to true.
   */
  hasCloseButton?: boolean
}

type ToasterSettingsWithIntent = Omit<ToasterSettings, 'intent'>

/**
 * The Toaster manages the interactions between
 * the ToasterManger and the toast API.
 */
export default class Toaster {
  // @ts-expect-error ts-migrate(2564) FIXME: Property 'closeAllHandler' has no initializer and ... Remove this comment to see the full error message
  closeAllHandler: () => void
  // @ts-expect-error ts-migrate(2564) FIXME: Property 'getToastsHandler' has no initializer and... Remove this comment to see the full error message
  getToastsHandler: () => Toast[]
  // @ts-expect-error ts-migrate(2564) FIXME: Property 'notifyHandler' has no initializer and is... Remove this comment to see the full error message
  notifyHandler: (title: string, settings: ToasterSettings) => void
  // @ts-expect-error ts-migrate(2564) FIXME: Property 'removeHandler' has no initializer and is... Remove this comment to see the full error message
  removeHandler: (id: string) => void
  constructor() {
    if (!canUseDom) return

    const container = document.createElement('div')
    container.setAttribute('data-evergreen-toaster-container', '')
    document.body.appendChild(container)

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

  _bindNotify = (handler: (title: string, settings: ToasterSettings) => void) => {
    this.notifyHandler = handler
  }

  _bindRemove = (handler: (id: string) => void) => {
    this.removeHandler = handler
  }

  _bindGetToasts = (handler: () => Toast[]) => {
    this.getToastsHandler = handler
  }

  _bindCloseAll = (handler: () => void) => {
    this.closeAllHandler = handler
  }

  /**
   * Returns all visible Toasts.
   */
  getToasts = (): Toast[] => {
    return this.getToastsHandler()
  }

  /**
   * Closes all visible Toasts.
   */
  closeAll = () => {
    return this.closeAllHandler()
  }

  /**
   * Opens a Toast with an intent of none.
   */
  notify = (title: string, settings: ToasterSettingsWithIntent = {}): void => {
    return this.notifyHandler(title, { ...settings, intent: 'none' })
  }

  /**
   * Opens a Toast with an intent of success.
   */
  success = (title: string, settings: ToasterSettingsWithIntent = {}): void => {
    return this.notifyHandler(title, { ...settings, intent: 'success' })
  }

  /**
   * Opens a Toast with an intent of warning.
   */
  warning = (title: string, settings: ToasterSettingsWithIntent = {}): void => {
    return this.notifyHandler(title, { ...settings, intent: 'warning' })
  }

  /**
   * Opens a Toast with an intent of danger.
   */
  danger = (title: string, settings: ToasterSettingsWithIntent = {}): void => {
    return this.notifyHandler(title, { ...settings, intent: 'danger' })
  }

  remove = (id: string) => {
    return this.removeHandler(id)
  }
}
