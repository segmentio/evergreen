import * as PropTypes from 'prop-types'
import * as React from 'react'
import debounce from 'lodash.debounce'

import { Positioner } from '../../positioner'
import { Position, TPosition } from '../../constants'
import TooltipStateless, { IStatelessTooltipProps } from './TooltipStateless'
import { IPopoverProps } from '../../popover/src/Popover'

interface IProps {
  // The appearance of the tooltip.
  appearance?: 'default' | 'card'

  // The position the Popover is on.
  position: TPosition

  // The content of the Popover.
  content: any

  // Time in ms before hiding the Tooltip.
  hideDelay?: number

  // When True, manually show the Tooltip.
  isShown?: boolean

  // The target button of the Tooltip.
  children: any

  // Properties passed through to the Tooltip.
  statelessProps?: IStatelessTooltipProps

  popoverProps?: IPopoverProps
}

interface IState {
  id: string
  isShown: boolean
  isShownByTarget: boolean
}

let idCounter = 0

export default class Tooltip extends React.PureComponent<IProps, IState> {
  static propTypes = {
    appearance: PropTypes.oneOf(['default', 'card'])
      .isRequired as PropTypes.Validator<'default' | 'card'>,
    position: PropTypes.oneOf([
      Position.TOP,
      Position.TOP_LEFT,
      Position.TOP_RIGHT,
      Position.BOTTOM,
      Position.BOTTOM_LEFT,
      Position.BOTTOM_RIGHT,
      Position.LEFT,
      Position.RIGHT
    ]) as PropTypes.Validator<TPosition>,
    content: PropTypes.node.isRequired,
    hideDelay: PropTypes.number.isRequired,
    isShown: PropTypes.bool,
    children: PropTypes.node.isRequired,
    statelessProps: PropTypes.object
  }

  static defaultProps = {
    appearance: 'default',
    position: Position.BOTTOM,
    hideDelay: 120
  }

  constructor(props: IProps, context: any) {
    super(props, context)

    this.state = {
      id: `evergreen-tooltip-${++idCounter}`,
      isShown: props.isShown,
      isShownByTarget: false
    }

    this.handleMouseLeaveTarget = debounce(
      this.handleMouseLeaveTarget,
      this.props.hideDelay
    )

    this.hide = debounce(this.hide, this.props.hideDelay)
  }

  show = () => {
    if (this.state.isShown) return
    this.setState({
      isShown: true
    })
  }

  hide = () => {
    if (!this.state.isShown) return
    this.setState({
      isShown: false
    })
  }

  renderTarget = ({ getRef }: { getRef: (ref: any) => void }) => {
    const { children } = this.props

    const tooltipTargetProps = {
      onMouseEnter: this.show,
      onMouseLeave: this.hide,
      'aria-describedby': this.state.id
    }

    /**
     * Tooltips can be used within a Popover (not the other way around)
     * When a Tooltip is used within a Popover, the Popover passes
     * its props to the Tooltip in a `popoverProps` object.
     */
    // eslint-disable-next-line react/prop-types
    if (this.props.popoverProps) {
      const {
        // eslint-disable-next-line react/prop-types
        getTargetRef,
        // eslint-disable-next-line react/prop-types
        isShown,
        ...popoverTargetProps
        // eslint-disable-next-line react/prop-types
      } = this.props.popoverProps

      return React.cloneElement(children, {
        // Add the Popover props to the target.
        ...popoverTargetProps,
        // Add the Tooltip props to the target.
        ...tooltipTargetProps,

        innerRef: (ref: any) => {
          // Get the ref for the Tooltip.
          getRef(ref)
          // Pass the ref to the Popover.
          getTargetRef(ref)
        }
      })
    }

    /**
     * With normal usage only the props for a Tooltip are passed to the target.
     */
    return React.cloneElement(children, {
      ...tooltipTargetProps,
      innerRef: (ref: any) => {
        getRef(ref)
      }
    })
  }

  isPopoverShown = () =>
    // eslint-disable-next-line react/prop-types
    this.props.popoverProps && this.props.popoverProps.isShown

  handleMouseEnterTarget = () => {
    this.setState({
      isShownByTarget: true
    })
  }

  handleMouseLeaveTarget = () => {
    this.setState({
      isShownByTarget: false
    })
  }

  render() {
    const {
      appearance,
      isShown,
      content,
      position,
      statelessProps
    } = this.props
    const { isShown: stateIsShown, isShownByTarget } = this.state

    let shown =
      (isShown || stateIsShown || isShownByTarget) && !this.isPopoverShown()

    // Tooltip was explicitly set to not be shown
    if (isShown === false) {
      shown = false
    }

    return (
      <Positioner
        target={({ getRef }) => {
          return this.renderTarget({ getRef })
        }}
        isShown={shown}
        position={position}
        animationDuration={160}
      >
        {({ css, style, state, getRef }) => (
          <TooltipStateless
            id={this.state.id}
            appearance={appearance}
            innerRef={(ref: any) => getRef(ref)}
            data-state={state}
            css={css}
            style={style}
            onMouseEnter={this.handleMouseEnterTarget}
            onMouseLeave={this.handleMouseLeaveTarget}
            {...statelessProps}
          >
            {content}
          </TooltipStateless>
        )}
      </Positioner>
    )
  }
}
