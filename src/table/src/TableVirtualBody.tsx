import React, { memo, useState, useEffect } from 'react'
import VirtualList from '@segment/react-tiny-virtual-list'
import debounce from 'lodash.debounce'
import PropTypes from 'prop-types'
import { useForceUpdate } from '../../hooks'
import { Pane } from '../../layers'

const TableVirtualBody = memo(function TableVirtualBody(props) {
  const {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'allowAutoHeight' does not exist on type ... Remove this comment to see the full error message
    allowAutoHeight = false,
    children: inputChildren,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultHeight' does not exist on type '{... Remove this comment to see the full error message
    defaultHeight = 48,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'estimatedItemSize' does not exist on typ... Remove this comment to see the full error message
    estimatedItemSize,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'height' does not exist on type '{ childr... Remove this comment to see the full error message
    height: paneHeight,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'onScroll' does not exist on type '{ chil... Remove this comment to see the full error message
    onScroll,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'overscanCount' does not exist on type '{... Remove this comment to see the full error message
    overscanCount = 5,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'scrollOffset' does not exist on type '{ ... Remove this comment to see the full error message
    scrollOffset,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'scrollToAlignment' does not exist on typ... Remove this comment to see the full error message
    scrollToAlignment,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'scrollToIndex' does not exist on type '{... Remove this comment to see the full error message
    scrollToIndex,
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'useAverageAutoHeightEstimation' does not... Remove this comment to see the full error message
    useAverageAutoHeightEstimation = true,
    ...rest
  } = props

  const forceUpdate = useForceUpdate()
  let autoHeights: any = []
  let autoHeightRefs: any = []
  let averageAutoHeight = defaultHeight

  const [paneRef, setPaneRef] = useState()
  const [isIntegerHeight, setIsIntegerHeight] = useState(false)
  const [calculatedHeight, setCalculatedHeight] = useState(0)

  const updateOnResize = () => {
    autoHeights = []
    autoHeightRefs = []
    averageAutoHeight = defaultHeight

    // Simply return when we now the height of the pane is fixed.
    if (isIntegerHeight) return

    // Return if we are in a weird edge case in which the ref is no longer valid.
    // @ts-expect-error ts-migrate(2358) FIXME: The left-hand side of an 'instanceof' expression m... Remove this comment to see the full error message
    if (paneRef && paneRef instanceof Node) {
      // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
      const tempCalculatedHeight = paneRef.offsetHeight

      if (tempCalculatedHeight > 0) {
        // Save the calculated height which is needed for the VirtualList.
        setCalculatedHeight(tempCalculatedHeight)

        // Prevent updateOnResize being called recursively when there is a valid height.
        return
      }
    }

    // When height is still 0 (or paneRef is not valid) try recursively until success.
    requestAnimationFrame(() => {
      updateOnResize()
    })
  }

  const onResize = debounce(updateOnResize, 200)

  useEffect(() => {
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'height' does not exist on type 'PropsWit... Remove this comment to see the full error message
    if (props.height !== calculatedHeight) {
      // @ts-expect-error ts-migrate(2339) FIXME: Property 'height' does not exist on type 'PropsWit... Remove this comment to see the full error message
      setIsIntegerHeight(Number.isInteger(props.height))
    }
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'height' does not exist on type 'PropsWit... Remove this comment to see the full error message
  }, [props.height])

  useEffect(() => {
    // @ts-expect-error ts-migrate(2358) FIXME: The left-hand side of an 'instanceof' expression m... Remove this comment to see the full error message
    if (paneRef && paneRef instanceof Node) {
      updateOnResize()
    }
  }, [paneRef])

  // Mirrors functionality of componentDidMount and componentWillUnmount.
  // By passing an empty array, will only run on first render, the function returned
  // will be called on component unmount
  useEffect(() => {
    updateOnResize()
    window.addEventListener('resize', onResize, false)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

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
    // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'ref' implicitly has an 'any' type.
    autoHeightRefs.forEach((ref, index) => {
      // If the height is already calculated, skip it,
      // but calculate the height for the total.
      if (autoHeights[index]) {
        total += autoHeights[index]
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
        autoHeights[index] = height

        // Set the update flag to true.
        isUpdated = true
      }
    })

    // Save the average height.
    averageAutoHeight = total / totalAmount

    // There are some new heights detected that had previously not been calculated.
    // Call forceUpdate to make sure the virtual list renders again.
    if (isUpdated) forceUpdate()
  }

  const onVirtualHelperRef = (index: any, ref: any) => {
    autoHeightRefs[index] = ref

    requestAnimationFrame(() => {
      processAutoHeights()
    })
  }

  const getItemSize = (children: any) => {
    // Prefer to return a array of all heights.
    if (!allowAutoHeight) {
      return children.map((child: any) => {
        if (!React.isValidElement(child)) return defaultHeight
        // @ts-expect-error ts-migrate(2339) FIXME: Property 'height' does not exist on type 'unknown'... Remove this comment to see the full error message
        const { height } = child.props

        if (Number.isInteger(height)) {
          return height
        }

        return defaultHeight
      });
    }

    // If allowAutoHeight is true, return a function instead.
    const itemSizeFn = (index: any) => {
      if (!React.isValidElement(children[index])) return defaultHeight
      const { height } = children[index].props

      // When the height is number simply, simply return it.
      if (Number.isInteger(height)) {
        return height
      }

      // When allowAutoHeight is set and  the height is set to "auto"...
      if (allowAutoHeight && children[index].props.height === 'auto') {
        // ... and the height is calculated, return the calculated height.
        if (autoHeights[index]) return autoHeights[index]

        // ... if the height is not yet calculated, return the averge
        if (useAverageAutoHeightEstimation) return averageAutoHeight
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
    // @ts-expect-error ts-migrate(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message
    <Pane data-evergreen-table-body ref={setPaneRef} height={paneHeight} flex="1" overflow="hidden" {...rest}>
      <VirtualList
        height={isIntegerHeight ? paneHeight : calculatedHeight}
        width="100%"
        estimatedItemSize={
          allowAutoHeight && useAverageAutoHeightEstimation ? averageAutoHeight : estimatedItemSize || null
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
          // @ts-expect-error ts-migrate(2533) FIXME: Object is possibly 'null' or 'undefined'.
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
            !autoHeights[index]
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

// @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'Named... Remove this comment to see the full error message
TableVirtualBody.propTypes = {
  /**
   * Composes the Pane component as the base.
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'propTypes' does not exist on type 'MemoE... Remove this comment to see the full error message
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
