import React, { createContext, useReducer, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'

export const ActionTypes = {
  REGISTER: 'REGISTER',
  UNREGISTER: 'UNREGISTER',
  MOVE_TO_PREVIOUS: 'MOVE_TO_PREVIOUS',
  MOVE_TO_NEXT: 'MOVE_TO_NEXT',
  CLICKED: 'CLICKED',
  CHANGE_DIRECTION: 'CHANGE_DIRECTION'
}

const sortStopItems = (stopItems) => {
  const compareStopItems = (a, b) => {
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

  return stopItems.sort(compareStopItems)
}

const getFirstSelectedId = (stopItems) => {
  return stopItems.find(stopItem => stopItem.ref.current.getAttribute('aria-checked')).id
}

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.REGISTER: {
      const { stopItems } = state
      const newStopItem = action.payload

      if (stopItems.length === 0) {
        return {
          ...state,
          selectedId: newStopItem.id,
          stopItems: [newStopItem]
        }
      }

      const index = stopItems.findIndex(stopItem => stopItem.id === newStopItem.id)
      if (index >= 0) {
        return state
      }

      return {
        ...state,
        selectedId: getFirstSelectedId(stopItems) || null,
        stopItems: sortStopItems([ ...stopItems, newStopItem ])
      }
    }

    case ActionTypes.UNREGISTER: {
      const id = action.payload.id

      let filteredStopItems = state.stopItems.filter(
        stopItem => stopItem.id !== id
      )

      if (filteredStopItems.length === state.stopItems.length) {
        return state
      }

      filteredStopItems = sortStopItems(filteredStopItems)

      return {
        ...state,
        selectedId:filteredStopItems.length === 0
          ? null
          : filteredStopItems[0].id,
        stopItems: filteredStopItems
      }
    }

    case ActionTypes.MOVE_TO_PREVIOUS:
    case ActionTypes.MOVE_TO_NEXT: {
      const id = action.payload.id
      const index = state.stopItems.findIndex(stopItem => stopItem.id === id)

      if (index === -1) {
        return state
      }

      const newIndex =
        action.type === ActionTypes.MOVE_TO_PREVIOUS
          ? index <= 0
            ? 0
            : index - 1
          : index >= state.stopItems.length - 1
          ? state.stopItems.length - 1
          : index + 1

      state.stopItems[newIndex].ref.current.focus()

      return {
        ...state,
        lastActionOrigin: 'keyboard',
        selectedId: state.stopItems[newIndex].id
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
    stopItems: []
  },
  dispatch: () => {}
})

const Provider = ({ children, direction = 'vertical' }) => {
  const [state, dispatch] = useReducer(reducer, {
    direction: 'vertical',
    selectedId: null,
    lastActionOrigin: null,
    stopItems: []
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
