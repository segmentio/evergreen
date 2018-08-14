import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash.debounce'
import { withTheme } from '../../theme'
import { SelectMenu } from '../../select-menu'
import { Icon } from '../../icon'
import TextTableCell from './TextTableCell'
import TableCell from './TableCell'

const MIN_SELECT_MENU_WIDTH = 240

class SelectMenuCell extends React.PureComponent {
  static propTypes = {
    /**
     * Composes the TableCell component as the base.
     */
    ...TableCell.propTypes,

    /*
    * Makes the TableCell focusable.
    * Will add tabIndex={-1 || this.props.tabIndex}.
    */
    isSelectable: PropTypes.bool,

    /**
     * When true, the cell can't be edited.
     */
    disabled: PropTypes.bool,

    /**
     * Optional placeholder when children is falsy.
     */
    placeholder: PropTypes.node,

    /**
     * The size used for the TextTableCell and Textarea.
     */
    size: PropTypes.oneOf([300, 400]).isRequired,

    selectMenuProps: PropTypes.object
  }

  static defaultProps = {
    size: 300,
    isSelectable: true
  }

  state = {
    targetWidth: MIN_SELECT_MENU_WIDTH
  }

  constructor(props) {
    super(props)
    this.onResize = debounce(this.onResize, 200)
  }

  componentDidMount() {
    // Call this to initialize and set
    this.updateOnResize()
    window.addEventListener('resize', this.onResize, false)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  onResize = () => {
    this.updateOnResize()
  }

  updateOnResize = () => {
    if (!this.mainRef) return
    const targetWidth = this.mainRef.offsetWidth
    this.setState({
      targetWidth: Math.max(MIN_SELECT_MENU_WIDTH, targetWidth)
    })
  }

  onMainRef = (getRef, ref) => {
    this.mainRef = ref
    getRef(ref)
  }

  onOverlayRef = ref => {
    this.overlayRef = ref
  }

  handleKeyDown = (toggle, isShown, e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      e.stopPropagation()

      if (!isShown && this.props.isSelectable && !this.props.disabled) {
        toggle()
      }
    }
  }

  handleDoubleClick = (toggle, isShown) => {
    if (!isShown && this.props.isSelectable && !this.props.disabled) {
      toggle()
    }
  }

  handleClick = () => {
    this.mainRef.focus()
  }

  render() {
    const {
      children,
      theme,
      size,
      selectMenuProps,
      disabled,
      placeholder,
      isSelectable,
      textProps = {},
      ...props
    } = this.props
    const { targetWidth } = this.state

    return (
      <SelectMenu
        onSelect={this.handleSelect}
        width={targetWidth}
        {...selectMenuProps}
      >
        {({ toggle, getRef, isShown }) => {
          return (
            <TextTableCell
              innerRef={this.onMainRef.bind(null, getRef)}
              isSelectable={isSelectable && !disabled}
              rightView={
                isSelectable ? <Icon icon="caret-down" color="muted" /> : null
              }
              aria-haspopup
              aria-expanded={isShown}
              cursor={
                disabled ? 'not-allowed' : isSelectable ? 'default' : 'text'
              }
              textProps={{
                size,
                opacity: disabled || (!children && placeholder) ? 0.5 : 1,
                ...textProps
              }}
              onKeyDown={this.handleKeyDown.bind(null, toggle, isShown)}
              onDoubleClick={this.handleDoubleClick.bind(null, toggle, isShown)}
              {...props}
            >
              {children ? children : placeholder}
            </TextTableCell>
          )
        }}
      </SelectMenu>
    )
  }
}

export default withTheme(SelectMenuCell)
