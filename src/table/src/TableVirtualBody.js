import React, { memo, useCallback, useMemo, useRef, useEffect } from 'react'
import debounce from 'lodash.debounce'
import PropTypes from 'prop-types'
import VirtualList from 'react-tiny-virtual-list'
import { useForceUpdate } from '../../hooks'
import { Pane } from '../../layers'

const TableVirtualBody = memo(function TableVirtualBody(props) {
  const {
    allowAutoHeight = false,
    children: inputChildren,
    defaultHeight = 48,
    estimatedItemSize,
    height: paneHeight,
    onScroll,
    overscanCount = 5,
    scrollOffset,
    scrollToAlignment,
    scrollToIndex,
    useAverageAutoHeightEstimation = true,
    ...rest
  } = props

  const forceUpdate = useForceUpdate()
  const paneRef = useRef()
  const autoHeights = useRef([])
  const autoHeightRefs = useRef([])
  const averageAutoHeight = useRef(defaultHeight)
  const calculatedHeight = useRef(0)

  const isIntegerHeight = useMemo(() => {
    if (props.height !== calculatedHeight.current) {
      return Number.isInteger(props.height)
    }

    return false
  }, [props.height])

  const updateOnResize = useCallback(() => {
    const update = () => {
      autoHeights.current = []
      autoHeightRefs.current = []
      averageAutoHeight.current = defaultHeight

      // Simply return when we know the height of the pane is fixed.
      if (isIntegerHeight) return

      // Return if we are in a weird edge case in which the ref is no longer valid.
      if (paneRef.current && paneRef.current instanceof Node) {
        const tempCalculatedHeight = paneRef.current.offsetHeight

        if (tempCalculatedHeight > 0) {
          // Save the calculated height which is needed for the VirtualList.
          calculatedHeight.current = tempCalculatedHeight

          // Prevent updateOnResize being called recursively when there is a valid height.
          return
        }
      }

      // When height is still 0 (or paneRef is not valid) try recursively until success.
      requestAnimationFrame(() => {
        update()
      })
    }

    update()
  }, [isIntegerHeight, defaultHeight])

  const onResize = useMemo(() => debounce(updateOnResize, 200), [updateOnResize])

  // Mirrors functionality of componentDidMount and componentWillUnmount.
  useEffect(() => {
    updateOnResize()
    window.addEventListener('resize', onResize, false)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [updateOnResize, onResize])

  /**
   * This function will process all items that have height="auto" set.
   * It will loop through all refs and get calculate the height.
   */
  const processAutoHeights = () => {
    let isUpdated = false

    // This will determine the averageAutoHeight.
    let total = 0
    let totalAmount = 0

    // Loop through all of the refs that have height="auto".
    autoHeightRefs.current.forEach((ref, index) => {
      // If the height is already calculated, skip it,
      // but calculate the height for the total.
      if (autoHeights.current[index]) {
        total += autoHeights.current[index]
        totalAmount += 1
        return
      }

      // Make sure the ref has a child
      if (ref && ref.childNodes && ref.childNodes[0] && Number.isInteger(ref.childNodes[0].offsetHeight)) {
        const height = ref.childNodes[0].offsetHeight

        // Add to the total to calculate the averageAutoHeight.
        total += height
        totalAmount += 1

        // Cache the height.
        autoHeights.current[index] = height

        // Set the update flag to true.
        isUpdated = true
      }
    })

    // Save the average height.
    averageAutoHeight.current = total / totalAmount

    // There are some new heights detected that had previously not been calculated.
    // Call forceUpdate to make sure the virtual list renders again.
    if (isUpdated) forceUpdate()
  }

  const onVirtualHelperRef = (index, ref) => {
    autoHeightRefs.current[index] = ref

    requestAnimationFrame(() => {
      processAutoHeights()
    })
  }

  const getItemSize = children => {
    // Prefer to return a array of all heights.
    if (!allowAutoHeight) {
      return children.map(child => {
        if (!React.isValidElement(child)) return defaultHeight
        const { height } = child.props

        if (Number.isInteger(height)) {
          return height
        }

        return defaultHeight
      })
    }

    // If allowAutoHeight is true, return a function instead.
    const itemSizeFn = index => {
      if (!React.isValidElement(children[index])) return defaultHeight
      const { height } = children[index].props

      // When the height is number simply, simply return it.
      if (Number.isInteger(height)) {
        return height
      }

      // When allowAutoHeight is set and  the height is set to "auto"...
      if (allowAutoHeight && children[index].props.height === 'auto') {
        // ... and the height is calculated, return the calculated height.
        if (autoHeights.current[index]) return autoHeights.current[index]

        // ... if the height is not yet calculated, return the averge
        if (useAverageAutoHeightEstimation) return averageAutoHeight.current
      }

      // Return the default height.
      return defaultHeight
    }

    return itemSizeFn
  }

  // Children always needs to be an array.
  const children = Array.isArray(inputChildren) ? inputChildren : React.Children.toArray(inputChildren)

  const itemSize = getItemSize(children)

  return (
    <Pane data-evergreen-table-body ref={paneRef} height={paneHeight} flex="1" overflow="hidden" {...rest}>
      <VirtualList
        height={isIntegerHeight ? paneHeight : calculatedHeight.current}
        width="100%"
        estimatedItemSize={
          allowAutoHeight && useAverageAutoHeightEstimation ? averageAutoHeight.current : estimatedItemSize || null
        }
        itemSize={itemSize}
        overscanCount={overscanCount}
        itemCount={React.Children.count(children)}
        scrollToIndex={scrollToIndex}
        scrollOffset={scrollOffset}
        scrollToAlignment={scrollToAlignment}
        onScroll={onScroll}
        renderItem={({ index, style }) => {
          const child = children[index]
          const key = child.key || index
          const props = {
            key,
            style
          }

          // If some children are strings by accident, support this gracefully.
          if (!React.isValidElement(child)) {
            if (typeof child === 'string') {
              return <div {...props}>{child}</div>
            }

            return <div {...props}>&nbsp;</div>
          }

          // When allowing height="auto" for rows, and a auto height item is
          // rendered for the first time...
          if (
            allowAutoHeight &&
            React.isValidElement(child) &&
            child.props.height === 'auto' &&
            // ... and only when the height is not already been calculated.
            !autoHeights.current[index]
          ) {
            // ... render the item in a helper div, the ref is used to calculate
            // the height of its children.
            return (
              <div
                ref={ref => onVirtualHelperRef(index, ref)}
                data-virtual-index={index}
                {...props}
                style={{
                  opacity: 0,
                  ...props.style
                }}
              >
                {child}
              </div>
            )
          }

          // When allowAutoHeight is false, or when the height is known.
          // Simply render the item.
          return React.cloneElement(child, props)
        }}
      />
    </Pane>
  )
})

TableVirtualBody.propTypes = {
  /**
   * Composes the Pane component as the base.
   */
  ...Pane.propTypes,

  /**
   * Children needs to be an array of a single node.
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),

  /**
   * Default height of each row.
   * 48 is the default height of a TableRow.
   */
  defaultHeight: PropTypes.number,

  /**
   * When true, support `height="auto"` on children being rendered.
   * This is somewhat of an expirmental feature.
   */
  allowAutoHeight: PropTypes.bool,

  /**
   * The overscanCount property passed to react-tiny-virtual-list.
   */
  overscanCount: PropTypes.number,

  /**
   * When passed, this is used as the `estimatedItemSize` in react-tiny-virtual-list.
   * Only when `allowAutoHeight` and`useAverageAutoHeightEstimation` are false.
   */
  estimatedItemSize: PropTypes.number,

  /**
   * When allowAutoHeight is true and this prop is true, the estimated height
   * will be computed based on the average height of auto height rows.
   */
  useAverageAutoHeightEstimation: PropTypes.bool,

  /**
   * The scrollToIndex property passed to react-tiny-virtual-list
   */
  scrollToIndex: PropTypes.number,
  /**
   * The scrollOffset property passed to react-tiny-virtual-list
   */
  scrollOffset: PropTypes.number,
  /**
   * The scrollToAlignment property passed to react-tiny-virtual-list
   */
  scrollToAlignment: PropTypes.oneOf(['start', 'center', 'end', 'auto']),
  /**
   * The onScroll callback passed to react-tiny-virtual-list
   */
  onScroll: PropTypes.func
}

export default TableVirtualBody
