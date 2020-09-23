import React, { createContext, useReducer, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'

export const ActionTypes = {
  REGISTER: 'REGISTER',
  UNREGISTER: 'UNREGISTER',
  TAB_TO_PREVIOUS: 'TAB_TO_PREVIOUS',
  TAB_TO_NEXT: 'TAB_TO_NEXT',
  CLICKED: 'CLICKED',
  CHANGE_DIRECTION: 'CHANGE_DIRECTION'
}

const sortTabStops = (tabStops) => {
  const compareTabStops = (a, b) => {
    if (!a.ref.current || !b.ref.current) {
      return
    }

    const DOCUMENT_POSITION_PRECEDING = 2
    return (
      a.ref.current.compareDocumentPosition(
        b.ref.current
      ) & DOCUMENT_POSITION_PRECEDING
    ) ? 1 : -1
  }

  return tabStops.sort(compareTabStops)
}

const getFirstSelectedId = (tabStops) => {
  return tabStops.find(tabStop => tabStop.ref.current.getAttribute('aria-checked')).id
}

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER: {
      const { tabStops } = state
      const newTabStop = action.payload

      if (tabStops.length === 0) {
        return {
          ...state,
          selectedId: newTabStop.id,
          tabStops: [newTabStop]
        }
      }

      const index = tabStops.findIndex(tabStop => tabStop.id === newTabStop.id)
      if (index >= 0) {
        return state
      }

      return {
        ...state,
        selectedId: getFirstSelectedId(tabStops) || null,
        tabStops: sortTabStops([ ...tabStops, newTabStop ])
      }
    }

    case ActionTypes.UNREGISTER: {
      const id = action.payload.id

      let filteredTabStops = state.tabStops.filter(
        tabStop => tabStop.id !== id
      )

      if (filteredTabStops.length === state.tabStops.length) {
        return state
      }

      filteredTabStops = sortTabStops(filteredTabStops)

      return {
        ...state,
        selectedId:filteredTabStops.length === 0
          ? null
          : filteredTabStops[0].id,
        tabStops: filteredTabStops
      }
    }

    case ActionTypes.TAB_TO_PREVIOUS:
    case ActionTypes.TAB_TO_NEXT: {
      const id = action.payload.id
      const index = state.tabStops.findIndex(tabStop => tabStop.id === id)

      if (index === -1) {
        return state
      }

      const newIndex =
        action.type === ActionTypes.TAB_TO_PREVIOUS
          ? index <= 0
            ? 0
            : index - 1
          : index >= state.tabStops.length - 1
          ? state.tabStops.length - 1
          : index + 1

      state.tabStops[newIndex].ref.current.focus()

      return {
        ...state,
        lastActionOrigin: 'keyboard',
        selectedId: state.tabStops[newIndex].id
      }
    }

    case ActionTypes.CLICKED: {
      return {
        ...state,
        lastActionOrigin: 'mouse',
        selectedId: action.payload.id
      }
    }

    case ActionTypes.CHANGE_DIRECTION: {
      return {
        ...state,
        direction: action.payload.direction
      }
    }

    default:
      return state
  }
}

export const RovingTabIndexContext = createContext({
  state: {
    direction: 'vertical',
    selectedId: null,
    lastActionOrigin: null,
    tabStops: []
  },
  dispatch: () => {}
})

const Provider = ({ children, direction = 'vertical' }) => {
  const [state, dispatch] = useReducer(reducer, {
    direction: 'vertical',
    selectedId: null,
    lastActionOrigin: null,
    tabStops: []
  })

  const context = useMemo(
    () => ({
      state,
      dispatch
    }),
    [state]
  )

  useEffect(() => {
    dispatch({
      type: ActionTypes.CHANGE_DIRECTION,
      payload: { direction }
    })
  }, [direction, dispatch])

  return (
    <RovingTabIndexContext.Provider value={context}>
      {children}
    </RovingTabIndexContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  direction: PropTypes.oneOf(['horizontal', 'vertical'])
}

export default Provider
