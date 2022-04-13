import React, { memo } from 'react'
import { css } from 'glamor'
import { BoxProps } from 'ui-box'
import { Position } from '../../constants'
import { Pane } from '../../layers'
import { PaneOwnProps, PaneProps } from '../../layers/src/Pane'
import { Overlay } from '../../overlay'
import { PositionTypes } from '../../types'
import SheetClose, { SheetPosition } from './SheetClose'

type BasicPositionTypes = Exclude<PositionTypes, 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>
type AbsolutePositionProps = Pick<
  PaneProps,
  'height' | 'maxWidth' | 'position' | 'left' | 'right' | 'width' | 'maxHeight' | 'top' | 'bottom'
>
export interface SideSheetProps {
  children: React.ReactNode | (() => React.ReactNode)
  isShown?: boolean
  onCloseComplete?: () => void
  onOpenComplete?: () => void
  onBeforeClose?: () => boolean
  shouldCloseOnOverlayClick?: boolean
  shouldCloseOnEscapePress?: boolean
  width?: string | number
  containerProps?: PaneOwnProps & BoxProps<'div'>
  position?: Extract<PositionTypes, 'top' | 'bottom' | 'left' | 'right'>
  preventBodyScrolling?: boolean
}

const paneProps: Record<BasicPositionTypes, AbsolutePositionProps> = {
  [Position.LEFT]: {
    height: '100vh',
    maxWidth: '100vw',
    position: 'absolute',
    left: 0,
    right: 'auto'
  },
  [Position.RIGHT]: {
    height: '100vh',
    maxWidth: '100vw',
    position: 'absolute',
    right: 0,
    left: 'auto'
  },
  [Position.TOP]: {
    width: '100vw',
    position: 'absolute',
    maxHeight: '100vh',
    top: 0,
    bottom: 'auto'
  },
  [Position.BOTTOM]: {
    width: '100vw',
    maxHeight: '100vh',
    position: 'absolute',
    bottom: 0,
    top: 'auto'
  }
}

const subpaneProps: Record<BasicPositionTypes, AbsolutePositionProps> = {
  [Position.LEFT]: {
    height: '100vh'
  },
  [Position.RIGHT]: {
    height: '100vh'
  },
  [Position.TOP]: {
    width: '100vw'
  },
  [Position.BOTTOM]: {
    width: '100vw'
  }
}

const animationEasing = {
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)'
}

const ANIMATION_DURATION = 240

const withAnimations = (animateIn: any, animateOut: any) => {
  return {
    '&[data-state="entering"], &[data-state="entered"]': {
      animation: `${animateIn} ${ANIMATION_DURATION}ms ${animationEasing.deceleration} both`
    },
    '&[data-state="exiting"]': {
      animation: `${animateOut} ${ANIMATION_DURATION}ms ${animationEasing.acceleration} both`
    }
  }
}

const animationStylesClass = {
  [Position.LEFT]: {
    transform: 'translateX(-100%)',
    ...withAnimations(
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('anchoredLeftSlideInAnimation', {
        from: { transform: 'translateX(-100%)' },
        to: { transform: 'translateX(0)' }
      }),
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('anchoredLeftSlideOutAnimation', {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' }
      })
    )
  },
  [Position.RIGHT]: {
    transform: 'translateX(100%)',
    ...withAnimations(
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('anchoredRightSlideInAnimation', {
        from: { transform: 'translateX(100%)' },
        to: { transform: 'translateX(0)' }
      }),
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('anchoredRightSlideOutAnimation', {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(100%)' }
      })
    )
  },
  [Position.TOP]: {
    transform: 'translateY(-100%)',
    ...withAnimations(
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('anchoredTopSlideInAnimation', {
        from: { transform: 'translateY(-100%)' },
        to: { transform: 'translateY(0)' }
      }),
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('anchoredTopSlideOutAnimation', {
        from: { transform: 'translateY(0)' },
        to: { transform: 'translateY(-100%)' }
      })
    )
  },
  [Position.BOTTOM]: {
    transform: 'translateY(100%)',
    ...withAnimations(
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('anchoredBottomSlideInAnimation', {
        from: { transform: 'translateY(100%)' },
        to: { transform: 'translateY(0)' }
      }),
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'keyframes' does not exist on type 'typeo... Remove this comment to see the full error message
      css.keyframes('anchoredBottomSlideOutAnimation', {
        from: { transform: 'translateY(0)' },
        to: { transform: 'translateY(100%)' }
      })
    )
  }
}

const noop = () => {}

const SideSheet: React.FC<SideSheetProps> = memo(function SideSheet(props) {
  const {
    width = 620,
    isShown,
    children,
    containerProps,
    onOpenComplete = noop,
    onCloseComplete = noop,
    onBeforeClose,
    shouldCloseOnOverlayClick = true,
    shouldCloseOnEscapePress = true,
    position = Position.RIGHT,
    preventBodyScrolling
  } = props

  return (
    <Overlay
      isShown={isShown}
      shouldCloseOnClick={shouldCloseOnOverlayClick}
      shouldCloseOnEscapePress={shouldCloseOnEscapePress}
      onBeforeClose={onBeforeClose}
      onExited={onCloseComplete}
      onEntered={onOpenComplete}
      preventBodyScrolling={preventBodyScrolling}
    >
      {({ close, state }: any) => (
        <Pane
          width={width}
          {...paneProps[position]}
          className={css(animationStylesClass[position]).toString()}
          data-state={state}
        >
          <SheetClose position={position as SheetPosition} data-state={state} isClosing={false} onClick={close} />
          <Pane
            elevation={4}
            backgroundColor="white"
            overflowY="auto"
            maxHeight="100vh"
            data-state={state}
            width={width}
            {...subpaneProps[position]}
            {...containerProps}
          >
            {/* @ts-expect-error */}
            {typeof children === 'function' ? children({ close }) : children}
          </Pane>
        </Pane>
      )}
    </Overlay>
  )
})

export default SideSheet
