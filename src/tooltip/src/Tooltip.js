import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'
import { Position, Positioner } from '../../positioner'
import TooltipStateless from './TooltipStateless'

let idCounter = 0

export default class Tooltip extends PureComponent {
  static propTypes = {
    /**
     * The appearance of the tooltip.
     */
    appearance: PropTypes.oneOf(['default', 'card']).isRequired,

    /**
     * The position the Popover is on.
     */
    position: PropTypes.oneOf(Object.keys(Position)),

    /**
     * The content of the Popover.
     */
    content: PropTypes.node.isRequired,

    /**
     * Time in ms before hiding the Tooltip.
     */
    hideDelay: PropTypes.number.isRequired,

    /**
     * When True, manually show the Tooltip.
     */
    isShown: PropTypes.bool,

    /**
     * The target button of the Tooltip.
     */
    children: PropTypes.node.isRequried,

    /**
     * Properties passed through to the Tooltip.
     */
    statelessProps: PropTypes.object,

    /**
     * This is an implementation detail. Please ignore.
     * This is passed when a Tooltip is inside a Popover.
     */
    popoverProps: PropTypes.object
  }

  static defaultProps = {
    appearance: 'default',
    position: Position.BOTTOM,
    hideDelay: 120
  }

  constructor(props, context) {
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

  renderTarget = ({ getRef }) => {
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
    if (this.props.popoverProps) {
      const {
        getTargetRef,
        isShown,
        ...popoverTargetProps
      } = this.props.popoverProps

      return React.cloneElement(children, {
        // Add the Popover props to the target.
        ...popoverTargetProps,
        // Add the Tooltip props to the target.
        ...tooltipTargetProps,

        innerRef: ref => {
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
      innerRef: ref => {
        getRef(ref)
      }
    })
  }

  isPopoverShown = () =>
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

    const shown =
      (isShown || stateIsShown || isShownByTarget) && !this.isPopoverShown()

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
            innerRef={ref => getRef(ref)}
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
