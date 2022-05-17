import React, { memo, useState, useEffect } from 'react'
import VirtualList from '@segment/react-tiny-virtual-list'
import { ALIGNMENT } from '@segment/react-tiny-virtual-list/types/constants'
import debounce from 'lodash.debounce'
import { useForceUpdate } from '../../hooks'
import { Pane, PaneProps } from '../../layers'

export interface TableVirtualBodyProps extends Omit<PaneProps, 'onScroll'> {
  children?: React.ReactNode | React.ReactNode[]
  /**
   * Default height of each row.
   * 48 is the default height of a TableRow.
   */
  defaultHeight?: number
  /**
   * When true, support `height="auto"` on children being rendered.
   * This is somewhat of an experimental feature.
   */
  allowAutoHeight?: boolean
  /**
   * The overscanCount property passed to react-tiny-virtual-list.
   */
  overscanCount?: number
  /**
   * When passed, this is used as the `estimatedItemSize` in react-tiny-virtual-list.
   * Only when `allowAutoHeight` and`useAverageAutoHeightEstimation` are false.
   */
  estimatedItemSize?: number
  /**
   * When allowAutoHeight is true and this prop is true, the estimated height
   * will be computed based on the average height of auto height rows.
   */
  useAverageAutoHeightEstimation?: boolean
  /**
   * The scrollToIndex property passed to react-tiny-virtual-list
   */
  scrollToIndex?: number
  /**
   * The scrollOffset property passed to react-tiny-virtual-list
   */
  scrollOffset?: number
  /**
   * The scrollToAlignment property passed to react-tiny-virtual-list
   */
  scrollToAlignment?: 'start' | 'center' | 'end' | 'auto'

  /**
   * Handler for scroll events within the Table
   */
  onScroll?: (offset: number, event: UIEvent) => void
}

const TableVirtualBody: React.FC<TableVirtualBodyProps> = memo(function TableVirtualBody(props) {
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
    if (props.height !== calculatedHeight) {
      setIsIntegerHeight(Number.isInteger(props.height))
    }
  }, [calculatedHeight, props.height])

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      })
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
    <Pane data-evergreen-table-body ref={setPaneRef} height={paneHeight} flex="1" overflow="hidden" {...rest}>
      <VirtualList
        height={isIntegerHeight ? (paneHeight as number) : calculatedHeight}
        width="100%"
        estimatedItemSize={allowAutoHeight && useAverageAutoHeightEstimation ? averageAutoHeight : estimatedItemSize}
        itemSize={itemSize}
        overscanCount={overscanCount}
        itemCount={React.Children.count(children)}
        scrollToIndex={scrollToIndex}
        scrollOffset={scrollOffset}
        scrollToAlignment={scrollToAlignment as ALIGNMENT}
        onScroll={onScroll}
        renderItem={({ index, style }) => {
          const child = children[index]
          // @ts-expect-error ts-migrate(2533) FIXME: Object is possibly 'null' or 'undefined'.
          const key = child.key || index
          const props = {
            key,
            style,
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
                ref={(ref) => onVirtualHelperRef(index, ref)}
                data-virtual-index={index}
                {...props}
                style={{
                  opacity: 0,
                  ...props.style,
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

export default TableVirtualBody
