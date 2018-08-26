import update from 'immutability-helper'
import WidgetType from '@helpers/enum/WidgetType'

export const addWidget = (state, payload, type) => {
  if (type !== payload.type) { return state }

  const widget = {
    id: payload.id,
    name: 'unnamed',
    type: payload.type,
    placed: false,
    configured: true
  }

  return update(state, { [payload.id]: {$set: widget} })
}

export const renameWidget = (state, payload, type) => {
  if (type !== payload.widget.type) { return state }

  return update(state, {
    [payload.widget.id]: {
      name: {$set: payload.name}
    }
  })
}

export const getWidget = (state, id) => {
  if (state[id] === undefined) {
    return null
  }
  return state[id]
}