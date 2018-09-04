import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'
import { Position, Positioner } from '../../positioner'
import TooltipStateless from './TooltipStateless'

let idCounter = 0

export default class Tooltip extends PureComponent {
  static propTypes = {
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
    children: PropTypes.node.isRequired,

    /**
     * Properties passed through to the Tooltip.
     */
    statelessProps: PropTypes.object,

    /**
     * The z-index of the Tooltip.
     */
    zIndex: PropTypes.number.isRequired
  }

  static defaultProps = {
    position: Position.BOTTOM,
    zIndex: 40,
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

    return React.cloneElement(children, {
      onMouseEnter: this.show,
      onMouseLeave: this.hide,
      'aria-describedby': this.state.id,
      innerRef: ref => {
        getRef(ref)
      }
    })
  }

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
    const { isShown, zIndex, content, position, statelessProps } = this.props
    const { isShown: stateIsShown, isShownByTarget } = this.state

    const shown = isShown || stateIsShown || isShownByTarget

    return (
      <Positioner
        target={({ getRef }) => {
          return this.renderTarget({ getRef })
        }}
        zIndex={zIndex}
        isShown={shown}
        position={position}
        animationDuration={160}
      >
        {({ css, style, state, getRef }) => (
          <TooltipStateless
            id={this.state.id}
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
