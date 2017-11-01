import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Positioner from 'evergreen-positioner'
import TooltipStateless from './TooltipStateless'

export default class Tooltip extends PureComponent {
  static propTypes = {
    ...Positioner.propTypes,
    content: PropTypes.node,
    isShown: PropTypes.bool,
    children: PropTypes.node,
    tooltipProps: PropTypes.object,
    statelessProps: PropTypes.objectOf(TooltipStateless.propTypes),
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      isShown: false,
    }
  }

  getTargetRect = () => this.targetNode.getBoundingClientRect()

  getRef = ref => {
    this.targetNode = ref
  }

  show = () => {
    if (this.state.isShown) return
    this.setState({
      isShown: true,
      targetRect: this.getTargetRect(),
    })
  }

  hide = () => {
    if (!this.state.isShown) return
    this.setState({
      isShown: false,
      targetRect: this.getTargetRect(),
    })
  }

  render() {
    const { isShown, content, children, statelessProps, ...props } = this.props
    const { isShown: stateIsShown, targetRect } = this.state

    const shown = isShown || stateIsShown

    return [
      typeof children === 'function'
        ? children({
            targetRect,
            show: this.show,
            hide: this.hide,
            getRef: this.getRef,
            isShown: shown,
            key: 'tooltip-child',
          })
        : React.cloneElement(children, {
            onMouseEnter: this.show,
            onMouseLeave: this.hide,
            innerRef: ref => {
              this.getRef(ref)
            },
            ...(shown ? { 'data-tooltip-opened': true } : {}),
            key: 'tooltip-child',
          }),
      <Positioner
        key="tooltip-positioner"
        targetRect={targetRect}
        isShown={shown}
        {...props}
      >
        {({ css, style, state, getRef }) => (
          <TooltipStateless
            innerRef={ref => getRef(ref)}
            data-state={state}
            css={css}
            style={style}
            {...statelessProps}
          >
            {content}
          </TooltipStateless>
        )}
      </Positioner>,
    ]
  }
}
