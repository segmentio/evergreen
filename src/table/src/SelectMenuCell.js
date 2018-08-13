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

    /**
     * The size used for the TextTableCell and Textarea.
     */
    size: PropTypes.oneOf([300, 400]).isRequired,

    selectMenuProps: PropTypes.object
  }

  static defaultProps = {
    size: 300
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

  handleKeyDown = (toggle, e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      e.stopPropagation()
      toggle()
    }
  }

  handleClick = () => {
    this.mainRef.focus()
  }

  render() {
    const { children, theme, size, selectMenuProps, ...props } = this.props
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
              isSelectable
              rightView={<Icon icon="caret-down" color="muted" />}
              aria-haspopup
              aria-expanded={isShown}
              size={size}
              cursor="default"
              textProps={{
                size
              }}
              onKeyDown={this.handleKeyDown.bind(null, toggle)}
              onDoubleClick={() => {
                if (!isShown) toggle()
              }}
              {...props}
            >
              {children}
            </TextTableCell>
          )
        }}
      </SelectMenu>
    )
  }
}

export default withTheme(SelectMenuCell)
