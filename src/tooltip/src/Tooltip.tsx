import { css as gcss } from 'glamor'
import cx from 'classnames'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'
import { Positioner } from '../../positioner'
import { Position } from '../../constants'
import TooltipStateless from './TooltipStateless'

let idCounter = 0

export default class Tooltip extends PureComponent<any, any> {
  static propTypes = {
    /**
     * The appearance of the tooltip.
     */
    appearance: PropTypes.oneOf(['default', 'card']).isRequired,

    /**
     * The position the Popover is on.
     */
    position: PropTypes.oneOf([
      Position.TOP,
      Position.TOP_LEFT,
      Position.TOP_RIGHT,
      Position.BOTTOM,
      Position.BOTTOM_LEFT,
      Position.BOTTOM_RIGHT,
      Position.LEFT,
      Position.RIGHT
    ]),

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
    children: PropTypes.node.isRequired,

    /**
     * Properties passed through to the Tooltip.
     */
    statelessProps: PropTypes.object
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
    if (!React.isValidElement(this.props.children)) {
      return this.props.children
    }

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

      return React.cloneElement(this.props.children, {
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
    return React.cloneElement<any>(this.props.children, {
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
      statelessProps = {}
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
            innerRef={ref => getRef(ref)}
            data-state={state}
            style={style}
            onMouseEnter={this.handleMouseEnterTarget}
            onMouseLeave={this.handleMouseLeaveTarget}
            {...statelessProps}
            className={cx(
              statelessProps.className,
              css ? gcss(css) : undefined
            )}
          >
            {content}
          </TooltipStateless>
        )}
      </Positioner>
    )
  }
}
