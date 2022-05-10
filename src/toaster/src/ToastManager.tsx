import React, { memo, useState } from 'react'
import { css } from 'glamor'
import { StackingOrder } from '../../constants'
import Toast from './Toast'
import { Toast as ToastReference, ToasterSettings } from './Toaster'

interface ToastManagerProps {
  /**
   * Function called with the `this.notify` function.
   */
  bindNotify: (handler: (title: string, settings: ToasterSettings) => void) => void

  /**
   * Function called with the `this.remove` function.
   */
  bindRemove: (handler: (id: string) => void) => void

  /**
   * Function called with the `this.getToasts` function.
   */
  bindGetToasts: (handler: () => ToastReference[]) => void

  /**
   * Function called with the `this.closeAll` function.
   */
  bindCloseAll: (handler: () => void) => void
}

const wrapperClass = css({
  maxWidth: 560,
  margin: '0 auto',
  top: 0,
  left: 0,
  right: 0,
  position: 'fixed',
  zIndex: StackingOrder.TOASTER,
  pointerEvents: 'none',
})

const hasCustomId = (settings: ToasterSettings) => Object.hasOwnProperty.call(settings, 'id')

const ToastManager: React.FC<ToastManagerProps> = memo(function ToastManager(props) {
  const { bindCloseAll, bindGetToasts, bindNotify, bindRemove } = props

  const [toasts, setToasts] = useState<ToastReference[]>([])
  const [idCounter, setIdCounter] = useState(0)

  const getToasts = () => toasts

  const closeAll = () => {
    setToasts(toasts.map((toast) => ({ ...toast, isShown: false })))
  }

  /**
   * This will set isShown on the Toast which will close the toast.
   * It won't remove the toast until onExited triggers onRemove.
   */
  const closeToast = (id: string) => {
    setToasts(
      toasts.map((toast) => {
        if (toast.id === id) {
          return {
            ...toast,
            isShown: false,
          }
        }

        return toast
      })
    )
  }

  const safeCloseToast = (id: string | number) => {
    // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'string | number' is not assignab... Remove this comment to see the full error message
    const toastToRemove = toasts.find((toast) => String(toast.id).startsWith(id))

    if (toastToRemove) {
      closeToast(toastToRemove.id)
    }
  }

  const removeToast = (id?: string) => {
    const updatedToasts = toasts.filter((toast) => !String(toast.id).startsWith(id ?? ''))
    setToasts(updatedToasts)
    return updatedToasts
  }

  const createToastInstance = (title: string, settings: ToasterSettings) => {
    const uniqueId = idCounter
    setIdCounter(idCounter + 1)
    const id = hasCustomId(settings) ? `${settings.id}-${uniqueId}` : uniqueId

    return {
      id,
      title,
      description: settings.description,
      hasCloseButton: settings.hasCloseButton ?? true,
      duration: settings.duration || 5,
      close: () => safeCloseToast(id),
      intent: settings.intent,
    }
  }

  const notify = (title: string, settings: ToasterSettings) => {
    let tempToasts = toasts
    if (hasCustomId(settings)) {
      tempToasts = removeToast(settings.id)
    }

    const instance = createToastInstance(title, settings)
    // @ts-expect-error ts-migrate(2322) FIXME: Type '{ id: string | number; title: string; descri... Remove this comment to see the full error message
    setToasts([instance, ...tempToasts])
  }

  bindNotify(notify)
  bindRemove(safeCloseToast)
  bindGetToasts(getToasts)
  bindCloseAll(closeAll)

  return (
    // @ts-expect-error ts-migrate(2322) FIXME: Type 'StyleAttribute' is not assignable to type 's... Remove this comment to see the full error message
    <span className={wrapperClass}>
      {toasts.map(({ description, id, ...rest }) => {
        return (
          <Toast key={id} onRemove={() => removeToast(id)} {...rest}>
            {description}
          </Toast>
        )
      })}
    </span>
  )
})
export default ToastManager
