import { useMemo, useRef } from 'react'
import { css } from 'glamor'
import merge from 'lodash.merge'
import isEqual from 'react-fast-compare'
import { splitBoxProps } from 'ui-box'

/**
 * @typedef {object} StateStyles
 * @property {import('csstype').Properties} [_hover]
 * @property {import('csstype').Properties} [_active]
 * @property {import('csstype').Properties} [_disabled]
 * @property {import('csstype').Properties} [_focus]
 * @property {import('csstype').Properties} [_invalid]
 */

/**
 * @typedef {{ [placeholder in keyof StateStyles]: string }} PseudoSelectors
 */

/**
 * @typedef {object} StyleModifiers
 * @property {string} [appearance]
 * @property {string} [size]
 */

/** @typedef {import('ui-box').EnhancerProps & StateStyles} Style */
/** @typedef {import('ui-box').EnhancerProps & import('glamor').CSSProperties} GlamorAndBoxStyle */

/**
 * @typedef {object} StyleConfig
 * @property {Style} baseStyle
 * @property {{ [appearance: string]: Style }} [appearances]
 * @property {{ [size: string]: Style }} [sizes]
 */

/**
 * Combines styles from a styleConfig, with the given style modifiers (appearance, size, etc) and internal styles
 * @param {StyleConfig} styleConfig
 * @param {StyleModifiers} modifiers
 * @param {GlamorAndBoxStyle} [internalStyles]
 */
function combineStyles(styleConfig, modifiers, internalStyles = {}) {
  const { baseStyle } = styleConfig
  const sizeStyle = styleConfig.sizes ? styleConfig.sizes[modifiers.size] : {}
  const appearanceStyle = styleConfig.appearances
    ? styleConfig.appearances[modifiers.appearance]
    : {}

  return merge({}, internalStyles, baseStyle, sizeStyle, appearanceStyle)
}

/**
 * Takes a styleConfig object and outputs a `className` and `boxProps` that can be spread on a Box component
 * @param {StyleConfig} styleConfig the style config object for a given component
 * @param {StyleModifiers} modifiers props that modify the resulting visual style (e.g. `size` or `appearance`)
 * @param {PseudoSelectors} pseudoSelectors mapping for the component between states and actual pseudo selectors
 * @param {GlamorAndBoxStyle} [internalStyles] additional styles that are specified internally, separate from the visual styles
 * @returns {{ className: string; boxProps: import('ui-box').EnhancerProps }}
 */
export default function useStyleConfig(
  styleConfig,
  modifiers,
  pseudoSelectors,
  internalStyles
) {
  const stylesRef = useRef({})

  // Distill a styleConfig object into the resulting Style
  const styles = useMemo(() => {
    const combinedStyles = combineStyles(styleConfig, modifiers, internalStyles)
    if (!isEqual(stylesRef.current, combinedStyles)) {
      stylesRef.current = combinedStyles
    }

    return stylesRef.current
  }, [styleConfig, modifiers.appearance, modifiers.size, internalStyles])

  const glamorStylesRef = useRef({})
  const classNameRef = useRef()

  return useMemo(() => {
    // Split the resulting style object into ui-box-compatible props and the rest
    const { matchedProps, remainingProps } = splitBoxProps(styles)

    /** @type {GlamorAndBoxStyle} */
    const glamorStyles = {}

    // Swap out pseudo selector placeholders for their actual css selector strings
    for (const k of Object.keys(remainingProps)) {
      const key = k in pseudoSelectors ? pseudoSelectors[k] : k
      glamorStyles[key] = remainingProps[k]
    }

    // Take all the "non-compatible" props and give those to glamor (since ui-box doesn't know how to handle them yet)
    if (!isEqual(glamorStylesRef.current, glamorStyles)) {
      glamorStylesRef.current = glamorStyles
      classNameRef.current = css(glamorStyles).toString()
    }

    return {
      className: classNameRef.current,
      boxProps: matchedProps
    }
  }, [styles, pseudoSelectors])
}
