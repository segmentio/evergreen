import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'ui-box'
import { Pane } from 'evergreen-layers'
import { Heading } from 'evergreen-typography'
import Overlay from 'evergreen-overlay'
import { Button, IconButton } from 'evergreen-buttons'

const animationEasing = {
  deceleration: `cubic-bezier(0.0, 0.0, 0.2, 1)`,
  acceleration: `cubic-bezier(0.4, 0.0, 1, 1)`
}

const ANIMATION_DURATION = 200

const openAnimation = css.keyframes('openAnimation', {
  from: {
    transform: 'scale(0.8)',
    opacity: 0
  },
  to: {
    transform: 'scale(1)',
    opacity: 1
  }
})

const closeAnimation = css.keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.8)',
    opacity: 0
  }
})

const animationStyles = {
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: `${openAnimation} ${ANIMATION_DURATION}ms ${
      animationEasing.deceleration
    } both`
  },
  '&[data-state="exiting"]': {
    animation: `${closeAnimation} ${ANIMATION_DURATION}ms ${
      animationEasing.acceleration
    } both`
  }
}

class Dialog extends React.Component {
  static propTypes = {
    /**
     * Composes the Overlay component as the base.
     */
    ...Overlay.propTypes,

    /**
     * Children can be a node or a function accepting { close }.
     */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

    /**
     * Props to be passed to the primary button.
     * You should pass `children` and `onClick``
     */
    primaryButton: PropTypes.object,

    /**
     * Label of the cancel button, shown when primaryButton is passed.
     */
    cancelLabel: PropTypes.node,

    /**
     * Hide cancel button when you are presenting a primary button.
     */
    hideCancelButton: PropTypes.bool,

    /**
     * Title of the Dialog.
     */
    title: PropTypes.node,

    /**
     * Width of the Dialog.
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Show the close icon.
     */
    hasCloseIcon: PropTypes.bool,

    /**
     * Props that are passed to the Dialog container.
     */
    containerProps: PropTypes.object
  }

  static defaultProps = {
    width: 567,
    hasCloseIcon: true,
    cancelLabel: 'Cancel'
  }

  render() {
    const {
      children,
      title,
      width,
      height,
      primaryButton,
      cancelLabel,
      hasCloseIcon,
      containerProps,
      hideCancelButton,
      ...props
    } = this.props

    return (
      <Overlay {...props}>
        {({ state, close }) => (
          <Pane display="flex" justifyContent="center" paddingTop={120}>
            <Pane
              role="dialog"
              backgroundColor="white"
              elevation={4}
              borderRadius={8}
              width={width}
              height={height}
              css={animationStyles}
              data-state={state}
              {...containerProps}
            >
              <Pane
                padding={16}
                borderBottom="extraMuted"
                display="flex"
                alignItems="center"
              >
                <Heading is="h4" size={600} flex="1">
                  {title}
                </Heading>
                {hasCloseIcon && (
                  <IconButton appearance="ghost" icon="close" onClick={close} />
                )}
              </Pane>

              <Pane overflowY="auto" data-state={state} padding={16}>
                {typeof children === 'function'
                  ? children({
                      close
                    })
                  : children}

                {primaryButton && (
                  <Pane
                    marginTop={16}
                    display="flex"
                    flexDirection="row-reverse"
                  >
                    <Button
                      marginLeft={8}
                      appearance="green"
                      {...primaryButton}
                      onClick={() =>
                        typeof primaryButton.onClick === 'function'
                          ? primaryButton.onClick(close)
                          : close()
                      }
                    />
                    {hideCancelButton ? null : (
                      <Button onClick={close}>{cancelLabel}</Button>
                    )}
                  </Pane>
                )}
              </Pane>
            </Pane>
          </Pane>
        )}
      </Overlay>
    )
  }
}

export default Dialog
