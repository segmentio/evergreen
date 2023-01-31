import { useMemo, useRef } from 'react'
import merge from 'lodash.merge'
import isEqual from 'react-fast-compare'
import { splitBoxProps } from 'ui-box'
import { useTheme, get, resolveThemeTokens } from '../theme'

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

/**
 * @typedef {object} StyleConfig
 * @property {Style} baseStyle
 * @property {{ [appearance: string]: Style }} [appearances]
 * @property {{ [size: string]: Style }} [sizes]
 */

function maybeRun(value, ...args) {
  return typeof value === 'function' ? value(...args) : value
}

function maybeRunDeep(raw, ...args) {
  if (raw && typeof raw === 'object') {
    const result = {}

    for (const key of Object.keys(raw)) {
      result[key] = maybeRunDeep(raw[key], ...args)
    }

    return result
  }

  return maybeRun(raw, ...args)
}

/**
 * Combines styles from a styleConfig, with the given style modifiers (appearance, size, etc) and internal styles
 * @param {object} theme
 * @param {StyleModifiers} props
 * @param {StyleConfig} styleConfig
 * @param {import('ui-box').BoxCssProps<CssProps>} [internalStyles]
 * @returns {StyleConfig}
 */
function combineStyles(theme, props, styleConfig, internalStyles = {}) {
  const config = maybeRun(styleConfig, theme, props)
  const baseStyle = maybeRunDeep(config.baseStyle, theme, props)
  const sizeStyle = maybeRunDeep(get(config, `sizes.${props.size}`, {}), theme, props)

  const appearanceStyle = maybeRunDeep(get(config, `appearances.${props.appearance}`, {}), theme, props)

  return merge({}, internalStyles, baseStyle, sizeStyle, appearanceStyle)
}

/**
 * Combines a styleConfig object with internal styles based on the theme + style modifiers (props)
 * and returns a memoized style object
 * @returns {StyleConfig}
 */
function useMergedStyles(theme, props, styleConfig, internalStyles) {
  const styleRef = useRef({})

  return useMemo(() => {
    const combinedStyles = combineStyles(theme, props, styleConfig, internalStyles)
    if (!isEqual(styleRef.current, combinedStyles)) {
      styleRef.current = combinedStyles
    }

    return styleRef.current
  }, [theme, props, styleConfig, internalStyles])
}

/**
 * Split up the style props into box-ready props (selectors + spreadable props)
 */
function useBoxProps(styleProps, placeholderSelectors) {
  return useMemo(() => {
    // Split the resulting style object into ui-box-compatible props and the rest
    const {
      matchedProps: { selectors: actualSelectors = {}, ...matchedProps },
      remainingProps
    } = splitBoxProps(styleProps)

    /** @type {import('ui-box').EnhancerProps['selectors']} */
    const selectors = {}

    // Swap out pseudo selector placeholders for their actual css selector strings
    for (const k of Object.keys(actualSelectors)) {
      const key = k in placeholderSelectors ? placeholderSelectors[k] : k
      selectors[key] = actualSelectors[k]
    }

    const result = { ...matchedProps }
    if (!isEqual({}, remainingProps)) {
      result.style = remainingProps
    }

    if (!isEqual({}, selectors)) {
      result.selectors = selectors
    }

    return result
  }, [styleProps, placeholderSelectors])
}

/**
 * Takes a styleConfig object and outputs `boxProps` that can be spread on a Box component
 * @param {string} componentKey the name of the component in the theme
 * @param {StyleModifiers} props props that modify the resulting visual style (e.g. `size` or `appearance`)
 * @param {PseudoSelectors} placeholderSelectors mapping for the component between states and actual pseudo selectors
 * @param {import('ui-box').BoxCssProps<CssProps>} [internalStyles] additional styles that are specified internally, separate from the visual styles
 * @returns {{ selectors: import('ui-box').EnhancerProps['selectors'], style: import('react').CSSProperties } & import('ui-box').EnhancerProps}
 */
export function useStyleConfig(componentKey, props, placeholderSelectors, internalStyles) {
  const theme = useTheme()

  // Get the component style object from the theme
  const componentStyles = get(theme, `components.${componentKey}`) || {}

  // Merges the theme styles with the modifiers/props (appearance, size, etc)
  const mergedStyles = useMergedStyles(theme, props, componentStyles, internalStyles)

  // Resolve theme token strings found throughout the style object
  const styles = useMemo(() => resolveThemeTokens(theme, mergedStyles), [theme, mergedStyles])

  // Finally, split up the styles based which ones Box supports and the rest construct an inline style object
  return useBoxProps(styles, placeholderSelectors)
}
