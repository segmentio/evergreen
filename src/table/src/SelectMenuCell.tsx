import React, { memo, useState, useEffect, useCallback, useMemo } from 'react'
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'loda... Remove this comment to see the full error message
import debounce from 'lodash.debounce'
import PropTypes from 'prop-types'
import { CaretDownIcon } from '../../icons'
import { SelectMenu } from '../../select-menu'
import TableCell from './TableCell'
import TextTableCell from './TextTableCell'

const MIN_SELECT_MENU_WIDTH = 240
const emptyProps = {}

const SelectMenuCell = memo(function SelectMenuCell(props) {
  const [targetWidth, setTargetWidth] = useState(MIN_SELECT_MENU_WIDTH)
  const [shouldClickToggle, setShouldClickToggle] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [mainRef, setMainRef] = useState()

  const {
    children,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'size' does not exist on type '{ children... Remove this comment to see the full error message
    size = 300,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'selectMenuProps' does not exist on type ... Remove this comment to see the full error message
    selectMenuProps,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'disabled' does not exist on type '{ chil... Remove this comment to see the full error message
    disabled,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'placeholder' does not exist on type '{ c... Remove this comment to see the full error message
    placeholder,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'isSelectable' does not exist on type '{ ... Remove this comment to see the full error message
    isSelectable = true,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'textProps' does not exist on type '{ chi... Remove this comment to see the full error message
    textProps = emptyProps,
    ...rest
  } = props

  const updateOnResize = () => {
    if (!mainRef) return
    // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
    const mainRefWidth = mainRef.offsetWidth
    setTargetWidth(Math.max(MIN_SELECT_MENU_WIDTH, mainRefWidth))
  }

  const onResize = debounce(updateOnResize, 200)

  useEffect(() => {
    updateOnResize()
    window.addEventListener('resize', onResize, false)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const onMainRef = (getRef: any, ref: any) => {
    setMainRef(ref)
    getRef(ref)
  }

  // TODO consider `useClickable`
  const handleKeyDown = (toggle: any, isShown: any, e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      e.stopPropagation()

      if (!isShown && isSelectable && !disabled) {
        toggle()
      }
    }
  }

  const handleDoubleClick = (toggle: any, isShown: any) => {
    if (!isShown && isSelectable && !disabled) {
      toggle()
    }
  }

  const handleClick = (toggle: any, isShown: any) => {
    if (!shouldClickToggle && !isShown) {
      setShouldClickToggle(true)
      return
    }

    if (isSelectable && !disabled) {
      toggle()
      setShouldClickToggle(true)
    }
  }

  const handleFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleBlur = useCallback(() => {
    setShouldClickToggle(false)
    setIsFocused(false)
  }, [])

  let cursor = 'default'
  if (disabled) {
    cursor = 'not-allowed'
  } else if (isSelectable) {
    if (isFocused) {
      cursor = 'pointer'
    } else {
      cursor = 'default'
    }
  } else {
    cursor = 'text'
  }

  const lessOpacity = useMemo(() => disabled || (!children && placeholder), [disabled, children, placeholder])

  const mergedTextProps = useMemo(
    () => ({
      size,
      opacity: lessOpacity ? 0.5 : 1,
      ...textProps
    }),
    [lessOpacity, size, textProps]
  )

  return (
    <SelectMenu width={targetWidth} {...selectMenuProps}>
      {({
        getRef,
        isShown,
        toggle
      }: any) => {
        return (
          // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
          <TextTableCell
            ref={onMainRef.bind(null, getRef)}
            // @ts-expect-error ts-migrate(2322) FIXME: Type '() => void' is not assignable to type 'never... Remove this comment to see the full error message
            onClick={handleClick.bind(null, toggle, isShown)}
            // @ts-expect-error ts-migrate(2322) FIXME: Type '() => void' is not assignable to type 'never... Remove this comment to see the full error message
            onFocus={handleFocus}
            // @ts-expect-error ts-migrate(2322) FIXME: Type '() => void' is not assignable to type 'never... Remove this comment to see the full error message
            onBlur={handleBlur}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
            isSelectable={isSelectable && !disabled}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'Element | null' is not assignable to type 'n... Remove this comment to see the full error message
            rightView={isSelectable ? <CaretDownIcon color="muted" /> : null}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'boolean' is not assignable to type 'never'.
            aria-haspopup
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
            aria-expanded={isShown}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type 'never'.
            cursor={isShown ? 'pointer' : cursor}
            // @ts-expect-error ts-migrate(2322) FIXME: Type 'any' is not assignable to type 'never'.
            textProps={mergedTextProps}
            // @ts-expect-error ts-migrate(2322) FIXME: Type '(e: any) => void' is not assignable to type ... Remove this comment to see the full error message
            onKeyDown={handleKeyDown.bind(null, toggle, isShown)}
            // @ts-expect-error ts-migrate(2322) FIXME: Type '() => void' is not assignable to type 'never... Remove this comment to see the full error message
            onDoubleClick={handleDoubleClick.bind(null, toggle, isShown)}
            {...rest}
          >
            {children || placeholder}
          </TextTableCell>
        )
      }}
    </SelectMenu>
  );
})

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
SelectMenuCell.propTypes = {
  /**
   * Composes the TableCell component as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
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
  size: PropTypes.oneOf([300, 400]),

  selectMenuProps: PropTypes.object
}

export default SelectMenuCell
