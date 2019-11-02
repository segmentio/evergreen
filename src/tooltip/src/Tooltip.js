import cx from 'classnames'
import { css as gcss } from 'glamor'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'
import { Positioner } from '../../positioner'
import { Position } from '../../constants'
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
     * Time in ms before showing the Tooltip.
     */
    showDelay: PropTypes.number.isRequired,

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
    hideDelay: 120,
    showDelay: 0
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      id: `evergreen-tooltip-${++idCounter}`,
      willShow: false,
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
      willShow: true
    })
    setTimeout(() => {
      if (!this.state.willShow) return
      this.setState({
        isShown: true
      })
    }, this.props.showDelay)
  }

  hide = () => {
    this.setState({
      isShown: false,
      willShow: false
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
    // eslint-disable-next-line react/prop-types
    this.props.popoverProps && this.props.popoverProps.isShown

  handleMouseEnterTarget = () => {
    this.setState({
      isShownByTarget: true
    })
  }

  handleMouseLeaveTarget = () => {
    this.setState({
      isShownByTarget: false,
      willShow: false
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
              css ? gcss(css).toString() : undefined
            )}
          >
            {content}
          </TooltipStateless>
        )}
      </Positioner>
    )
  }
}
