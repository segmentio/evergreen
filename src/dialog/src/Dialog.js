import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'ui-box'
import { Pane } from '../../layers'
import { Heading } from '../../typography'
import { Overlay } from '../../overlay'
import { Button, IconButton } from '../../buttons'

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
     * Children can be a node or a function accepting `({ close })`.
     * See an example to understand how this works.
     */
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,

    /**
     * Title of the Dialog. Titles should use Title Case.
     */
    title: PropTypes.node,

    /**
     * Props passed through to the primary button.
     * Passing this object will show the button and cancel button.
     * You should pass `children` and `onClick`.
     */
    primaryButton: PropTypes.object,

    /**
     * Label of the cancel button, shown when primaryButton is passed.
     * You should not have to change this in most cases.
     */
    cancelLabel: PropTypes.node,

    /**
     * Only effective when when passing primaryButton.
     */
    hideCancelButton: PropTypes.bool,

    /**
     * Width of the Dialog.
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The space above the Dialog.
     * This offset is also used at the bottom when there is not enough space
     * available on screen — and the Dialog scrolls internally.
     */
    topOffset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The min height of the body content.
     * Makes it less weird when only showing little content.
     */
    minHeightContent: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * When true, hide the header containing the title and close button.
     */
    hideHeader: PropTypes.bool,

    /**
     * Props that are passed to the Dialog container.
     */
    containerProps: PropTypes.object
  }

  static defaultProps = {
    width: 560,
    topOffset: '12vh',
    minHeightContent: 80,
    cancelLabel: 'Cancel'
  }

  render() {
    const {
      title,
      width,
      children,
      topOffset,
      hideHeader,
      cancelLabel,
      primaryButton,
      minHeightContent,
      hideCancelButton,
      containerProps,
      ...props
    } = this.props

    let maxHeight
    if (Number.isInteger(topOffset)) {
      maxHeight = `calc(100% - ${topOffset}px - ${topOffset}px)`
    } else {
      maxHeight = `calc(100% - ${topOffset} - ${topOffset})`
    }

    return (
      <Overlay {...props}>
        {({ state, close }) => (
          <Pane
            display="flex"
            justifyContent="center"
            paddingTop={topOffset}
            maxHeight={maxHeight}
          >
            <Pane
              role="dialog"
              backgroundColor="white"
              elevation={4}
              borderRadius={8}
              width={width}
              display="flex"
              flexDirection="column"
              css={animationStyles}
              data-state={state}
              {...containerProps}
            >
              {!hideHeader && (
                <Pane
                  padding={16}
                  flexShrink={0}
                  borderBottom="extraMuted"
                  display="flex"
                  alignItems="center"
                >
                  <Heading is="h4" size={600} flex="1">
                    {title}
                  </Heading>
                  <IconButton appearance="ghost" icon="close" onClick={close} />
                </Pane>
              )}

              <Pane
                data-state={state}
                flex={1}
                display="flex"
                flexDirection="column"
              >
                <Pane
                  overflowY="auto"
                  padding={16}
                  minHeight={minHeightContent}
                >
                  {typeof children === 'function'
                    ? children({
                        close
                      })
                    : children}
                </Pane>

                {primaryButton && (
                  <Pane
                    flexShrink={0}
                    padding={16}
                    borderTop="extraMuted"
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
                    {!hideCancelButton && (
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
